$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/PractiseSetting.feature");
formatter.feature({
  "line": 1,
  "name": "Practise Setting under User Setting",
  "description": "",
  "id": "practise-setting-under-user-setting",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Advice Set Functionality under Clinical",
  "description": "",
  "id": "practise-setting-under-user-setting;advice-set-functionality-under-clinical",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@VerifyAdviceSet"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "clicks on Clinical from the left panel menu",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Advice Sets and validate functionality\"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "navigate to OPD and create one Appointment",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "mark patient as Arrived go to Eye Template\"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "practise-setting-under-user-setting;advice-set-functionality-under-clinical;",
  "rows": [
    {
      "cells": [
        "uname",
        "pswd",
        "name"
      ],
      "line": 25,
      "id": "practise-setting-under-user-setting;advice-set-functionality-under-clinical;;1"
    },
    {
      "cells": [
        "hgdummydoc",
        "HGraph@2$2$",
        "Test Automation"
      ],
      "line": 26,
      "id": "practise-setting-under-user-setting;advice-set-functionality-under-clinical;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "open the browser and enter the URL \"http://qaehr.healthgraph.in/users/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user fills \"hgdummydoc\" and \"HGraph@2$2$\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on Setting button and go to Practise Setting",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaehr.healthgraph.in/users/login",
      "offset": 36
    }
  ],
  "location": "PatientDetails.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 11983779200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hgdummydoc",
      "offset": 12
    },
    {
      "val": "HGraph@2$2$",
      "offset": 29
    }
  ],
  "location": "PatientDetails.user_fills_and(String,String)"
});
formatter.result({
  "duration": 264259100,
  "status": "passed"
});
formatter.match({
  "location": "PatientDetails.clicks_on_Login()"
});
formatter.result({
  "duration": 5721526100,
  "status": "passed"
});
formatter.match({
  "location": "PatientDetails.user_can_view_dashboard()"
});
formatter.result({
  "duration": 35403800,
  "status": "passed"
});
formatter.match({
  "location": "Setting.click_on_Setting_button_and_go_to_Practise_Setting()"
});
formatter.result({
  "duration": 1931259700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Advice Set Functionality under Clinical",
  "description": "",
  "id": "practise-setting-under-user-setting;advice-set-functionality-under-clinical;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@VerifyAdviceSet"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "clicks on Clinical from the left panel menu",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Advice Sets and validate functionality\"Test Automation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "navigate to OPD and create one Appointment",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "mark patient as Arrived go to Eye Template\"Test Automation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Setting.clicks_on_Clinical_from_the_left_panel_menu()"
});
formatter.result({
  "duration": 295647000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Automation",
      "offset": 48
    }
  ],
  "location": "Setting.click_on_Advice_Sets_and_validate_functionality(String)"
});
formatter.result({
  "duration": 3474557200,
  "status": "passed"
});
formatter.match({
  "location": "Setting.navigate_to_OPD_and_create_one_Appointment()"
});
formatter.result({
  "duration": 2555564700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Automation",
      "offset": 43
    }
  ],
  "location": "Setting.mark_patient_as_Arrived_go_to_Eye_Template(String)"
});
formatter.result({
  "duration": 9932596700,
  "status": "passed"
});
});