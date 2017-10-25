

var quotes = ["A dreamer, probably one of the greatest minds of our generation, Nicolas encompasses all the qualities of a genius.", "A person who is extremely humble, Nicolas will do what needs to be done better and faster than everyone else", "Hire him now while he is still undiscovered! In a few years time you will be proud to be able to say you had a man as amazing as Nicolas on your team"]

var change_text = function(){
  for (var i = 0; i < 4; i++) {
      var number_generator = Math.floor(Math.random() * 3)
      document.getElementById('quotes').innerHTML = quotes[number_generator];

  }
}
