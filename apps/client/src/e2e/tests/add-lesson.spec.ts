import { test, expect } from "@playwright/test";
import { deleteLessonByName, returnAllInputs } from "../helper";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
  const addLessonButton = page.getByRole("button", {
    name: "Add New Lesson",
  });
  await addLessonButton.click();
});

test("should have page title", async ({ page }) => {
  expect(await page.title()).toBe("School Management App");
});

test("should check if add lesson dialog is shown", async ({ page }) => {
  await expect(page.getByRole("dialog")).toBeVisible();
});

test("should check if name validation is working", async ({ page }) => {
  const saveLessonButton = page.getByRole("button", { name: "Save lesson" });
  await saveLessonButton.click();
  await expect(page.getByText("Name can not be empty!")).toBeVisible();
});

test("should check if date validation is working", async ({ page }) => {
  const { saveLessonButton, nameInput, startDateInput, endDateInput } =
    returnAllInputs(page);

  await nameInput.fill("Test lesson");
  await startDateInput.fill("26.04.2024");
  await endDateInput.fill("24.04.2024");

  await saveLessonButton.click();
  await expect(
    page.getByText("End date needs to be after start date!")
  ).toBeVisible();
});

test("should check if lesson is created", async ({ page }) => {
  const { saveLessonButton, nameInput, startDateInput, endDateInput } =
    returnAllInputs(page);

  const lessonName = `Test lesson Random${Math.floor(Math.random() * 100)}`;
  await nameInput.fill(lessonName);
  await startDateInput.fill("26.04.2024");
  await endDateInput.fill("28.04.2024");
  await saveLessonButton.click();
  await expect(page.getByText(lessonName)).toBeVisible();
  // deleting the lesson after test
  deleteLessonByName(lessonName);
});
