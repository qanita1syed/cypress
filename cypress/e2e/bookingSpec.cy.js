

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import { next, 
  Login,
   navigate,
   clickFromStation,
   clickAndSelecttToStation,
   clickOutBoundToday,
   clickReturnDate,
   adultsandRailcards,
   adultsplusButton,
   childrenplusButton,
    doneButton,
    searchAndBuyButton, nextPage, returnTicket, ticketoptions, continueCTA,verifyTOandFrmTickets,verifyAdultsAndkids,
    verifyDatesAndTimings,verifyDatesAndTimingsOfReturnTickets,verifyOutTickets,verifyReturnTickets,pageTitle } from "../support/booking.cy"

describe('My Login application', () => {
    it('should login with valid credentials', () => {
       navigate();
      //cy.request('https://buy.chilternrailways.co.uk/account/login')
      //cy.request(Cypress.env('https://buy.chilternrailways.co.uk/account/login'))
      //CYPRESS_BASE_URL=https://staging.app.com cypress run

      //cy.visit('/');
      //cy.request(Cypress.env('https://buy.chilternrailways.co.uk/account/login'))
      
    })
  
    it('should enter id and password crrectly', () => {
      cy.wait(500)
      Login();
      next();
    
    })
})
    describe('My booking page', () => {
    it('should enter click And Select From Station', () => {

      clickFromStation();
      })

      it('should enter click And Select from TO Station', () => {

        clickAndSelecttToStation();
      })
      
      it('should click on the OutBound TOday', () => {

        clickOutBoundToday();
      })

      it('should click on the Return Tickets', () => {
      
        clickReturnDate();
        })


        it('should click on AdultsAndRailcrds Button', () => {
          
          adultsandRailcards();
        })
        it('should click on adult plus Button', () => {

          adultsplusButton();
       })
        it('should click on Children Button', () => {

          childrenplusButton();
       })

        it('should click on Done Button', () => {

          doneButton();
         })
        it('should click on Search and buy button', () => {
    
          searchAndBuyButton ();
          //nextPage();
    
    })
})

describe('Deliery and Extras', () => {
  
  it('should go to another page after QQT and select outward ticket', () => {
    nextPage();
    })

    it('should go to another page after out ward ticket and select RETURN ticket', () => {
      returnTicket();
      })
      it('should go to another page and see ticket options', () => {
        ticketoptions();
        })
        it('should click on the continue button', () => {
          continueCTA();
          })
  })
  describe('My Review and Pay page', () => {
    it('verify the PAGE TITLE', () => {
      pageTitle();
      })

    it('verify the TO and FROM ticket', () => {
      verifyTOandFrmTickets();
      })
      it('verify the adults and kids', () => {
        verifyAdultsAndkids();
        })
        it('verify the dates and timings of outward tickets', () => {
          verifyDatesAndTimings();
          })
          it('verify the OUTWARD tickets', () => {
            verifyOutTickets();
            })
          it('verify the dates and timings of Return tickets', () => {
            verifyDatesAndTimingsOfReturnTickets();
            })
            it('verify the RETURN tickets', () => {
              verifyReturnTickets();
              })
    })
