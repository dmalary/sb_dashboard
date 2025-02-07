/* eslint-disable react/prop-types */

const NavBtn = ({teams}) => {
  console.log('teams', teams);
  return (
    <>
      {teams.map((team) => (
        <button key={team}>{team}</button>
      ))}
    </>
  )
};
export default NavBtn;