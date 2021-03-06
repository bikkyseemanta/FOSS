package commonMethod;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import pageObjects.AddPatientDetails;
import pageObjects.LoginPage;

public class Common_Methods {

	public static WebDriver driver=null;
	public static int count = 0;
	public static WebElement element;
	public static Logger logger;
	public Properties configProp;
	public LoginPage lp=null;
	public static WebDriverWait wait;
	public AddPatientDetails addpd;

	public static String randomstring() {
		String generatedString1 = RandomStringUtils.randomAlphabetic(10);
		return generatedString1;
	}

	public static void captureScreen(WebDriver driver, String tname) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		File target = new File(System.getProperty("user.dir") + "/Screenshots/" + tname + ".png");
		FileUtils.copyFile(source, target);
		System.out.println("Screenshot taken");
	}


	public static void browser_and_url_open() throws Throwable 
	{
		System.setProperty(readProperty("browserkey"),
				readProperty("chromebrowser"));
		//Reporter.addStepLog("Browser Opening");
		driver = new ChromeDriver();
		//driver = new FirefoxDriver();

		driver.manage().window().maximize();
		//driver.manage().deleteAllCookies();
		driver.get(readProperty("url"));
		//Reporter.addStepLog("Opening the url [ "+readProperty("url")+ " ]");
	}


	public static String readProperty(String key) throws Exception
	{
		FileReader reader=new FileReader("C:\\Users\\lenovo\\eclipse-workspace\\com.HG\\config.properties");  

		Properties p=new Properties();  
		p.load(reader);  

		String value = p.getProperty(key);
		return value;
	}

	public static  void clickElementByElement(WebElement element1)
	{
		JavascriptExecutor js=(JavascriptExecutor)driver;    
		js.executeScript("arguments[0].click();", element1); 
	}

	public static void normalWait(long seconds) throws Exception
	{
		Thread.sleep(seconds);
	}


	public static void Wait(WebDriver driver) {
		wait = new WebDriverWait(driver, 30);
	}

	public static void waitForTextToBePresentInElement(WebElement element, String text){
		wait.until(ExpectedConditions.textToBePresentInElement(element, text));

	}

	public static void waitForElementToBeClickable(WebElement element) {
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}

	public static void waitForElementToBeInvisible(WebElement element) {
		wait.until(ExpectedConditions.invisibilityOf(element));
	}

	public static void waitForElementToBeVisible(WebElement element) {
		wait.until(ExpectedConditions.visibilityOf(element));
	}


	public static void implicitlyWait(long time)
	{
		driver.manage().timeouts().implicitlyWait(time, TimeUnit.MILLISECONDS);
	}

	public static void expwait(String Xpath)
	{
		WebDriverWait wait = new WebDriverWait(driver, 50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Xpath)));
	}


	public static void waitTillClick(String Xpath)
	{
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath(Xpath)));
	}

	public static void waitTime()
	{
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}


	public static void pressEnter()
	{
		Actions action = new Actions(driver);
		action.sendKeys(Keys.ENTER).build().perform();
	}

	public static void maximizeWindow()
	{
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}


	public static void selectValue(WebElement element, String value)
	{
		element.sendKeys(value);
	}

	public static void scrolloperation(long index)
	{
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("window.scrollBy(0,"+index+")");
	}



	public static void clickElementByXpath(String Xpath)
	{
		JavascriptExecutor js=(JavascriptExecutor)driver;    
		js.executeScript("arguments[0].click();", driver.findElement(By.xpath(Xpath))); 
	}

	public static void normalclick(String Xpath)
	{
		driver.findElement(By.xpath(Xpath)).click();
	}

	public static void scrollviewoperation(WebElement element)
	{
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].scrollIntoView(true);", element);
	}
	public static void scrollviewmultioperation(String xpath)
	{
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].scrollIntoView(true);", driver.findElement(By.xpath(xpath)));
	}

	public static void dropdown(String text, WebElement element)
	{
		Select se = new Select(element);
		se.selectByVisibleText(text);
	}

	public static void moveToElement(WebElement wb)
	{
		Actions act = new Actions(driver);
		act.moveToElement(wb).perform();
	}

	public static void windowHandle(String windowid)
	{
		driver.switchTo().window(windowid);
	}

	public static void frameHandle(int index)
	{
		driver.switchTo().frame(index);
	}

	public static String TodayDate()
	{
		Date date = new Date();  
		SimpleDateFormat formatter = new SimpleDateFormat("MM-dd-yyyy");  
		String strDate= formatter.format(date); 
		return strDate;
	}

	public static Date yesterday() 
	{
		final Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -1);
		return cal.getTime();
	}

	public static Date defaultEndDate(int number)
	{
		final Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, +number);
		return cal.getTime();
	}

	public static String YesterdayDate()
	{
		DateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy");
		return dateFormat.format(yesterday());
	}

	public static void ExtentReport()
	{
		ExtentHtmlReporter reporter = new ExtentHtmlReporter("./Reports/plm.html");
		ExtentReports extent = new ExtentReports();
		extent.attachReporter(reporter);
	}

	public static void selectStartDate(String startdate) throws Exception
	{
		expwait("(//span[@class='mat-button-wrapper'])[1]");
		driver.findElement(By.xpath("(//span[@class='mat-button-wrapper'])[1]")).click();
		while(count>=0)
		{
			try{
				driver.findElement(By.xpath("//td[@aria-label='"+startdate+"']")).click();
				break;
			}catch(Exception e) {
				normalWait(1000);
				driver.findElement(By.xpath("//button[@aria-label='Next month']")).click();
				count++;
			}}
		normalWait(1000);
	}

	public static void selectEndDate(String enddate) throws Exception
	{
		driver.findElement(By.xpath("(//span[@class='mat-button-wrapper'])[2]")).click();
		while(count>=0)
		{
			try{
				driver.findElement(By.xpath("//td[@aria-label='"+enddate+"']")).click();
				break;
			}catch(Exception e) {
				normalWait(1000);
				driver.findElement(By.xpath("//button[@aria-label='Next month']")).click();
				count++;
			}}
		normalWait(1000);
	}



}
