$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Add_Patient_For_OPD.feature");
formatter.feature({
  "line": 1,
  "name": "Create Appointment for OPD",
  "description": "",
  "id": "create-appointment-for-opd",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@Validate_Allergies_Tab"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "open the browser and enter the URL \"http://qaehr.healthgraph.in/users/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user fills \"\u003cuname\u003e\" and \"\u003cpswd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "click on Add New Patient button",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "user fill mandatory fields \"\u003cfname\u003e\" \"\u003cmobNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "clicks on allergies tab",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Drug Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Antimicrobial Agents"
      ],
      "line": 116
    },
    {
      "cells": [
        "Antifungal Agents"
      ],
      "line": 117
    },
    {
      "cells": [
        "Antiviral Agents"
      ],
      "line": 118
    },
    {
      "cells": [
        "Nsaids"
      ],
      "line": 119
    },
    {
      "cells": [
        "Eye Drops"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "user clicks on Antimicrobial Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "Antimicrobial agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ampicillin"
      ],
      "line": 123
    },
    {
      "cells": [
        "Amoxicillin"
      ],
      "line": 124
    },
    {
      "cells": [
        "Ceftriaxone"
      ],
      "line": 125
    },
    {
      "cells": [
        "Ciprofloxacin"
      ],
      "line": 126
    },
    {
      "cells": [
        "Clarithromycin"
      ],
      "line": 127
    },
    {
      "cells": [
        "Co Trimoxazole"
      ],
      "line": 128
    },
    {
      "cells": [
        "Ethambutol"
      ],
      "line": 129
    },
    {
      "cells": [
        "Isoniazid"
      ],
      "line": 130
    },
    {
      "cells": [
        "Metronidazole"
      ],
      "line": 131
    },
    {
      "cells": [
        "Penicillin"
      ],
      "line": 132
    },
    {
      "cells": [
        "Rifampicin"
      ],
      "line": 133
    },
    {
      "cells": [
        "Streptomycin"
      ],
      "line": 134
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "user clicks on Antifungal Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "Antifungal agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ketoconazole"
      ],
      "line": 137
    },
    {
      "cells": [
        "Fluconazole"
      ],
      "line": 138
    },
    {
      "cells": [
        "Itraconazole"
      ],
      "line": 139
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "user clicks on Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "Antiviral agents have below tabs",
  "rows": [
    {
      "cells": [
        "Acyclovir"
      ],
      "line": 142
    },
    {
      "cells": [
        "Efavirenz"
      ],
      "line": 143
    },
    {
      "cells": [
        "Enfuvirtide"
      ],
      "line": 144
    },
    {
      "cells": [
        "Nelfinavir"
      ],
      "line": 145
    },
    {
      "cells": [
        "Nevirapine"
      ],
      "line": 146
    },
    {
      "cells": [
        "Zidovudine"
      ],
      "line": 147
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "user clicks on Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "Nsaids have below tabs",
  "rows": [
    {
      "cells": [
        "Aspirin"
      ],
      "line": 150
    },
    {
      "cells": [
        "Paracetamol"
      ],
      "line": 151
    },
    {
      "cells": [
        "Ibuprofen"
      ],
      "line": 152
    },
    {
      "cells": [
        "Diclofenac"
      ],
      "line": 153
    },
    {
      "cells": [
        "Aceclofenac"
      ],
      "line": 154
    },
    {
      "cells": [
        "Naproxen"
      ],
      "line": 155
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "user clicks on EyeDrops",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "EyeDrops have below tabs",
  "rows": [
    {
      "cells": [
        "Tropicamide_P"
      ],
      "line": 158
    },
    {
      "cells": [
        "Tropicamide"
      ],
      "line": 159
    },
    {
      "cells": [
        "Timolol"
      ],
      "line": 160
    },
    {
      "cells": [
        "Homide"
      ],
      "line": 161
    },
    {
      "cells": [
        "Latanoprost"
      ],
      "line": 162
    },
    {
      "cells": [
        "Brimonidine"
      ],
      "line": 163
    },
    {
      "cells": [
        "Travoprost"
      ],
      "line": 164
    },
    {
      "cells": [
        "Tobramycin"
      ],
      "line": 165
    },
    {
      "cells": [
        "Moxifloxacin"
      ],
      "line": 166
    },
    {
      "cells": [
        "Homatropine"
      ],
      "line": 167
    },
    {
      "cells": [
        "Pilocarpine"
      ],
      "line": 168
    },
    {
      "cells": [
        "Cyclopentolate"
      ],
      "line": 169
    },
    {
      "cells": [
        "Atropine"
      ],
      "line": 170
    },
    {
      "cells": [
        "Phenylephrine"
      ],
      "line": 171
    },
    {
      "cells": [
        "Tropicacyl"
      ],
      "line": 172
    },
    {
      "cells": [
        "Paracain"
      ],
      "line": 173
    },
    {
      "cells": [
        "Ciplox"
      ],
      "line": 174
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "Contact Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Alcohol"
      ],
      "line": 176
    },
    {
      "cells": [
        "Latex"
      ],
      "line": 177
    },
    {
      "cells": [
        "Betadine"
      ],
      "line": 178
    },
    {
      "cells": [
        "Adhesive Tape"
      ],
      "line": 179
    },
    {
      "cells": [
        "Tegaderm"
      ],
      "line": 180
    },
    {
      "cells": [
        "Transpore"
      ],
      "line": 181
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Food Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "All Seafood"
      ],
      "line": 183
    },
    {
      "cells": [
        "Corn"
      ],
      "line": 184
    },
    {
      "cells": [
        "Egg"
      ],
      "line": 185
    },
    {
      "cells": [
        "Milk Proteins"
      ],
      "line": 186
    },
    {
      "cells": [
        "Peanuts"
      ],
      "line": 187
    },
    {
      "cells": [
        "Shellfish Only"
      ],
      "line": 188
    },
    {
      "cells": [
        "Soy Protein"
      ],
      "line": 189
    },
    {
      "cells": [
        "Lactose"
      ],
      "line": 190
    },
    {
      "cells": [
        "Mushroom"
      ],
      "line": 191
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 193,
  "name": "",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;",
  "rows": [
    {
      "cells": [
        "uname",
        "pswd",
        "fname",
        "mobNo"
      ],
      "line": 194,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;1"
    },
    {
      "cells": [
        "hgdummyrec",
        "HGraph@2$2$",
        "Bikky",
        "4678907665"
      ],
      "line": 195,
      "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 195,
  "name": "Create Appointment for OPD by adding mandatory fields",
  "description": "",
  "id": "create-appointment-for-opd;create-appointment-for-opd-by-adding-mandatory-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@Validate_Allergies_Tab"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "open the browser and enter the URL \"http://qaehr.healthgraph.in/users/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user fills \"hgdummyrec\" and \"HGraph@2$2$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "click on Add New Patient button",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "user fill mandatory fields \"Bikky\" \"4678907665\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "clicks on allergies tab",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Drug Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Antimicrobial Agents"
      ],
      "line": 116
    },
    {
      "cells": [
        "Antifungal Agents"
      ],
      "line": 117
    },
    {
      "cells": [
        "Antiviral Agents"
      ],
      "line": 118
    },
    {
      "cells": [
        "Nsaids"
      ],
      "line": 119
    },
    {
      "cells": [
        "Eye Drops"
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "user clicks on Antimicrobial Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "Antimicrobial agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ampicillin"
      ],
      "line": 123
    },
    {
      "cells": [
        "Amoxicillin"
      ],
      "line": 124
    },
    {
      "cells": [
        "Ceftriaxone"
      ],
      "line": 125
    },
    {
      "cells": [
        "Ciprofloxacin"
      ],
      "line": 126
    },
    {
      "cells": [
        "Clarithromycin"
      ],
      "line": 127
    },
    {
      "cells": [
        "Co Trimoxazole"
      ],
      "line": 128
    },
    {
      "cells": [
        "Ethambutol"
      ],
      "line": 129
    },
    {
      "cells": [
        "Isoniazid"
      ],
      "line": 130
    },
    {
      "cells": [
        "Metronidazole"
      ],
      "line": 131
    },
    {
      "cells": [
        "Penicillin"
      ],
      "line": 132
    },
    {
      "cells": [
        "Rifampicin"
      ],
      "line": 133
    },
    {
      "cells": [
        "Streptomycin"
      ],
      "line": 134
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "user clicks on Antifungal Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "Antifungal agents have below tabs",
  "rows": [
    {
      "cells": [
        "Ketoconazole"
      ],
      "line": 137
    },
    {
      "cells": [
        "Fluconazole"
      ],
      "line": 138
    },
    {
      "cells": [
        "Itraconazole"
      ],
      "line": 139
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "user clicks on Antiviral Agents",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "Antiviral agents have below tabs",
  "rows": [
    {
      "cells": [
        "Acyclovir"
      ],
      "line": 142
    },
    {
      "cells": [
        "Efavirenz"
      ],
      "line": 143
    },
    {
      "cells": [
        "Enfuvirtide"
      ],
      "line": 144
    },
    {
      "cells": [
        "Nelfinavir"
      ],
      "line": 145
    },
    {
      "cells": [
        "Nevirapine"
      ],
      "line": 146
    },
    {
      "cells": [
        "Zidovudine"
      ],
      "line": 147
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "user clicks on Nsaids",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "Nsaids have below tabs",
  "rows": [
    {
      "cells": [
        "Aspirin"
      ],
      "line": 150
    },
    {
      "cells": [
        "Paracetamol"
      ],
      "line": 151
    },
    {
      "cells": [
        "Ibuprofen"
      ],
      "line": 152
    },
    {
      "cells": [
        "Diclofenac"
      ],
      "line": 153
    },
    {
      "cells": [
        "Aceclofenac"
      ],
      "line": 154
    },
    {
      "cells": [
        "Naproxen"
      ],
      "line": 155
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "user clicks on EyeDrops",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "EyeDrops have below tabs",
  "rows": [
    {
      "cells": [
        "Tropicamide_P"
      ],
      "line": 158
    },
    {
      "cells": [
        "Tropicamide"
      ],
      "line": 159
    },
    {
      "cells": [
        "Timolol"
      ],
      "line": 160
    },
    {
      "cells": [
        "Homide"
      ],
      "line": 161
    },
    {
      "cells": [
        "Latanoprost"
      ],
      "line": 162
    },
    {
      "cells": [
        "Brimonidine"
      ],
      "line": 163
    },
    {
      "cells": [
        "Travoprost"
      ],
      "line": 164
    },
    {
      "cells": [
        "Tobramycin"
      ],
      "line": 165
    },
    {
      "cells": [
        "Moxifloxacin"
      ],
      "line": 166
    },
    {
      "cells": [
        "Homatropine"
      ],
      "line": 167
    },
    {
      "cells": [
        "Pilocarpine"
      ],
      "line": 168
    },
    {
      "cells": [
        "Cyclopentolate"
      ],
      "line": 169
    },
    {
      "cells": [
        "Atropine"
      ],
      "line": 170
    },
    {
      "cells": [
        "Phenylephrine"
      ],
      "line": 171
    },
    {
      "cells": [
        "Tropicacyl"
      ],
      "line": 172
    },
    {
      "cells": [
        "Paracain"
      ],
      "line": 173
    },
    {
      "cells": [
        "Ciplox"
      ],
      "line": 174
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "Contact Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "Alcohol"
      ],
      "line": 176
    },
    {
      "cells": [
        "Latex"
      ],
      "line": 177
    },
    {
      "cells": [
        "Betadine"
      ],
      "line": 178
    },
    {
      "cells": [
        "Adhesive Tape"
      ],
      "line": 179
    },
    {
      "cells": [
        "Tegaderm"
      ],
      "line": 180
    },
    {
      "cells": [
        "Transpore"
      ],
      "line": 181
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Food Allergies have below tabs",
  "rows": [
    {
      "cells": [
        "All Seafood"
      ],
      "line": 183
    },
    {
      "cells": [
        "Corn"
      ],
      "line": 184
    },
    {
      "cells": [
        "Egg"
      ],
      "line": 185
    },
    {
      "cells": [
        "Milk Proteins"
      ],
      "line": 186
    },
    {
      "cells": [
        "Peanuts"
      ],
      "line": 187
    },
    {
      "cells": [
        "Shellfish Only"
      ],
      "line": 188
    },
    {
      "cells": [
        "Soy Protein"
      ],
      "line": 189
    },
    {
      "cells": [
        "Lactose"
      ],
      "line": 190
    },
    {
      "cells": [
        "Mushroom"
      ],
      "line": 191
    }
  ],
  "keyword": "And "
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
  "duration": 17191848100,
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
  "duration": 213635600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Login()"
});
formatter.result({
  "duration": 2226764000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_button()"
});
formatter.result({
  "duration": 700836000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_Patient_button()"
});
formatter.result({
  "duration": 1261758900,
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
  "duration": 332012200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_allergies_tab()"
});
formatter.result({
  "duration": 42689000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.drug_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 135791300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antimicrobial_Agents()"
});
formatter.result({
  "duration": 3039462500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antimicrobial_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 407494400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antifungal_Agents()"
});
formatter.result({
  "duration": 3029009200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antifungal_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 145124200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Antiviral_Agents()"
});
formatter.result({
  "duration": 3047347500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.antiviral_agents_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 232865100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Nsaids()"
});
formatter.result({
  "duration": 3039958100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.nsaids_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 234737400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_EyeDrops()"
});
formatter.result({
  "duration": 3046919300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.eyedrops_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 473397100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.contact_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 163179100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.food_Allergies_have_below_tabs(DataTable)"
});
formatter.result({
  "duration": 221893300,
  "status": "passed"
});
});