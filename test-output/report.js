$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Patient_Setting.feature");
formatter.feature({
  "line": 1,
  "name": "Setting",
  "description": "",
  "id": "setting",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Patient setting",
  "description": "",
  "id": "setting;patient-setting",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open the browser and enter the URL \"http://qaehr.healthgraph.in/users/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills \"\u003cuname\u003e\" and \"\u003cpswd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on profile setting button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicks on organisation setting link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Patient Setting link from the left panel menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "it should display below buttons",
  "rows": [
    {
      "cells": [
        "First Name"
      ],
      "line": 12
    },
    {
      "cells": [
        "Mobile Number"
      ],
      "line": 13
    },
    {
      "cells": [
        "Gender"
      ],
      "line": 14
    },
    {
      "cells": [
        "Age"
      ],
      "line": 15
    },
    {
      "cells": [
        "Age Month"
      ],
      "line": 16
    },
    {
      "cells": [
        "Referral Source"
      ],
      "line": 17
    },
    {
      "cells": [
        "Save"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate mandatory field setting",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "setting;patient-setting;",
  "rows": [
    {
      "cells": [
        "uname",
        "pswd"
      ],
      "line": 23,
      "id": "setting;patient-setting;;1"
    },
    {
      "cells": [
        "hgdummydoc",
        "HGraph@2$2$"
      ],
      "line": 24,
      "id": "setting;patient-setting;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Patient setting",
  "description": "",
  "id": "setting;patient-setting;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open the browser and enter the URL \"http://qaehr.healthgraph.in/users/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills \"hgdummydoc\" and \"HGraph@2$2$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on profile setting button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicks on organisation setting link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Patient Setting link from the left panel menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "it should display below buttons",
  "rows": [
    {
      "cells": [
        "First Name"
      ],
      "line": 12
    },
    {
      "cells": [
        "Mobile Number"
      ],
      "line": 13
    },
    {
      "cells": [
        "Gender"
      ],
      "line": 14
    },
    {
      "cells": [
        "Age"
      ],
      "line": 15
    },
    {
      "cells": [
        "Age Month"
      ],
      "line": 16
    },
    {
      "cells": [
        "Referral Source"
      ],
      "line": 17
    },
    {
      "cells": [
        "Save"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate mandatory field setting",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaehr.healthgraph.in/users/login",
      "offset": 36
    }
  ],
  "location": "Patient.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 37957161300,
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
  "location": "Patient.user_fills_and(String,String)"
});
formatter.result({
  "duration": 228750800,
  "status": "passed"
});
formatter.match({
  "location": "Patient.clicks_on_Login()"
});
formatter.result({
  "duration": 2084790300,
  "status": "passed"
});
formatter.match({
  "location": "Patient.user_can_view_dashboard()"
});
formatter.result({
  "duration": 11084000,
  "status": "passed"
});
formatter.match({
  "location": "Patient.user_clicks_on_profile_setting_button()"
});
formatter.result({
  "duration": 1114947300,
  "status": "passed"
});
formatter.match({
  "location": "Patient.clicks_on_organisation_setting_link()"
});
formatter.result({
  "duration": 1136476900,
  "status": "passed"
});
formatter.match({
  "location": "Patient.clicks_on_Patient_Setting_link_from_the_left_panel_menu()"
});
formatter.result({
  "duration": 3103550900,
  "status": "passed"
});
formatter.match({
  "location": "Patient.it_should_display_below_buttons(DataTable)"
});
formatter.result({
  "duration": 49145000,
  "status": "passed"
});
formatter.match({
  "location": "Patient.validate_mandatory_field_setting()"
});
formatter.result({
  "duration": 2745616100,
  "status": "passed"
});
});