import { expect, test, type Page } from "@playwright/test";

async function expectNoHorizontalOverflow(page: Page) {
  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
}

test("home page loads on desktop and mobile", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "The Murray Highlighter", level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Browse Businesses" })).toBeVisible();
  await expectNoHorizontalOverflow(page);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Featured Businesses" })).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("search finds key postcard categories", async ({ page }) => {
  await page.goto("/");
  const search = page.getByLabel("Search businesses");

  const cases = [
    { query: "roofing", expected: "TDC Roofing and Construction" },
    { query: "tax", expected: "AB Consulting" },
    { query: "tree", expected: "Islas Tree Service" },
    { query: "tents", expected: "Celebrations Events & Tents" },
    { query: "dog", expected: "Camp Canine Elite Dogs LLC" },
  ];

  for (const item of cases) {
    await search.fill(item.query);
    await expect(page.getByRole("link", { name: item.expected, exact: true })).toBeVisible();
  }
});

test("category filters show the right listings", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Tree Service" }).click();
  await expect(page.getByRole("link", { name: "Islas Tree Service", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "TDC Roofing and Construction", exact: true })).toBeHidden();

  await page.getByRole("button", { name: "All" }).click();
  await expect(page.getByRole("link", { name: "TDC Roofing and Construction", exact: true })).toBeVisible();
});

test("every business card opens a detail page", async ({ page }) => {
  await page.goto("/");
  const links = page.locator("[data-business-card] h3 a");
  const count = await links.count();
  expect(count).toBeGreaterThan(10);

  for (let index = 0; index < count; index += 1) {
    await page.goto("/");
    const link = links.nth(index);
    const name = await link.textContent();
    await link.click();
    await expect(page).toHaveURL(/\/business\/.+\/$/);
    await expect(page.getByRole("heading", { name: name?.trim() ?? "", level: 1 })).toBeVisible();
  }
});

test("visible phone CTAs and Google Form embed are valid", async ({ page }) => {
  await page.goto("/");

  const phoneLinks = page.locator('a[href^="tel:"]');
  const phoneCount = await phoneLinks.count();
  expect(phoneCount).toBeGreaterThan(10);

  for (let index = 0; index < phoneCount; index += 1) {
    const href = await phoneLinks.nth(index).getAttribute("href");
    expect(href).toMatch(/^tel:\+1\d{10}$/);
  }

  const formIframe = page.locator('iframe[title="Advertise on The Murray Highlighter form"]');
  await expect(formIframe).toBeVisible();
  await expect(formIframe).toHaveAttribute(
    "src",
    /docs\.google\.com\/forms\/d\/e\/.+embedded=true/,
  );

  await expect(page.getByRole("link", { name: "Open in Google Forms" })).toHaveAttribute(
    "href",
    /docs\.google\.com\/forms\/d\/e\/.+viewform/,
  );
});
