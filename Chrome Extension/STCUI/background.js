chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});