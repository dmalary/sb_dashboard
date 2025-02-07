import './App.css'

import NavBtn from "../components/NavBtn";
// import Team from "../components/Team";
// import VsTeam from "../components/VsTeam";

import sb_standings from "../data/sb_standings.json"

function App() {
  // console.log('sb_standings', sb_standings)
  
  const teams = sb_standings.map(el => el.tm_abr);
  console.log('teams', teams);

  return (
    <>
      <div>NAV</div>
      <NavBtn teams={teams}/>
      <div>
        <div>left - MAIN</div>
        <div>right
          <div>vs map</div>
        </div>
      </div>
    </>
  )
}

export default App
