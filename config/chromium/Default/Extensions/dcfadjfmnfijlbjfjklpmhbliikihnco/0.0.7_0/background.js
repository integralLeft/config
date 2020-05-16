chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('chrome.html', {
		bounds: {
			'width': 640,
			'height': 480
		},
		resizable: false
	});
});
