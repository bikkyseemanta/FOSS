$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Add_Patient_For_OPD.feature");
formatter.feature({
  "line": 1,
  "name": "Create Appointment for OPD",
  "description": "",
  "id": "create-appointment-for-opd",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@CreatePatientWithMandatoryFields"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Modal must have below mentioned tabs",
  "rows": [
    {
      "cells": [
        "Patient Details"
      ],
      "line": 15
    },
    {
      "cells": [
        "Other Details"
      ],
      "line": 16
    },
    {
      "cells": [
        "History"
      ],
      "line": 17
    },
    {
      "cells": [
        "Allergies"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user without filling mandatory field and click on Appointment button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validate warning message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "validate the size and text of the name drop down values",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "validate the size and text of laungage drop down values",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "validate the size and text of the patient type drop down values",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;",
  "rows": [
    {
      "cells": [
        "fname",
        "mobNo"
      ],
      "line": 28,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;1"
    },
    {
      "cells": [
        "Bikky",
        "4678907665"
      ],
      "line": 29,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2"
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
  "name": "user fills \"hgdummyrec\" and \"HGraph@2$2$\"",
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
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Add New Patient button",
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
  "duration": 43476545400,
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
  "duration": 289437500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 7026113400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 12916000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 870473200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 1691583900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@CreatePatientWithMandatoryFields"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Modal must have below mentioned tabs",
  "rows": [
    {
      "cells": [
        "Patient Details"
      ],
      "line": 15
    },
    {
      "cells": [
        "Other Details"
      ],
      "line": 16
    },
    {
      "cells": [
        "History"
      ],
      "line": 17
    },
    {
      "cells": [
        "Allergies"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user without filling mandatory field and click on Appointment button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validate warning message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "validate the size and text of the name drop down values",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "validate the size and text of laungage drop down values",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "validate the size and text of the patient type drop down values",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.modal_must_have_below_mentioned_tabs(DataTable)"
});
formatter.result({
  "duration": 104632000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_without_filling_mandatory_field_and_click_on_Appointment_button()"
});
formatter.result({
  "duration": 246332600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_warning_message_should_display()"
});
formatter.result({
  "duration": 51711400,
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
  "duration": 306914800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_the_size_and_text_of_the_name_drop_down_values()"
});
formatter.result({
  "duration": 340732700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_the_size_and_text_of_laungage_drop_down_values()"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_the_size_and_text_of_the_patient_type_drop_down_values()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_create_Appointment()"
});
formatter.result({
  "duration": 145970200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Create Appointment for OPD by adding all fields values",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-all-fields-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@CreatePatientWithAllFieldsValues"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "fill patient details  \"\u003cfirstname1\u003e\" \"\u003cmobno1\u003e\" \"\u003cmiddlename\u003e\" \"\u003clastname\u003e\" \"\u003csecondaryno\u003e\" \"\u003cemail\u003e\" \"\u003clanguage\u003e\" \"\u003csecondarylanguage\u003e\" \"\u003cpincode\u003e\" \"\u003cAdd1\u003e\" \"\u003cAdd2\u003e\" \"\u003cMedicalRepoNo\u003e\" \"\u003cAadhaar\u003e\" \"\u003cPANno\u003e\" \"\u003cDLno\u003e\" \"\u003cRef\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-all-fields-values;",
  "rows": [
    {
      "cells": [
        "uname",
        "pswd",
        "firstname1",
        "mobno1",
        "middlename",
        "lastname",
        "secondaryno",
        "email",
        "language",
        "secondarylanguage",
        "pincode",
        "Add1",
        "Add2",
        "MedicalRepoNo",
        "Aadhaar",
        "PANno",
        "DLno",
        "Ref",
        "DoctorReferal",
        "DrName",
        "DRMobNo",
        "DrEmail",
        "DRSpecialist",
        "Drlocation",
        "Drcity",
        "DrState",
        "DrComments",
        "staffreferal",
        "relative",
        "relativename",
        "relativemobno",
        "relativeemail",
        "relation",
        "comment",
        "campaign",
        "camp",
        "InstitutionalReferral",
        "Agent",
        "Online",
        "ThirdParty",
        "self",
        "EmergencyName",
        "EmergencyContact"
      ],
      "line": 38,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-all-fields-values;;1"
    },
    {
      "cells": [
        "hgdummyrec",
        "HGraph@2$2$",
        "Vicky",
        "9861929608",
        "Kumar",
        "Tripathy",
        "7751996482",
        "bswjttripathy@gmail.com",
        "Hindi",
        "English",
        "5600",
        "keruna",
        "chatrapada",
        "MRN1",
        "30965893118",
        "ANMPT2557J",
        "OR68310567",
        "Self",
        "Doctor Referal",
        "Automation Test",
        "88008248940",
        "bki@gmail.com",
        "Medicine Specilist",
        "Marathalli",
        "Bangalore",
        "Karnataka",
        "Test",
        "staffreferal",
        "Relative",
        "Test1",
        "5773437887",
        "Test@gmail.com",
        "Tester",
        "Test",
        "campaign",
        "camp",
        "InstitutionalReferral",
        "Agent",
        "Online",
        "ThirdParty",
        "self",
        "AutTest",
        "AutoTest"
      ],
      "line": 39,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-all-fields-values;;2"
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
  "name": "user fills \"hgdummyrec\" and \"HGraph@2$2$\"",
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
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Add New Patient button",
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
  "duration": 16806782400,
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
  "duration": 226155400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 6149841400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 28870700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 766725700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 1006270400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Create Appointment for OPD by adding all fields values",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-all-fields-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@CreatePatientWithAllFieldsValues"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "fill patient details  \"Vicky\" \"9861929608\" \"Kumar\" \"Tripathy\" \"7751996482\" \"bswjttripathy@gmail.com\" \"Hindi\" \"English\" \"5600\" \"keruna\" \"chatrapada\" \"MRN1\" \"30965893118\" \"ANMPT2557J\" \"OR68310567\" \"Self\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vicky",
      "offset": 23
    },
    {
      "val": "9861929608",
      "offset": 31
    },
    {
      "val": "Kumar",
      "offset": 44
    },
    {
      "val": "Tripathy",
      "offset": 52
    },
    {
      "val": "7751996482",
      "offset": 63
    },
    {
      "val": "bswjttripathy@gmail.com",
      "offset": 76
    },
    {
      "val": "Hindi",
      "offset": 102
    },
    {
      "val": "English",
      "offset": 110
    },
    {
      "val": "5600",
      "offset": 120
    },
    {
      "val": "keruna",
      "offset": 127
    },
    {
      "val": "chatrapada",
      "offset": 136
    },
    {
      "val": "MRN1",
      "offset": 149
    },
    {
      "val": "30965893118",
      "offset": 156
    },
    {
      "val": "ANMPT2557J",
      "offset": 170
    },
    {
      "val": "OR68310567",
      "offset": 183
    },
    {
      "val": "Self",
      "offset": 196
    }
  ],
  "location": "Steps.fill_patient_details(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6401199000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_create_Appointment()"
});
formatter.result({
  "duration": 208591300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Validate_Other_Details_Tab"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "clicks on other details tab",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "validate blood gropup radio button should be single select",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Maritial status should be single select radio button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "fill emergency contact \"\u003cname\u003e\" \"\u003cnumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "validate special status",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;",
  "rows": [
    {
      "cells": [
        "fname",
        "mobNo",
        "name",
        "number"
      ],
      "line": 52,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;1"
    },
    {
      "cells": [
        "Biswajit",
        "1234567890",
        "Pallabi",
        "8987511234"
      ],
      "line": 53,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2"
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
  "name": "user fills \"hgdummyrec\" and \"HGraph@2$2$\"",
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
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Add New Patient button",
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
  "duration": 74628709800,
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
  "duration": 228796600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 12071054500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 25918600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 740256400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 3840070600,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Validate_Other_Details_Tab"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user fill mandatory fields \"Biswajit\" \"1234567890\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "clicks on other details tab",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "validate blood gropup radio button should be single select",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Maritial status should be single select radio button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "fill emergency contact \"Pallabi\" \"8987511234\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "validate special status",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Biswajit",
      "offset": 28
    },
    {
      "val": "1234567890",
      "offset": 39
    }
  ],
  "location": "Steps.user_fill_mandatory_fields(String,String)"
});
formatter.result({
  "duration": 371751400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_other_details_tab()"
});
formatter.result({
  "duration": 43822600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_blood_gropup_radio_button_should_be_single_select()"
});
formatter.result({
  "duration": 45624800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.maritial_status_should_be_single_select_radio_button()"
});
formatter.result({
  "duration": 57846000,
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
  "duration": 451391000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_special_status()"
});
formatter.result({
  "duration": 31863500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_create_Appointment()"
});
formatter.result({
  "duration": 233603400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Create Appointment for OPD by adding History fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@Validate_History_Tab"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "clicks on history tab",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Opthalmic History have below tabs",
  "rows": [
    {
      "cells": [
        "Glaucoma"
      ],
      "line": 62
    },
    {
      "cells": [
        "Retinal Detachment"
      ],
      "line": 63
    },
    {
      "cells": [
        "Glass"
      ],
      "line": 64
    },
    {
      "cells": [
        "Eye Disease"
      ],
      "line": 65
    },
    {
      "cells": [
        "Eye Surgery"
      ],
      "line": 66
    },
    {
      "cells": [
        "Uveitis"
      ],
      "line": 67
    },
    {
      "cells": [
        "Retinal laser"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "add comments inside Opthalmic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Systemic History have below tabs",
  "rows": [
    {
      "cells": [
        "Diabetes"
      ],
      "line": 71
    },
    {
      "cells": [
        "Hypertension"
      ],
      "line": 72
    },
    {
      "cells": [
        "Alcoholism"
      ],
      "line": 73
    },
    {
      "cells": [
        "Smoking Tobacco"
      ],
      "line": 74
    },
    {
      "cells": [
        "Cardiac Disorder"
      ],
      "line": 75
    },
    {
      "cells": [
        "Steroid Intake"
      ],
      "line": 76
    },
    {
      "cells": [
        "Drug Abuse"
      ],
      "line": 77
    },
    {
      "cells": [
        "Hiv Aids"
      ],
      "line": 78
    },
    {
      "cells": [
        "Cancer Tumor"
      ],
      "line": 79
    },
    {
      "cells": [
        "Tuberculosis"
      ],
      "line": 80
    },
    {
      "cells": [
        "Asthma"
      ],
      "line": 81
    },
    {
      "cells": [
        "Cns Disorder Stroke"
      ],
      "line": 82
    },
    {
      "cells": [
        "Hypothyroidism"
      ],
      "line": 83
    },
    {
      "cells": [
        "Hyperthyroidism"
      ],
      "line": 84
    },
    {
      "cells": [
        "Hepatitis Cirrhosis"
      ],
      "line": 85
    },
    {
      "cells": [
        "Renal Disorder"
      ],
      "line": 86
    },
    {
      "cells": [
        "Acidity"
      ],
      "line": 87
    },
    {
      "cells": [
        "On insulin"
      ],
      "line": 88
    },
    {
      "cells": [
        "On Aspirin Blood Thinners"
      ],
      "line": 89
    },
    {
      "cells": [
        "Consanguinity"
      ],
      "line": 90
    },
    {
      "cells": [
        "Thyroid Disorder"
      ],
      "line": 91
    },
    {
      "cells": [
        "Chewing Tobacco"
      ],
      "line": 92
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "add comments inside Systemic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "add Medical History",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "add Family history",
  "keyword": "Then "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;",
  "rows": [
    {
      "cells": [
        "fname",
        "mobNo",
        "name",
        "number"
      ],
      "line": 97,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;;1"
    },
    {
      "cells": [
        "Bikky",
        "4678907665",
        "Pallabi",
        "8987511234"
      ],
      "line": 98,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;;2"
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
  "name": "user fills \"hgdummyrec\" and \"HGraph@2$2$\"",
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
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Add New Patient button",
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
  "duration": 18583694400,
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
  "duration": 283214400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 6773221500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 14454600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 5477471600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 1265667100,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Create Appointment for OPD by adding History fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@Validate_History_Tab"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "clicks on history tab",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Opthalmic History have below tabs",
  "rows": [
    {
      "cells": [
        "Glaucoma"
      ],
      "line": 62
    },
    {
      "cells": [
        "Retinal Detachment"
      ],
      "line": 63
    },
    {
      "cells": [
        "Glass"
      ],
      "line": 64
    },
    {
      "cells": [
        "Eye Disease"
      ],
      "line": 65
    },
    {
      "cells": [
        "Eye Surgery"
      ],
      "line": 66
    },
    {
      "cells": [
        "Uveitis"
      ],
      "line": 67
    },
    {
      "cells": [
        "Retinal laser"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "add comments inside Opthalmic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Systemic History have below tabs",
  "rows": [
    {
      "cells": [
        "Diabetes"
      ],
      "line": 71
    },
    {
      "cells": [
        "Hypertension"
      ],
      "line": 72
    },
    {
      "cells": [
        "Alcoholism"
      ],
      "line": 73
    },
    {
      "cells": [
        "Smoking Tobacco"
      ],
      "line": 74
    },
    {
      "cells": [
        "Cardiac Disorder"
      ],
      "line": 75
    },
    {
      "cells": [
        "Steroid Intake"
      ],
      "line": 76
    },
    {
      "cells": [
        "Drug Abuse"
      ],
      "line": 77
    },
    {
      "cells": [
        "Hiv Aids"
      ],
      "line": 78
    },
    {
      "cells": [
        "Cancer Tumor"
      ],
      "line": 79
    },
    {
      "cells": [
        "Tuberculosis"
      ],
      "line": 80
    },
    {
      "cells": [
        "Asthma"
      ],
      "line": 81
    },
    {
      "cells": [
        "Cns Disorder Stroke"
      ],
      "line": 82
    },
    {
      "cells": [
        "Hypothyroidism"
      ],
      "line": 83
    },
    {
      "cells": [
        "Hyperthyroidism"
      ],
      "line": 84
    },
    {
      "cells": [
        "Hepatitis Cirrhosis"
      ],
      "line": 85
    },
    {
      "cells": [
        "Renal Disorder"
      ],
      "line": 86
    },
    {
      "cells": [
        "Acidity"
      ],
      "line": 87
    },
    {
      "cells": [
        "On insulin"
      ],
      "line": 88
    },
    {
      "cells": [
        "On Aspirin Blood Thinners"
      ],
      "line": 89
    },
    {
      "cells": [
        "Consanguinity"
      ],
      "line": 90
    },
    {
      "cells": [
        "Thyroid Disorder"
      ],
      "line": 91
    },
    {
      "cells": [
        "Chewing Tobacco"
      ],
      "line": 92
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "add comments inside Systemic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "add Medical History",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "add Family history",
  "keyword": "Then "
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
  "duration": 343244600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_history_tab()"
});
formatter.result({
  "duration": 39898000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.opthalmic_History_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 150199100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_comments_inside_Opthalmic_Hitory()"
});
formatter.result({
  "duration": 319937300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.systemic_History_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 522007600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_comments_inside_Systemic_Hitory()"
});
formatter.result({
  "duration": 324672700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_Medical_History()"
});
formatter.result({
  "duration": 311370200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.family_history()"
});
formatter.result({
  "duration": 274501700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 102,
  "name": "Create Appointment for OPD by adding Allergies fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-allergies-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@Validate_Allergies_Tab"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "clicks on allergies tab",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Drug Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Antimicrobial Agents"
      ],
      "line": 107
    },
    {
      "cells": [
        "Antifungal Agents"
      ],
      "line": 108
    },
    {
      "cells": [
        "Antiviral Agents"
      ],
      "line": 109
    },
    {
      "cells": [
        "Nsaids"
      ],
      "line": 110
    },
    {
      "cells": [
        "Eye Drops"
      ],
      "line": 111
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "user clicks on Antimicrobial Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Antimicrobial agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ampicillin"
      ],
      "line": 114
    },
    {
      "cells": [
        "Amoxicillin"
      ],
      "line": 115
    },
    {
      "cells": [
        "Ceftriaxone"
      ],
      "line": 116
    },
    {
      "cells": [
        "Ciprofloxacin"
      ],
      "line": 117
    },
    {
      "cells": [
        "Clarithromycin"
      ],
      "line": 118
    },
    {
      "cells": [
        "Co Trimoxazole"
      ],
      "line": 119
    },
    {
      "cells": [
        "Ethambutol"
      ],
      "line": 120
    },
    {
      "cells": [
        "Isoniazid"
      ],
      "line": 121
    },
    {
      "cells": [
        "Metronidazole"
      ],
      "line": 122
    },
    {
      "cells": [
        "Penicillin"
      ],
      "line": 123
    },
    {
      "cells": [
        "Rifampicin"
      ],
      "line": 124
    },
    {
      "cells": [
        "Streptomycin"
      ],
      "line": 125
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "user clicks on Antifungal Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "Antifungal agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ketoconazole"
      ],
      "line": 128
    },
    {
      "cells": [
        "Fluconazole"
      ],
      "line": 129
    },
    {
      "cells": [
        "Itraconazole"
      ],
      "line": 130
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "user clicks on Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "Antiviral agents have below tabs",
  "rows": [
    {
      "cells": [
        "Acyclovir"
      ],
      "line": 133
    },
    {
      "cells": [
        "Efavirenz"
      ],
      "line": 134
    },
    {
      "cells": [
        "Enfuvirtide"
      ],
      "line": 135
    },
    {
      "cells": [
        "Nelfinavir"
      ],
      "line": 136
    },
    {
      "cells": [
        "Nevirapine"
      ],
      "line": 137
    },
    {
      "cells": [
        "Zidovudine"
      ],
      "line": 138
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "user clicks on Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "Nsaids have below tabs",
  "rows": [
    {
      "cells": [
        "Aspirin"
      ],
      "line": 141
    },
    {
      "cells": [
        "Paracetamol"
      ],
      "line": 142
    },
    {
      "cells": [
        "Ibuprofen"
      ],
      "line": 143
    },
    {
      "cells": [
        "Diclofenac"
      ],
      "line": 144
    },
    {
      "cells": [
        "Aceclofenac"
      ],
      "line": 145
    },
    {
      "cells": [
        "Naproxen"
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "user clicks on EyeDrops",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "EyeDrops have below tabs",
  "rows": [
    {
      "cells": [
        "Tropicamide_P"
      ],
      "line": 149
    },
    {
      "cells": [
        "Tropicamide"
      ],
      "line": 150
    },
    {
      "cells": [
        "Timolol"
      ],
      "line": 151
    },
    {
      "cells": [
        "Homide"
      ],
      "line": 152
    },
    {
      "cells": [
        "Latanoprost"
      ],
      "line": 153
    },
    {
      "cells": [
        "Brimonidine"
      ],
      "line": 154
    },
    {
      "cells": [
        "Travoprost"
      ],
      "line": 155
    },
    {
      "cells": [
        "Tobramycin"
      ],
      "line": 156
    },
    {
      "cells": [
        "Moxifloxacin"
      ],
      "line": 157
    },
    {
      "cells": [
        "Homatropine"
      ],
      "line": 158
    },
    {
      "cells": [
        "Pilocarpine"
      ],
      "line": 159
    },
    {
      "cells": [
        "Cyclopentolate"
      ],
      "line": 160
    },
    {
      "cells": [
        "Atropine"
      ],
      "line": 161
    },
    {
      "cells": [
        "Phenylephrine"
      ],
      "line": 162
    },
    {
      "cells": [
        "Tropicacyl"
      ],
      "line": 163
    },
    {
      "cells": [
        "Paracain"
      ],
      "line": 164
    },
    {
      "cells": [
        "Ciplox"
      ],
      "line": 165
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "Contact Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Alcohol"
      ],
      "line": 167
    },
    {
      "cells": [
        "Latex"
      ],
      "line": 168
    },
    {
      "cells": [
        "Betadine"
      ],
      "line": 169
    },
    {
      "cells": [
        "Adhesive Tape"
      ],
      "line": 170
    },
    {
      "cells": [
        "Tegaderm"
      ],
      "line": 171
    },
    {
      "cells": [
        "Transpore"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "Food Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "All Seafood"
      ],
      "line": 174
    },
    {
      "cells": [
        "Corn"
      ],
      "line": 175
    },
    {
      "cells": [
        "Egg"
      ],
      "line": 176
    },
    {
      "cells": [
        "Milk Proteins"
      ],
      "line": 177
    },
    {
      "cells": [
        "Peanuts"
      ],
      "line": 178
    },
    {
      "cells": [
        "Shellfish Only"
      ],
      "line": 179
    },
    {
      "cells": [
        "Soy Protein"
      ],
      "line": 180
    },
    {
      "cells": [
        "Lactose"
      ],
      "line": 181
    },
    {
      "cells": [
        "Mushroom"
      ],
      "line": 182
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "validate each tabs of Antimicrobial agents",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "each Antimicrobial agents name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 186,
  "name": "select Duration for each Antimicrobial agents",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "select Duration Units for each Antimicrobial agents",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "fill comments for each Antimicrobial agents",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "validate each tabs of Antifungal agents",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "each Antifungal agents name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "select Duration for each Antifungal agents",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "select Duration Units for each Antifungal agents",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "fill comments for each Antifungal agents",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "validate each tabs of Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "each Antiviral Agents name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "select Duration for each Antiviral Agents",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "select Duration Units for each Antiviral Agents",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "fill comments for each Antiviral Agents",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "validate each tabs of Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "each Nsaids name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "select Duration for each Nsaids",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "select Duration Units for each Nsaids",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "fill comments for each Nsaids",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "validate each tabs of Eye Drops",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "each Eye Drops name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "select Duration for each Eye Drops",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "select Duration Units for each Eye Drops",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "fill comments for each Eye Drops",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "validate each tabs of Contact Allergies",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 210,
      "value": "#Then each Contact Allergies name should be display"
    },
    {
      "line": 211,
      "value": "#And select Duration for each Contact Allergies"
    },
    {
      "line": 212,
      "value": "#And select Duration Units for each Contact Allergies"
    },
    {
      "line": 213,
      "value": "#And fill comments for each Contact Allergies"
    },
    {
      "line": 214,
      "value": "#Then validate each tabs of Food Allergies"
    },
    {
      "line": 215,
      "value": "#Then each Food Allergies name should be display"
    },
    {
      "line": 216,
      "value": "#And select Duration for each Food Allergies"
    },
    {
      "line": 217,
      "value": "#And select Duration Units for each Food Allergies"
    },
    {
      "line": 218,
      "value": "#And fill comments for each Food Allergies"
    }
  ],
  "line": 220,
  "name": "",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-allergies-fields;",
  "rows": [
    {
      "cells": [
        "fname",
        "mobNo"
      ],
      "line": 221,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-allergies-fields;;1"
    },
    {
      "cells": [
        "Bikky",
        "4678907665"
      ],
      "line": 222,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-allergies-fields;;2"
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
  "name": "user fills \"hgdummyrec\" and \"HGraph@2$2$\"",
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
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Add New Patient button",
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
  "duration": 32339236700,
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
  "duration": 241566800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 7645069500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 29564200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 762585100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 2589191900,
  "status": "passed"
});
formatter.scenario({
  "line": 222,
  "name": "Create Appointment for OPD by adding Allergies fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-allergies-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@Validate_Allergies_Tab"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "clicks on allergies tab",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Drug Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Antimicrobial Agents"
      ],
      "line": 107
    },
    {
      "cells": [
        "Antifungal Agents"
      ],
      "line": 108
    },
    {
      "cells": [
        "Antiviral Agents"
      ],
      "line": 109
    },
    {
      "cells": [
        "Nsaids"
      ],
      "line": 110
    },
    {
      "cells": [
        "Eye Drops"
      ],
      "line": 111
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "user clicks on Antimicrobial Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Antimicrobial agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ampicillin"
      ],
      "line": 114
    },
    {
      "cells": [
        "Amoxicillin"
      ],
      "line": 115
    },
    {
      "cells": [
        "Ceftriaxone"
      ],
      "line": 116
    },
    {
      "cells": [
        "Ciprofloxacin"
      ],
      "line": 117
    },
    {
      "cells": [
        "Clarithromycin"
      ],
      "line": 118
    },
    {
      "cells": [
        "Co Trimoxazole"
      ],
      "line": 119
    },
    {
      "cells": [
        "Ethambutol"
      ],
      "line": 120
    },
    {
      "cells": [
        "Isoniazid"
      ],
      "line": 121
    },
    {
      "cells": [
        "Metronidazole"
      ],
      "line": 122
    },
    {
      "cells": [
        "Penicillin"
      ],
      "line": 123
    },
    {
      "cells": [
        "Rifampicin"
      ],
      "line": 124
    },
    {
      "cells": [
        "Streptomycin"
      ],
      "line": 125
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "user clicks on Antifungal Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "Antifungal agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ketoconazole"
      ],
      "line": 128
    },
    {
      "cells": [
        "Fluconazole"
      ],
      "line": 129
    },
    {
      "cells": [
        "Itraconazole"
      ],
      "line": 130
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "user clicks on Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "Antiviral agents have below tabs",
  "rows": [
    {
      "cells": [
        "Acyclovir"
      ],
      "line": 133
    },
    {
      "cells": [
        "Efavirenz"
      ],
      "line": 134
    },
    {
      "cells": [
        "Enfuvirtide"
      ],
      "line": 135
    },
    {
      "cells": [
        "Nelfinavir"
      ],
      "line": 136
    },
    {
      "cells": [
        "Nevirapine"
      ],
      "line": 137
    },
    {
      "cells": [
        "Zidovudine"
      ],
      "line": 138
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "user clicks on Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "Nsaids have below tabs",
  "rows": [
    {
      "cells": [
        "Aspirin"
      ],
      "line": 141
    },
    {
      "cells": [
        "Paracetamol"
      ],
      "line": 142
    },
    {
      "cells": [
        "Ibuprofen"
      ],
      "line": 143
    },
    {
      "cells": [
        "Diclofenac"
      ],
      "line": 144
    },
    {
      "cells": [
        "Aceclofenac"
      ],
      "line": 145
    },
    {
      "cells": [
        "Naproxen"
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "user clicks on EyeDrops",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "EyeDrops have below tabs",
  "rows": [
    {
      "cells": [
        "Tropicamide_P"
      ],
      "line": 149
    },
    {
      "cells": [
        "Tropicamide"
      ],
      "line": 150
    },
    {
      "cells": [
        "Timolol"
      ],
      "line": 151
    },
    {
      "cells": [
        "Homide"
      ],
      "line": 152
    },
    {
      "cells": [
        "Latanoprost"
      ],
      "line": 153
    },
    {
      "cells": [
        "Brimonidine"
      ],
      "line": 154
    },
    {
      "cells": [
        "Travoprost"
      ],
      "line": 155
    },
    {
      "cells": [
        "Tobramycin"
      ],
      "line": 156
    },
    {
      "cells": [
        "Moxifloxacin"
      ],
      "line": 157
    },
    {
      "cells": [
        "Homatropine"
      ],
      "line": 158
    },
    {
      "cells": [
        "Pilocarpine"
      ],
      "line": 159
    },
    {
      "cells": [
        "Cyclopentolate"
      ],
      "line": 160
    },
    {
      "cells": [
        "Atropine"
      ],
      "line": 161
    },
    {
      "cells": [
        "Phenylephrine"
      ],
      "line": 162
    },
    {
      "cells": [
        "Tropicacyl"
      ],
      "line": 163
    },
    {
      "cells": [
        "Paracain"
      ],
      "line": 164
    },
    {
      "cells": [
        "Ciplox"
      ],
      "line": 165
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "Contact Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Alcohol"
      ],
      "line": 167
    },
    {
      "cells": [
        "Latex"
      ],
      "line": 168
    },
    {
      "cells": [
        "Betadine"
      ],
      "line": 169
    },
    {
      "cells": [
        "Adhesive Tape"
      ],
      "line": 170
    },
    {
      "cells": [
        "Tegaderm"
      ],
      "line": 171
    },
    {
      "cells": [
        "Transpore"
      ],
      "line": 172
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "Food Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "All Seafood"
      ],
      "line": 174
    },
    {
      "cells": [
        "Corn"
      ],
      "line": 175
    },
    {
      "cells": [
        "Egg"
      ],
      "line": 176
    },
    {
      "cells": [
        "Milk Proteins"
      ],
      "line": 177
    },
    {
      "cells": [
        "Peanuts"
      ],
      "line": 178
    },
    {
      "cells": [
        "Shellfish Only"
      ],
      "line": 179
    },
    {
      "cells": [
        "Soy Protein"
      ],
      "line": 180
    },
    {
      "cells": [
        "Lactose"
      ],
      "line": 181
    },
    {
      "cells": [
        "Mushroom"
      ],
      "line": 182
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "validate each tabs of Antimicrobial agents",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "each Antimicrobial agents name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 186,
  "name": "select Duration for each Antimicrobial agents",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "select Duration Units for each Antimicrobial agents",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "fill comments for each Antimicrobial agents",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "validate each tabs of Antifungal agents",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "each Antifungal agents name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "select Duration for each Antifungal agents",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "select Duration Units for each Antifungal agents",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "fill comments for each Antifungal agents",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "validate each tabs of Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "each Antiviral Agents name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "select Duration for each Antiviral Agents",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "select Duration Units for each Antiviral Agents",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "fill comments for each Antiviral Agents",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "validate each tabs of Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "each Nsaids name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "select Duration for each Nsaids",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "select Duration Units for each Nsaids",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "fill comments for each Nsaids",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "validate each tabs of Eye Drops",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "each Eye Drops name should be display",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "select Duration for each Eye Drops",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "select Duration Units for each Eye Drops",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "fill comments for each Eye Drops",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "validate each tabs of Contact Allergies",
  "keyword": "Then "
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
  "duration": 350160100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_allergies_tab()"
});
formatter.result({
  "duration": 53619500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.drug_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 131657600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antimicrobial_Agents()"
});
formatter.result({
  "duration": 131778900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antimicrobial_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 317072300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antifungal_Agents()"
});
formatter.result({
  "duration": 128494000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antifungal_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 143350000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antiviral_Agents()"
});
formatter.result({
  "duration": 129525600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antiviral_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 163410000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Nsaids()"
});
formatter.result({
  "duration": 133366600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.nsaids_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 172616100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_EyeDrops()"
});
formatter.result({
  "duration": 140138300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.eyedrops_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 426399500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.contact_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 177369100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.food_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 219223600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_fields_of_Antimicrobial_agents()"
});
formatter.result({
  "duration": 1323095300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Antimicrobial_agents_name_should_be_display()"
});
formatter.result({
  "duration": 315164300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_duration_for_Antimicrobial_agents()"
});
formatter.result({
  "duration": 6391176700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Antimicrobial_agents()"
});
formatter.result({
  "duration": 5585799600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Antimicrobial_agents()"
});
formatter.result({
  "duration": 6466048200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Antifungal_agents()"
});
formatter.result({
  "duration": 263897200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Antifungal_agents_name_should_be_display()"
});
formatter.result({
  "duration": 99639600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Antifungal_agents()"
});
formatter.result({
  "duration": 1914938100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Antifungal_agents()"
});
formatter.result({
  "duration": 1804766800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Antifungal_agents()"
});
formatter.result({
  "duration": 1523612500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Antiviral_Agents()"
});
formatter.result({
  "duration": 513125300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Antiviral_Agents_name_should_be_display()"
});
formatter.result({
  "duration": 106923800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Antiviral_Agents()"
});
formatter.result({
  "duration": 4899441400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Antiviral_Agents()"
});
formatter.result({
  "duration": 4648466100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Antiviral_Agents()"
});
formatter.result({
  "duration": 3290062400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Nsaids()"
});
formatter.result({
  "duration": 534253400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Nsaids_name_should_be_display()"
});
formatter.result({
  "duration": 110674100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Nsaids()"
});
formatter.result({
  "duration": 6243784200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Nsaids()"
});
formatter.result({
  "duration": 5744181700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Nsaids()"
});
formatter.result({
  "duration": 3301896600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Eye_Drops()"
});
formatter.result({
  "duration": 1649218100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Eye_Drops_name_should_be_display()"
});
formatter.result({
  "duration": 291621100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Eye_Drops()"
});
formatter.result({
  "duration": 26412911400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Eye_Drops()"
});
formatter.result({
  "duration": 26366391600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Eye_Drops()"
});
formatter.result({
  "duration": 16223876100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Contact_Allergies()"
});
formatter.result({
  "duration": 568105700,
  "status": "passed"
});
});