import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
// import ModalTrigger from "../../components/ModalTrigger";
import API from "../../utils/API";
import NewPetForm from "../../components/newPetForm";
// import Modal from "../../components/Modal";
import { Modal, Button } from 'react-materialize'
import medicalNotesForm from '../../components/medicalNotesForm';
import Auth from '../../modules/Auth';
import axios from 'axios';

// import Nav from "../../components/Nav";

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

    // Need a way to get current user ID
    // loadUser = event =>{
    //     API.getUser
    // }

    render() {

        return (

            <Container fluid>

                {
                    this.state.Petinfo.concat('Add a Pet').map(pet => (
                        typeof pet == 'string' ? <div id="petModal"><Modal trigger={<Button>{pet}</Button>}>
                            <NewPetForm></NewPetForm>
                        </Modal></div> :
                            <div id="petModal">
                                {/* <ModalTrigger buttonName={pets.name} ID="aPet" IDof={"#"+pets._id}/> */}
                                {/* <Modal title={pets.name} trigger={<Button>{pet.name}</Button>} modalID={pets._id}> */}
                                <Modal trigger={<Button>{pet.name}</Button>} >

                                    <code>{JSON.stringify(pet)}</code>
                                    <ul>
                                        {['age', 'dob', 'type', 'breed', 'gender', 'food', 'vaccines']
                                            .filter(key => pet[key] && pet[key].length > 0)
                                            .map(key => key === 'dob' ? 'DOB' : key.slice(0, 1).toUpperCase() + key.slice(1))
                                            .map(key => <Row><li>{key + ': ' + pet[key.toLowerCase()]}</li>   </Row>)}
                                        {/*<li>{"Age: "+pet.age}</li>
                                    <li>{"DOB: "+pet.dob}</li>
                                    <li>{"Type: "+pet.type}</li>
                                    <li>{"Breed: "+pet.breed}</li>
                                    <li>{"Gender: "+pet.gender}</li>
                                    <li>{"Food: "+pet.food}</li>
                                    <li>{"Vaccines: "+pet.vaccines}</li>*/
                                        }
                                        <Modal trigger={<Button>Notes</Button>}>
                                            {/* ====== display medical notes here ========== */}

                                        </Modal>
                                    </ul>
                                </Modal>

                            </div>
                    ))
                }
                {/* <ModalTrigger ID="newPet" IDof="#newPetForm" buttonName="Add a Pet"/> */}



                <Row>
                    {/* <Modal title="Add a pet" modalID="newPetForm"> */}

                </Row>
            </Container>
        )
    }
}
export default Userpage;