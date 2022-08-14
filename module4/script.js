(function (window) {
  var names = ["Carlos", "Ram", "Jonathan", "Goblin", "Pet", "Franky", "Laudathan", "Polly", "Leon", "Jimmy"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

