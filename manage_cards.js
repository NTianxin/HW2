var num = 0;
function addCard(interestID){
  var newID = "card" + num;
  console.log(newID);
  num++;
  var tweet = $('<div id=' + newID + ' class="card mb-3" style style="max-width:600px" ><button type="button" class="btn btn-danger btn-sm" onclick = "deleteCard('+ newID +')">X</button> <img class="card-img-top" src="twitter.png" alt="Twitter Symbol"><div class = "card-body"><p class = "card-text">Sample Tweet</p></div></div>');
  tweet.appendTo(interestID);
}

function deleteCard(cardID){
  console.log(cardID);
  //var x = document.getElementById(cardID);
  cardID.remove();
}
