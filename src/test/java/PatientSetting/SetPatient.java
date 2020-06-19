package PatientSetting;

import java.util.List;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.cucumber.listener.Reporter;

import commonMethod.Common_Methods;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AddPatientDetails;
import pageObjects.LoginPage;

public class SetPatient extends Common_Methods
{

	@Given("^open the browser and enter the URL \"([^\"]*)\"$")
	public void open_the_browser_and_enter_the_URL(String arg1) throws Throwable {

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
	public void clicks_on_Login() throws Throwable {

		lp.clickloginbtn();
		logger.info("*****Logged in Successfully******");
	}

	@Then("^user can view dashboard$")
	public void user_can_view_dashboard() throws Throwable {

		Assert.assertEquals("Foss - EHR", lp.getPageTitle());
		logger.info("*****User landed on OPD Home Page******");
	}

	@When("^user clicks on profile setting button$")
	public void user_clicks_on_profile_setting_button() throws Throwable {

		driver.findElement(By.id("setting_n_logout")).click();
		normalWait(1000);
	}

	@Then("^clicks on organisation setting link$")
	public void clicks_on_organisation_setting_link() throws Throwable {
		driver.findElement(By.xpath("//*[@href='/admins/organisation_settings']")).click();
		normalWait(1000);
	}

	@Then("^clicks on Patient Setting link from the left panel menu$")
	public void clicks_on_Patient_Setting_link_from_the_left_panel_menu() throws Throwable {
		driver.findElement(By.xpath("//*[@href='#manage_patient_form_settings']")).click();
		normalWait(1500);
	}

	@Then("^it should display below buttons$")
	public void it_should_display_below_buttons(DataTable arg1) throws Throwable {
		addpd =new AddPatientDetails(driver);
		List<String> listData = arg1.asList(String.class);
		int index = 0;
		for (WebElement element : addpd.patientsetting) {
			Assert.assertEquals(element.getText(), listData.get(index));
			index++;
			logger.info("****Patient Setting must have below tabs:" + element.getText());	
		}
	}

	@Then("^validate mandatory field setting$")
	public void validate_mandatory_field_setting() throws Throwable {
		String xpath = "(((//*[@class='row'])[7]/..//div)[5]/div/..//div/div/input)[";
		String fullXpath;
		List<WebElement> element= driver.findElements(By.xpath("((//*[@class='row'])[7]/..//div)[5]/div/..//input"));
		for(int i=3;i<=element.size();i++)
		{
			fullXpath = xpath+i+"]";
			WebElement element1 = driver.findElement(By.xpath(fullXpath));
			clickElementByElement(element1);			
			normalWait(300);
			driver.findElement(By.xpath("(//*[text()='Save'])[2]")).click();
			for(int j=0;j<1;j++)
			{
				//driver.findElement(By.xpath("(//*[text()='Save'])[2]")).click();
				driver.findElement(By.xpath("(//*[@id='opd_navigation'])[2]")).click();
				addpd =new AddPatientDetails(driver);
				addpd.clickAdd_btn();
				logger.info("*****click on Add button******");
				addpd.click_Add_New_Patient_btn();
				addpd.clickappointmentbtn();
				logger.info("*****Without filling mandatory field clicking on Appointment button******");
				String warnmsgclor=driver.findElement(By.xpath("//*[text()='First Name']")).getCssValue("color");

				if(warnmsgclor.contains("rgba(51, 51, 51, 1)"))
				{
					Reporter.addStepLog("The warning mesage is highlighting in RED color if user not filling the mandatory fields-->SUCCESS");
					logger.info("*****The warning mesage is highlighting in RED color if user not filling the mandatory fields******");
					normalWait(2000);
					clickElementByXpath("//*[text()='Close']");
					normalWait(1500);
					expwait("//*[@class='fa-color user_logo']/..//i");
				}
				else
				{
					Reporter.addStepLog("The warning mesage is highlighting in RED color if user not filling the mandatory fields-->DEFECT");
					logger.info("*****The warning mesage is not showing in RED color if user not filling the mandatory fields******");
				}
			}
			//Test clicks on profile button
			expwait("//*[@class='fa-color user_logo']/..//i");
			normalWait(1500);
			driver.findElement(By.id("setting_n_logout")).click();
			normalWait(1000);
			driver.findElement(By.xpath("//*[@href='/admins/organisation_settings']")).click();
			normalWait(1000);
			driver.findElement(By.xpath("//*[@href='#manage_patient_form_settings']")).click();
			normalWait(1500);
		}

		


	}
}



