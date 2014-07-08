import java.awt.print.Pageable;

import geb.Page;

class GoogleResultsPage extends Page {
	static at = { title.endsWith("Google Search") }
	
	
	static content = {
		results { $("li.g") }
		result { index -> results[index] }
		resultLink { index -> results[index].find("a") }
		firstResultLink { resultLink(0) }
	}
	
//	void assertResultIs(def index, def title) {
//		assert $('div#ires ol li')[index - 1].find('a').text() == title
//	}
	
	void assertResultIs(def link) {
			println "link is " + link
			println "results is " + results.text()
			println "result is " + result(0).text()
			println "resultLink is: " + resultLink(0).text()
			
		println "firstResultLink is " + firstResultLink
		assert firstResultLink.text() == link
	}
}