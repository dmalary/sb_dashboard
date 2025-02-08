/* eslint-disable react/prop-types */

import sb_standings from "../data/sb_standings.json"

const ActiveTeamCard = ({team, teamColor}) => {
  // if (!team) return <div>No team selected</div>;

  // team && console.log('sb_standings', sb_standings)
  // team && console.log('sb_standings', sb_standings.tm_abr[team])

  const teamInfo = sb_standings.find(el => el.tm_abr === team);

  // console.log('teamInfo', teamInfo);
  return (
    <div className="block max-w-sm p-6 my-4 mx-auto bg-white rounded-lg shadow-sm dark:bg-white-800"
      style={{
        // border: `3px solid ${teamColor}`,
        color: '#f9f9f9',
        backgroundColor: teamColor,
      }}
    >
      <h2><strong>{teamInfo.Tm}</strong></h2>
      <p>Wins: {teamInfo.W}</p>
      <p>Losses: {teamInfo.L}</p>
      <p>W-L%: {teamInfo["W-L%"]}</p>
      <p>Points for: {teamInfo.PF}</p>
      <p>Points against: {teamInfo.PA}</p>
      <p>Points differential: {teamInfo.PD}</p>
    </div>
  )
}
export default ActiveTeamCard;