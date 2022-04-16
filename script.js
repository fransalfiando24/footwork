
// SlideShow
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicators = document.querySelector(".indicators");
let index = 0;


    prev.addEventListener("click",function() {
        prevSlide();
        changeIndicateCircle();
        resetTimer();
    })
    next.addEventListener("click",function() {
        nextSlide();
        changeIndicateCircle();
        resetTimer();
    })

    //circle indicators
    function circleIndicator() {
        for(let i=0; i<slides.length;i++){
            const div = document.createElement("div");
                div.innerHTML=i+1;
                div.id=i;
                div.setAttribute("onclick","indicateSlide(this)")
                if(i==0){
                    div.className="active";
                }
                indicators.appendChild(div);
        }
    }
    circleIndicator();
    function indicateSlide(element) {
        index=element.id;
        changeSlide();
        changeIndicateCircle();
        resetTimer();
    }

    function changeIndicateCircle() {
        for(let i=0; i<indicators.children.length;i++){
            indicators.children[i].classList.remove("active");
        }
        indicators.children[index].classList.add("active");
    }

    function prevSlide() {
        if(index==0){
            index=slides.length-1;
        }
        else{
            index--;
        }
        changeSlide();
    }

    function nextSlide() {
        if(index == slides.length-1){
            index=0;
        }
        else{
            index++;
        }
        changeSlide();
    }

    function changeSlide() {
        for(let i=0; i<slides.length; i++){
            slides[i].classList.remove('active');
        }
        slides[index].classList.add('active');
    }

    function autoplay(){
        nextSlide();
        changeIndicateCircle();
    }

    function resetTimer(){
        // when cilck te indicate on control button
        //stop timer
        clearInterval(timer);
        //then started again timer
        timer=setInterval(autoplay,4500);

    }

    let timer=setInterval(autoplay,4500)