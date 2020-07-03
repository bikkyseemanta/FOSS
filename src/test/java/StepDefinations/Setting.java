package StepDefinations;

import java.util.List;

import org.junit.Assert;
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
	   //                                      Advice Set                                                 //
	  ///////////                    Validate Medical Certificate Template                          ///////

	@Then("^click on User Note and validate the New Template$")
	public void click_on_User_Note_and_validate_the_New_Template() throws Throwable
	{
		driver.findElement(By.xpath("//a[@href='#user_notes_templates']")).click();
		logger.info("User clicked on User Note tab");
	}

	@Then("^create Medical Certificate Template \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_Medical_Certificate_Template(String name, String Heading, String Subject, String Content) throws Throwable 
	{
		expwait("//*[@class='pull-right']/..//a");
		clickElementByXpath("//*[@class='pull-right']/..//a");
        logger.info("User clicked on New Template button");
		expwait("//*[text()='Create Medical Certificate Template']");
		driver.findElement(By.xpath("//input[@id='user_notes_template_name']")).sendKeys(name);
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_category']")).sendKeys(Heading);
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_medical_subject']")).sendKeys(Subject);
		driver.findElement(By.xpath("//*[@class='note-editable panel-body']")).sendKeys(Content);
		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']")).click();
		expwait("//*[@name='user_notes_template[specialty_id]']/..//option[2]");
		logger.info("User selected Opthalmology Speciality");
		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']/..//option[2]")).click();
		driver.findElement(By.xpath("(//*[@name='commit'])[2]")).click();
		logger.info("User successfully created new Medical Certificate having name:" +name);
		expwait("(//*[@aria-controls='certificate-template-list'])[2]");
		normalWait(500);
	}

	@Then("^verify created Medical certificate should display in Template \"([^\"]*)\"$")
	public void verify_created_Medical_certificate_should_display_in_Template(String name) throws Throwable 
	{
		driver.findElement(By.xpath("(//*[@aria-controls='certificate-template-list'])[2]")).sendKeys(name);
		logger.info("User is searching the created Medical Certificate");
		expwait("((//tbody/tr[1])[3]/td)[1]");
		String searchresult=driver.findElement(By.xpath("((//tbody/tr[1])[3]/td)[1]")).getText();
		normalWait(500);
		if(searchresult.equals(name))
		{
			logger.info("Created Medical Certificate Template is showing in Search Result");
		}else
		{
			logger.info("Created Medical Certificate Template is not showing in Search Result");
		}
	}

	@When("^user deleted that template its should not display under template \"([^\"]*)\"$")
	public void user_deleted_that_template_its_should_not_display_under_template(String name) throws Throwable 
	{      		   
		expwait("(//*[@class='btn btn-danger btn-xs'])[1]");
		driver.findElement(By.xpath("(//*[@class='btn btn-danger btn-xs'])[1]")).click();
		expwait("(//*[text()='Are you sure?'])[1]");
		driver.findElement(By.xpath("(//*[text()='Confirm'])[1]")).click();
	}

	@Then("^create again new Medical Certificate Template \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_again_new_Medical_Certificate_Template(String newname, String Heading1, String Subject1, String Content1) throws Throwable 
	{
		expwait("//*[@class='pull-right']/..//a");
		clickElementByXpath("//*[@class='pull-right']/..//a");
		logger.info("User again clicked on New Template button for verifying created MEdical Certificate should display in patient Summary page");
		expwait("//*[text()='Create Medical Certificate Template']");
		driver.findElement(By.xpath("//input[@id='user_notes_template_name']")).sendKeys(newname);

		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']")).click();
		expwait("//*[@name='user_notes_template[specialty_id]']/..//option[2]");
		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']/..//option[2]")).click();
		logger.info("User selected Opthalmology Speciality");
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_category']")).sendKeys(Heading1);
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_medical_subject']")).sendKeys(Subject1);
		driver.findElement(By.xpath("//*[@class='note-editable panel-body']")).sendKeys(Content1);
		driver.findElement(By.xpath("(//*[@name='commit'])[2]")).click();
		logger.info("User again successfully created new Medical Certificate having name:" +newname);
		expwait("(//*[@id='opd_navigation'])[2]");
	}

	@Then("^validate created Medical Certificate template should display Patient Summary page \"([^\"]*)\"$")
	public void validate_created_Medical_template_should_display_Patient_Summary_page(String name) throws Throwable 
	{
		clickElementByXpath("(//*[@id='opd_navigation'])[2]");
		addpd =new AddPatientDetails(driver);
		addpd.clickAdd_btn();
		logger.info("click on Add button");
		addpd.click_Add_New_Patient_btn();
		addpd.fillFirstName("Biswajit");
		addpd.fillMobNo("9861929608");
		logger.info("User entered mandatory fields such as First name and Mob no"); 
		addpd.clickappointmentbtn();
		expwait("//button[text()='Summary']");
		driver.findElement(By.xpath("//button[text()='Summary']")).click();
		expwait("(//button[@id='print-admission-dropdown'])[1]");
		driver.findElement(By.xpath("(//button[@id='print-admission-dropdown'])[1]")).click();
		List<WebElement> list = driver.findElements(By.xpath("//ul[@class='dropdown-menu children nopadding_dropdown']/..//li"));
		for(int i=0;i<list.size();i++)
		{
			String advicelist=list.get(i).getText();
			if(advicelist.contains(name))
			{
				logger.info("Created Medical Certificate Template is displaying under certificates");
			}
			else
			{
				logger.info("Created Medical Certificate Template is not displaying under certificates");
			}
		}

	}
             ///////////                    Validate Referral Message Template                          ///////
	
	@Then("^create Referal Message Template \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_Referal_Certificate_Template(String name, String Heading, String Subject, String Content) throws Throwable 
	{
		expwait("//*[@class='pull-right']/..//a");
		
		clickElementByXpath("//*[@class='pull-right']/..//a");
		logger.info("User clicked on New Template");
		
		expwait("//*[text()='Create Medical Certificate Template']");
		logger.info("User is on Medical Certificate Template");
		
		//Select Type
		driver.findElement(By.xpath("//*[@name='user_notes_template[type]']")).click();
		expwait("//*[@name='user_notes_template[type]']/..//option[2]");
		driver.findElement(By.xpath("//*[@name='user_notes_template[type]']/..//option[2]")).click();
		expwait("//*[text()='Create Referral Message Template']");
		normalWait(500);
		logger.info("User changed to Referral Message Template");
		//Specility drop down
		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']")).click();
		expwait("//*[@name='user_notes_template[specialty_id]']/..//option[2]");
		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']/..//option[2]")).click();
		logger.info("User selected Opthalmology Speciality");
		driver.findElement(By.xpath("//input[@id='user_notes_template_name']")).sendKeys(name);
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_category']")).sendKeys(Heading);
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_medical_subject']")).sendKeys(Subject);
		driver.findElement(By.xpath("//*[@class='note-editable panel-body']")).sendKeys(Content);
		normalWait(1000);
		driver.findElement(By.xpath("(//*[@name='commit'])[2]")).click();
		logger.info("User successfully created Refferal Certificate Template having name:" +name);
		normalWait(1000);
	}

	@Then("^verify created Referal Message should display in Template \"([^\"]*)\"$")
	public void verify_created_Referal_certificate_should_display_in_Template(String name) throws Throwable 
	{   
		
		//Specility drop down
		driver.findElement(By.xpath("//*[@name='user_note_type']")).click();
		expwait("//*[@name='user_note_type']/..//option[2]");
		driver.findElement(By.xpath("//*[@name='user_note_type']/..//option[2]")).click();
		normalWait(1000);
				
		driver.findElement(By.xpath("(//*[@class='dataTables_filter']/..//input)[2]")).sendKeys(name);
		expwait("((//tbody/tr[1])[3]/td)[1]");
		String searchresult=driver.findElement(By.xpath("((//tbody/tr[1])[3]/td)[1]")).getText();
		normalWait(500);
		if(searchresult.equals(name))
		{
			logger.info("Created Referral Certificate is showing in Search Result");
		}else
		{
			logger.info("Created Referral Certificate is not showing in Search Result");
		}
	}

	@When("^user deleted that Referal Message its should not display under template \"([^\"]*)\"$")
	public void user_deleted_that_Referal_certificate_its_should_not_display_under_template(String arg1) throws Throwable 
	{
		expwait("(//*[@class='btn btn-danger btn-xs'])[1]");
		driver.findElement(By.xpath("(//*[@class='btn btn-danger btn-xs'])[1]")).click();
		expwait("(//*[text()='Are you sure?'])[1]");
		driver.findElement(By.xpath("(//*[text()='Confirm'])[1]")).click();
		normalWait(5000);
	}

	@Then("^create again new Referal Message Template \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_again_new_Referal_Certificate_Template(String newname, String Heading1, String Subject1, String Content1) throws Throwable 
	{
		//expwait("//*[@class='pull-right']/..//a");
		clickElementByXpath("//*[@class='pull-right']/..//a");
		expwait("//*[text()='Create Referral Message Template']");
		driver.findElement(By.xpath("//input[@id='user_notes_template_name']")).sendKeys(newname);
		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']")).click();
		expwait("//*[@name='user_notes_template[specialty_id]']/..//option[2]");
		driver.findElement(By.xpath("//*[@name='user_notes_template[specialty_id]']/..//option[2]")).click();
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_category']")).sendKeys(Heading1);
		driver.findElement(By.xpath("//input[@id='user_notes_template_template_details_medical_subject']")).sendKeys(Subject1);
		driver.findElement(By.xpath("//*[@class='note-editable panel-body']")).sendKeys(Content1);
		driver.findElement(By.xpath("(//*[@name='commit'])[2]")).click();
		expwait("(//*[@aria-controls='certificate-template-list'])[2]");
	}

	@Then("^validate created Referal Message template should display Patient Summary page \"([^\"]*)\"$")
	public void validate_created_Referal_template_should_display_Patient_Summary_page(String name) throws Throwable
	{
		clickElementByXpath("(//*[@id='opd_navigation'])[2]");
		addpd =new AddPatientDetails(driver);
		addpd.clickAdd_btn();
		logger.info("click on Add button");
		addpd.click_Add_New_Patient_btn();
		addpd.fillFirstName("Biswajit");
		addpd.fillMobNo("9861929608");
		logger.info("User entered mandatory fields such as First name and Mob no"); 
		addpd.clickappointmentbtn();
		expwait("//button[text()='Summary']");
		driver.findElement(By.xpath("//button[text()='Summary']")).click();
		logger.info("User click on Patient Summary Page");
		expwait("(//button[@id='print-admission-dropdown'])[1]");
		driver.findElement(By.xpath("(//button[@id='print-admission-dropdown'])[2]")).click();
		logger.info("User click on Refferal Message tab");
		List<WebElement> list = driver.findElements(By.xpath("//ul[@class='dropdown-menu children nopadding_dropdown']/..//li"));
		List<WebElement> list1 = driver.findElements(By.xpath("//ul[@class='dropdown-menu dropdown-menu-right children nopadding_dropdown']/..//li"));
		
		for(int i=0;i<list1.size();i++)
		{
			String advicelist=list1.get(i).getText();
			if(advicelist.contains(name))
			{
				logger.info("Created Refferal Message Template is displaying under Refferal Message tab");
			}
			else
			{
				logger.info("Created Refferral Message Template is not displaying under Refferal Message tab");
			}
		}

	}

	//////                            Medication Lists                                   /////////


	@Then("^click on Medications Lists and validate each tab$")
	public void click_on_Medications_Lists_and_validate_each_tab() throws Throwable
	{
		driver.findElement(By.xpath("//a[@href='#medicationlists']")).click();
		logger.info("User click on Medication Lists tab");
		expwait("//a[@href='/practice_medication_lists/add_medication_list?level=user']");
		Assert.assertEquals(driver.findElement(By.xpath("//a[@href='/practice_medication_lists/add_medication_list?level=user']")).isDisplayed(), true);
		Assert.assertEquals(driver.findElement(By.xpath("//a[@href='/practice_medication_lists/upload_medication_excel?level=user']")).isDisplayed(), true);
		logger.info("User verifies the presence of 'Add Medication Lists' and 'Upload via Excel' button");
		driver.findElement(By.xpath("//a[@href='/practice_medication_lists/upload_medication_excel?level=user']")).click();
		logger.info("User clicked on Upload via Excel button");
		expwait("//*[text()='Upload Medication via Excel']");
		driver.findElement(By.xpath("(//button[@class='close'])[2]")).click();
		logger.info("User closed the Upload Medication via Excel pop up");
	}

	@When("^create Medication Lists \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_Medication_Lists(String MedicineName1, String GenericName1, String MedicineType1) throws Throwable
	{
		expwait("//a[@href='/practice_medication_lists/add_medication_list?level=user']");
		driver.findElement(By.xpath("//a[@href='/practice_medication_lists/add_medication_list?level=user']")).click();
		expwait("//b[contains(text(),'Add Medication List for ')]");
		driver.findElement(By.xpath("//input[@id='my_practice_medication_list_0_name']")).sendKeys(MedicineName1);
		logger.info("User entered Medicine Name");
		driver.findElement(By.xpath("//input[@id='my_practice_medication_list_0_contents']")).sendKeys(GenericName1);
		logger.info("User entered Generic Name");
		driver.findElement(By.xpath("//*[@id='select2-my_practice_medication_list_0_med_type-container']")).click();
		expwait("//*[@type='search']/..//input");
		driver.findElement(By.xpath("//*[@type='search']/..//input")).sendKeys(MedicineType1);
		driver.findElement(By.xpath("//li[text()='Tablets']")).click();
		logger.info("User entered Medicine Type as:" + MedicineType1);
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		logger.info("User successfully created one Medication List");
	}

	@Then("^verify created Medication Lists should display in Medication Lists \"([^\"]*)\"$")
	public void verify_created_Medication_Lists_should_display_in_Medication_Lists(String MedicineName1) throws Throwable
	{
		expwait("//a[@href='/practice_medication_lists/add_medication_list?level=user']");
		driver.findElement(By.xpath("//input[@aria-controls='medication-list-table']")).sendKeys(MedicineName1);
		expwait("((//tbody/tr[1])[3]/td)[1]");
		normalWait(1000);
		String searchresult=driver.findElement(By.xpath("((//tbody/tr[1])[3]/td)[1]")).getText();
		if(searchresult.equals(MedicineName1))
		{
			logger.info("Created Medication List is showing in Search Result");
		}else
		{
			logger.info("Created Medication List is not showing in Search Result");
		}

	}

	@When("^user deleted that Medication List its should not display under template \"([^\"]*)\"$")
	public void user_deleted_that_Medication_List_its_should_not_display_under_template(String MedicineName1) throws Throwable 
	{
		expwait("(//*[@class='btn btn-danger btn-xs'])[1]");
		driver.findElement(By.xpath("(//*[@class='btn btn-danger btn-xs'])[1]")).click();
		expwait("(//*[text()='Are you sure?'])[1]");
		driver.findElement(By.xpath("(//*[text()='Confirm'])[1]")).click();
		logger.info("User successfully deleted created Medication List");
	}

	@Then("^create again new Medication Lists \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_again_new_Medication_Lists(String MedicineName, String GenericName, String MedicineType) throws Throwable
	{
		normalWait(1000);
		expwait("//a[@class='btn btn-success']");
		driver.findElement(By.xpath("//a[@class='btn btn-success']")).click();
		expwait("//b[contains(text(),'Add Medication List for ')]");
		driver.findElement(By.xpath("//input[@id='my_practice_medication_list_0_name']")).sendKeys(MedicineName);
		driver.findElement(By.xpath("//input[@id='my_practice_medication_list_0_contents']")).sendKeys(GenericName);
		driver.findElement(By.xpath("//*[@id='select2-my_practice_medication_list_0_med_type-container']")).click();
		expwait("//*[@type='search']/..//input");
		driver.findElement(By.xpath("//*[@type='search']/..//input")).sendKeys(MedicineType);
		driver.findElement(By.xpath("//li[text()='Lotion']")).click();
		logger.info("User entered Medicine Type as:" + MedicineType);
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		logger.info("User successfully created one Medication List");
	}

	@Then("^validate created Medication List should display Patient Eye Template \"([^\"]*)\"$")
	public void validate_created_Medication_List_should_display_Patient_Eye_Template(String MedicineName) throws Throwable 
	{
		clickElementByXpath("(//*[@id='opd_navigation'])[2]");
		addpd =new AddPatientDetails(driver);
		addpd.clickAdd_btn();
		logger.info("click on Add button");
		addpd.click_Add_New_Patient_btn();
		addpd.fillFirstName("Biswajit");
		addpd.fillMobNo("9861929608");
		logger.info("User entered mandatory fields such as First name and Mob no"); 
		addpd.clickappointmentbtn();	
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
		expwait("//a[@href='#medication']");
		driver.findElement(By.xpath("//input[@id='opdrecord_treatmentmedication_attributes_0_medicinename']")).sendKeys(MedicineName);		
		List<WebElement> advice =driver.findElements(By.xpath("//ul[@id='select2-advice_sets_option-results']"));
		for(int i=0;i<advice.size();i++)
		{
			String advicelist=advice.get(i).getText();
			if(advicelist.contains(MedicineName))
			{
				logger.info("Medication Lists searched data is displaying in auto suggestion text box");
				advice.get(i).click();
				normalWait(1000);
				String visiblecomment=driver.findElement(By.xpath("//*[@id='advice-set-content-summernote']")).getText();
				if(visiblecomment.contains(MedicineName))
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

	//                                In Patient Procedure Note                                  //

	@Then("^click on In Patient Procedure Note and validate each tab$")
	public void click_on_In_Patient_Procedure_Note_and_validate_each_tab() throws Throwable 
	{
		driver.findElement(By.xpath("//a[@href='#manage_procedure_notes']")).click();
		logger.info("User click on In Patient Procedure Note tab");
		expwait("//a[@href='/procedure_notes/new?level=user']");
		Assert.assertEquals(driver.findElement(By.xpath("//a[@href='/procedure_notes/new?level=user']")).isDisplayed(), true);
		logger.info("User verifies the presence of 'Add Procedure Note' button");
	}

	@When("^create Procedure Note \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_Procedure_Note(String ProcedureName1, String ProcedureNote1) throws Throwable 
	{
		driver.findElement(By.xpath("//a[@href='/procedure_notes/new?level=user']")).click();
		logger.info("User clicked on Add Procedure Note button");
		normalWait(1000);
        expwait("//*[@id='procedure_note_name']");
        driver.findElement(By.xpath("//*[@id='procedure_note_name']")).sendKeys(ProcedureName1);
		//////////////speciality
        driver.findElement(By.xpath("//*[@id='procedure_note_specialty_id']")).click();
        expwait("//*[@id='procedure_note_specialty_id']/..//option[2]");
        driver.findElement(By.xpath("//*[@id='procedure_note_specialty_id']/..//option[2]")).click();
        logger.info("User selected Opthalmology Speciality");
		driver.findElement(By.xpath("//*[@class='note-editable panel-body']")).sendKeys(ProcedureNote1);
		normalWait(500);
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		logger.info("User successfully created a new Procedure Note");
		expwait("(//*[@aria-controls='procedure-note-list'])[2]");
		
	}

	@Then("^verify created Procedure Note name should display in Procedure Notes \"([^\"]*)\"$")
	public void verify_created_Procedure_Note_name_should_display_in_Procedure_Notes(String ProcedureName1) throws Throwable 
	{
		//expwait("//a[@href='/procedure_notes/new?level=user']");
		driver.findElement(By.xpath("(//*[@aria-controls='procedure-note-list'])[2]")).sendKeys(ProcedureName1);
		expwait("((//tbody/tr[1])[3]/td)[1]");
		normalWait(1000);
		String searchresult=driver.findElement(By.xpath("((//tbody/tr[1])[3]/td)[1]")).getText(); //--------------------------------------------------//
		if(searchresult.equals(ProcedureName1))
		{
			logger.info("Created Procedure Note is showing in Search Result");
		}else
		{
			logger.info("Created Procedure Note is not showing in Search Result");
		}

	}

	@When("^user deleted that Procedure Note name its should not display under template \"([^\"]*)\"$")
	public void user_deleted_that_Procedure_Note_name_its_should_not_display_under_template(String arg1) throws Throwable 
	{
		expwait("(//*[@class='btn btn-danger btn-xs'])[1]");
		driver.findElement(By.xpath("(//*[@class='btn btn-danger btn-xs'])[1]")).click();//Stale element error
		expwait("(//*[text()='Are you sure?'])[1]");
		driver.findElement(By.xpath("(//*[text()='Confirm'])[1]")).click();
		logger.info("User successfully deleted created Medication List");
	}

	@Then("^create again new Procedure Note \"([^\"]*)\" \"([^\"]*)\"$")
	public void create_again_new_Procedure_Note(String ProcedureName, String ProcedureNote) throws Throwable 
	{
		//driver.findElement(By.xpath("//a[@href='/procedure_notes/new?level=user']")).click();
		clickElementByXpath("//a[@href='/procedure_notes/new?level=user']");
		normalWait(1000);
		driver.findElement(By.xpath("//input[@id='procedure_note_name']")).sendKeys(ProcedureName);
		driver.findElement(By.xpath("//*[@class='note-editable panel-body']")).sendKeys(ProcedureNote);
		driver.findElement(By.xpath("//*[@id='procedure_note_specialty_id']")).click();
		normalWait(1000);
		driver.findElement(By.xpath("//*[text()='Ophthalmology']")).click();
		normalWait(1000);
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		expwait("//*[@aria-controls='procedure-note-list']");
		logger.info("User successfully created a new Procedure Note");
	}

	@Then("^go to IPD and create an Appointment with mandatory fields$")
	public void go_to_IPD_and_create_an_Appointment_with_mandatory_fields() throws Throwable
	{
		driver.findElement(By.xpath("(//a[@id='ipd_navigation'])[2]")).click();
		addpd =new AddPatientDetails(driver);
		addpd.clickAdd_btn();
		logger.info("click on Add button");
		addpd.click_Add_New_Patient_btn();
		addpd.fillFirstName("Biswajit");
		addpd.fillMobNo("9861929608");
		normalWait(1000);
		driver.findElement(By.xpath("(//*[@name='admission[admission_type]']/..//label)[2]")).click();//select emergency 
		driver.findElement(By.xpath("//button[text()='Select Case']")).click();
		driver.findElement(By.xpath("(//*[@class='select2-selection select2-selection--single'])[6]")).click();//select case
		expwait("(//*[text()='Add New Case'])[2]");
		driver.findElement(By.xpath("(//*[text()='Add New Case'])[2]")).click();
		driver.findElement(By.xpath("//input[@value='Create Admission']")).click();
		driver.findElement(By.xpath("//button[text()='Close']")).click(); // close Assign Be pop up
		logger.info("User successfully created one Appointment"); 
			

	}

	@Then("^fill Admission Form and create new Oprative form$")
	public void fill_Admission_Form_and_create_new_Oprative_form() throws Throwable 
	{
        expwait("//a[text()=' Admission']");
        driver.findElement(By.xpath("//a[text()=' Admission']")).click();
        logger.info("User opened Admission Form ");
        normalWait(500);
        expwait("(//input[@value='Save'])[2]");
        clickElementByXpath("(//input[@value='Save'])[2]");
        logger.info("User saved Admission Form");
        expwait("//*[text()='Clinical Note']");//wait for clinical note 
        //driver.findElement(By.xpath("//button[text()='Close']")).click(); //close clinical note
        clickElementByXpath("(//button[text()='Close'])[2]");
        expwait("(//button[@id='operative_form'])[2]");
        driver.findElement(By.xpath("(//button[@id='operative_form'])[2]")).click();
        logger.info("User click on Operative Form");// click on Operative
        expwait("//a[@id='operative-note-btn']");
        driver.findElement(By.xpath("//a[@id='operative-note-btn']")).click();
        expwait("//*[text()='Operative Form']");//wait for opening operative form
        driver.findElement(By.xpath("//li[text()=' Surgical Note']")).click();
        
        //click on surgical note
       
                      
	}

	@Then("^validate created Medication List should display in Surgical Note tab under Operative Form \"([^\"]*)\"$")
	public void validate_created_Medication_List_should_display_in_Surgical_Note_tab_under_Operative_Form(String ProcedureName) throws Throwable 
	{
		 expwait("//input[@placeholder='Search Surgical Notes (Ex: phac)']");
	     driver.findElement(By.xpath("//input[@placeholder='Search Surgical Notes (Ex: phac)']")).sendKeys(ProcedureName);
	     logger.info("User is searching created Medication List in Surgical Note Search field");
	   
	     List<WebElement> advice =driver.findElements(By.xpath("//*[@class='list-group-item-heading clearfix']"));
			for(int i=0;i<advice.size();i++)
			{
				String advicelist=advice.get(i).getText();
				if(advicelist.contains(ProcedureName))
				{
					logger.info("Created Medication List showing in Surgical Search field");
					advice.get(i).click();
					normalWait(1000);
					String visiblecomment=driver.findElement(By.xpath("(//*[@class='note-editable panel-body'])[1]")).getText();
					if(visiblecomment.contains(ProcedureName))
					{
						logger.info("The data displaying in Surgical Note is same as user given text");
					}
					else
					{
						logger.info("The data displaying in Surgical Note is not same as user given text");
					}

				}
				else
				{
					logger.info("Created Medication List showing in Surgical Search field");
				}
			}
	}


}
