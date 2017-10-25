

var quotes = ["Never give up on your dreams...", "Good things take time...", "You are stronger than you think..."]

var change_text = function(){
  for (var i = 0; i < 30; i++) {
      var number_generator = Math.floor(Math.random() * 3)
      document.getElementById('quotes').innerHTML = quotes[number_generator];
  }
}
