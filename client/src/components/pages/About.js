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

    React.useEffect(()=>{
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundImage = `url('${background}')`;
        x.style.backgroundColor = 'black';
        x.style.backgroundPositionY = '56px';
        x.style.backgroundRepeat = 'no-repeat';
        // background-position-x: -400px;
        // background-position-y: -70px;
        // background-repeat: no-repeat;
    },[])

    return (

        <div>
            <div id='keyboardContainer'>
                <img id='aboutKeyboard' src={keyboard} alt="Keyboard in sketchy style" />
            </div>
            <Container style={{ border: '5px solid black' }}>
                <div id='containTheFace'>
                    <img id='face' src={face} />
                </div>
                <div id='aboutBody'>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    
                </div>
            </Container>
        </div>

    );

}

export default About