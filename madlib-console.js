function createStartup(){
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Tinder', 'Asana'];
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));

  document.getElementById('xForY').innerHTML=('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

}

document.getElementById('create').onclick = createStartup;

// print and save keep functions in global scope
// how is it going to be called?
// when is it going to be called?
// function defined, not called yet
// how do you write to the DOM?
// document.getElementById

function save (){

}

function print (){

}
