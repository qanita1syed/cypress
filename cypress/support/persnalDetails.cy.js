export function navigate() {
    cy.visit(`https://buy.chilternrailways.co.uk/account/login`)
    cy.wait(500)
  }

  export function Login() {

    cy.get('#login-email-input').type('qanita.bokhari@wizardscrew.com');
    cy.get('#login-password-input').type('Keetusyed1@');
    cy.get('#login-submit-button > .btn').click();
  }

  export function persnalDetails() {
  cy.get('[data-elid="personal-details"]').click();
  }

  export function yourProfile() {
    cy.get('#edit-profile > .btn').click();
    cy.get('#first-name').clear();
    cy.get('#first-name').type('Qanita')
    cy.get('#last-name').clear();
    cy.get('#last-name').type('Syed')
  }

  export function dOB() {
    cy.get('#dob-day').type('30');
    cy.get('#dob-month').type('08');
    cy.get('#dob-year').type('2022');
  }

  export function phoneNum() {
    cy.get('#phone-number').clear();
    cy.get('#phone-number').type('03338268462');
    //cy.get('#edit-secondary-mob > .btn').click();
    cy.get('#phone-number-secondary').click();
    cy.get('#phone-number-secondary').clear();
    cy.get('#phone-number-secondary').type('03204103901');
    cy.get('#save-changes-profile > .btn').click();
    cy.wait(500)
  }

  export function addressEdit() {
    
  cy.get('ace-address-form > .content > .content-header > .content-header-button').click();
  cy.get('#address-name').click();
  cy.get('#address-name').clear();

  const list = [" Qanita", " Syed", " Bokhari"];
  //cy.get('#address-name').type('Qanita Syed'); // constant
  let input = cy.get('#address-name');
  input.type(list[Math.floor(Math.random() * list.length)])  // random names generated

  cy.get('#address-country').select('Pakistan');
  cy.get('#address-county').type('islamabad');
  cy.get('#address-city').type('Lahore');
  cy.get('#address-postcode').type('SW1W 0NY');
  cy.get('#address-line-first').type('wapda town lahore');
  cy.get('#address-line-second').type('iqbal town lahore');

  cy.get('#save-changes-address > .btn').click();
  
  cy.get(':nth-child(2) > :nth-child(1) > .form-selection-content > .account-form-controls > #remove-address > .btn').click();
  cy.get('#prompt-modal-confirm > .btn').click();
  }