
 var imgList= Array.from(document.querySelectorAll('.item img') );
var littleBoxContainer= document.getElementById("littleBoxContainer");
var littleBox= document.getElementById("littleBox");
var nextBtn=document.getElementById("rightBtn");
var perviousBtn=document.getElementById("leftBtn");
var closeBtn=document.getElementById("closeBtn");

var currentIndex;

 for( i=0 ; i<imgList.length ;i++){


  imgList[i].addEventListener('click',function(e){
    
     littleBoxContainer.style.display="flex";
     var imgSrc= e.target.getAttribute("src");
     currentIndex=imgList.indexOf(e.target);
    
     littleBox.style.backgroundImage = `url(${imgSrc})`;

  });
 };
 


 
 function nextSlide(){
  currentIndex = currentIndex+1;

  if(currentIndex == imgList.length){
    currentIndex = 0
  }
  
    var imgSrc=imgList[currentIndex].src;
   littleBox.style.backgroundImage = `url(${imgSrc})`;

 }
 nextBtn.addEventListener('click',  function(){nextSlide()});

 function perviousSlide(){
  currentIndex = currentIndex-1;

  if(currentIndex < 0){
    currentIndex = imgList.length-1
  }
  
    var imgSrc=imgList[currentIndex].src;
   littleBox.style.backgroundImage = `url(${imgSrc})`;


 }
 perviousBtn.addEventListener('click', function(){ perviousSlide()})

 function closeSlide(){
  littleBoxContainer.style.display="none";


 }
 closeBtn.addEventListener('click', function(){closeSlide()})

document.addEventListener('keydown',function(e){

  if(e.code == 'ArrowRight'){

    nextSlide();
  }
  else if (e.code == 'ArrowLeft') {

    perviousSlide()
    
  } 
  else if (e.code == 'Escape') {
    closeSlide()
  } 

})