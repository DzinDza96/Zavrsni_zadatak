/// <reference types="cypress"/>
import { loginPage } from "../page_objects/login"
import { user_data } from "../fixtures/data.json"
import { navigation } from "../page_objects/navigation"
import { createProfessor } from "../page_objects/createProfessor"

describe('createProfessor', () => {
    beforeEach('login to the app', () => {
        cy.visit("/login")
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login'
        ).as('login')
        loginPage.login(user_data.email,user_data.password)
        cy.wait('@login').then((interception) => {
            expect(interception.response.statusCode).eq(200)
            navigation.gradebookButton.should('be.visible')
        })
    })
    it('create professor', () => {
        navigation.addProfessorButton.click()
        navigation.header1.should('be.visible')
        createProfessor.professor(user_data.profName, user_data.profLastName, user_data.image)
        cy.url().should('contains','/professors')
    })
})