(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]); // Using byeSpeaker for names starting with 'j'
      } else {
        helloSpeaker.speak(names[i]); // Using helloSpeaker for other names
      }
    }
    
    })();
    