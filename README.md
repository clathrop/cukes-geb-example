Cucumber-jvm-geb-example
==

skeleton project for demonstrating the integration between Cucumber-jvm and Geb using the HtmlUnit Driver
--

To run all the scenarios in the project: 
mvn clean test package

To run a subset of the scenarios in the project: 
mvn clean test package -DtagArg="@myTag"
