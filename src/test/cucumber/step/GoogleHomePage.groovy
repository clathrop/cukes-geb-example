import geb.Page;

class GoogleHomePage extends Page {
	
	static url = 'http://www.google.com/'

	static at = {
		assert title == 'Google'
	}

	static content = {
		searchField { $("input[name=q]") }
		searchButton(to: GoogleResultsPage) { $("input[value='Google Search']") }
	}
 
	void searchFor(String searchTerm) {
		searchField.value searchTerm
		searchButton.click()
	}

}