import React from 'react'

const RegisterView = (props) => {
    return (
        <div className="container-fluid">
            <div className="container my-5">
                <div className="card animate__animated animate__rubberBand  mx-auto shadow p-3 mb-5 bg-body rounded" style={{ width: "25rem" }}>
                    <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                               
                                    <button type="submit" class="btn btn-success" style={{float:"right"}}>Register</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
             
    )
}

export default RegisterView