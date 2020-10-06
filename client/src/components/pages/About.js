import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import keyboard from '../images/keyboard.webp';
import face from '../images/face.webp';

function About(props) {

        if(!birdsClicked) {
            var birdsClicked = props.birdsClicked;
        }

    React.useEffect(() => {
        document.getElementById('birdUp').innerHTML = '';
        
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundImage = `url('${props.background}')`;
        x.style.backgroundColor = 'black';
        x.style.backgroundPositionY = '56px';
        x.style.backgroundRepeat = 'no-repeat';

        birdApplicator();

        /*
        Iterates and displays score
        */
        function birdNumberUp() {
            birdsClicked += 1;
            props.setBirdsClicked(birdsClicked);
            let color;
            if(birdsClicked % 2 == 0) {
                color = 'red';
            } else {
                color = 'orange';
            }
            console.log('%c 🦆 <div> %c ----------------------->>> CLICKED <<<---------------------- ', 'font-size:30px;', `background: #222; color: ${color}; line-height: 40px;`);
        }

        /*
        Recursively adds birds made out of <div>'s!!!
        */
        function birdApplicator(birdLength) {

            /*
                Checks if user still on about page, necessary due to timers
            */
            if (!document.getElementById('birdUp')) {
                console.log('%c 🦆 <div> %c > - > - Bird decided not to fly through the that page - > - >', 'font-size:30px;', 'background: #222; color: #bada55; line-height: 40px;');
                return;
            }

            /*
                Checks for and removes excess birds
                (multiple birdApplicator() instances)
            */
            var birdCont = document.getElementById('birdUp');
            if(birdCont && birdLength) {
                if( (birdCont.children.length !== birdLength) && (birdLength < birdCont.children.length) ) {
                    console.log('%c 🦆 <div> %c [[ >_< Mulptiple bird applicators detected--ending one >_< ]]', 'font-size:30px;', 'background: #222; color: #bada55; line-height: 40px;');
                    for(let i = 0; i < birdCont.children.length / 2; i++) {
                        birdCont.children[i].remove();
                    }
                    return;
                }
            }

            /*
                Bird's values generated below
            */
            let topPosition = Math.floor((Math.random() * 400) + 100);
            let scale = Math.random().toFixed(1);
            if (scale < 0.5) {
                scale = 1 - scale;
            }
            let speed = 12 / scale;
            let newBirdSpeed = Math.floor((Math.random() * 4) + 1) * 1000;
            let birdOut = document.createElement('div');
            
            /*
                The bird is bellow!
            */
            let newBird =
                `
                <div value='false' class='birdClick' style="top: ${topPosition}px; animation: fly ${speed}s linear; transform: scale(${scale}); height: 50px; width: 50px; padding-left: 50px; z-index: 100; background-color: transparent; position: absolute"></div>
                <div class='birdContainer' style="top: ${topPosition}px; animation: fly ${speed}s linear; transform: scale(${scale})">
                    <div class='birdBody'></div>
                    <div class='divBirdWing'></div>
                </div>
                `;
            birdOut.innerHTML = newBird;
            let s = 's';
            let scaleText = scale;
            if (scaleText === 1) { scaleText = '1.0'; }
            if (newBirdSpeed === 1000) { s = ' '; }
            let text = ` speed ${speed.toFixed(2)} | scale ${scaleText} | top ${topPosition}px | next bird in ${newBirdSpeed / 1000} second${s} `;
            console.log('%c 🦆 <div> %c' + text, 'font-size:30px;', 'background: #222; color: #bada55; line-height: 40px;');
            
            /*
                Appends bird, sets timer to call this function,
                sets timer to remove the bird it added
            */
            if (document.getElementById('birdUp')) {
                document.getElementById('birdUp').appendChild(birdOut);
                let birdLength = document.getElementById('birdUp').children.length;
                setTimeout(function () {
                    birdApplicator(birdLength);
                    return;
                }, newBirdSpeed);
                setTimeout(function () {
                    birdOut.remove();
                }, speed * 1000)
            }

            /*
                Event listeners for all the birds!
            */
            let birdClick = document.getElementsByClassName('birdClick');
            if (birdClick) {
                for (let x = 0; x < birdClick.length; x++) {
                    if (document.getElementsByClassName('birdClick')[x].getAttribute('value') === 'false') {
                        document.getElementsByClassName('birdClick')[x]
                            .addEventListener("click", function (e) {
                                birdNumberUp();
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.transition = 'all 5s ease-out';
                                e.target.nextElementSibling.style.transform = 'rotate(180deg) translateY(-100vh)';
                                e.target.nextElementSibling.lastElementChild.style.animation = 'wing 75ms infinite alternate-reverse';
                                setTimeout(function () {
                                    if (e.target.nextSibling && e.target) {
                                        e.target.nextSibling.remove();
                                        e.target.remove();
                                    }
                                }, 5000);
                            });
                        document.getElementsByClassName('birdClick')[x].setAttribute('value', 'true');
                    }
                }
            }
            return;
        }

    }, []);

    return (

        <div>
            <div id='keyboardContainer'>
                <img id='aboutKeyboard' src={keyboard} alt="Keyboard in sketchy style" className='cantTouchThis' />
            </div>
            <h1 id='score' style={{position: 'absolute', backgroundColor: 'white', top: '75px', left: '20px', borderRadius: '10px'}} className='cantTouchThis'>
                {
                (props.birdsClicked === 0)
                    ? <div></div>
                    : '[ '+props.birdsClicked+' ]'
                }
            </h1>
            <div id='birdUp'></div>
            <Container style={{ border: '1px solid transparent' }}>
                <div id='containTheFace'>
                    <img id='face' src={face} alt='A drawing I did of my face.' />
                </div>
                <div id='aboutBody'>
                    <Row>
                        <Col md={4}>
                        </Col>
                        <Col>
                            <div style={{ border: '1px dotted black', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.90)', padding: '10px', }}>
                                About Content
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>

    );

}

export default About