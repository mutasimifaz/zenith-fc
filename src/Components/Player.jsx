import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faShirt } from "@fortawesome/free-solid-svg-icons";

const Player = ({ player }) => {
  const { displayname, position, goals, image } = player;
  return (
    <div className="bungee-regular overflow-hidden md:w-44 w-40 lg:w-48 ">
      <div className=" mask mask-parallelogram-3 rounded-lg bg-indigo-300 p-1 -my-7">
        <img
          src={image}
          alt={`Card`}
          className="w-full items-center content-center object-cover border-2 border-indigo-500"
        />
      </div>

      <div className="mask mask-parallelogram-3 p-1 bg-indigo-500">
        <div className="p-6 bg-indigo-400 rounded-xl mask mask-parallelogram-2">
          <h2 className="text-lime-400 text-xl mb-2 text-center">
            {displayname}
          </h2>
          <p className="text-yellow-500  mb-2 text-sm md:text-base lg:text-xl text-center">
            <FontAwesomeIcon icon={faShirt} /> {position}
          </p>
          <p className="text-violet-600 mb-2 text-sm md:text-base lg:text-xl text-center">
            <FontAwesomeIcon icon={faFutbol} /> {goals === "" ? "0" : goals}{" "}
            Goals
          </p>
        </div>
      </div>
    </div>
  );
};
Player.propTypes = {
  player: PropTypes.shape({
    displayname: PropTypes.string,
    position: PropTypes.string,
    goals: PropTypes.string,
    age: PropTypes.number,
    altposition: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    ID: PropTypes.number,
  }),
};
export default Player;
