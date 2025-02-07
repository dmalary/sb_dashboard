/* eslint-disable react/prop-types */

import sb_games from "../data/sb_games.json"

const VsTeamCard = ({team}) => {
  if (!team) return <div>No team selected</div>;

  // create map  of vs team for team
  // add tag to items for win or loss?

  const gameInfo = sb_games.filter(el => el.Winner_abr === team || el.Loser_abr === team);

  // console.log('vsInfo', vsInfo);
  
  return (
    <div>
      <h2>Super Bowl Matchups for {team}</h2>
      {gameInfo.length === 0 ? (
        <p>No Super Bowl games found for {team}</p>
      ) : (
        gameInfo.map((game) => {
          const isWin = game.Winner_abr === team;
          const opponent = isWin ? game.Loser : game.Winner;
          const teamScore = isWin ? game.Pts_Winner : game.Pts_loser;
          const opponentScore = isWin ? game.Pts_loser : game.Pts_Winner;

          return (
            <div key={`${team}-${game.SB_roman}`} 
            // style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}
            >
              <hr/>
              <p>Opponent: {opponent}</p>
              <p>Stadium: {game.Stadium} ({game.City})</p>
              <p>Date: {game.Date}</p>
              <p>Final Score: {teamScore} - {opponentScore}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default VsTeamCard;