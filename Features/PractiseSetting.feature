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