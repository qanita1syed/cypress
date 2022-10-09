
import {
    Login,
    navigate,
    persnalDetails,
    yourProfile,
    dOB,
    phoneNum,
    addressEdit
} from "../support/persnalDetails.cy"

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        navigate();
    })

    it('should enter id and password crrectly', () => {
        cy.wait(500)
        Login();
    })

    it('should click n Personal Details', () => {
        persnalDetails();
    })

    it('should click on edit button of your profile', () => {
        yourProfile();
    })
    it('should click on DOB', () => {
        dOB();
    })

    it('should click on phone number', () => {
        phoneNum();
    })
    it('should click on Adress Edit button', () => {
        addressEdit();
    })
})