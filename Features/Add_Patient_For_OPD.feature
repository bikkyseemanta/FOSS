Feature: Create Appointment for OPD 

@CreatePatientWithMandatoryFields
Scenario Outline: Create Appointment for OPD by adding mandatory fields
Given open the browser and enter the URL "http://qaehr.healthgraph.in/users/login"
When user fills "<uname>" and "<pswd>"
And clicks on Login 
Then user can view dashboard
And click on Add button
Then click on Add New Patient button
When user without filling mandatory field and click on Appointment button
Then validate warning message should display 
When user fill mandatory fields "<fname>" "<mobNo>"
Then user can create Appointment

Examples:
|uname     |pswd        |fname    |mobNo     | 
|hgdummyrec| HGraph@2$2$|Bikky    |4678907665| 

@CreatePatientWithAllFieldsValues
Scenario Outline: Create Appointment for OPD by adding all fields values
Given open the browser and enter the URL "http://qaehr.healthgraph.in/users/login"
When user fills "<uname>" and "<pswd>"
And clicks on Login 
Then user can view dashboard
And click on Add button
Then click on Add New Patient button
Then fill patient details  "<firstname1>" "<mobno1>" "<middlename>" "<lastname>" "<secondaryno>" "<email>" "<language>" "<secondarylanguage>" "<pincode>" "<Add1>" "<Add2>" "<MedicalRepoNo>" "<Aadhaar>" "<PANno>" "<DLno>" "<Ref>"
Then user can create Appointment

Examples:
|uname     |pswd       | firstname1      |mobno1     |middlename | lastname | secondaryno |      email              | language | secondarylanguage | pincode | Add1  | Add2      | MedicalRepoNo | Aadhaar   | PANno    | DLno     |Ref|DoctorReferal  | DrName          |DRMobNo     |DrEmail     |DRSpecialist       |Drlocation|Drcity   |DrState  |DrComments|staffreferal|relative|relativename|relativemobno|relativeemail |relation|comment|campaign |camp|InstitutionalReferral|Agent|Online|ThirdParty|self|EmergencyName|EmergencyContact|
|hgdummyrec| HGraph@2$2$| Selenium       |9861929608 | Automation     | Test | 7751996482 | bswjttripathy@gmail.com | Hindi    | English           | 5600  | keruna| chatrapada| MRN1        |30965893118|ANMPT2557J|        OR68310567|Self| Doctor Referal|Automation Test|88008248940|bki@gmail.com  |Medicine Specilist |Marathalli|Bangalore|Karnataka|Test      |staffreferal|Relative|Test1       |5773437887   |Test@gmail.com| Tester |Test   |campaign| camp|InstitutionalReferral|Agent|Online|ThirdParty|self|AutTest      |AutoTest   |

@Validate_Other_Details_Tab
Scenario Outline: Create Appointment for OPD by adding mandatory fields
Given open the browser and enter the URL "http://qaehr.healthgraph.in/users/login"
When user fills "<uname>" and "<pswd>"
And clicks on Login 
Then user can view dashboard
And click on Add button
Then click on Add New Patient button
When user fill mandatory fields "<fname>" "<mobNo>"
And clicks on other details tab
And validate blood gropup radio button should be single select
And Maritial status should be single select radio button
And fill emergency contact "<name>" "<number>"
And validate special status
Then user can create Appointment
Examples:
|uname     |pswd        |fname    |mobNo     | name   | number |
|hgdummyrec| HGraph@2$2$|Bikky    |4678907665| Pallabi|8987511234|