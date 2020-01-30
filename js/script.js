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

    for(var i = 0; i < allImgBtns.length; i++) {
        allBtns[i].onmouseover =  function(){mouseOnObj(this)};
        allImgBtns[i].onmouseover =  function(){mouseOnObj(this)};
        allBtns[i].onmouseout =  function(){mouseOffObj(this)};
        allImgBtns[i].onmouseout =  function(){mouseOffObj(this)};
    }
    
    newHeader.addEventListener('click', function() {
        window.scrollTo(0, 100);
        scroll();
        window.scrollTo(0, 0);
        scroll();
        return;
    });

    aboutImg.addEventListener('click', function() { 
        // window.scrollTo(0, 200);
        // scroll();
        aboutSection.scrollIntoView(false);
        return;
    });

    window.addEventListener('scroll', function() {
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
            
        } else {
            var other = subFrnt + 'Img';
            var otherTransform = document.querySelector('#'+other);
            otherTransform.style.transform = 'scale(1.1)';
            el.style.borderRadius = '75px';
            el.style.width = '50%';
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
        } else {
            var other = subFrnt + 'Img';
            var otherTransform = document.querySelector('#'+other);
            otherTransform.style.transform = 'scale(1)';
            el.style.borderRadius = '10px';
            el.style.width = '100%';
        }
        return;
    }

    function scroll() {
        console.log('called');
        console.log(window.pageYOffset);
            
            // if(window.pageYOffset < 1200 && window.pageYOffset >= 1100){
            //     allBtns[0].style.top = '0px';
            //     allBtns[1].style.top = '69px';
            // }

            // if(window.pageYOffset < 600 && window.pageYOffset >= 500){
            //     topBar[0].style.position = 'fixed';
            //     topBar[0].style.bottom = window.innerHeight - 145 + 'px';
            //     topBar[0].style.left = '0px';
            //     topBar[0].style.width = '86%';
            //     topBar[0].style.margin = '0% 7%';
            //     topBar[0].style.marginBottom = '-25px';
            //     aboutSection.style.marginTop = '-300px';
            //     aboutSection.style.opacity = '1';
            //     newHeader.style.marginTop = window.pageYOffset + 'px';
            //     allImgBtns[0].style.marginTop = '475px';
            //     allImgBtns[0].style.marginBottom = '50px';
            //     window.scrollTo(0,501);
            // }

            // if(window.pageYOffset < 500 && window.pageYOffset >= 400){
            //     topBar[0].style.margin = '0';
            //     topBar[0].style.width = '100%';
            //     allImgBtns[0].style.marginTop = '0px';
            //     allImgBtns[0].style.marginBottom = '0px';
            //     topBar[0].style.position = '';
            //     topBar[0].style.bottom = '';
            //     aboutSection.style.marginTop = '-250px';
            //     
            //     newHeader.style.marginTop = window.pageYOffset + 'px';
            // }

            // if(window.pageYOffset < 400 && window.pageYOffset >= 300){
            //     aboutSection.style.marginTop = '-125px';
            //     aboutSection.style.opacity = '1';
            //     newHeader.style.marginTop = window.pageYOffset + 'px';
            // }

            // if(window.pageYOffset < 300 && window.pageYOffset >= 200){
            //     aboutSection.style.opacity = '0';
            //     aboutSection.style.marginTop = '0px';
            //     allImgBtns[2].style.opacity = '0';
            //     allImgBtns[1].style.opacity = '0';
            //     allImgBtns[2].style.display = 'none';
            //     allImgBtns[1].style.display = 'none';
            //     newHeader.style.marginTop = window.pageYOffset + 'px';
            // }
            if(window.pageYOffset < 250 && window.pageYOffset >= 150){
                
            }
            
            if(window.pageYOffset < 150 && window.pageYOffset >= 50 ){
                aboutSection.style.opacity = '1';
                allBtns[2].style.top = '0px';
                allBtns[1].style.top = '0px';
                if(window.innerWidth > 600) {
                    allBtns[2].style.top = '0px';
                    allBtns[1].style.top = '0px';
                    allBtns[0].style.top = '69px';
                }
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
            }

            if(window.pageYOffset < 50) {
                aboutSection.style.opacity = '0';
                if(window.innerWidth > 600) {
                    allBtns[2].style.top = '69px';
                    allBtns[1].style.top = '69px';
                }
                allImgBtns[2].style.opacity = '1';
                allImgBtns[1].style.opacity = '1';
                newHeader.style.opacity = '0';
                newHeader.style.margin = '0px';
                topWords[1].style.opacity = '1';
                topWords[0].style.opacity = '1';
                imgCtn[2].style.transform = 'scale(1)';
                imgCtn[1].style.transform = 'scale(1)';
                imgCtn[0].style.transform = 'scale(1)';

            }
        return;
    }

});



