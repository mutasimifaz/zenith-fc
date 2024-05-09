import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

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

      <div className="p-4  bg-indigo-400 rounded-xl">
        <h2 className="text-lime-400 text-xl mb-2 text-center">
          {displayname}
        </h2>
        <p className="text-yellow-500 text-sm md:text-base lg:text-xl text-center">
          <FontAwesomeIcon icon={faFutbol} /> {position}
        </p>
        <p className="text-violet-600	 text-sm md:text-base lg:text-xl text-center">
          Age :{age}
        </p>
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
