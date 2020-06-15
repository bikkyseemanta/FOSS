$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Add_Patient_For_OPD.feature");
formatter.feature({
  "line": 1,
  "name": "Create Appointment for OPD",
  "description": "",
  "id": "create-appointment-for-opd",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Validate_Other_Details_Tab"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "open the browser and enter the URL \"http://qaehr.healthgraph.in/users/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user fills \"\u003cuname\u003e\" and \"\u003cpswd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on Add New Patient button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "clicks on other details tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "validate blood gropup radio button should be single select",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Maritial status should be single select radio button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "fill emergency contact \"\u003cname\u003e\" \"\u003cnumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "validate special status",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;",
  "rows": [
    {
      "cells": [
        "uname",
        "pswd",
        "fname",
        "mobNo",
        "name",
        "number"
      ],
      "line": 51,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;1"
    },
    {
      "cells": [
        "hgdummyrec",
        "HGraph@2$2$",
        "Bikky",
        "4678907665",
        "Pallabi",
        "8987511234"
      ],
      "line": 52,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Validate_Other_Details_Tab"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "open the browser and enter the URL \"http://qaehr.healthgraph.in/users/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user fills \"hgdummyrec\" and \"HGraph@2$2$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on Add New Patient button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "clicks on other details tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "validate blood gropup radio button should be single select",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Maritial status should be single select radio button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "fill emergency contact \"Pallabi\" \"8987511234\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "validate special status",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaehr.healthgraph.in/users/login",
      "offset": 36
    }
  ],
  "location": "Steps.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 10175707400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hgdummyrec",
      "offset": 12
    },
    {
      "val": "HGraph@2$2$",
      "offset": 29
    }
  ],
  "location": "Steps.user_fills_and(String,String)"
});
formatter.result({
  "duration": 240564200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 1571419300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 9017800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 735080500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 722199500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bikky",
      "offset": 28
    },
    {
      "val": "4678907665",
      "offset": 36
    }
  ],
  "location": "Steps.user_fill_mandatory_fields(String,String)"
});
formatter.result({
  "duration": 408325900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_other_details_tab()"
});
formatter.result({
  "duration": 44304700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_blood_gropup_radio_button_should_be_single_select()"
});
formatter.result({
  "duration": 36563900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.maritial_status_should_be_single_select_radio_button()"
});
formatter.result({
  "duration": 66097500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pallabi",
      "offset": 24
    },
    {
      "val": "8987511234",
      "offset": 34
    }
  ],
  "location": "Steps.fill_emergency_contact(String,String)"
});
formatter.result({
  "duration": 373739900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_special_status()"
});
formatter.result({
  "duration": 41735100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_create_Appointment()"
});
formatter.result({
  "duration": 295721300,
  "status": "passed"
});
});