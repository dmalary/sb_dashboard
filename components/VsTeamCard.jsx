/* eslint-disable react/prop-types */

import sb_games from "../data/sb_games.json"

const VsTeamCard = ({team}) => {
  if (!team) return <div></div>;

  // create map  of vs team for team
  // add tag to items for win or loss?

  const gameInfo = sb_games.filter(el => el.Winner_abr === team || el.Loser_abr === team);

  // console.log('vsInfo', vsInfo);

  return (
    <>
      {/* <h2>Super Bowl Matchups for {team}</h2> */}
      {
        gameInfo.map((game) => {
          const isWin = game.Winner_abr === team;
          const opponent = isWin ? game.Loser : game.Winner;
          const teamScore = isWin ? game.Pts_Winner : game.Pts_loser;
          const opponentScore = isWin ? game.Pts_loser : game.Pts_Winner;

          return (
            <div 
              key={`${team}-${game.SB_roman}`} 
              className={`${team}-${game.SB_roman}`}
            >
              <div 
                // key={`${team}-${game.SB_roman}`} 
                // className="block max-w-sm p-6 m-6 bg-white rounded-lg shadow-sm dark:bg-white-800"
                className={`block max-w-sm p-6 my-4 mx-auto bg-white rounded-lg shadow-sm dark:bg-white-800 ${isWin ? 'border-2 border-green-700' : 'border-2 border-red-700'}`}
              >
                <p>vs: <strong>{opponent}</strong></p>
                <p>Stadium: {game.Stadium} ({game.City})</p>
                <p>Date: {game.Date}</p>
                <p className="italic">Final Score: {teamScore} - {opponentScore}</p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default VsTeamCard;