import type { Business, VerificationStatus } from "../data/businesses";

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function phoneHref(phone: string): string {
  const digits = normalizePhoneDigits(phone);

  if (digits.length === 10) {
    return `tel:+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `tel:+${digits}`;
  }

  return `tel:${digits}`;
}

export function formatPhone(phone: string): string {
  const digits = normalizePhoneDigits(phone);
  const localDigits = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;

  if (localDigits.length !== 10) {
    return phone;
  }

  return `(${localDigits.slice(0, 3)}) ${localDigits.slice(3, 6)}-${localDigits.slice(6)}`;
}

export function websiteLabel(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

export function mapHref(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function getStatusLabel(status: VerificationStatus): string {
  switch (status) {
    case "verified":
      return "Matched to public listing";
    case "postcard-only":
      return "Listed from the postcard";
    case "needs-verification":
      return "Campaign details need owner confirmation";
  }
}

export function businessSearchText(business: Business): string {
  return [
    business.name,
    business.category,
    business.summary,
    business.phone,
    business.email,
    business.address,
    business.serviceArea,
    business.offer,
    ...business.keywords,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function canUseLocalBusinessSchema(business: Business): boolean {
  return Boolean(business.verificationStatus === "verified" && business.phone && business.address);
}

export function localBusinessJsonLd(business: Business): Record<string, unknown> | null {
  if (!canUseLocalBusinessSchema(business)) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    telephone: business.phone,
    address: business.address,
    areaServed: business.serviceArea,
    url: business.website,
  };
}
