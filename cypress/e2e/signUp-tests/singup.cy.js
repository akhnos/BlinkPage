import { verifyButton, verifyTextField } from "../../support/common";
import { loginPage } from "../../support/pages/loginPage";
import { signUpPage } from "../../support/pages/signUpPage";


describe('Candidate Registration & SignUp', () => {

    it('Navigate to signUp, verifies UI and try to signUp', () => {

        // 🌐 Visit the app's root page
        cy.visit('/');

        //Veirfy UI Elements on Landing Page
        loginPage.verifyHeader();
        loginPage.verifyLandingBody();
        loginPage.createNewWebsiteBtn();
        loginPage.verifyFooter();

        //Navigate to login page
        loginPage.clickProfileIcon();

        //Navigate to SignUp page
        signUpPage.singUpButton();

        //Name field visibility and type check
        verifyTextField(
            'input[name="name"]',
            {
                fontSize: "10px", textColor: "rgb(220, 220, 220)", backgroundColor: "rgb(33, 33, 33)",
                borderRadius: '6px', value: "shahbahram", shouldType: true, shouldClear: true, placeholder: "Name"
            },
            true,
            true
        );

        //Email field visibility and type check
        verifyTextField(
            'input[name="email"]',
            {
                fontSize: "10px", textColor: "rgb(220, 220, 220)", backgroundColor: "rgb(33, 33, 33)",
                borderRadius: '6px', value: "shahbahram97@gamil.com", shouldType: true, shouldClear: true, placeholder: "E-mail"
            },
            true,
            true
        );

        //Password field visibility and type check
        verifyTextField(
            'input[placeholder="Password"]',
            {
                fontSize: "10px", textColor: "rgb(220, 220, 220)", backgroundColor: "rgb(33, 33, 33)",
                borderRadius: '6px', value: "BlinkPage7424", shouldType: true, shouldClear: true, placeholder: "Password"
            },
            true,
            true
        );

        // loginPage.clickEyeIcon();

        //Confirm Password field visibility and type check
        verifyTextField(
            'input[placeholder="Confirm Password"]',
            {
                fontSize: "10px", textColor: "rgb(220, 220, 220)", backgroundColor: "rgb(33, 33, 33)",
                borderRadius: '6px', value: "BlinkPage7424", shouldType: true, shouldClear: true, placeholder: "Confirm Password"
            },
            true,
            true
        );

        // loginPage.clickEyeIcon();

        //Sing Up button
        verifyButton('button._buttonAttom_1k5xv_1', {
            text: 'Sign up', fontSize: '12px', textColor: 'rgb(33, 33, 33)',
            backgroundColor: 'rgb(136, 231, 136)', borderRadius: '6px', disabled: false
        }, true);

        cy.wait(5000)

        loginPage.verifyToastMessage();
    });


});