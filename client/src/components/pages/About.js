import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import keyboard from '../images/keyboard.png';
import face from '../images/face.png'

function About() {

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