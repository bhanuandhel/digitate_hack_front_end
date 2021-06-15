import React from 'react'
import TeamCard from '../Layout/TeamList/TeamCard'

const MyTeamView = (props) => {
    let out ='';
        if(props.teamList === 0){
            out = (
                <div className="col-md-12 text-center" style={{height:"300px"}}>
                <p className="h4">You Don`t  created any chat team yet</p>
            </div>
            )
        }else{
            out = props.teamList.map((team, i) =>(
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
        <div className="container-fluid py-5">
        <div className="container">
            <div className="row">
               
               {out}
                
            </div>
        </div>
    </div>
    )
}

export default MyTeamView
