export default class CreateGradebookPage {
    get gradebookNameInput() {
        return cy.get('input[id="name"]')
    }
    get professorSelectField() {
        return cy.get('select')
    }
    get submitButton() {
        return cy.get('button').contains("Submit")
    }
    
    gradebook(gradebookName,select) {
        this.gradebookNameInput.type(gradebookName);
        this.professorSelectField.select(select);
        this.submitButton.click();
    }
}
export const createGradebook = new CreateGradebookPage();