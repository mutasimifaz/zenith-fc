import PropTypes from "prop-types";
const Player = ({ player }) => {
  const { displayname, position, age, image } = player;
  return (
    <div className="bungee-regular overflow-hidden w-80 shadow-lg">
      <div className=" mask hover:mask-circle transition transform hover:-translate-y-1 mask-decagon rounded-lg">
        <img
          src={image}
          alt={`Card`}
          className="w-full items-center content-center object-cover"
        />
      </div>

      <div className="p-4  bg-indigo-400  rounded-xl">
        <h2 className="text-white text-2xl mb-2">{displayname}</h2>
        <p className="text-white text-xl">Position: {position}</p>
        <p className="text-white text-xl">Age :{age}</p>
      </div>
    </div>
  );
};
Player.propTypes = {
  player: PropTypes.shape({
    displayname: PropTypes.string,
    position: PropTypes.string,
    age: PropTypes.number,
    altposition: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    ID: PropTypes.number,
  }),
};
export default Player;
