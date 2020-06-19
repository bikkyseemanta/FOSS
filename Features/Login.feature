Feature: Login

Scenario Outline: Successfully login with valid credentials
Given open the browser and enter the URL "http://qaehr.healthgraph.in/users/login"
Then user fills invalid "<username>" and "<password>"
And clicks on Login 
Then validation error message should display on UI
Given open the browser and enter the URL "http://qaehr.healthgraph.in/users/login"
When user fills "<uname>" and "<pswd>"
And clicks on Login 
Then user can view dashboard

Examples:
|username|password|uname     |pswd       |
|Test    |Test1   |hgdummydoc|HGraph@2$2$|
