import { businesses } from "../src/data/businesses";
import { normalizePhoneDigits, phoneHref } from "../src/lib/business";

const errors: string[] = [];
const slugs = new Set<string>();

function isValidPhone(phone: string): boolean {
  const digits = normalizePhoneDigits(phone);
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

function isValidSourceHref(href: string): boolean {
  if (href.startsWith("/")) {
    return true;
  }

  try {
    const url = new URL(href);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

for (const business of businesses) {
  if (!business.slug) errors.push(`${business.name} is missing a slug.`);
  if (slugs.has(business.slug)) errors.push(`${business.name} duplicates slug ${business.slug}.`);
  slugs.add(business.slug);

  if (!business.name) errors.push(`${business.slug} is missing a name.`);
  if (!business.category) errors.push(`${business.name} is missing a category.`);
  if (!business.summary) errors.push(`${business.name} is missing a summary.`);
  if (!business.sourceUrls.length) errors.push(`${business.name} is missing source links.`);

  const hasContact = Boolean(
    business.phone || business.secondaryPhones?.length || business.email || business.website,
  );
  if (!hasContact) errors.push(`${business.name} needs at least one public contact method.`);

  if (business.phone && !isValidPhone(business.phone)) {
    errors.push(`${business.name} has invalid phone number ${business.phone}.`);
  }

  for (const phone of business.secondaryPhones ?? []) {
    if (!isValidPhone(phone.number)) {
      errors.push(`${business.name} has invalid secondary phone number ${phone.number}.`);
    }
  }

  const phoneNumbers = [
    business.phone,
    ...(business.secondaryPhones?.map((phone) => phone.number) ?? []),
  ].filter(Boolean);

  for (const phone of phoneNumbers) {
    if (!phoneHref(phone as string).startsWith("tel:+1")) {
      errors.push(`${business.name} has a phone number that does not normalize to a US tel link.`);
    }
  }

  for (const source of business.sourceUrls) {
    if (!source.label) errors.push(`${business.name} has a source without a label.`);
    if (source.href && !isValidSourceHref(source.href)) {
      errors.push(`${business.name} has invalid source URL ${source.href}.`);
    }
  }

  if ((business.verificationStatus as string) === "conflict") {
    errors.push(`${business.name} still has conflict verification status.`);
  }
}

if (errors.length > 0) {
  console.error("Business data validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${businesses.length} business listings.`);
