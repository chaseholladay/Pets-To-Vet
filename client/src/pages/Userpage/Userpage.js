import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import NewPetForm from "../../components/newPetForm";
import MedicalNotesDisplay from "../../components/MedicalNotesDisplay";
import { Modal, Button, CardPanel } from 'react-materialize';
import Auth from '../../modules/Auth';
import axios from 'axios';
import "./Userpage.css";

class Userpage extends Component {

    state = {
        userInfo: [],
        Petinfo: []
    };

    config = {
        method: "get",
        url: "/api/Pets/ByEmail/" + localStorage.getItem('user'),
        headers: { "Authorization": `bearer ${Auth.getToken()}` },
        responseType: 'json'
    }

    componentDidMount() {
        axios(this.config)

            .then((response) => {
                console.log(response);
                this.setState({ Petinfo: response.data })

            })
    }

    render() {

        return (

            <Container fluid>

                <CardPanel className="header">
                    <h1>Your Pets</h1>
                </CardPanel>

                <CardPanel className="petscard">

                    {
                        this.state.Petinfo.concat('Add a Pet').map(pet => (
                            typeof pet == 'string' ? <div id="petModal"><Modal trigger={<Button><i className="material-icons left">add</i>{pet}</Button>}>
                                <NewPetForm></NewPetForm>
                            </Modal></div> :
                                <div id="petModal">
                                    <Modal trigger={<Button><i className="material-icons left">pets</i>{pet.name}</Button>} >
                                        <code>{JSON.stringify(pet)}</code>
                                        <ul>
                                            {['age', 'dob', 'type', 'breed', 'gender', 'food', 'vaccines']
                                                .filter(key => pet[key] && pet[key].length > 0)
                                                .map(key => key === 'dob' ? 'DOB' : key.slice(0, 1).toUpperCase() + key.slice(1))
                                                .map(key => <Row><li>{key + ': ' + pet[key.toLowerCase()]}</li>   </Row>)}
                                            <MedicalNotesDisplay />
                                        </ul>
                                    </Modal>
                                </div>
                        ))
                    }
                </CardPanel>
            </Container>
        )
    }
}
export default Userpage;