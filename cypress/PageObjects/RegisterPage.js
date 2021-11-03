class RegisterPage
{
    URL()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
    }

    FirstName_textbox(value)
    {
        const FirstName= cy.get('[ng-model="FirstName"]')
        FirstName.should('be.visible')
        FirstName.clear()
        FirstName.type(value)
        return this
    }

    LastName_textbox(value)
    {
        const LastName= cy.get('[ng-model="LastName"]')
        LastName.should('be.visible')
        LastName.clear()
        LastName.type(value)
        return this
    }

    Address_textbox(value)
    {
        const Address= cy.get('[ng-model="Adress"][rows="3"]')
        Address.should('be.visible')
        Address.clear()
        Address.type(value)
        return this
    }

    EmailAddress_textbox(value)
    {
        const EmailAddress= cy.get('[type="email"]')
        EmailAddress.should('be.visible')
        EmailAddress.clear()
        EmailAddress.type(value)
        return this
    }

    Phone_textbox(value)
    {
        const Phone= cy.get('[ng-model="Phone"][type="tel"]')
        Phone.should('be.visible')
        Phone.clear()
        Phone.type(value)
        return this
    }   
    
    Male_radiobutton()
    {
        const Male= cy.get('[name="radiooptions"][value="Male"]')
        Male.should('be.visible')
        return this
    }

    Female_radiobutton()
    {
        const Female= cy.get('[name="radiooptions"][value="FeMale"]')
        Female.should('be.visible')
        return this
    }

    Password_textbox(value)
    {
        const Password= cy.get('#firstpassword')
        Password.should('be.visible')
        Password.clear()
        Password.type(value)
        return this
    }

    ConfirmPassword_textbox(value)
    {
        const ConfirmPassword= cy.get('#secondpassword')
        ConfirmPassword.should('be.visible')
        ConfirmPassword.clear()
        ConfirmPassword.type(value)
        return this
    }
    
    Refresh_button()
    {
        const Refresh= cy.get('#Button1[value="Refresh"]')
        Refresh.should('be.visible')
        Refresh.click()
    }

    Submit_button()
    {
        const Signup= cy.get('#submitbtn')
        Signup.should('be.visible')
        Signup.click()
    }
}

export default RegisterPage