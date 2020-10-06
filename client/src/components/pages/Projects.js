import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Projects(props) {
    // const [hasSeenProject, setHasSeenProject] = useState(false);

    React.useEffect(() => {
        if(props.hasSeenProject === true)  {
            document.getElementById('projectsHeadCent').classList.remove('projectsHeadCentAnimation');
            document.getElementById('cardOne').classList.remove('projectCardOneAnimation');
            document.getElementById('cardTwo').classList.remove('projectCardTwoAnimation');
            document.getElementById('cardThree').classList.remove('projectCardThreeAnimation');
            document.getElementById('cardFour').classList.remove('projectCardFourAnimation');
        } else {
            console.log('false')
        }
        document.getElementsByTagName("BODY")[0].style.backgroundImage = `none`;
        document.getElementsByTagName("BODY")[0].style.backgroundColor = 'white';
        setTimeout(()=>{
            props.setHasSeenProject(true);
        }, 2000);
        
    
    }, []);

    return (
        <Container>
            <Row style={{ marginTop: '20px' }}>
                <Col className='text-center' id='projectsHeader'>
                    <div id='projectsHeadCent' className='projectsHeadCentAnimation cantTouchThis'>
                        Projects
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={3} style={{ marginTop: '30px' }}>
                    <Card id='cardOne' style={{ height: '100%' }} className="text-center projectCardOneAnimation cardDefault">
                        <Card.Header>ReactJS, JS</Card.Header>
                        <Card.Img variant="top" src="https://via.placeholder.com/150x75"/>
                        <Card.Body>
                            <Card.Title>Employee Database</Card.Title>
                            <Card.Text>
                                An indexedDB React employee database 
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{ marginTop: '30px' }}>
                    <Card id='cardTwo' className="text-center projectCardTwoAnimation cardDefault">
                        <Card.Header>JS</Card.Header>
                        <Card.Img variant="top" src="https://via.placeholder.com/150x75"/>
                        <Card.Body>
                            <Card.Title>Weather App</Card.Title>
                            <Card.Text>
                                Super simple weather app using an API and featuring a panda.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{ marginTop: '30px' }}>
                    <Card id='cardThree' className="text-center projectCardThreeAnimation cardDefault">
                        <Card.Header>Featured</Card.Header>
                        <Card.Img variant="top" src="https://via.placeholder.com/150x75"/>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{ marginTop: '30px' }}>
                    <Card id='cardFour' className="text-center projectCardFourAnimation cardDefault">
                        <Card.Header>Featured</Card.Header>
                        <Card.Img variant="top" src="https://via.placeholder.com/150x75"/>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;