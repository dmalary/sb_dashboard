import './App.css'

import { useState } from "react";

// import NavBtn from "../components/NavBtn";
import ActiveTeamCard from "../components/ActiveTeamCard";
import VsTeamCard from "../components/VsTeamCard";

import sb_standings from "../data/sb_standings.json"
import team_hex from "../data/team_hex.json"

function App() {
  // console.log('sb_standings', sb_standings)
  
  const teams = sb_standings.map(el => el.tm_abr);
  // console.log('teams', teams);

  const [activeTeam, setActiveTeam] = useState("");
  console.log('activeTeam', activeTeam);
  // const [isActive, setIsActive] = useState(false);
  const [hoveredTeam, setHoveredTeam] = useState("");

  const handleClick = (e) => {
    const val = e.target.value;
    console.log('val', val);
    setActiveTeam(val)
  };

  // const teamColor = team_hex.find(el => el.team_code === activeTeam)?.color || "#ccc";

  return (
    <div className='min-h-200'>
    <div className="grid grid-cols-1 mx-auto pt-8 pb-6 w-5/6">
      <h1 className='app-title py-6 px-2'>Superbowl Matchups</h1>
      <p>This visual displays teams that have appeared in the Super Bowl. Click on a team name to explore details about their Super Bowl matchups, including opponents, game dates, and total appearances.</p>
      <br/>
      <p>Super Bowl games are highlighted in <span className="font-semibold text-red-600">red</span> for losses and <span className="font-semibold text-green-600">green</span> for wins.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className='col-span-3 mt-4 mb-4 mx-auto'>
        {teams.map((team) => {
          // console.log('team', team),
          const teamColor = team_hex.find(el => el.team_code === team)?.color || "#ccc";
          const isActive = hoveredTeam === team;

          return (
          <button 
            onMouseEnter={() => setHoveredTeam(team)}
            onMouseLeave={() => setHoveredTeam("")}
            onFocus={() => setHoveredTeam(team)}
            onBlur={() => setHoveredTeam("")}
            tabIndex={0} 
            key={team}
            value={team}
            onClick={handleClick}
            className='text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600'
            style={{
              // color: '#f9f9f9',
              // backgroundColor: team_hex.find(el => el.team_code === team)?.color,
              color: isActive ? teamColor : '#f9f9f9',
              backgroundColor: isActive ? '#f9f9f9' : teamColor,
              // border: isActive ? `1px solid ${teamColor}` : 'none' ,
              border: `1px solid ${teamColor}`,
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
          >{team}</button>
          )
          })}
      </div>
      
      {
        (!activeTeam) ? 
        <div className='col-span-3 italic'>PLEASE SELECT A TEAM</div>
        :
        <>
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2">
          <div className='col-span-1'><ActiveTeamCard team={activeTeam} /></div>
          <div className='col-span-1'><VsTeamCard team={activeTeam} /></div>
        </div>
        </>
      }
      {/* <div className="col-span-3 grid grid-cols-1 md:grid-cols-2">
        <div className='col-span-1'><ActiveTeamCard team={activeTeam} /></div>
        <div className='col-span-1'><VsTeamCard team={activeTeam} /></div>
      </div> */}
    </div>
    </div>
  )
}

export default App
