//---------------- travel pref

export function navigate() {
  cy.visit(`https://buy.chilternrailways.co.uk/account/login`)
}

export function Login() {

  cy.get('#login-email-input').type('qanita.bokhari@wizardscrew.com');
  cy.get('#login-password-input').type('Keetusyed1@');
  cy.get('#login-submit-button > .btn').click();
}

export function travelPref() {
  cy.get('[data-elid="travel-preferences"]').click();
  //cy.get('.account-nav > .active').click();
}

export function seatPrefEdit(){
cy.get('#edit-seating-preferences > .btn').click();
}

export function seatDirection(){
  //cy.get('#seat-direction-options').select("Don't mind")
  const randomIndex = getRandomNumberBetween(0, 3);
  cy.get('#seat-direction-options').select(randomIndex);
  function getRandomNumberBetween(min, max)
   {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
}
// export function seatDirection(){
//   cy.get('#seat-direction-options').select("Don't mind")
// }
export function seatPosition(){
  //cy.get('#seat-direction-options').select("Don't mind")
  const randomIndex = getRandomNumberBetween(0, 3);
  cy.get('#seat-position-options').select(randomIndex);
  function getRandomNumberBetween(min, max)
   {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
}
// export function seatPosition(){
// cy.get('#seat-position-options').select('Window')
// }

export function quiteCouch(){
  //cy.get('#seat-direction-options').select("Don't mind")
  const randomIndex = getRandomNumberBetween(0, 1);
  cy.get('#seat-quiet-coach-options').select(randomIndex);
  function getRandomNumberBetween(min, max)
   {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } 
}
// export function quiteCouch(){
// cy.get('#seat-quiet-coach-options').select('Quiet')
// }
export function nearToFun() {

  const randOption = Math.floor(Math.random() * 4) + 1;

   
   if(cy.get(".control.sr-only#seat-near-lavatory-checkbox").should('be.visible').check({ force: true}).should('be.checked'))
   {
    cy.get('[checkboxid="seat-near-lavatory-checkbox"]').click()
   }
 
   if(cy.get(".control.sr-only#seat-near-power-checkbox").should('be.visible').check({ force: true}).should('be.checked'))
   {
    cy.get('[checkboxid="seat-near-power-checkbox"]').click()
   }
 
   if(cy.get(".control.sr-only#seat-near-luggage-checkbox").should('be.visible').check({ force: true}).should('be.checked'))
   {
    cy.get('[checkboxid="seat-near-luggage-checkbox"]').click()
  }

  if(cy.get(".control.sr-only#seat-near-table-checkbox").should('be.visible').check({ force: true}).should('be.checked'))
   {
    cy.get('[checkboxid="seat-near-table-checkbox"]').click()
   }
  cy.wait(500);

  
   //Selecting Random Option
   if(randOption === 1){
    cy.get('[checkboxid="seat-near-lavatory-checkbox"]').click();
  } 
  else if(randOption === 2){
    cy.get('[checkboxid="seat-near-power-checkbox"]').click()
   } else if(randOption === 3){
    cy.get('[checkboxid="seat-near-luggage-checkbox"]').click()
   }
   else{
    cy.get('[checkboxid="seat-near-table-checkbox"]').click()
   }

  cy.wait(500)
}

export function saveBtn(){
cy.get('#save-changes-seating-preferences > .btn').click();
}

//-------------------------------------------------------------------------------
export function deliveryPrefEdit() { // deliveryMethods
cy.get('#edit-delivery-preferences > .btn').click(); //del pref edit
//const res = cy.get('[type="radio"].radio-control').check({force: true})
const res = cy.get("#e-ticket-delivery-method")

//#e-ticket-delivery-method
// cy.get('#result-ID').children().first().click();
//cy.get('[type="radio"].XyzTypeRadio').first().check()
//cy.get('[type="radio"]').first().check()
//if(cy.get(':nth-child(3) > .delivery-option-radio > .radio > .radio-circle').check({ force: true}).should('be.checked')){
  if(res === true){
  //console.log('In Res', res)
      const randOption = Math.floor(Math.random() * 5) + 1;
      // Selecting Random Option
      if(randOption ===1){
        cy.get("#ticket-vending-machine-delivery-method").click({ force: true}) // tvm select
      }
      else if (randOption === 2){
        cy.get("print-at-home-delivery-method").click({ force: true})
      }
      else if (randOption === 3){
        cy.get("#royal-mail-first-class-post-delivery-method").click({ force: true})
      }
      else if(randOption ===4){
        cy.get("#royal-mail-special-delivery-delivery-method").click({ force: true})
      } //smartcard not available.       
  }
  else{
  console.log('In Else Part')

      // Selecting ETicket Option
      cy.get("#e-ticket-delivery-method").click({ force: true})
      
  }
cy.get('#save-changes-delivery-preferences > .btn').click();
}

//---------------------------------------------------------------------
export function travelAssistence(){
cy.get('#edit-travel-preferences > .btn').click();
cy.get('#travel-assistance-phone-number').clear();
cy.get('#travel-assistance-phone-number').type('03204103901');
cy.get('#travel-assistance-information').clear();
cy.get('#travel-assistance-information').type('no any');
cy.get('#save-changes-travel-preferences > .btn').click();
}


export function getRandomNumberBetween (min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
