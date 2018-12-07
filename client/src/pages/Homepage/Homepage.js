import React, { Component } from "react";
import { Container } from "../../components/Grid";
import './Homepage.css'

class Homepage extends Component {

    render() {

        return (

            <Container fluid>

                <div className="container">
                    <div className="col s12 m6">
                        <div className="card yellow darken-2">
                            <div className="card-content white-text">
                                <span className="card-title">About Pets to Vet</span>
                                <div className="row">
                                <br/>
                                <p>Our site's goal is to help pet owners and veterinarians by having all of your pet's medical informaiton in one spot.</p>
                                <br/>
                                <p>Simply create an account, and add all your pets!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="col s12 m6">
                        <div className="card #f9a825 yellow darken-2">
                            <div className="card-content white-text">
                                <span className="card-title">Links to Learn about your Pets!</span>
                                <div className="row">
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="http://www.animalclinicsofthewoodlands.com/new-pet-owner-tips.html">New Pet Owner</a>
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="https://animalfoundation.com/the-basic-necessities-of-proper-pet-care/">Basic Care</a>
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="http://www.mypet.com/pet-care-tips.aspx">Seasonal Tips</a>
                                </div>
                                <div className="row">
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="https://www.animalhumanesociety.org/lost-and-found/preventing-lost-pets">Preventing Lost Pets</a>
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="https://www.akc.org/expert-advice/health/flea-and-tick-prevention-tips/">Flea and ticks</a>
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics">Heartworm and other parasites</a>
                                </div>
                                <div className="row">
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="https://www.animalhumanesociety.org/lost-and-found/preventing-lost-pets">Preventing Lost Pets</a>
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="https://www.diamondbackdrugs.com/how-to-identify-common-infections-in-pets/">Other Infections</a>
                                    <a className="btn-small grey-text text-lighten-3 col s4" target="_blank" href="https://petnutritionalliance.org/">Nutrition</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        )
    }
}
export default Homepage