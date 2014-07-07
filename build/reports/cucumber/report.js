$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "id": "google-search",
  "description": "In order to demonstrate the power of Cucumber and WebDriver combined\nAs a Cucumber instructor\nI want to walk through a simple google search.",
  "name": "Google Search",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 134185000,
  "status": "passed"
});
formatter.scenario({
  "id": "google-search;show-you-how-to-search-on-google",
  "tags": [
    {
      "name": "@wikipedia",
      "line": 6
    }
  ],
  "description": "",
  "name": "Show you how to search on google",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the Google search page",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I search for \"Wikipedia\"",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I should see the results page",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "The first link should be \"Wikipedia\"",
  "keyword": "And ",
  "line": 11
});
formatter.match({
  "location": "search_steps.groovy:7"
});
formatter.result({
  "duration": 3668368000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wikipedia",
      "offset": 14
    }
  ],
  "location": "search_steps.groovy:14"
});
formatter.result({
  "duration": 552487000,
  "status": "passed"
});
formatter.match({
  "location": "search_steps.groovy:21"
});
formatter.result({
  "duration": 1012261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wikipedia",
      "offset": 26
    }
  ],
  "location": "search_steps.groovy:29"
});
formatter.result({
  "duration": 51774000,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 2503000,
  "status": "passed"
});
formatter.scenario({
  "id": "google-search;show-you-how-to-search-on-google",
  "tags": [
    {
      "name": "@youtube",
      "line": 13
    }
  ],
  "description": "",
  "name": "Show you how to search on google",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the Google search page",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "I search for \"YouTube\"",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I should see the results page",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "The first link should be \"YouTube\"",
  "keyword": "And ",
  "line": 18
});
formatter.match({
  "location": "search_steps.groovy:7"
});
formatter.result({
  "duration": 572684000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YouTube",
      "offset": 14
    }
  ],
  "location": "search_steps.groovy:14"
});
formatter.result({
  "duration": 382073000,
  "status": "passed"
});
formatter.match({
  "location": "search_steps.groovy:21"
});
formatter.result({
  "duration": 1006720000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YouTube",
      "offset": 26
    }
  ],
  "location": "search_steps.groovy:29"
});
formatter.result({
  "duration": 39529000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
});