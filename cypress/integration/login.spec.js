/// <reference types="cypress"/>
import { loginPage } from "../page_objects/login"
import { user_data } from "../fixtures/data.json"
import { navigation } from "../page_objects/navigation"

describe('login', () => {
    beforeEach('visit login page', () => {
        cy.visit("/login")
        cy.url().should('contains','https://gradebook.vivifyideas')
    })
    it('login with valid credentials', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login'
        ).as('login')
        loginPage.login(user_data.email,user_data.password)
        cy.wait('@login').then((interception) => {
            expect(interception.response.statusCode).eq(200)
            navigation.gradebookButton.should('be.visible')
        })
    })
})
