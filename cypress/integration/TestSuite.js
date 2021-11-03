import RegisterPage from '../PageObjects/RegisterPage.js'

describe('TestSuite',function()
{
    const Register = new RegisterPage()

    before(function()
    {       
        Register.URL()
        //Checking the page title
        cy.title().should('eq','Register')
    })

    beforeEach(function()
    {
        cy.fixture('TestData').then((testdata) =>
        {
            this.testdata=testdata
        })
    })
    
    it('TC 01: FullName',function()
    {
        //Enter First Name
        Register.FirstName_textbox(this.testdata.FirstName) 
        //Enter Last Name
        Register.LastName_textbox(this.testdata.LastName) 
        //Madatory validation
       // cy.get('[ng-model="FirstName"]').should('have.attr','required','required')
    })
    
    it('TC 02: Address',function()
    {
        //Enter Address
        Register.Address_textbox(this.testdata.Address)
    })

    it('TC 03: EmailAddress',function()
    {
        //Enter EmailAddress
        Register.EmailAddress_textbox(this.testdata.EmailAddress)
    })

    it('TC 04: Phone',function()
    {
        //Enter Phone
        Register.Phone_textbox(this.testdata.Phone)
    })

    it('TC 05: GenderVisibilty_radiobutton',function()
    {
        Register.Male_radiobutton() //Male 
        Register.Female_radiobutton() //Female
    })

    it('TC 06: GenderEnabled',function()
    {
        //Male Radio button is enabled
        cy.get('[name="radiooptions"][value="Male"]').click().should('be.checked')

        //Female Radio button is not enabled
        cy.get('[name="radiooptions"][value="FeMale"]').should('not.be.checked')
    })

    it('TC 07: Hobbies',function()
    {
        //Checking the checkbox values
        cy.get('#checkbox1').should('have.value','Cricket')
        cy.get('#checkbox2').should('have.value','Movies')
        cy.get('#checkbox3').should('have.value','Hockey')
    })

    it('TC 08: HobbiesSelected',function()
    {
        //Checkbox Selection
        cy.get('#checkbox3').check()
        cy.get('#checkbox3').should('be.checked') //checkbox selected

        //Other Checkboxes are not selected
        cy.get('#checkbox1').should('not.be.checked')
        cy.get('#checkbox2').should('not.be.checked')  
    })

    it('TC 09: HobbiesUncheck',function()
    {
        //Uncheck checkbox
        cy.get('#checkbox3').uncheck()
    })

    it('TC 10: HobbiesSelectAll',function()
    {
        //Select 2nd checkbox and comparing it with expected value
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')

        //Multiple checkbox selection
        cy.get('[type="checkbox"]').check([this.testdata.Hobbies1,this.testdata.Hobbies3])
    })
    it('TC 11: Languages',function()
    {
        //click on dropdown
        cy.get('#msdd').click() 
        //Select Arabic
        cy.get('.ui-corner-all').contains(this.testdata.Languages1).click() 
        //Select French
        cy.get('.ui-corner-all').contains(this.testdata.Languages2).click() 

        //Clicking ouside the field to close the dropdown
        cy.get('#basicBootstrapForm').click() 
    })

    it('TC 12: Skills_dropdown',function()
    {
        //Select the dropdown option and comparing it with expected value
        cy.get('#Skills').select(this.testdata.Skills).should('have.value',this.testdata.Skills)
    })        
        
    it('TC 13: Country_dropdowmn',function()
    {
        //Selecting that dropdown option
        cy.get('.select2-selection--single[role="combobox"]').click()
        //Searching a value and select it
        cy.get('.select2-search__field[type="search"]').type(this.testdata.Country).type('{enter}')
    })

    it('TC 14: DateOfBirth_dropdown',function()
    {
        //Select year value and comparing it with expected value
        cy.get('#yearbox').should('be.visible')
        cy.get('#yearbox').select(this.testdata.dob_year).should('have.value','2000')
        
        //Select Month value and comparing it with expected value
        cy.get('[ng-model="monthbox"]').should('be.visible')
        cy.get('[ng-model="monthbox"]').select(this.testdata.dob_month).should('have.value','May')
        
        //Select Day value and comparing it with expected value
        cy.get('#daybox').should('be.visible')
        cy.get('#daybox').select(this.testdata.dob_day).should('have.value','2')
    })

    it('TC 15: Password',function()
    {    
         //Enter Password
         Register.Password_textbox(this.testdata.Password)
    })

    it('TC 16: ConfirmPassword',function()
    {        
         //Enter Confirm Password
         Register.ConfirmPassword_textbox(this.testdata.ConfirmPassword)
    })

    it('TC 17: Submit Button',function()
    {
        //Refresh button click
        //Register.Refresh_button()

        Register.Submit_button()   
    })
})