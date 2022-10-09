
export function navigate() {
    cy.visit(`https://buy.chilternrailways.co.uk/account/login`)
    cy.wait(500)
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

export function clickFromStation() {
    cy.get('#qtt > .qtt-wrapper > ace-qtt-station-pickers > :nth-child(1) > .col-12 > .qtt-station > :nth-child(1) > ace-station-picker > .station-picker > .station-picker-toggle > .input').type('Bicester Village{enter}');
}
export function clickAndSelecttToStation() {
    cy.get('#qtt > .qtt-wrapper > ace-qtt-station-pickers > :nth-child(1) > .col-12 > .qtt-station > :nth-child(2) > ace-station-picker > .station-picker > .station-picker-toggle > .input').type('London Marylebone{enter}')
}
export function clickOutBoundToday() {
    cy.get('.qtt-calendar > .input').click()
    cy.get('.day-selected > .label-wrap').click();
    //cy.get('#calendar-september-card > :nth-child(7) > :nth-child(2) > .label-wrap').click();
}

export function clickReturnDate() {
    cy.get('.destination-inputs-toggle > .input').click()
    cy.get('#calendar-october-card > :nth-child(4) > :nth-child(1) > .label-wrap').click();
}

export function adultsandRailcards() {
    cy.get(':nth-child(3) > .col > .qtt-passenger > ace-passenger-picker > .passenger-picker > .passenger-picker-toggle > .input-passenger').click();
}

export function adultsplusButton() {
    cy.get(':nth-child(3) > .col > .qtt-passenger > ace-passenger-picker > .passenger-picker > :nth-child(2) > .input-body > :nth-child(1) > [arialabel="Passengers over 16"] > .numerical-stepper > .numerical-stepper-body > .add > .background-circle > .btn > svg').click();
}

export function childrenplusButton() {
    cy.get(':nth-child(3) > .col > .qtt-passenger > ace-passenger-picker > .passenger-picker > :nth-child(2) > .input-body > :nth-child(1) > [arialabel="Passengers over 5 and under 15 (under 5s go free)"] > .numerical-stepper > .numerical-stepper-body > .add > .background-circle > .btn > svg').click();
}
export function doneButton() {
    cy.get(':nth-child(3) > .col > .qtt-passenger > ace-passenger-picker > .passenger-picker > :nth-child(2) > .input-body > .input-body-controls > #submit-passengers-with-railcard > .btn').click();
}

export function searchAndBuyButton() {
    cy.get('#search-qtt > .btn').click();
}

export function nextPage() {
    // this - cy.get(':nth-child(3) > .leg-solution > .row > .col-right > .leg-solution-price > .pricing').click();
    cy.get(':nth-child(3) > .leg-solution > .row').click();
}
export function returnTicket() {
    cy.get(':nth-child(3) > .leg-solution > .row > .col-left').click();
}

export function ticketoptions() {
    cy.get(':nth-child(2) > .fare-item > .fare-item-info > .fare-item-route-rules').click();
}
export function continueCTA() {
    cy.get('.continue > .btn').click();
}
//--------------------------------------------------------------
export function pageTitle() {
    cy.get('.page-title').should('have.text', 'Review and pay')
}
export function verifyTOandFrmTickets() {
    cy.contains(('.journey-summary-title > h2'), "Bicester Village (BIT) to London Marylebone (MYB)")
}

export function verifyAdultsAndkids() {
    
    cy.get('.journey-summary-passengers').should('have.text', '2 adults, 1 child groupsave applied ')
    //cy.contains(('.journey-summary-passengers'), "2 adults, 1 child")
}

export function verifyDatesAndTimings() {
    cy.contains(('[data-elid="journey-leg-outgoing"] > .leg-summary > .long > :nth-child(1) > :nth-child(1)'), "Fri 30 Sep 19:49 - 20:45")
}
export function verifyOutTickets() {
    cy.contains('[data-elid="journey-leg-outgoing"] > .leg-summary > .long > .leg-summary-row.ng-star-inserted > :nth-child(1)', "Bicester Village (BIT) to London Marylebone (MYB) - Chiltern Railways")
}

export function verifyDatesAndTimingsOfReturnTickets() {
    cy.contains(('[data-elid="journey-leg-returning"] > .leg-summary > .long > :nth-child(1) > :nth-child(1)'), "Mon 3 Oct 19:50 - 20:46")
}

export function verifyReturnTickets() {
    cy.contains('[data-elid="journey-leg-returning"] > .leg-summary > .long > .leg-summary-row.ng-star-inserted > :nth-child(1)', "London Marylebone (MYB) to Bicester Village (BIT) - Chiltern Railways")
}