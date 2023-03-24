var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('enter name:');
  if( !myName || myName === null ) {
    setUserName();
  }
  else{
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'welcome ' + myName;
  }
  
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'welcomeeee ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}



document.querySelector('p').onclick = function() {
  alert('Ouch! Stop poking me!');
}

var myImg = document.querySelector('img');
myImg.onclick = function() {
  let mySrc = myImg.getAttribute('src');
  if( mySrc === 'images/firefox-icon.png'){
    myImg.setAttribute('src','images/firefox2.png');
  } else {
    myImg.setAttribute('src','images/firefox-icon.png');
  }

}
