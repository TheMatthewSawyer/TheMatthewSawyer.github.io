import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import keyboard from '../images/keyboard.png';
import face from '../images/face.png';
import background from '../images/background.png';

function About() {

    React.useEffect(() => {
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundImage = `url('${background}')`;
        x.style.backgroundColor = 'black';
        x.style.backgroundPositionY = '56px';
        x.style.backgroundRepeat = 'no-repeat';

        birdApplicator();

        function birdApplicator() {
            let topPosition = Math.floor((Math.random() * 400) + 100);
            let scale = Math.random().toFixed(1);
            if (scale < 0.5) {
                scale = 1 - scale;
            }
            let speed = 12 / scale;
            let newBirdSpeed = Math.floor((Math.random() * 4) + 1)*1000;
            console.log(newBirdSpeed);
            let birdOut = document.createElement('div');
            birdOut.innerHTML =
                `
            <div value='false' class='birdClick' style="top: ${topPosition}px; animation: fly ${speed}s linear; transform: scale(${scale}); height: 50px; width: 50px; padding-left: 50px; z-index: 100; background-color: transparent; position: absolute"></div>
            <div class='birdContainer' style="top: ${topPosition}px; animation: fly ${speed}s linear; transform: scale(${scale})">
                <div class='birdBody'></div>
                <div class='divBirdWing'></div>
            </div>
            `;
            console.log('speed', speed, 'scale', scale, 'top', topPosition);
            if (document.getElementById('birdUp')) {
                document.getElementById('birdUp').appendChild(birdOut);
                setTimeout(function () {
                    birdApplicator();
                    return;
                }, newBirdSpeed);
                setTimeout(function () {
                        birdOut.remove();
                }, speed*1000-100)
            }
            let birdClick = document.getElementsByClassName('birdClick');
            if (birdClick) {
                for (let x = 0; x < birdClick.length; x++) {
                    if (document.getElementsByClassName('birdClick')[x].getAttribute('value') === 'false') {
                        document.getElementsByClassName('birdClick')[x]
                            .addEventListener("click", function (e) {
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
                <img id='aboutKeyboard' src={keyboard} alt="Keyboard in sketchy style"  className='cantTouchThis'/>
            </div>
            <div id='birdUp'></div>
            <Container style={{ border: '1px solid transparent' }}>
                <div id='containTheFace'>
                    <img id='face' src={face}/>
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