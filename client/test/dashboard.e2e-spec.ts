import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("20", { exact: true })).toBeVisible();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^20-5% em relação a ontem$/ })
      .getByRole("paragraph"),
  ).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("200", { exact: true })).toBeVisible();
  await expect(page.getByText("+7% em relação ao mês passado")).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("5", { exact: true })).toBeVisible();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^5-5% em relação a ontem$/ })
      .getByRole("paragraph"),
  ).toBeVisible();
});

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText('R$ 20.000,00')).toBeVisible();
  await expect(
    page
      .getByText('+32% em relação ao mês passado')
  ).toBeVisible();
});
