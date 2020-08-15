import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import Modal from '../Modal';

function Home() {

    React.useEffect(() => {
        const colors = ['#D33E43', '#F9B624', '#2FEE9C', '#5D4A66', '#BCB6FF', '#0A81D1'];
        const icons = document.getElementsByClassName('skillIcon');
        var i = 0;
        var x = 0;
        var y = 0;
        /*
        Above are variables for the skill icons.
        It cycles through the all colors before
        stopping on the icon's chosen color.
        */
        function cycleColors() {
            if (x < icons.length) {
                if (i === colors.length) {
                    i = 0;
                }
                icons[x].style.color = colors[i];
                i++;
                y++;
                console.log(i, x)
                if (y > 5 && i - 1 === x) {
                    y = 0;
                    x++;
                }
                setTimeout(cycleColors, 150);
            }
        }
        cycleColors();
        /*
        Bellow adds event listeners for hoverable icons
        */
        for (let z = 0; z < icons.length; z++) {
            icons[z].addEventListener('mouseover', () => {
                infoHover[z].style.display = 'block';
            });
            icons[z].addEventListener('mouseout', () => {
                infoHover[z].style.display = 'none';
            });
        }
        /*
        Bellow adds event listeners for list items
        */
        var colorsDim = ['rgba(212, 64, 69, 0.25)','rgba(249, 182, 36, 0.25)','rgba(47, 238, 156, 0.25)','rgba(94, 75, 104, 0.25)','rgba(190, 184, 255, 0.25)','rgba(10, 130, 209, 0.25)'];
        var listItems = document.getElementsByClassName('listSkill');
        var currentColor = 0;
        var overlay = document.getElementById('overlay');
        var modal = document.getElementById('inModal');
        for (let z = 0; z < listItems.length; z++) {
            listItems[z].addEventListener('mouseover', () => {
                listItems[z].style.backgroundColor = `${colorsDim[currentColor]}`;
                currentColor++;
                if(currentColor > listItems.length) {
                    currentColor = 0;
                }
            });
            listItems[z].addEventListener('mouseout', () => {
                listItems[z].style.backgroundColor = 'transparent';
            });
            listItems[z].addEventListener('click', () => {
                modal.style.display = 'block';
                overlay.style.display = 'block';
            });
            document.getElementById('exitButton').addEventListener('click', () => {
                modal.style.display = 'none';
                overlay.style.display = 'none';
            });

        }
        
        /*
        Greeting text
        */
        const greetingText = "Hello! I'm Matthew :)";
        const subtitleText = "Full Stack Web Developer";
        const greetingDisplay = document.getElementById('greeting');
        const subtitleDisplay = document.getElementById('subtitle');
        var greetingCounter = 0;
        var subtitleCounter = 0;
        function typeGreeting() {
            if (greetingCounter < greetingText.length) {
                greetingDisplay.innerHTML += greetingText.charAt(greetingCounter);
                greetingCounter++;
                setTimeout(typeGreeting, 50);
            } else {
                typeSubtitle();
            }
        }
        function typeSubtitle() {
            if (subtitleCounter < subtitleText.length) {
                subtitleDisplay.innerHTML += subtitleText.charAt(subtitleCounter);
                subtitleCounter++;
                setTimeout(typeSubtitle, 75);
            } else {
                subtitleDisplay.innerHTML += "<span class='typeCursorDefault' id='typeCursor'>_</span>";
                typingCursor();
            }
        }
        function typingCursor() {
            if(document.getElementById('typeCursor')){
                document.getElementById('typeCursor').classList.toggle("typeCursorDefault");
                setTimeout(typingCursor, 530);
            }
        }
        typeGreeting();




    }, []);

    const infoHover = document.getElementsByClassName('infoHover');


    return (
        <Container style={{ marginTop: '20px' }}>
            <Modal />
            <div id='overlay'></div>
            <div className='greetingContainer'>
                <h1 id='greeting' className='outline cantTouchThis'></h1>
                <h2 id='subtitle' className='outlineInverse cantTouchThis' style={{ height: '50px' }}></h2>
            </div>

            <Card style={{ textAlign: 'center', padding: '10px', marginTop: '10px' }} id='skillsCard'>

                <Card>
                    <Card.Title style={{ margin: '0', padding: '5px 0px', fontSize: '24px' }}>Skills</Card.Title>
                </Card>

                <Card.Body>
                    <Row>

                        <Col>
                            <FontAwesomeIcon icon={faJava} size='4x' className='skillIcon' />
                            <span className='infoHover cantTouchThis'>Java</span>
                        </Col>

                        <Col>
                            <FontAwesomeIcon icon={faJsSquare} size='4x' className='skillIcon' />
                            <span className='infoHover cantTouchThis'>JavaScript</span>
                        </Col>

                        <Col>
                            <FontAwesomeIcon icon={faNode} size='4x' className='skillIcon' />
                            <span className='infoHover cantTouchThis'>NodeJS</span>
                        </Col>

                    </Row>
                    <Row style={{ marginTop: '20px' }}>

                        <Col>
                            <FontAwesomeIcon icon={faBootstrap} size='4x' className='skillIcon' />
                            <span className='infoHover cantTouchThis'>Bootstrap</span>
                        </Col>

                        <Col>
                            <FontAwesomeIcon icon={faCss3Alt} size='4x' className='skillIcon' />
                            <span className='infoHover cantTouchThis'>CSS3</span>
                        </Col>

                        <Col>
                            <FontAwesomeIcon icon={faReact} size='4x' className='skillIcon' />
                            <span className='infoHover cantTouchThis'>React</span>
                        </Col>

                    </Row>

                </Card.Body>

            </Card>

            <Card style={{ marginTop: '20px' }} id='listCard'>
                <Card.Body>
                    <Row>
                        <Col md={3} className='listHeader cantTouchThis'>
                            As well as...
                        </Col>
                        <Col md={9}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='listSkill cantTouchThis'>MySQL &amp; MongoDB</ListGroup.Item>
                                <ListGroup.Item className='listSkill cantTouchThis'>4 years Shift Leader at Menchie's</ListGroup.Item>
                                <ListGroup.Item className='listSkill cantTouchThis'>Taken courses in Discrete Mathematics &amp; Data Structures</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </Container>
    )
}
export default Home;