import PropTypes from "prop-types";
const Player = ({ player }) => {
  const { displayname, position, age, image } = player;
  return (
    <div className="bungee-regular overflow-hidden ld:w-48 border-2 border-indigo-700 rounded-xl hover:shadow-lg">
      <div className=" mask mask-decagon rounded-lg ">
        <img
          src={image}
          alt={`Card`}
          className="w-full items-center content-center object-cover border-2 border-indigo-700"
        />
      </div>

      <div className="p-4  bg-indigo-400  rounded-xl">
        <h2 className="text-white text-xl mb-2">{displayname}</h2>
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
