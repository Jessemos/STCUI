chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('HTML/Agencies.html', {
    id: "STCUIMainWindow",
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});