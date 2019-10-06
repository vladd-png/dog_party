//header button
var headerName = document.querySelector('.bold');
var button = document.querySelector('#submit');
// headerName.innerText = "Ranger";

button.addEventListener('click', function () {
  var dogName = document.querySelector('#click').value;
  headerName.innerHTML = dogName;
});

//column 1 of 3
var howButton = document.querySelector('#button1');
var p1 = document.querySelector('#hidden1');

howButton.addEventListener('click', function(){
  if (p1.style.opacity === "1") {
    p1.style.transition = "all 0.5s";
    p1.style.opacity = "0";
  }
  else {
    p1.style.opacity = "1";
  }
});

//column 2 of 3
var whatButton = document.querySelector('#button2');
var p2 = document.querySelector('#hidden2');

whatButton.addEventListener('click', function(){
  if (p2.style.opacity === "1") {
    p2.style.transition = "all 0.5s";
    p2.style.opacity = "0";
  }
  else {
    p2.style.opacity = "1";
  }
});

//column 3 of 3
var factsButton = document.querySelector('#button3');
var p3 = document.querySelector('#hidden3');

factsButton.addEventListener('click', function(){
  if (p3.style.opacity === "1") {
    p3.style.transition = "all 0.5s";
    p3.style.opacity = "0";
  }
  else {
    p3.style.opacity = "1";
  }
});

//paragraph input
var what = document.querySelector('#hidden1');
var how = document.querySelector('#hidden2');
var facts = document.querySelector('#hidden3');
var inputText = document.querySelector('#inputBox')
var button = document.querySelector('#submitB');

button.addEventListener('click', function () {
  if (inputText.value === "How") {
    var whatInfo = document.querySelector('#formInput').value;
    what.innerText = whatInfo;
  } else if (inputText.value === "What") {
    var howInfo = document.querySelector('#formInput').value;
    how.innerText = howInfo;
  } else {
    var factsInfo = document.querySelector('#formInput').value;
    facts.innerText = factsInfo;
  }
});
