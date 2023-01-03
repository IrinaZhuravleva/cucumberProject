import { Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test";

Then(
    /^the "([^"]*)" should content the text "(.*)"$/,
    async function(elementKey: string, expectedElementText: string) {
        const {
            screen: { page },
        } = this;
        console.log(`the ${elementKey} should content the text ${expectedElementText}`);

        const content = await page.textContent("[data-id='contacts']");
        expect(content).toBe(expectedElementText);
    }
)

Then(
    /^the "([^"]*)" should be visible$/,
    async function (element: string) {
        const {
            screen: { page },
        } = this;
        console.log(`The element ${element} should be visible`)
        const locator = page.locator("[data-id='testing-talks-logo']");
        expect(locator).toBeVisible();
    }
)