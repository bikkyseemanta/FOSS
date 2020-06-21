$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Add_Patient_For_OPD.feature");
formatter.feature({
  "line": 1,
  "name": "Create Appointment for OPD",
  "description": "",
  "id": "create-appointment-for-opd",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Create Appointment for OPD by adding History fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@Validate_History_Tab"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "clicks on history tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Opthalmic History have below tabs",
  "rows": [
    {
      "cells": [
        "Glaucoma"
      ],
      "line": 56
    },
    {
      "cells": [
        "Retinal Detachment"
      ],
      "line": 57
    },
    {
      "cells": [
        "Glass"
      ],
      "line": 58
    },
    {
      "cells": [
        "Eye Disease"
      ],
      "line": 59
    },
    {
      "cells": [
        "Eye Surgery"
      ],
      "line": 60
    },
    {
      "cells": [
        "Uveitis"
      ],
      "line": 61
    },
    {
      "cells": [
        "Retinal laser"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "each Opthalmic History name should be clickable",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "select Left Duration for each Opthalmic tabs",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "select Left Duration Units for each Opthalmic tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "fill comments for each Opthalmic History Comment",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "add comments inside Opthalmic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Systemic History have below tabs",
  "rows": [
    {
      "cells": [
        "Diabetes"
      ],
      "line": 69
    },
    {
      "cells": [
        "Hypertension"
      ],
      "line": 70
    },
    {
      "cells": [
        "Alcoholism"
      ],
      "line": 71
    },
    {
      "cells": [
        "Smoking Tobacco"
      ],
      "line": 72
    },
    {
      "cells": [
        "Cardiac Disorder"
      ],
      "line": 73
    },
    {
      "cells": [
        "Steroid Intake"
      ],
      "line": 74
    },
    {
      "cells": [
        "Drug Abuse"
      ],
      "line": 75
    },
    {
      "cells": [
        "Hiv Aids"
      ],
      "line": 76
    },
    {
      "cells": [
        "Cancer Tumor"
      ],
      "line": 77
    },
    {
      "cells": [
        "Tuberculosis"
      ],
      "line": 78
    },
    {
      "cells": [
        "Asthma"
      ],
      "line": 79
    },
    {
      "cells": [
        "Cns Disorder Stroke"
      ],
      "line": 80
    },
    {
      "cells": [
        "Hypothyroidism"
      ],
      "line": 81
    },
    {
      "cells": [
        "Hyperthyroidism"
      ],
      "line": 82
    },
    {
      "cells": [
        "Hepatitis Cirrhosis"
      ],
      "line": 83
    },
    {
      "cells": [
        "Renal Disorder"
      ],
      "line": 84
    },
    {
      "cells": [
        "Acidity"
      ],
      "line": 85
    },
    {
      "cells": [
        "On insulin"
      ],
      "line": 86
    },
    {
      "cells": [
        "On Aspirin Blood Thinners"
      ],
      "line": 87
    },
    {
      "cells": [
        "Consanguinity"
      ],
      "line": 88
    },
    {
      "cells": [
        "Thyroid Disorder"
      ],
      "line": 89
    },
    {
      "cells": [
        "Chewing Tobacco"
      ],
      "line": 90
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "each Systemic History name should be clickable",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "select Duration for each Systemic tabs",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "select Duration Units for each Systemic tab",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "fill comments for each Systemic History Comment",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "add comments inside Systemic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "add Medical History",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "add Family history",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.examples({
  "line": 99,
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
      "line": 100,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;;1"
    },
    {
      "cells": [
        "Bikky",
        "4678907665",
        "Pallabi",
        "8987511234"
      ],
      "line": 101,
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
  "duration": 11938996600,
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
  "duration": 253204500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 6901000200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 7772600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 807728500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 753452400,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Create Appointment for OPD by adding History fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-history-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@Validate_History_Tab"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "clicks on history tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Opthalmic History have below tabs",
  "rows": [
    {
      "cells": [
        "Glaucoma"
      ],
      "line": 56
    },
    {
      "cells": [
        "Retinal Detachment"
      ],
      "line": 57
    },
    {
      "cells": [
        "Glass"
      ],
      "line": 58
    },
    {
      "cells": [
        "Eye Disease"
      ],
      "line": 59
    },
    {
      "cells": [
        "Eye Surgery"
      ],
      "line": 60
    },
    {
      "cells": [
        "Uveitis"
      ],
      "line": 61
    },
    {
      "cells": [
        "Retinal laser"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "each Opthalmic History name should be clickable",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "select Left Duration for each Opthalmic tabs",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "select Left Duration Units for each Opthalmic tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "fill comments for each Opthalmic History Comment",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "add comments inside Opthalmic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Systemic History have below tabs",
  "rows": [
    {
      "cells": [
        "Diabetes"
      ],
      "line": 69
    },
    {
      "cells": [
        "Hypertension"
      ],
      "line": 70
    },
    {
      "cells": [
        "Alcoholism"
      ],
      "line": 71
    },
    {
      "cells": [
        "Smoking Tobacco"
      ],
      "line": 72
    },
    {
      "cells": [
        "Cardiac Disorder"
      ],
      "line": 73
    },
    {
      "cells": [
        "Steroid Intake"
      ],
      "line": 74
    },
    {
      "cells": [
        "Drug Abuse"
      ],
      "line": 75
    },
    {
      "cells": [
        "Hiv Aids"
      ],
      "line": 76
    },
    {
      "cells": [
        "Cancer Tumor"
      ],
      "line": 77
    },
    {
      "cells": [
        "Tuberculosis"
      ],
      "line": 78
    },
    {
      "cells": [
        "Asthma"
      ],
      "line": 79
    },
    {
      "cells": [
        "Cns Disorder Stroke"
      ],
      "line": 80
    },
    {
      "cells": [
        "Hypothyroidism"
      ],
      "line": 81
    },
    {
      "cells": [
        "Hyperthyroidism"
      ],
      "line": 82
    },
    {
      "cells": [
        "Hepatitis Cirrhosis"
      ],
      "line": 83
    },
    {
      "cells": [
        "Renal Disorder"
      ],
      "line": 84
    },
    {
      "cells": [
        "Acidity"
      ],
      "line": 85
    },
    {
      "cells": [
        "On insulin"
      ],
      "line": 86
    },
    {
      "cells": [
        "On Aspirin Blood Thinners"
      ],
      "line": 87
    },
    {
      "cells": [
        "Consanguinity"
      ],
      "line": 88
    },
    {
      "cells": [
        "Thyroid Disorder"
      ],
      "line": 89
    },
    {
      "cells": [
        "Chewing Tobacco"
      ],
      "line": 90
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "each Systemic History name should be clickable",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "select Duration for each Systemic tabs",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "select Duration Units for each Systemic tab",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "fill comments for each Systemic History Comment",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "add comments inside Systemic Hitory",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "add Medical History",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "add Family history",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
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
  "duration": 362707100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_history_tab()"
});
formatter.result({
  "duration": 32257100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.opthalmic_History_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 176756300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Opthalmic_History_name_should_be_clickable()"
});
formatter.result({
  "duration": 564690800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Left_Duration_for_each_Opthalmic_tabs()"
});
formatter.result({
  "duration": 21158800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Left_Duration_Units_for_each_Opthalmic_tab()"
});
formatter.result({
  "duration": 30314800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Opthalmic_History_Comment()"
});
formatter.result({
  "duration": 4431084700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_comments_inside_Opthalmic_Hitory()"
});
formatter.result({
  "duration": 618727900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.systemic_History_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 539792100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Systemic_History_name_should_be_clickable()"
});
formatter.result({
  "duration": 2065261600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Systemic_tabs()"
});
formatter.result({
  "duration": 25121404700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Systemic_tab()"
});
formatter.result({
  "duration": 24458988000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Systemic_History_Comment()"
});
formatter.result({
  "duration": 24996073000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_comments_inside_Systemic_Hitory()"
});
formatter.result({
  "duration": 1215998600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.add_Medical_History()"
});
formatter.result({
  "duration": 1206701600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.family_history()"
});
formatter.result({
  "duration": 1144623300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_create_Appointment()"
});
formatter.result({
  "duration": 261457800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 104,
  "name": "Create Appointment for OPD by adding Allergies fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-allergies-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@Validate_Allergies_Tab"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "clicks on allergies tab",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Drug Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Antimicrobial Agents"
      ],
      "line": 108
    },
    {
      "cells": [
        "Antifungal Agents"
      ],
      "line": 109
    },
    {
      "cells": [
        "Antiviral Agents"
      ],
      "line": 110
    },
    {
      "cells": [
        "Nsaids"
      ],
      "line": 111
    },
    {
      "cells": [
        "Eye Drops"
      ],
      "line": 112
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "user clicks on Antimicrobial Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "Antimicrobial agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ampicillin"
      ],
      "line": 115
    },
    {
      "cells": [
        "Amoxicillin"
      ],
      "line": 116
    },
    {
      "cells": [
        "Ceftriaxone"
      ],
      "line": 117
    },
    {
      "cells": [
        "Ciprofloxacin"
      ],
      "line": 118
    },
    {
      "cells": [
        "Clarithromycin"
      ],
      "line": 119
    },
    {
      "cells": [
        "Co Trimoxazole"
      ],
      "line": 120
    },
    {
      "cells": [
        "Ethambutol"
      ],
      "line": 121
    },
    {
      "cells": [
        "Isoniazid"
      ],
      "line": 122
    },
    {
      "cells": [
        "Metronidazole"
      ],
      "line": 123
    },
    {
      "cells": [
        "Penicillin"
      ],
      "line": 124
    },
    {
      "cells": [
        "Rifampicin"
      ],
      "line": 125
    },
    {
      "cells": [
        "Streptomycin"
      ],
      "line": 126
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "user clicks on Antifungal Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Antifungal agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ketoconazole"
      ],
      "line": 129
    },
    {
      "cells": [
        "Fluconazole"
      ],
      "line": 130
    },
    {
      "cells": [
        "Itraconazole"
      ],
      "line": 131
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "user clicks on Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "Antiviral agents have below tabs",
  "rows": [
    {
      "cells": [
        "Acyclovir"
      ],
      "line": 134
    },
    {
      "cells": [
        "Efavirenz"
      ],
      "line": 135
    },
    {
      "cells": [
        "Enfuvirtide"
      ],
      "line": 136
    },
    {
      "cells": [
        "Nelfinavir"
      ],
      "line": 137
    },
    {
      "cells": [
        "Nevirapine"
      ],
      "line": 138
    },
    {
      "cells": [
        "Zidovudine"
      ],
      "line": 139
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "user clicks on Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "Nsaids have below tabs",
  "rows": [
    {
      "cells": [
        "Aspirin"
      ],
      "line": 142
    },
    {
      "cells": [
        "Paracetamol"
      ],
      "line": 143
    },
    {
      "cells": [
        "Ibuprofen"
      ],
      "line": 144
    },
    {
      "cells": [
        "Diclofenac"
      ],
      "line": 145
    },
    {
      "cells": [
        "Aceclofenac"
      ],
      "line": 146
    },
    {
      "cells": [
        "Naproxen"
      ],
      "line": 147
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "user clicks on EyeDrops",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "EyeDrops have below tabs",
  "rows": [
    {
      "cells": [
        "Tropicamide_P"
      ],
      "line": 150
    },
    {
      "cells": [
        "Tropicamide"
      ],
      "line": 151
    },
    {
      "cells": [
        "Timolol"
      ],
      "line": 152
    },
    {
      "cells": [
        "Homide"
      ],
      "line": 153
    },
    {
      "cells": [
        "Latanoprost"
      ],
      "line": 154
    },
    {
      "cells": [
        "Brimonidine"
      ],
      "line": 155
    },
    {
      "cells": [
        "Travoprost"
      ],
      "line": 156
    },
    {
      "cells": [
        "Tobramycin"
      ],
      "line": 157
    },
    {
      "cells": [
        "Moxifloxacin"
      ],
      "line": 158
    },
    {
      "cells": [
        "Homatropine"
      ],
      "line": 159
    },
    {
      "cells": [
        "Pilocarpine"
      ],
      "line": 160
    },
    {
      "cells": [
        "Cyclopentolate"
      ],
      "line": 161
    },
    {
      "cells": [
        "Atropine"
      ],
      "line": 162
    },
    {
      "cells": [
        "Phenylephrine"
      ],
      "line": 163
    },
    {
      "cells": [
        "Tropicacyl"
      ],
      "line": 164
    },
    {
      "cells": [
        "Paracain"
      ],
      "line": 165
    },
    {
      "cells": [
        "Ciplox"
      ],
      "line": 166
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Contact Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Alcohol"
      ],
      "line": 168
    },
    {
      "cells": [
        "Latex"
      ],
      "line": 169
    },
    {
      "cells": [
        "Betadine"
      ],
      "line": 170
    },
    {
      "cells": [
        "Adhesive Tape"
      ],
      "line": 171
    },
    {
      "cells": [
        "Tegaderm"
      ],
      "line": 172
    },
    {
      "cells": [
        "Transpore"
      ],
      "line": 173
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "Food Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "All Seafood"
      ],
      "line": 175
    },
    {
      "cells": [
        "Corn"
      ],
      "line": 176
    },
    {
      "cells": [
        "Egg"
      ],
      "line": 177
    },
    {
      "cells": [
        "Milk Proteins"
      ],
      "line": 178
    },
    {
      "cells": [
        "Peanuts"
      ],
      "line": 179
    },
    {
      "cells": [
        "Shellfish Only"
      ],
      "line": 180
    },
    {
      "cells": [
        "Soy Protein"
      ],
      "line": 181
    },
    {
      "cells": [
        "Lactose"
      ],
      "line": 182
    },
    {
      "cells": [
        "Mushroom"
      ],
      "line": 183
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
formatter.step({
  "line": 210,
  "name": "each Contact Allergies name should be display",
  "keyword": "Then "
});
formatter.step({
  "comments": [
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
    }
  ],
  "line": 215,
  "name": "each Food Allergies name should be display",
  "keyword": "Then "
});
formatter.step({
  "comments": [
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
  "line": 219,
  "name": "user can create Appointment",
  "keyword": "Then "
});
formatter.examples({
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
  "duration": 14376436200,
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
  "duration": 257007200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 5473595800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 21610700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 836707600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 2324194500,
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
      "line": 103,
      "name": "@Validate_Allergies_Tab"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "clicks on allergies tab",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Drug Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Antimicrobial Agents"
      ],
      "line": 108
    },
    {
      "cells": [
        "Antifungal Agents"
      ],
      "line": 109
    },
    {
      "cells": [
        "Antiviral Agents"
      ],
      "line": 110
    },
    {
      "cells": [
        "Nsaids"
      ],
      "line": 111
    },
    {
      "cells": [
        "Eye Drops"
      ],
      "line": 112
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "user clicks on Antimicrobial Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "Antimicrobial agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ampicillin"
      ],
      "line": 115
    },
    {
      "cells": [
        "Amoxicillin"
      ],
      "line": 116
    },
    {
      "cells": [
        "Ceftriaxone"
      ],
      "line": 117
    },
    {
      "cells": [
        "Ciprofloxacin"
      ],
      "line": 118
    },
    {
      "cells": [
        "Clarithromycin"
      ],
      "line": 119
    },
    {
      "cells": [
        "Co Trimoxazole"
      ],
      "line": 120
    },
    {
      "cells": [
        "Ethambutol"
      ],
      "line": 121
    },
    {
      "cells": [
        "Isoniazid"
      ],
      "line": 122
    },
    {
      "cells": [
        "Metronidazole"
      ],
      "line": 123
    },
    {
      "cells": [
        "Penicillin"
      ],
      "line": 124
    },
    {
      "cells": [
        "Rifampicin"
      ],
      "line": 125
    },
    {
      "cells": [
        "Streptomycin"
      ],
      "line": 126
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "user clicks on Antifungal Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Antifungal agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ketoconazole"
      ],
      "line": 129
    },
    {
      "cells": [
        "Fluconazole"
      ],
      "line": 130
    },
    {
      "cells": [
        "Itraconazole"
      ],
      "line": 131
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "user clicks on Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "Antiviral agents have below tabs",
  "rows": [
    {
      "cells": [
        "Acyclovir"
      ],
      "line": 134
    },
    {
      "cells": [
        "Efavirenz"
      ],
      "line": 135
    },
    {
      "cells": [
        "Enfuvirtide"
      ],
      "line": 136
    },
    {
      "cells": [
        "Nelfinavir"
      ],
      "line": 137
    },
    {
      "cells": [
        "Nevirapine"
      ],
      "line": 138
    },
    {
      "cells": [
        "Zidovudine"
      ],
      "line": 139
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "user clicks on Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "Nsaids have below tabs",
  "rows": [
    {
      "cells": [
        "Aspirin"
      ],
      "line": 142
    },
    {
      "cells": [
        "Paracetamol"
      ],
      "line": 143
    },
    {
      "cells": [
        "Ibuprofen"
      ],
      "line": 144
    },
    {
      "cells": [
        "Diclofenac"
      ],
      "line": 145
    },
    {
      "cells": [
        "Aceclofenac"
      ],
      "line": 146
    },
    {
      "cells": [
        "Naproxen"
      ],
      "line": 147
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "user clicks on EyeDrops",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "EyeDrops have below tabs",
  "rows": [
    {
      "cells": [
        "Tropicamide_P"
      ],
      "line": 150
    },
    {
      "cells": [
        "Tropicamide"
      ],
      "line": 151
    },
    {
      "cells": [
        "Timolol"
      ],
      "line": 152
    },
    {
      "cells": [
        "Homide"
      ],
      "line": 153
    },
    {
      "cells": [
        "Latanoprost"
      ],
      "line": 154
    },
    {
      "cells": [
        "Brimonidine"
      ],
      "line": 155
    },
    {
      "cells": [
        "Travoprost"
      ],
      "line": 156
    },
    {
      "cells": [
        "Tobramycin"
      ],
      "line": 157
    },
    {
      "cells": [
        "Moxifloxacin"
      ],
      "line": 158
    },
    {
      "cells": [
        "Homatropine"
      ],
      "line": 159
    },
    {
      "cells": [
        "Pilocarpine"
      ],
      "line": 160
    },
    {
      "cells": [
        "Cyclopentolate"
      ],
      "line": 161
    },
    {
      "cells": [
        "Atropine"
      ],
      "line": 162
    },
    {
      "cells": [
        "Phenylephrine"
      ],
      "line": 163
    },
    {
      "cells": [
        "Tropicacyl"
      ],
      "line": 164
    },
    {
      "cells": [
        "Paracain"
      ],
      "line": 165
    },
    {
      "cells": [
        "Ciplox"
      ],
      "line": 166
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Contact Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Alcohol"
      ],
      "line": 168
    },
    {
      "cells": [
        "Latex"
      ],
      "line": 169
    },
    {
      "cells": [
        "Betadine"
      ],
      "line": 170
    },
    {
      "cells": [
        "Adhesive Tape"
      ],
      "line": 171
    },
    {
      "cells": [
        "Tegaderm"
      ],
      "line": 172
    },
    {
      "cells": [
        "Transpore"
      ],
      "line": 173
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "Food Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "All Seafood"
      ],
      "line": 175
    },
    {
      "cells": [
        "Corn"
      ],
      "line": 176
    },
    {
      "cells": [
        "Egg"
      ],
      "line": 177
    },
    {
      "cells": [
        "Milk Proteins"
      ],
      "line": 178
    },
    {
      "cells": [
        "Peanuts"
      ],
      "line": 179
    },
    {
      "cells": [
        "Shellfish Only"
      ],
      "line": 180
    },
    {
      "cells": [
        "Soy Protein"
      ],
      "line": 181
    },
    {
      "cells": [
        "Lactose"
      ],
      "line": 182
    },
    {
      "cells": [
        "Mushroom"
      ],
      "line": 183
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
formatter.step({
  "line": 210,
  "name": "each Contact Allergies name should be display",
  "keyword": "Then "
});
formatter.step({
  "comments": [
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
    }
  ],
  "line": 215,
  "name": "each Food Allergies name should be display",
  "keyword": "Then "
});
formatter.step({
  "comments": [
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
  "line": 219,
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
  "duration": 319539100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_allergies_tab()"
});
formatter.result({
  "duration": 58055000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.drug_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 125599800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antimicrobial_Agents()"
});
formatter.result({
  "duration": 135168200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antimicrobial_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 309270600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antifungal_Agents()"
});
formatter.result({
  "duration": 141500200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antifungal_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 119415200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antiviral_Agents()"
});
formatter.result({
  "duration": 135722300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antiviral_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 173488200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Nsaids()"
});
formatter.result({
  "duration": 138932200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.nsaids_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 184095200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_EyeDrops()"
});
formatter.result({
  "duration": 143521400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.eyedrops_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 416413500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.contact_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 144537000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.food_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 215891800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_fields_of_Antimicrobial_agents()"
});
formatter.result({
  "duration": 912788300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Antimicrobial_agents_name_should_be_display()"
});
formatter.result({
  "duration": 243837500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_duration_for_Antimicrobial_agents()"
});
formatter.result({
  "duration": 5643376000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Antimicrobial_agents()"
});
formatter.result({
  "duration": 5352356100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Antimicrobial_agents()"
});
formatter.result({
  "duration": 6246505600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Antifungal_agents()"
});
formatter.result({
  "duration": 236266900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Antifungal_agents_name_should_be_display()"
});
formatter.result({
  "duration": 84764300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Antifungal_agents()"
});
formatter.result({
  "duration": 2017281600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Antifungal_agents()"
});
formatter.result({
  "duration": 1849805000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Antifungal_agents()"
});
formatter.result({
  "duration": 1476898000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Antiviral_Agents()"
});
formatter.result({
  "duration": 485697100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Antiviral_Agents_name_should_be_display()"
});
formatter.result({
  "duration": 102987200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Antiviral_Agents()"
});
formatter.result({
  "duration": 4556148900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Antiviral_Agents()"
});
formatter.result({
  "duration": 4339852800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Antiviral_Agents()"
});
formatter.result({
  "duration": 3380157200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Nsaids()"
});
formatter.result({
  "duration": 517871700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Nsaids_name_should_be_display()"
});
formatter.result({
  "duration": 118631600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Nsaids()"
});
formatter.result({
  "duration": 5830926400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Nsaids()"
});
formatter.result({
  "duration": 5816052300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Nsaids()"
});
formatter.result({
  "duration": 3372536100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Eye_Drops()"
});
formatter.result({
  "duration": 1559942800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Eye_Drops_name_should_be_display()"
});
formatter.result({
  "duration": 292182200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_for_each_Eye_Drops()"
});
formatter.result({
  "duration": 25496089600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_Duration_Units_for_each_Eye_Drops()"
});
formatter.result({
  "duration": 25887402100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_comments_for_each_Eye_Drops()"
});
formatter.result({
  "duration": 15473988900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_each_tabs_of_Contact_Allergies()"
});
formatter.result({
  "duration": 563565300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Contact_Allergies_name_should_be_display()"
});
formatter.result({
  "duration": 111626300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.each_Food_Allergies_name_should_be_display()"
});
formatter.result({
  "duration": 27170600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_create_Appointment()"
});
formatter.result({
  "duration": 246515400,
  "status": "passed"
});
});