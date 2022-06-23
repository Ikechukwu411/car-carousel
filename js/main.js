var iconsmenu = document.querySelector('.iconcontainer');
var nextbtn = document.querySelector('.arrowright');
var prevbtn = document.querySelector('.left-arrow');


// scrollTo();

function next(){
  if(nextbtn){
    return iconsmenu.scrollTo(850, 0)
  }
}

function prev(){
  if(prevbtn){
    return iconsmenu.scrollTo(-850, 0)
  }
}
