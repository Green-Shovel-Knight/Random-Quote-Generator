$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var author;
  getQuote();
  function getQuote(){
   
    var quotes = ["Those who dive deep in the sea of affliction bring up rare pearls.", "All human wisdom is contained in these two words; 'Wait and Hope'.", "Keep moving forward.", "I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.", "Be killing sin, or it will kill you.", "To love anything is to be vulnerable.", "Christ went more willingly to the cross then we do to the throne of grace.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "No matter what people tell you, words and ideas can change the world."];
   
    var author1=["-CH Spurgeon", "-Alexander Dumas", "-Walt Disney", "-JRR Tolkien", "-John Owen", "-CS Lewis", "-Thomas Watson", "-Winston Churchill", "-Robin Williams"];
  
     randomNum = Math.floor((Math.random()*quotes.length));
     randomQuote = quotes[randomNum];
     author = author1[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(author);
    
  }
  
  $("#newQuote").on("click", function(){
    getQuote();
    
  })
  
  $("#tweet-quote").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + author);
  });
  
  
});