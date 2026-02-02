import { forgotPasswordModal, verifyTextField } from "../../support/common";
import { loginPage } from "../../support/pages/loginPage";


describe('Forgot Password', () => {

  it('Forgot password with registered email', () => {

    // 🌐 Visit the app's root page
    cy.visit('/');
    loginPage.verifyLandingBody();

    //Navigate to login page
    loginPage.clickProfileIcon();

    //Click Forgot Password button
    loginPage.forgotPasswordButton();

    forgotPasswordModal('shahbahram97@gmail.com');

    loginPage.verifyToastMessage("We send a recovery mail. Please follow the instructions to recover your password.");  
  });
});