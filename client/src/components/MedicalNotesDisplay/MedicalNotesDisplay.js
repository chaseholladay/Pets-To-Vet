import React from "react";

class MedicalNotesDisplay extends React.Component {

    render() {

        return (
            <div>
                <div className="basicinformation">

                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <h5>NOTES</h5>
                                    <label>Species:</label>
                                    <h5>{}</h5>

                                    <label>Sex:</label>
                                    <h5>{}</h5>

                                    <label>Age:</label>
                                    <h5>{}</h5>

                                    <label>Behavior:</label>
                                    <h5>{}</h5>

                                    <div className="row">
                                        <label>Previous Medical History:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                                <h5>Physical Examination:</h5>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>Time:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <label>Veterinarian:</label>
                                <h5>{}</h5>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>Weight:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>Temp</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>Pulse:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>Resp:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>MM/CRT</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>BCS(1-10)</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <label>Hydration:</label>
                                <h5>{}</h5>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                                <h5>Physical Exam Notes</h5>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>GA:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label >Integ:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>EENT:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>Integ:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>EENT:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>CV:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>Resp:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>M/S:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>PLN:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>GU:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <label>PLN:</label>
                                        <h5>{}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
};

export default MedicalNotesDisplay;