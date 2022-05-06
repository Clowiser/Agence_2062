import React, { useEffect, useState } from 'react';
import Search from "./Search";
import axios from "axios";
import {Card, CardGroup, Col, Image, Row} from 'react-bootstrap';
import image from "../assets/ciel-etoile550x324.jpg";
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";

const HousingList = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
        setLoading(true)
        axios.get('https://api.jsonbin.io/b/6273d3dd38be296761fcc963')
            .then(res => {
                setData(res.data)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error)
            })
    }, []);

    if (error) return `We are sorry, we can't load information for the moment, try again later!`;
    if (loading) return `Loading, please wait...`;


    return (
        <div>
            <Search data={data} setFiltered={setFiltered} />

            {filtered
                .map((element) => {
                return (
                    <div>
                        <CardGroup style={{ backgroundImage: `url(${image}`, backgroundRepeat: "no-repeat", width: '80%', margin: "auto", borderRadius: 10, padding:"5px" }}>
                            <Image src={element.image} alt="habitat1" style={{ width: '90%', margin: "auto", padding: "6px", borderRadius: 10 }}></Image>
                            <Card style={{ backgroundColor: "#ffffffd6", width: '87%', margin: "auto", fontSize: "16px", padding:"6px" }} >
                                <p>{element.type}<strong>  {element.nb_piece}pièces {element.superficie} m²</strong></p>
                                <p style={{}}><strong>{element.name}</strong></p>
                                <Row xs={2}>
                                    <Col>
                                        <p style={{ backgroundColor: "red", width: "70%", borderRadius: 10, color: "white", fontSize: "14px" }} >Exclusivité</p></Col>
                                        <Col>
                                        <p><strong>{element.prix} / mois</strong></p>
                                    </Col>
                                </Row>
                                    <NavLink className="nav-link" to={`/liste/${element.idproduit}`} key={element.idproduit}>Habitats Details</NavLink>
                            </Card>
                        </CardGroup>
                        <br/>
                    </div>
                )
            })}
            <Outlet />
        </div>
    )
}

export default HousingList;