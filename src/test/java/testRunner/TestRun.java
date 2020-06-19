package testRunner;

import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = ".\\Features\\Add_Patient_For_OPD.feature",
		glue = {"PatientRegistration" }, 
		monochrome = true, 
		dryRun = false,
		strict = false,
		format =
	{"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
	tags = {"@Validate_History_Tab"},
	plugin= {"pretty","html:test-output"})

public class TestRun {

}
