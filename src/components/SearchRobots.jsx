import "../style/SearchRobot.css"
import React from "react"
function SearchRobot({value, onChange}){
return (
<div className="robot_search">
<input  type='text' placeholder="Rechercher par nom" value={value} onChange={(e) => onChange(e.target.value)}/>
</div>
)
}

export default SearchRobot