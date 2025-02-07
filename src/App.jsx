import './App.css'

import { useState } from "react";

// import NavBtn from "../components/NavBtn";
import ActiveTeamCard from "../components/ActiveTeamCard";
import VsTeamCard from "../components/VsTeamCard";

import sb_standings from "../data/sb_standings.json"

function App() {
  // console.log('sb_standings', sb_standings)
  
  const teams = sb_standings.map(el => el.tm_abr);
  // console.log('teams', teams);

  const [activeTeam, setActiveTeam] = useState("");

  const handleClick = (e) => {
    const val = e.target.value;
    console.log('val', val);
    setActiveTeam(val)
  };

  console.log('activeTeam', activeTeam);

  return (
    <>
      <div>
        {teams.map((team) => (
          <button 
            key={team}
            value={team}
            onClick={handleClick}
          >{team}</button>
        ))}
      </div>
      
      <div>
        <ActiveTeamCard team={activeTeam} />
        <VsTeamCard team={activeTeam} />
      </div>
    </>
  )
}

export default App
