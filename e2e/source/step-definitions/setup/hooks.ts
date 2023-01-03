import { Before, After, ITestCaseHookParameter } from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";

// BeforeAll(async() => {
//     global.browser = await chromium.launch({
//         headless: true,
//     })
// });

// AfterAll(async() => {
//     await global.browser.close();
// });

Before(async function (this: ScenarioWorld, scenario) {
    console.log(`Running cucumber scenario ${scenario.pickle.name}`);

    const contextOptions = {
        recordVideo: {
            dir : './reports/videos/'+scenario.pickle.name,
        }
    }

    const ready = await this.init(contextOptions);
    return ready;
});

After(async function (this: ScenarioWorld, scenario) {
    const {
        screen: { page, browser }
    } = this;

    const scenarioStatus = scenario.result?.status;

    if (scenarioStatus === 'FAILED') {
        await global.page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`

        })
    }

    await browser.close();
    return browser;
})

