package stepDefinations;

import java.util.List;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.cucumber.listener.Reporter;
import commonMethod.Common_Methods;
import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import pageObjects.AddPatientDetails;
import pageObjects.LoginPage;

public class Steps extends Common_Methods

{


	@Given("^open the browser and enter the URL \"([^\"]*)\"$")
	public void open_the_browser_and_enter_the_URL(String url) throws Throwable
	{   
		logger = Logger.getLogger("HealthGraph");
		PropertyConfigurator.configure("Log4j.properties");


		browser_and_url_open();
		lp=new LoginPage(driver);
		logger.info("*****Launching browser******");
	}

	@When("^user fills \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_fills_and(String uname, String pswd) throws Throwable {
		lp.fillusername(uname);
		lp.fillpassword(pswd);
		logger.info("*****Successfully Entered Username and Password******");
	}


	@When("^clicks on Login$")
	public void clicks_on_Login() throws Throwable 
	{
		lp.clickloginbtn();
		logger.info("*****Logged in Successfully******");
	}

	@Then("^user can view dashboard$")
	public void user_can_view_dashboard() throws Throwable 
	{
		Assert.assertEquals("Foss - EHR", lp.getPageTitle());
		logger.info("*****User landed on OPD Home Page******");
	}



	//Create New Patients with mandatory fields------------------------------------------------------------------------------------------------------------------
	@Then("^click on Add button$")
	public void click_on_Add_button() throws Throwable {

		addpd =new AddPatientDetails(driver);
		addpd.clickAdd_btn();
		logger.info("*****click on Add button******");

	}

	@Then("^click on Add New Patient button$")
	public void click_on_Add_New_Patient_button() throws Throwable {
		addpd.click_Add_New_Patient_btn();
		logger.info("*****click on Add New Patient button******");
	}

	@Then("^User should see a modal having the header \"([^\"]*)\"$")
	public void user_should_see_a_modal_having_the_header(String expectedHeader) throws Throwable
	{
		addpd.validatepopuoheader();
	}

	@Then("^Validate all the fields contains in add_new_patient modal$")
	public void validate_all_the_fields_contains_in_add_new_patient_modal() throws Throwable 
	{
		Assert.assertEquals(addpd.searchButton.isDisplayed(), true);
		Assert.assertEquals(addpd.searchButton.isEnabled(), false);
		Assert.assertEquals(addpd.searchButton.getCssValue("background-color"), "rgba(92, 184, 92, 1)");
		Assert.assertEquals(addpd.addNewPatientButton.isDisplayed(), true);
		Assert.assertEquals(addpd.addNewPatientButton.isEnabled(), true);
		Assert.assertEquals(addpd.addNewPatientButton.getCssValue("background-color"), "rgba(91, 192, 222, 1)");
		Assert.assertEquals(addpd.searchPatientInput.isDisplayed(), true);
		Assert.assertEquals(addpd.searchPatientInput.getAttribute("placeholder"), "Type Atleast 5 Characters");
		Assert.assertEquals(addpd.patientSearchDropdown.isDisplayed(), true);
		Assert.assertEquals(addpd.closeButton.isDisplayed(), true);
	}

	@Then("^Modal must have below mentioned tabs$")
	public void modal_must_have_below_mentioned_tabs(DataTable dataTable) throws Throwable {
		List<String> listData = dataTable.asList(String.class);
		int index = 0;
		for (WebElement element : addpd.patientWizardTabs) {
			Assert.assertEquals(element.getText(), listData.get(index));
			index++;
			logger.info("*****Modal have Patient Details, Other Details, History and Allergies tab on LHS ******");
			System.out.println(element.getText());
		}

	}

	@When("^user without filling mandatory field and click on Appointment button$")
	public void user_without_filling_mandatory_field_and_click_on_Appointment_button() throws Throwable {

		addpd.clickappointmentbtn();
		logger.info("*****Without filling mandatory field clicking on Appointment button******");
	}

	@Then("^validate warning message should display$")
	public void validate_warning_message_should_display() throws Throwable {
		String warnmsgclor=driver.findElement(By.xpath("//*[text()='First Name']")).getCssValue("color");

		if(warnmsgclor.contains("rgba(51, 51, 51, 1)"))
		{
			Reporter.addStepLog("The warning mesage is highlighting in RED color if user not filling the mandatory fields-->SUCCESS");
			logger.info("*****The warning mesage is highlighting in RED color if user not filling the mandatory fields******");
		}
		else
		{
			Reporter.addStepLog("The warning mesage is highlighting in RED color if user not filling the mandatory fields-->DEFECT");
			logger.info("*****The warning mesage is not showing in RED color if user not filling the mandatory fields******");
		}
	}

	@When("^user fill mandatory fields \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_mandatory_fields(String arg1, String arg2) throws Throwable {
		addpd.fillFirstName(arg1);
		addpd.fillMobNo(arg2);
		logger.info("*****User entered mandatory fields such as First name and Mob no******"); 
	}

	@Then("^user can create Appointment$")
	public void user_can_create_Appointment() throws Throwable {
		addpd.clickappointmentbtn();
		logger.info("*****User successfully created one appointment by entering mandatory fields******");
	}

	//Create  Patients with detail fields values-------------------------------------------------------------------------------------------------------

	@Then("^fill patient details  \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fill_patient_details(String firstname1, String mobno1, String midlename, String lastname, String secondaryno, String email, String language, String secondarylanguage, String pincode, String Add1, String Add2, String MedicalRepoNo, String Aadhaar, String PANno, String DLno, String Ref) throws Throwable {
        
		addpd.fillFirstName(firstname1);
		addpd.fillMobNo(mobno1);
		addpd.fillMidleNAme(midlename);
		addpd.fillLastNAme(lastname);
		addpd.fillSecNo(secondaryno);
		addpd.fillEmail(email);
		addpd.fillPrimaryLanguage(language);
		addpd.fillSecondaryLanguage(secondarylanguage);
		addpd.fillPincode(pincode);
		addpd.fillAdd1(Add1);
		addpd.fillAdd2(Add2);
		addpd.fillMRN(MedicalRepoNo);
		addpd.fillAadhaar(Aadhaar);
		addpd.fillDL(DLno);
		addpd.fillPan(PANno);
		addpd.fillpatientref(Ref);
		logger.info("*******User sucessfully create an appointment by entering all fields under Patient details tab********");
	}
    
	@When("^clicks on other details tab$")
	public void clicks_on_other_details_tab() throws Throwable
	{
	    addpd.click_Other_Details();
	    logger.info("*******User clicks in Other Details********");
	}

	@When("^validate blood gropup radio button should be single select$")
	public void validate_blood_gropup_radio_button_should_be_single_select() throws Throwable 
	{
		addpd.selectBloodGroup();
		logger.info("*******User selected blood group********");
/*	    addpd.selectnegativeGroup();
		addpd.selectpositiveGroup();
		String radiocolour2=driver.findElement(By.xpath("//*[text()='O+']")).getCssValue("color");
		System.out.println(radiocolour2);	*/	
	}

	@When("^Maritial status should be single select radio button$")
	public void maritial_status_should_be_single_select_radio_button() throws Throwable
	{
	   addpd.select_Mar_Status();
	   logger.info("*******User selected Maritial status********");
	}

	@When("^fill emergency contact \"([^\"]*)\" \"([^\"]*)\"$")
	public void fill_emergency_contact(String ename, String ecnct) throws Throwable 
	{
	   addpd.fillEmrgncyName(ename);
	   addpd.fillEmrgncyCnct(ecnct);
	   logger.info("*******User filled emergency Name and Contact number********");
	}

	@When("^validate special status$")
	public void validate_special_status() throws Throwable 
	{
	   addpd.selectSpecstatus(); 
	   logger.info("*******User selected Special status********");
	}







}
