import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Modal() {

    return (
        <Card className='infoModal' id='inModal'>
            <Card.Header>Quote <FontAwesomeIcon icon={faTimesCircle} className='exitBtn' id='exitButton'/></Card.Header>
            <Card.Body>

                <p>
                    {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                </p>
                <footer className="">
                    Place holder text for now
                </footer>

            </Card.Body>
        </Card>
    );

}

export default Modal