import React from 'react'

const TeamCard = (props) => {
    const {
        title,
        text,
        description,
        btn_text
    } = props
    return (
        <div className="card shadow animate__animated animate__rubberBand p-3 mb-5 bg-body rounded">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <img src="assets/img/team_logo.png" alt={props.title} className="rounded-circle img-fluid"  />
                    </div>
                    <div className="col-md-8">
                        {title && <h5 className="card-title text-capitalize">{props.title}</h5>}
                        {text && <p className="card-text">{props.text}</p>}
                        {description && <p className="card-text">{props.description}</p>}
                        {btn_text && <a href="#" className="btn btn-danger">{props.btn_text}</a>}
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default TeamCard
