import React from 'react'

function Footer() {
    return (
        <div className="container-fluid mt-5 py-5 bg-dark" style={{height:"300px", border:"3px solid red"}}>
            <div className="container text-center text-white">
            <img src="assets/img/slack_logo.png" alt="test" className="rounded-circle me-2" width="40" height="40" />
            Hack Slack App @ 2021
            </div>
        </div>
    )
}

export default Footer
