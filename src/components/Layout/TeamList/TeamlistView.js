import React from 'react'
import TeamCard from './TeamCard'

const TeamlistView = (props) => {
    let out ='';
    const {teamList} = props
    if(teamList === 0){
        out = (
            <React.Fragment>
                <div className="col-md-6 text-center">
                    <TeamCard
                        title="Android E Commerce App"
                        text={"Team created by @Bhanu"}
                        btn_text="Join Now"
                    />
                </div>
            <div className="col-md-6 text-center">
                <p className="my-5 animate__animated animate__flash">Join this team to chat</p>
            </div>
            </React.Fragment>
        )
    }else{
        out = teamList.map((team, i) =>(
            <div className="col-md-6 text-center" key={i}>
                <TeamCard
                    title={team.name}
                    text={"Team created by @"+team.user.username}
                    description ={team.description}
                    btn_text="Join Now"
                />
            </div>
        ))
    }
    return (
        <div className="container-fluid py-5 bg-secondary">
        <div className="container">
            <div className="row">
               
               {out}
                
            </div>
        </div>
    </div>
        )
}

export default TeamlistView
