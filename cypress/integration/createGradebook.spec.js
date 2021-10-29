/// <reference types="cypress"/>
import { loginPage } from "../page_objects/login"
import { user_data } from "../fixtures/data.json"
import { navigation } from "../page_objects/navigation"
import { createGradebook } from "../page_objects/createGradebook"
const faker = require ("faker")

describe('gradebook', () => {
    let gradebook = faker.name.title();
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
    it('create gradebook', () => {
        navigation.addGradebookButton.click()
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/gradebooks/store'
        ).as('createGradebook')
        createGradebook.gradebook(gradebook, user_data.profFullName)
        cy.wait('@createGradebook').then((interception) => {
            expect(interception.response.statusCode).eq(201)
            expect(interception.response.body.name).eq(gradebook)
        })
    })
})
