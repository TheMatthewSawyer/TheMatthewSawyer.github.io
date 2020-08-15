import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

function Home() {

    React.useEffect(() => {
        const colors = ['#D33E43', '#F9B624', '#2FEE9C', '#5D4A66', '#BCB6FF', '#0A81D1',];
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
            console.log('called');
        }
        cycleColors();
        /*
        Bellow adds event listeners for hoverable icons
        */
        for(let z = 0; z < icons.length; z++) {
            icons[z].addEventListener('mouseover',()=>{
                infoHover[z].style.display = 'block';
            });
            icons[z].addEventListener('mouseout',()=>{
                infoHover[z].style.display = 'none';
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
            if(greetingCounter < greetingText.length) {
                greetingDisplay.innerHTML += greetingText.charAt(greetingCounter);
                greetingCounter++;
                setTimeout(typeGreeting, 100);
            } else {
                typeSubtitle();
            }
        }
        function typeSubtitle() {
            if(subtitleCounter < subtitleText.length) {
                subtitleDisplay.innerHTML += subtitleText.charAt(subtitleCounter);
                subtitleCounter++;
                setTimeout(typeSubtitle, 100);
            }
        }
        typeGreeting();

    }, []);

    const infoHover = document.getElementsByClassName('infoHover');


    return (
        <Container style={{ marginTop: '20px' }}>

            <div className='greetingContainer'>
                <h1 id='greeting' class='outline cantTouchThis'></h1>
                <h2 id='subtitle' class='outlineInverse' style={{height:'50px'}}></h2>
            </div>
            <Row style={{ marginTop: '10px' }}>

                <Col md={12}>
                    <Card style={{ textAlign: 'center', padding: '10px' }} id='skillsCard'>

                        <Card>
                            <Card.Title style={{margin: '0', padding: '5px 0px',fontSize: '24px'}}>Skills</Card.Title>
                        </Card>

                        <Card.Body>
                            <Row>

                                <Col>
                                    <FontAwesomeIcon icon={faJava} size='4x' className='skillIcon' />
                                    <span className='infoHover'>Java</span>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon icon={faJsSquare} size='4x' className='skillIcon' />
                                    <span className='infoHover'>JavaScript</span>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon icon={faNode} size='4x' className='skillIcon' />
                                    <span className='infoHover'>NodeJS</span>
                                </Col>

                            </Row>
                            <Row style={{ marginTop: '20px' }}>

                                <Col>
                                    <FontAwesomeIcon icon={faBootstrap} size='4x' className='skillIcon' />
                                    <span className='infoHover'>Bootstrap</span>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon icon={faCss3Alt} size='4x' className='skillIcon' />
                                    <span className='infoHover'>CSS3</span>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon icon={faReact} size='4x' className='skillIcon' />
                                    <span className='infoHover'>React</span>
                                </Col>

                            </Row>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>

            {/* <Col md={4}>
                <Card>
                    <Card.Body>wut</Card.Body>
                </Card>
            </Col> */}


        </Container>
    )
}
export default Home;