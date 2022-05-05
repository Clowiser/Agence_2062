import React from 'react';
import image from "../assets/fond2.png";
import cerveau from "../assets/puce_cerveau.png";
import { Card, Col, Row, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="text-light" style={{ backgroundImage: `url(${image}` }}>
            <Row xs={3} className="justify-content-md-center">
                <Col>
                    <Card style={{ width: '8rem', height: '10rem', backgroundColor: '#2F8AB750', borderRadius:10, fontSize:15 }}>
                        <Card.Title style={{fontSize:15}}>Agence(2062) USA</Card.Title>
                        <Card.Text>Spécialité <strong>Neptune</strong></Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem', height: '10rem', backgroundColor: '#2F8AB750', borderRadius:10, fontSize:15 }}>
                        <Card.Title style={{fontSize:15}}>Agence(2062) Suisse</Card.Title>
                        <Card.Text>Spécialité <strong>Venus</strong></Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem', height: '10rem', backgroundColor: '#2F8AB750', borderRadius:10, fontSize:15 }}>
                        <Card.Title style={{fontSize:15}}>Agence(2062) Japon</Card.Title>
                        <Card.Text>Spécialité <strong>Saturne</strong></Card.Text>
                    </Card>
                </Col>
            </Row>
            <br/>
            <p style={{borderTop:"4px solid rgb(255,255,255,0.29)", borderRadius: 10, width:"50%", margin:"auto"}}></p>
            <br/>
            <p>Pour nous suivre partout dans la galaxie et au delà :</p>
            <div className="logo">
                <Image src="https://img.icons8.com/color/48/000000/hal-9000.png" alt="jarvis" />
                <Image src="https://img.icons8.com/color/48/000000/hologram.png" alt="hologramme" />
                <Image src={cerveau} alt="puce_neurone" style={{width:'12%'}} />
                <Image src="https://img.icons8.com/color/48/000000/bmo.png" alt="bango" />
                <Image src="https://img.icons8.com/color/48/000000/apple-watch-apps.png" alt="watch" />
            </div>
            <br/>
            <p>© Copyright 2062 Agence(2062). Tous droits réservés.</p>
            <p>Termes et conditions</p>
            <br/>
        </div>
    );
};

export default Footer;