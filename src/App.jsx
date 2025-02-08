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
    <div className='min-h-200'>
    <div className="grid grid-cols-1">
      <h1>Superbowl Matchups</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className='col-span-3'>
        {teams.map((team) => (
          <button 
            key={team}
            value={team}
            onClick={handleClick}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >{team}</button>
        ))}
      </div>
      
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2">
        <div className='col-span-1'>

        <ActiveTeamCard team={activeTeam} />
        </div>
        <div className='col-span-1'>
        <VsTeamCard team={activeTeam} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
