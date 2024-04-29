import { Page } from "@playwright/test";

export function returnAllInputs(page: Page) {
  const saveLessonButton = page.getByRole("button", { name: "Save lesson" });
  const nameInput = page.getByRole("textbox", { name: "Name" });
  const startDateInput = page
    .locator("div")
    .filter({ hasText: /^Start Date$/ })
    .getByRole("textbox");
  const endDateInput = page
    .locator("div")
    .filter({ hasText: /^End Date$/ })
    .getByRole("textbox");

  return {
    saveLessonButton,
    nameInput,
    startDateInput,
    endDateInput,
  };
}

export async function deleteLessonByName(name: string) {
  try {
    await fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
              removeLessonByName(name: "${name}") {
                name
              }
            }`,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}
