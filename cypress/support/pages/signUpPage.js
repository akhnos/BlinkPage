class SignUpPage {
    singUpButton(){
        cy.get('div._link_1ov99_66').should('be.visible').contains('Sign up').click();
    }
}
export const signUpPage = new SignUpPage();