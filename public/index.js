
// num counter

$({countNum: $("#countnum").text()}).animate({countNum: 100}, {
  duration: 2000,
  easing:'linear',
  step: function() {
    // What todo on every count
    $("#countnum").text(Math.floor(this.countNum));
    
  },
  complete: function() {
      $("#countnum").text(this.countNum)
    
  }
});


//click page animation

$("#portfoliobtn").click(function() {
  $('html, body').animate({
    scrollTop: $(".portfolio-page").offset().top
  }, 1000);
});

$("#contactbtn").click(function() {
  $('html, body').animate({
    scrollTop: $(".contact-page").offset().top
  }, 1000);
});


// Landing page letter animation



const lo2 = document.querySelector('#landingp');

const strText2 = lo2.textContent;
const splitText2 = strText2.split("");

lo2.textContent = "";

for (let i = 0;i<splitText2.length;i++){
    lo2.innerHTML += "<span>" + splitText2[i] + "</span>";
    
}


let char2 = 0;
let timer2 = setInterval(onTt,50);

function onTt(){
    const span2 = lo2.querySelectorAll('span')[char2];
    span2.classList.add('fade2');
    char2++;

    if(char2 === 6){
        span2.style.marginRight="5px"

    }

    if(char2 ===splitText2.length){
        completeE();
        return;
    }

}

function completeE(){
  clearInterval(timer2);
  timer2=null;
}

$("#aboutme").on('click',function(){
$(".about-me-section").addClass("about-slide")

})

$("#aboutClose").on('click',function(){
$(".about-me-section").removeClass("about-slide")
})

// Bars animation




$("#skilbtn").on('click',function(){
$(".skil-section").addClass("skilbtnslide")
$("#bars1").addClass("barslide")
$("#bars2").addClass("barslide")
$("#bars3").addClass("barslide")
$("#bars4").addClass("barslide")
$("#bars5").addClass("barslide")
$("#bars6").addClass("barslide")
$("#bars7").addClass("barslide")
})
