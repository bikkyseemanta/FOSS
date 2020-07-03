Feature: Practise Setting under User Setting 
Background:
Given open the browser and enter the URL "http://qaehr.healthgraph.in/users/login"
When user fills "hgdummydoc" and "HGraph@2$2$"
And clicks on Login 
Then user can view dashboard
Then click on Setting button and go to Practise Setting

@VerifyDefaultViewFunctionality
Scenario Outline: Default View Functionality
Then clicks on Default view and validate the functionality

Examples:
|uname     |pswd       |
|hgdummydoc|HGraph@2$2$|

@VerifyAdviceSet
Scenario Outline: Advice Set Functionality under Clinical
And clicks on Clinical from the left panel menu 
Then click on Advice Sets and validate functionality"<name>" 
Then navigate to OPD and create one Appointment
When mark patient as Arrived go to Eye Template"<name>"

Examples:
|uname     |pswd       | name          |
|hgdummydoc|HGraph@2$2$|Test Automation|

@VerifyUserNotes_MedicalTemplate
Scenario Outline: User Note Functionality under Clinical
And clicks on Clinical from the left panel menu 
Then click on User Note and validate the New Template
And create Medical Certificate Template "<name>" "<Heading>" "<Subject>" "<Content>"
Then verify created Medical certificate should display in Template "<name>"
#When user deleted that template its should not display under template "<name>"
Then create again new Medical Certificate Template "<newname>" "<Heading1>" "<Subject1>" "<Content1>"
Then validate created Medical Certificate template should display Patient Summary page "<newname>"

Examples:
|name            |Heading            | Subject         | Content         | newname                      |Heading1           | Subject1        | Content1        |
|First Med Cert2 |  Med Cert Heading1|Med Cert Subject1|Med Cert Content1|Biswajit Medical Certificate  |Med Cert Heading   |Med Cert Subject |Med Cert Content |



@VerifyUserNotes_ReferalTemplate
Scenario Outline: User Note Functionality under Clinical
And clicks on Clinical from the left panel menu 
Then click on User Note and validate the New Template
And create Referal Message Template "<name>" "<Heading>" "<Subject>" "<Content>"
Then verify created Referal Message should display in Template "<name>"
#When user deleted that Referal Message its should not display under template "<name>"
Then create again new Referal Message Template "<newname>" "<Heading1>" "<Subject1>" "<Content1>"
Then validate created Referal Message template should display Patient Summary page "<newname>"

Examples:
|name            |Heading              | Subject         | Content         |newname                       |Heading1           | Subject1        | Content1        |
|First Ref Cert1 |Referal Cert Heading1|Ref Cert Subject1|Ref Cert Content1|Biswajit Referal Certificate  |Ref Cert Heading   |Ref Cert Subject |Ref Cert Content |


@VerifyMedicationLists
Scenario Outline: Medication Lists under Clinical
And clicks on Clinical from the left panel menu 
Then click on Medications Lists and validate each tab
When create Medication Lists "<MedicineName1>" "<GenericName1>" "<MedicineType1>"
Then verify created Medication Lists should display in Medication Lists "<MedicineName1>"
When user deleted that Medication List its should not display under template "<MedicineName1>"
Then create again new Medication Lists "<MedicineName>" "<GenericName>" "<MedicineType>"
Then validate created Medication List should display Patient Eye Template "<MedicineName>"

Examples:
|MedicineName1| GenericName1 | MedicineType1 |MedicineName |GenericName   | MedicineType |
|Azythromycin | Azios        | Tablets       | Relivia     |Pain Releif   | Lotion       |


@VerifyInPatientProcedureNotes
Scenario Outline: In Patient Procedure Notes under Clinical
And clicks on Clinical from the left panel menu 
Then click on In Patient Procedure Note and validate each tab
When create Procedure Note "<ProcedureName1>" "<ProcedureNote1>" 
Then verify created Procedure Note name should display in Procedure Notes "<ProcedureName1>"
#When user deleted that Procedure Note name its should not display under template "<ProcedureName1>"
Then create again new Procedure Note "<ProcedureName>" "<ProcedureNote>" 
And go to IPD and create an Appointment with mandatory fields
Then fill Admission Form and create new Oprative form
Then validate created Medication List should display in Surgical Note tab under Operative Form "<ProcedureName>"

Examples:
|ProcedureName1 | ProcedureNote1 | ProcedureName |ProcedureNote |
|Test Procedure | Test Note      | Biswajit Note | Biswajit Note|

