import React from 'react'
import TextFieldInput from '../common/TextFieldinput'

const RegisterView = (props) => {
    return (
        <div className="container-fluid">
            <div className="container my-5">
                <div className="card animate__animated animate__rubberBand  mx-auto shadow p-3 mb-5 bg-body rounded" style={{ width: "25rem" }}>
                    <div className="card-body">
                            <form onSubmit={props.handleSubmit}>
                                <TextFieldInput 
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={props.username}
                                    onChange={props.handleChange}
                                    placeholder="UseName"
                                    className="form-control"
                                    lblText="Username"
                                    infoText="Your username will shown in chat list."
                                    // error={}
                                />

                                <TextFieldInput 
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={props.email}
                                    onChange={props.handleChange}
                                    placeholder="abc@abc.com"
                                    className="form-control"
                                    lblText="Email address"
                                    infoText="We will never share your email with anyone else."
                                    // error={}
                                />
                                
                                <TextFieldInput 
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={props.password}
                                    onChange={props.handleChange}
                                    placeholder="******"
                                    className="form-control"
                                    lblText="Password"
                                    // infoText="Your username will shown in chat list."
                                    // error={}
                                />

                                <TextFieldInput 
                                    type="password"
                                    name="password1"
                                    id="password1"
                                    value={props.password1}
                                    onChange={props.handleChange}
                                    placeholder="******"
                                    className="form-control"
                                    lblText="Re-Type Password Again"
                                    infoText="Type same Password as above."
                                    // error={}
                                />
                                    <button type="submit" class="btn btn-success" style={{float:"right"}}>Register</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
             
    )
}

export default RegisterView
