$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Add_Patient_For_OPD.feature");
formatter.feature({
  "line": 1,
  "name": "Create Appointment for OPD",
  "description": "",
  "id": "create-appointment-for-opd",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Create Appointment for OPD by adding History fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Validate_History_Tab"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "clicks on history tab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Opthalmic History have below tabs",
  "rows": [
    {
      "cells": [
        "Glaucoma"
      ],
      "line": 54
    },
    {
      "cells": [
        "Retinal Detachment"
      ],
      "line": 55
    },
    {
      "cells": [
        "Glass"
      ],
      "line": 56
    },
    {
      "cells": [
        "Eye Disease"
      ],
      "line": 57
    },
    {
      "cells": [
        "Eye Surgery"
      ],
      "line": 58
    },
    {
      "cells": [
        "Uveitis"
      ],
      "line": 59
    },
    {
      "cells": [
        "Retinal laser"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "add comments inside Opthalmic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Systemic History have below tabs",
  "rows": [
    {
      "cells": [
        "Diabetes"
      ],
      "line": 63
    },
    {
      "cells": [
        "Hypertension"
      ],
      "line": 64
    },
    {
      "cells": [
        "Alcoholism"
      ],
      "line": 65
    },
    {
      "cells": [
        "Smoking Tobacco"
      ],
      "line": 66
    },
    {
      "cells": [
        "Cardiac Disorder"
      ],
      "line": 67
    },
    {
      "cells": [
        "Steroid Intake"
      ],
      "line": 68
    },
    {
      "cells": [
        "Drug Abuse"
      ],
      "line": 69
    },
    {
      "cells": [
        "Hiv Aids"
      ],
      "line": 70
    },
    {
      "cells": [
        "Cancer Tumor"
      ],
      "line": 71
    },
    {
      "cells": [
        "Tuberculosis"
      ],
      "line": 72
    },
    {
      "cells": [
        "Asthma"
      ],
      "line": 73
    },
    {
      "cells": [
        "Cns Disorder Stroke"
      ],
      "line": 74
    },
    {
      "cells": [
        "Hypothyroidism"
      ],
      "line": 75
    },
    {
      "cells": [
        "Hyperthyroidism"
      ],
      "line": 76
    },
    {
      "cells": [
        "Hepatitis Cirrhosis"
      ],
      "line": 77
    },
    {
      "cells": [
        "Renal Disorder"
      ],
      "line": 78
    },
    {
      "cells": [
        "Acidity"
      ],
      "line": 79
    },
    {
      "cells": [
        "On insulin"
      ],
      "line": 80
    },
    {
      "cells": [
        "On Aspirin Blood Thinners"
      ],
      "line": 81
    },
    {
      "cells": [
        "Consanguinity"
      ],
      "line": 82
    },
    {
      "cells": [
        "Thyroid Disorder"
      ],
      "line": 83
    },
    {
      "cells": [
        "Chewing Tobacco"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "add comments inside Systemic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "add Medical History",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "add Family history",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
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
      "line": 90,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;;1"
    },
    {
      "cells": [
        "Bikky",
        "4678907665",
        "Pallabi",
        "8987511234"
      ],
      "line": 91,
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
  "duration": 14599636600,
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
  "duration": 232594000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 5548103600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 33788300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 790188600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 988672500,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Create Appointment for OPD by adding History fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Validate_History_Tab"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "clicks on history tab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Opthalmic History have below tabs",
  "rows": [
    {
      "cells": [
        "Glaucoma"
      ],
      "line": 54
    },
    {
      "cells": [
        "Retinal Detachment"
      ],
      "line": 55
    },
    {
      "cells": [
        "Glass"
      ],
      "line": 56
    },
    {
      "cells": [
        "Eye Disease"
      ],
      "line": 57
    },
    {
      "cells": [
        "Eye Surgery"
      ],
      "line": 58
    },
    {
      "cells": [
        "Uveitis"
      ],
      "line": 59
    },
    {
      "cells": [
        "Retinal laser"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "add comments inside Opthalmic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Systemic History have below tabs",
  "rows": [
    {
      "cells": [
        "Diabetes"
      ],
      "line": 63
    },
    {
      "cells": [
        "Hypertension"
      ],
      "line": 64
    },
    {
      "cells": [
        "Alcoholism"
      ],
      "line": 65
    },
    {
      "cells": [
        "Smoking Tobacco"
      ],
      "line": 66
    },
    {
      "cells": [
        "Cardiac Disorder"
      ],
      "line": 67
    },
    {
      "cells": [
        "Steroid Intake"
      ],
      "line": 68
    },
    {
      "cells": [
        "Drug Abuse"
      ],
      "line": 69
    },
    {
      "cells": [
        "Hiv Aids"
      ],
      "line": 70
    },
    {
      "cells": [
        "Cancer Tumor"
      ],
      "line": 71
    },
    {
      "cells": [
        "Tuberculosis"
      ],
      "line": 72
    },
    {
      "cells": [
        "Asthma"
      ],
      "line": 73
    },
    {
      "cells": [
        "Cns Disorder Stroke"
      ],
      "line": 74
    },
    {
      "cells": [
        "Hypothyroidism"
      ],
      "line": 75
    },
    {
      "cells": [
        "Hyperthyroidism"
      ],
      "line": 76
    },
    {
      "cells": [
        "Hepatitis Cirrhosis"
      ],
      "line": 77
    },
    {
      "cells": [
        "Renal Disorder"
      ],
      "line": 78
    },
    {
      "cells": [
        "Acidity"
      ],
      "line": 79
    },
    {
      "cells": [
        "On insulin"
      ],
      "line": 80
    },
    {
      "cells": [
        "On Aspirin Blood Thinners"
      ],
      "line": 81
    },
    {
      "cells": [
        "Consanguinity"
      ],
      "line": 82
    },
    {
      "cells": [
        "Thyroid Disorder"
      ],
      "line": 83
    },
    {
      "cells": [
        "Chewing Tobacco"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "add comments inside Systemic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "add Medical History",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "add Family history",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user can create Appointment",
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
  "duration": 356443600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_history_tab()"
});
formatter.result({
  "duration": 43350300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.opthalmic_History_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 182464500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_comments_inside_Opthalmic_Hitory()"
});
formatter.result({
  "duration": 323173200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.systemic_History_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 481131000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_comments_inside_Systemic_Hitory()"
});
formatter.result({
  "duration": 383856600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_Medical_History()"
});
formatter.result({
  "duration": 315658600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.family_history()"
});
formatter.result({
  "duration": 280928500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_create_Appointment()"
});
formatter.result({
  "duration": 185417400,
  "status": "passed"
});
});