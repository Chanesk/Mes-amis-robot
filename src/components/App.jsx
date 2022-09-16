import  Title  from "./Title";
import SearchRobot from "./SearchRobots";
import CardRobot from "./CardRobot";
import "../style/App.css";
function App() {
  return (
  <container >
    <div className="container_robot">
      <Title />
      <CardRobot />
    </div>
  </container>
  )
}

export default App 