import React from 'react'
import TextFieldInput from "../common/TextFieldinput";


const NewTeamView = (props) => {
    return (
        <div className="container-fluid">
            <div className="container my-5">
                <div className="card animate__animated animate__rubberBand  mx-auto shadow p-3 mb-5 bg-body rounded" style={{ width: "25rem" }}>
                    <div className="card-body">
                    <form onSubmit={props.handleSubmit}>
                        <TextFieldInput
                            type="text"
                            name="name"
                            id="name"
                            value={props.name}
                            onChange={props.handleChange}
                            placeholder="Android Dev Team"
                            className="form-control"
                            lblText="Team Name"
                            infoText="This will be you chat group / team"
                            // error={error.name}
                        />
                                
                                <TextFieldInput
                                    type="text"
                                    name="desc"
                                    id="desc"
                                    value={props.desc}
                                    onChange={props.handleChange}
                                    placeholder="android team for video streaming project"
                                    className="form-control"
                                    lblText="Team Description"
                                    // error={error.desc}
                                />
                               
                                    <button type="submit" class="btn btn-primary" style={{float:"right"}}>Create Team</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
             
    )
}

export default NewTeamView