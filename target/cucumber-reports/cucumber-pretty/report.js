$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 1,
  "name": "DataBase SQL query Feature Scenarios",
  "description": "",
  "id": "database-sql-query-feature-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11185140900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Execute all information from Actor Table",
  "description": "",
  "id": "database-sql-query-feature-scenarios;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@testDB"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User connects to PostgreSql Database",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sends querry \u0027select * from public.city where country_id \u003d 44 order by city\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should get all information from that table",
  "keyword": "Then "
});
formatter.match({
  "location": "DataBaseStepDefinition.user_connects_to_postgreSQL_database()"
});
formatter.result({
  "duration": 2977004000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select * from public.city where country_id \u003d 44 order by city",
      "offset": 19
    }
  ],
  "location": "DataBaseStepDefinition.user_sends_query(String)"
});
formatter.result({
  "duration": 4624100,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.DataBaseUtility.runQuery(DataBaseUtility.java:66)\r\n\tat stepDefinitions.DataBaseStepDefinition.user_sends_query(DataBaseStepDefinition.java:22)\r\n\tat ✽.When User sends querry \u0027select * from public.city where country_id \u003d 44 order by city\u0027(Features/DataBaseFeature.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DataBaseStepDefinition.user_should_get_all_information_from_that_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 828819900,
  "status": "passed"
});
});