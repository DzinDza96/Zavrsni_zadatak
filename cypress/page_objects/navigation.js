export default class Navigation {
    get gradebookButton() {
        return cy.get('a[href="/gradebooks"]')
    }
    get addProfessorButton() {
        return cy.get('a[href="/professors/create"]')
    }
    get addGradebookButton() {
        return cy.get('a[href="/gradebook/create"]')
    }
    get header1() {
        return cy.get('h1').contains('Create new professor.')
    }
}

export const navigation = new Navigation();
