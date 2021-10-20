// import {writeInputs} from "./utils/writter";
// import {delay, getRandomIntBetween} from "./utils/funcs";
// import writer from './utils/writter';
//
// const { writeInputs } = writer;

import {writeInputs} from "./utils/writter";

async function login(page, credentials) {

    const usernameInputId = '#j_username';
    const passwordInputId = '#j_password';

    await writeInputs(page, usernameInputId, credentials.username);
    await writeInputs(page, passwordInputId, credentials.password);

    // await delay(getRandomIntBetween(450, 1500));
    console.log('.... Working for ', credentials.username);

    await page.keyboard.press('Enter');

}
export default login;
