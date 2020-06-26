package StepDefinations;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import commonMethod.Common_Methods;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AddPatientDetails;

public class Setting extends Common_Methods{

	@Then("^click on Setting button and go to Practise Setting$")
	public void click_on_Setting_button_and_go_to_Practise_Setting() throws Throwable
	{
		expwait("//*[@class='fa-color user_logo']");
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']")).click();
		normalWait(1000);
		driver.findElement(By.xpath("//*[@href='/doctors/practice_settings']")).click();
		expwait("//*[contains(text(),'Select Default View')]");
	}

	@Then("^clicks on Default view and validate the functionality$")
	public void clicks_on_Default_view_and_validate_the_functionality() throws Throwable 
	{
		//Validate the Default setting list page should display
		String note=driver.findElement(By.xpath("//*[contains(text(),'Select Default View')]")).getText();
		if(note.contains("Select Default View"))
		{
			logger.info("On the click of defult setting select default view page is displaying-->PASS");
		}
		else
		{
			logger.info("On the click of defult setting select default view page is not displaying-->DEFECT");
		}

		//Validate Adminstration Department view
		normalWait(3000);
		clickElementByXpath("(//*[@name='user_selected_url'])[1]");
		normalWait(2000);
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']/..//i")).click();
		expwait("//*[@href='/users/logout']");
		driver.findElement(By.xpath("//*[@href='/users/logout']")).click();
		expwait("//*[@placeholder='Username']");
		driver.findElement(By.xpath("//*[@placeholder='Username']")).sendKeys("hgdummydoc");
		driver.findElement(By.xpath("//*[@placeholder='Password']")).sendKeys("HGraph@2$2$");
		driver.findElement(By.xpath("//*[@value='LOGIN']")).click();
		expwait("(//h4[text()='Others'])[1]");
		//validate dash board page
		if(driver.findElement(By.xpath("(//h4[text()='Others'])[1]")).isDisplayed())
		{
			logger.info("Adminstration Department validation successfully-->PASS"); 
		}
		else
		{
			logger.info("Adminstration Department is not validate successfully-->DEFECT"); 
		}

		//OT Department
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']")).click();
		normalWait(1000);
		driver.findElement(By.xpath("//*[@href='/doctors/practice_settings']")).click();
		expwait("//*[contains(text(),'Select Default View')]");
		normalWait(3000);
		clickElementByXpath("(//*[@name='user_selected_url'])[2]");
		normalWait(2000);
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']/..//i")).click();
		expwait("//*[@href='/users/logout']");
		driver.findElement(By.xpath("//*[@href='/users/logout']")).click();
		expwait("//*[@placeholder='Username']");
		driver.findElement(By.xpath("//*[@placeholder='Username']")).sendKeys("hgdummydoc");
		driver.findElement(By.xpath("//*[@placeholder='Password']")).sendKeys("HGraph@2$2$");
		driver.findElement(By.xpath("//*[@value='LOGIN']")).click();
		String highlightcolor=driver.findElement(By.xpath("//*[@class='common-li-class web_responsive activate']")).getCssValue("border-bottom");
		System.out.println(highlightcolor);
		//validate dash board page
		if(highlightcolor.equals("3px solid rgb(60, 193, 255)"))
		{
			logger.info("OT validation successfully-->PASS"); 
		}
		else
		{
			logger.info("OTt is not validate successfully-->DEFECT"); 
		}

		//Outpatient Department
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']")).click();
		normalWait(1000);
		driver.findElement(By.xpath("//*[@href='/doctors/practice_settings']")).click();
		expwait("//*[contains(text(),'Select Default View')]");
		normalWait(3000);
		clickElementByXpath("(//*[@name='user_selected_url'])[3]");
		normalWait(2000);
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']/..//i")).click();
		expwait("//*[@href='/users/logout']");
		driver.findElement(By.xpath("//*[@href='/users/logout']")).click();
		expwait("//*[@placeholder='Username']");
		driver.findElement(By.xpath("//*[@placeholder='Username']")).sendKeys("hgdummydoc");
		driver.findElement(By.xpath("//*[@placeholder='Password']")).sendKeys("HGraph@2$2$");
		driver.findElement(By.xpath("//*[@value='LOGIN']")).click();
		String highlightcolor1=driver.findElement(By.xpath("//*[@class='common-li-class web_responsive activate']")).getCssValue("border-bottom");
		System.out.println(highlightcolor1);
		//validate dash board page
		if(highlightcolor1.equals("3px solid rgb(60, 193, 255)"))
		{
			logger.info("OPD validation successfully-->PASS"); 
		}
		else
		{
			logger.info("OPD is not validate successfully-->DEFECT"); 
		}		
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']")).click();
		expwait("//*[@href='/doctors/practice_settings']");
		driver.findElement(By.xpath("//*[@href='/doctors/practice_settings']")).click();
		expwait("//*[contains(text(),'Select Default View')]");
		normalWait(3000);
		clickElementByXpath("(//*[@name='user_selected_url'])[4]");
		normalWait(3000);
		driver.findElement(By.xpath("//*[@class='fa-color user_logo']/..//i")).click();
		expwait("//*[@href='/users/logout']");
		driver.findElement(By.xpath("//*[@href='/users/logout']")).click();
		expwait("//*[@placeholder='Username']");
		driver.findElement(By.xpath("//*[@placeholder='Username']")).sendKeys("hgdummydoc");
		driver.findElement(By.xpath("//*[@placeholder='Password']")).sendKeys("HGraph@2$2$");
		driver.findElement(By.xpath("//*[@value='LOGIN']")).click();
		String highlightcolor2=driver.findElement(By.xpath("//*[@class='common-li-class web_responsive activate']")).getCssValue("border-bottom");
		System.out.println(highlightcolor2);
		//validate dash board page
		if(highlightcolor2.equals("3px solid rgb(60, 193, 255)"))
		{
			logger.info("IPD validation successfully-->PASS"); 
		}
		else
		{
			logger.info("IPD is not validate successfully-->DEFECT"); 
		}

	}
 
	
	@When("^clicks on Clinical from the left panel menu$")
	public void clicks_on_Clinical_from_the_left_panel_menu() throws Throwable

	{ 
		expwait("//a[@id='submenu-clinical']");
		driver.findElement(By.xpath("//a[@id='submenu-clinical']")).click();
		expwait("//ul[@id='setsAndListSettingSubmenu']");
		List<WebElement> clinical=driver.findElements(By.xpath("//ul[@id='setsAndListSettingSubmenu']/..//li"));
		for(int i=0;i<clinical.size();i++)
		{
			logger.info(clinical.get(i).getText());
		}
	}

	@Then("^click on Advice Sets and validate functionality\"([^\"]*)\"$")
	public void click_on_Advice_Sets_and_validate_functionality(String name) throws Throwable
	{
		driver.findElement(By.xpath("//*[text()='Advice Sets']")).click();
		expwait("//*[text()='Advice Sets Name']");
		driver.findElement(By.xpath("//*[@href=\"/advice_sets/new?level=user\"]")).click();
		expwait("//*[text()='Advice Set']");
		driver.findElement(By.xpath("//*[@name='advice_set[name]']")).sendKeys("Test Automation");
		driver.findElement(By.xpath("//*[@name='advice_set[specialty_id]']")).click();		
		driver.findElement(By.xpath("//*[@name='advice_set[specialty_id]']/..//option[text()='Ophthalmology']")).click();
		driver.findElement(By.xpath("//*[@name='advice_set[lcid_code][]']/..//option[text()='English']")).click();
		driver.findElement(By.xpath("(//*[@class='note-editable panel-body'])[1]")).sendKeys(name);
		driver.findElement(By.xpath("(//*[@name='commit'])[2]")).click();
		expwait("(//*[@id='advice-set-list_filter']/..//input)[2]");
		logger.info("Successfully a new Advice Set Created");
		driver.findElement(By.xpath("(//*[@id='advice-set-list_filter']/..//input)[2]")).sendKeys(name);
		if(driver.findElement(By.xpath("//*[text()='"+name+"']")).isDisplayed())
		{
			logger.info("Newly created Advice Set is showing in Search results-->PASS");
		}
		else
		{
			logger.info("Newly created Advice Set is not showing in Search results-->DEFECT");
		}
	}

	@Then("^navigate to OPD and create one Appointment$")
	public void navigate_to_OPD_and_create_one_Appointment() throws Throwable 
	{
        //driver.findElement(By.id("opd_navigation")).click();
        clickElementByXpath("(//*[@id='opd_navigation'])[2]");
        addpd =new AddPatientDetails(driver);
		addpd.clickAdd_btn();
		logger.info("click on Add button");
		addpd.click_Add_New_Patient_btn();
		addpd.fillFirstName("Biswajit");
		addpd.fillMobNo("9861929608");
		logger.info("User entered mandatory fields such as First name and Mob no"); 
		addpd.clickappointmentbtn();		
	}

	@When("^mark patient as Arrived go to Eye Template\"([^\"]*)\"$")
	public void mark_patient_as_Arrived_go_to_Eye_Template(String name) throws Throwable 
	{
		expwait("//*[text()='Mark Patient Arrived']");
		driver.findElement(By.xpath("//*[text()='Mark Patient Arrived']")).click();
		logger.info("User marked as Patient Arrived");
		expwait("//*[text()='Select Token']");
		driver.findElement(By.xpath("//*[text()='Skip Without Token']")).click();
		logger.info("User Skipped without Token");
		expwait("//*[text()='Template Details']");
		driver.findElement(By.xpath("//button[@id='opd-templates']")).click();
		List<WebElement> template=driver.findElements(By.xpath("//*[@aria-labelledby='opd-templates-dropdown']/..//li"));
		for(int i=0;i<template.size();i++)
		{
			logger.info("List of Template Details under 'New' button :"+ template.get(i).getText());
			try {
			if(template.contains("Eye")) {
				template.get(i).click();
				logger.info("User Selected Eye Template");
			}}
			catch(Exception e)
			{
				logger.info("User not Selected Eye Template");
			}
		
	}
		driver.findElement(By.xpath("//a[@data_templatetype='eye']")).click();
		logger.info("User Selected Eye Template");
		expwait("//li[@id='advice_step']");
		driver.findElement(By.xpath("//li[@id='advice_step']")).click();
		logger.info("User clicked on Advice Step");
		expwait("//a[@href='#advice']");
		driver.findElement(By.xpath("//a[@href='#advice']")).click();
		logger.info("User clicked on Advice tab under Advice Step");
		driver.findElement(By.xpath("(//span[@class='select2-selection select2-selection--single'])[24]")).click();
		logger.info("User clicked on Advice & Precaution button");
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(name);
		
		List<WebElement> advice =driver.findElements(By.xpath("//ul[@id='select2-advice_sets_option-results']"));
		for(int i=0;i<advice.size();i++)
		{
			String advicelist=advice.get(i).getText();
			if(advicelist.contains(name))
			{
				logger.info("Advice set Searched data is displaying in auto suggestion text box");
				advice.get(i).click();
				normalWait(1000);
				String visiblecomment=driver.findElement(By.xpath("//*[@id='advice-set-content-summernote']")).getText();
				if(visiblecomment.contains(name))
				{
					logger.info("The data displaying in advice set comments is same as user given text");
				}
				else
				{
					logger.info("The data displaying in advice set comments is not same as user given text");
				}
				
			}
			else
			{
				logger.info("Advice set Searched data is not displaying in auto suggestion text box");
			}
		}
		
	}

}
