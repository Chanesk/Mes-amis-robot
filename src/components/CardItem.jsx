import React from "react";
import "../style/CardItem.css"

export default function CardItem({robot}){
    return(
        <div className="robot_item">
            <div className="robot_img">
                <img src={`https://robohash.org/${robot.id}`} alt={robot.name} />
            </div>
            <div className="robot_info">
                <p className="name">{robot.name}</p>
                <p className="mail">{robot.email}</p>
            </div>
        </div>
    )
}