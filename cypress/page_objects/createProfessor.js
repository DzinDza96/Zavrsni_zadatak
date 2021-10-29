export default class CreateProfessorPage {
    get nameInput() {
        return cy.get('input[id="input-default"]')
    }
    get lastNameInput() {
        return cy.get('input[id="input-default1"]')
    }
    get addImageInput() {
        return cy.get('input').eq(2)
    }
    get addImageButton() {
        return cy.get('button').contains("Add Image")
    }
    get submitButton() {
        return cy.get('button').contains("Submit")
    }
    
    professor(name,lastName,imageUrl) {
        this.nameInput.type(name);
        this.lastNameInput.type(lastName);
        this.addImageButton.click();
        this.addImageInput.type(imageUrl);
        this.submitButton.click();
    }
}
export const createProfessor = new CreateProfessorPage();