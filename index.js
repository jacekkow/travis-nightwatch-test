module.exports = {
	'Test': function(browser) {
		browser.url('http://127.0.0.1:8080/');
		browser.expect.element('p').text.to.include('OK');
		
	},
};
