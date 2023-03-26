import { test, expect } from '@playwright/test';

//By Eugen login
test.describe('Login testing', () => {
  test('Login testing', async ({ page }) => {
    await page.goto('/login');
    const email = page.getByTestId('email');
    await email.fill('example@gmail.com');
    const password = page.getByTestId('password');
    await password.fill('123456');

    await expect(email).toHaveValue('example@gmail.com');
    await expect(password).toHaveValue('123456');
  });
});

//By Rus SignUp
//1
// test.describe('SignUp testing with valid passwords', () => {
//   test('SignUp testing', async ({ page }) => {
//     await page.goto('/signup');
//     const name = page.getByTestId('signupName')
//     await name.fill('testname')
//     const email = page.getByTestId('signupEmail');
//     await email.fill('example@gmail.com');
//     const password = page.getByTestId('signupPassword');
//     await password.fill('123456');
//     const repeatPassword = page.getByTestId('signupRepeatPassword');
//     await repeatPassword.fill('123456');

//     await expect(name).toHaveValue('testname')
//     await expect(email).toHaveValue('example@gmail.com');
//     await expect(password).toHaveValue('123456');
//   });
// });
