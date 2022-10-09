import { Login,
  navigate,travelPref, seatPrefEdit, seatDirection,seatPosition,quiteCouch,luggage,nearToFun,saveBtn,deliveryPrefEdit,
    travelAssistence,getRandomNumberBetween } from "../support/travelPref.cy"

    describe('My Login application', () => {
      it('should login with valid credentials', () => {
          navigate();
      })
  
      it('should enter id and password crrectly', () => {
          cy.wait(500)
          Login();
      })
    })
    //----------- travel pref
  describe('Go to Travel Preferences', () => {

    it('should click to travel pref', () => {
      travelPref();
    })
    it('should click edit button of seat pref', () => {
      seatPrefEdit();
      seatDirection();
      seatPosition();
      quiteCouch();
      nearToFun();
      //luggage();
      saveBtn();
    })
    it('should click edit button Delivery Pref', () => {
      deliveryPrefEdit();
    })
    xit('should click edit button Travel assistence', () => {
      travelAssistence();
    })
})
