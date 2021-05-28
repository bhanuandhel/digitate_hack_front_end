import React from 'react'
import TeamCard from './TeamCard'

const TeamlistView = () => {
    return (
        <div className="container-fluid py-5 bg-warning">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <TeamCard
                            title="Android E Commerce App"
                            text="Team created by @bhanu."
                            btn_text="Join Now"
                        />
                    </div>
                    <div className="col-md-6 text-center">
                       <p className="my-5 animate__animated animate__flash ">Join this team to chat with project software developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamlistView
