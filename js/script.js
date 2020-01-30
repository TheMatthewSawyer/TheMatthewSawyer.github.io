/*

document.addEventListener("DOMContentLoaded", () => {

    var el = document.querySelector('#test');
    el.classList.add('fun');
    el.textContent = 'hello';
    el.addEventListener('click', (e) => { alert('yo');});

});


Non jQuery methods for my brain
*/

document.addEventListener("DOMContentLoaded", () => {
    var wholePage = document.querySelector('.container');
    var allBtns = wholePage.getElementsByClassName("btn");
    var imgCtn = wholePage.getElementsByClassName("imgCtn");
    var allImgBtns = wholePage.getElementsByClassName("imgBtn");
    var topWords = wholePage.getElementsByClassName("topWords");
    var newHeader = document.getElementById('newHeader');
    var aboutSection = document.getElementById('aboutSection');
    var topBar = wholePage.getElementsByClassName('topBar');

    if(window.innerWidth < 600) {
        allImgBtns[0].style.display = '';
        allImgBtns[1].style.display = 'none';
        allImgBtns[2].style.display = 'none';
        for(var i = 0; i < 3; i++) {
            allBtns[i].children[1].style.opacity = '0';
            allBtns[i].children[0].style.right = '0';
        }
    }

    for(var i = 0; i < allImgBtns.length; i++) {
        allBtns[i].onmouseover =  function(){mouseOnObj(this)};
        allImgBtns[i].onmouseover =  function(){mouseOnObj(this)};
        allBtns[i].onmouseout =  function(){mouseOffObj(this)};
        allImgBtns[i].onmouseout =  function(){mouseOffObj(this)};
    }
    
    newHeader.addEventListener('click', function() {
        window.scrollTo(0, 0);
        scroll();
        return;
    });

    aboutImg.addEventListener('click', function() { 
        goToAbout();
        return;
    });
    
    allBtns[0].addEventListener('click', function() { 
        goToAbout();
        return;
    });

    window.addEventListener('scroll', function() {
        scroll();
        return;
      });

    window.addEventListener("resize", function() {
        scroll();
        return;
    });

    function mouseOnObj(el) {
        var id = el.id;
        var subEnd = id.substring(id.length-3, id.length);
        var subFrnt = id.substring(0, id.length-3);
        el.style.transform = 'scale(1.1)';
        if(subEnd === 'Img') {
            var other = subFrnt + 'Btn';
            var otherTransform = document.getElementById(other);
            otherTransform.style.transform = 'scale(1.1)';
            otherTransform.style.borderRadius = '75px';
            otherTransform.style.width = '50%';
            otherTransform.children[1].style.opacity = '0';
            otherTransform.children[0].style.right = '0';
        } else {
            var other = subFrnt + 'Img';
            var otherTransform = document.querySelector('#'+other);
            otherTransform.style.transform = 'scale(1.1)';
            el.style.borderRadius = '75px';
            el.style.width = '50%';
            if(window.innerWidth < 900) {
                el.children[1].style.opacity = '0';
                el.children[0].style.right = '0';
            }
        }
        return;
    }

    function mouseOffObj(el) {
        var id = el.id;
        var subEnd = id.substring(id.length-3, id.length);
        var subFrnt = id.substring(0, id.length-3);
        el.style.transform = 'scale(1)';
        if(subEnd === 'Img') {
            var other = subFrnt + 'Btn';
            var otherTransform = document.getElementById(other);
            otherTransform.style.transform = 'scale(1)';
            otherTransform.style.borderRadius = '10px';
            otherTransform.style.width = '100%';
            if(window.innerWidth > 600) {
                otherTransform.children[1].style.opacity = '1';
                if(otherTransform.children[0].classList.contains('aboutIcon')) {
                    otherTransform.children[0].style.right = '30px';
                }else if(otherTransform.children[0].classList.contains('portIcon')) {
                    otherTransform.children[0].style.right = '45px';
                } else {
                    otherTransform.children[0].style.right = '40px';
                }
            }
        } else {
            var other = subFrnt + 'Img';
            var otherTransform = document.querySelector('#'+other);
            otherTransform.style.transform = 'scale(1)';
            el.style.borderRadius = '10px';
            el.style.width = '100%';
            if(window.innerWidth > 600) {
                el.children[1].style.opacity = '1';
                if(el.children[0].classList.contains('aboutIcon')) {
                    el.children[0].style.right = '30px';
                }else if(el.children[0].classList.contains('portIcon')) {
                    el.children[0].style.right = '45px';
                } else {
                    el.children[0].style.right = '40px';
                }
            }
        }
        return;
    }

    function goToAbout() {
        window.scrollTo(0, 50);
        scroll();
        window.scrollTo(0, 100);
        scroll();
        return;
    }

    function scroll() {
        console.log('called');
        console.log(window.pageYOffset);
            
            if(window.pageYOffset < 250 && window.pageYOffset >= 150){
                allImgBtns[2].style.opacity = '0';
                allImgBtns[1].style.opacity = '0';
            }
            
            if(window.pageYOffset < 150 && window.pageYOffset >= 50 ){
                topBar[0].style.position = 'fixed';
                topBar[0].style.width = '84%';
                topBar[0].style.top = '0px';
                topBar[0].style.left = '8%';
                aboutSection.style.opacity = '1';
                allBtns[2].style.top = '0px';
                allBtns[1].style.top = '0px';
                allImgBtns[2].style.display = '';
                allImgBtns[1].style.display = '';
                allImgBtns[2].style.opacity = '0.5';
                allImgBtns[1].style.opacity = '0.5';
                newHeader.style.opacity = '1';
                newHeader.style.margin = '30px';
                topWords[1].style.opacity = '0';
                topWords[0].style.opacity = '0';
                imgCtn[2].style.transform = 'scale(0.8)';
                imgCtn[1].style.transform = 'scale(0.8)';
                imgCtn[0].style.transform = 'scale(1.1)';
                if(window.innerWidth < 600) {
                    allBtns[2].style.top = '0px';
                    allBtns[1].style.top = '0px';
                    allBtns[0].style.top = '69px';
                    for(i=0; i<3; i++){
                        allBtns[i].style.fontSize = '3.5vw';
                        allImgBtns[i].style.display = 'none';
                    }
                } else {
                    allImgBtns[0].style.display = '';
                    for(i=0; i<3; i++){
                        allBtns[i].style.fontSize = '15px';
                    }
                }
            }
            

            if(window.pageYOffset < 50) {
                topBar[0].style.position = '';
                topBar[0].style.width = '';
                topBar[0].style.top = '';
                topBar[0].style.left = '';
                aboutSection.style.opacity = '0';
                allBtns[2].style.top = '69px';
                allBtns[1].style.top = '69px';
                allImgBtns[2].style.opacity = '1';
                allImgBtns[1].style.opacity = '1';
                newHeader.style.opacity = '0';
                newHeader.style.margin = '0px';
                topWords[1].style.opacity = '1';
                topWords[0].style.opacity = '1';
                imgCtn[2].style.transform = 'scale(1)';
                imgCtn[1].style.transform = 'scale(1)';
                imgCtn[0].style.transform = 'scale(1)';
                if(window.innerWidth < 600) {
                    for(i=0; i<3; i++){
                        allBtns[i].style.fontSize = '4vw';
                        allBtns[i].style.top = '0px';
                        allBtns[i].children[1].style.opacity = '0';
                        allBtns[i].children[0].style.right = '0';

                    }
                    allImgBtns[2].style.display = 'none';
                    allImgBtns[1].style.display = 'none';
                    allImgBtns[0].style.display = '';
                    
                } else {
                    for(i=0; i<3; i++){
                        allImgBtns[i].style.display = '';
                        allBtns[i].style.fontSize = '15px';
                        allBtns[i].children[1].style.opacity = '1';
                    }
                    allBtns[0].style.top = '69px';
                    allBtns[0].children[0].style.right = '30px';
                    allBtns[1].children[0].style.right = '45px';
                    allBtns[2].children[0].style.right = '40px';
                }
            }
        return;
    }

});
