import { useEffect, useState, useMemo } from "react";
import CardItem from "./CardItem";
import "../style/CardRobot.css"
import SearchRobot from "./SearchRobots";

function CardRobot() {
    const [robots, setRobots] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        const getRobots = async() =>{
            try{
                const reponse= await fetch("https://jsonplaceholder.typicode.com/users")
                const robots = await reponse.json();
                setRobots(robots);
            }
            catch(error){
                console.log("error", error)
            }

        }
        getRobots()
    
    }, [])

    const filtredRobots = useMemo(()=> {
        if(robots?.length && searchText.length >=3){
            return robots.filter((robot) => robot.name.toUpperCase().includes(searchText.toUpperCase())
            );
        }
        return robots;
    }, [robots, searchText]);
    return <div>
        <SearchRobot value={searchText} onChange={setSearchText} />
        <div className="list_container">
            {filtredRobots?.map((robot) => (
              <CardItem key={robot.id} robot={robot} />  
            ))}
        </div>
    </div>
}

export default CardRobot