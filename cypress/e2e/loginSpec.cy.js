
import { next, Login, navigate,visit } from "../support/login.cy"

/// <reference types = "cypress" />
describe('My Login application', () => {
  it('should login with valid credentials', () => {
    navigate();
    //cy.visit('/');

  })

  it('should enter id and password crrectly', () => {
    cy.wait(500)
    Login();
    //next();
    
  })
})
