import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The home page should contain an h2 with "Projects"
  await expect(page.locator("h2")).toContainText("Projects");
});

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About' and click on it
  await page.click("text=About");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/about");
  // The new page should contain an h1 with "About Page"
  await expect(page.locator("h1")).toContainText("About");
});

test("should navigate to the contact page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'Contact' and click on it
  await page.click("text=Contact");
  // The new URL should be "/contact" (baseURL is used there)
  await expect(page).toHaveURL("/contact");
  // The new page should contain an h1 with "Contact"
  await expect(page.locator("h1")).toContainText("Contact");
});

test("should navigate to a project page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'Module Federation Example' and click on it
  await page.click("text=Module Federation Example");
  // The new URL should be "/module-federation-example" (baseURL is used there)
  await expect(page).toHaveURL("/projects/module-federation-example");
  // The new page should contain an h1 with "Module Federation Example"
  await expect(page.locator("h1")).toContainText("Module Federation Example");
});
