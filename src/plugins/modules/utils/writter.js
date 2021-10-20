import {getRandomIntBetween} from './funcs';

export const writeInputs = async (page, id, text) => {
    await page.waitForSelector(id);
    await page.click(id);
    await page.type(id, text, {delay: getRandomIntBetween(100, 200)});
};
export const writeSelectBox = async (page, id, inputSelector, text) => {
    await page.click(id);
    await writeInputs(page, inputSelector, text);
    await page.keyboard.press('Enter');
};
