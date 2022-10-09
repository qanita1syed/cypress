
export function navigate() {
    cy.visit(`https://buy.chilternrailways.co.uk/account/login`)
  }

  export function Login() {

    cy.get('#login-email-input').type('qanita.bokhari@wizardscrew.com');
    cy.get('#login-password-input').type('Keetusyed1@');
    cy.get('#login-submit-button > .btn').click();
  }

  export function next() {

    //cy.contains('Search for tickets').click();
    cy.get('[data-elid="book-tickets"]').click();
  }
