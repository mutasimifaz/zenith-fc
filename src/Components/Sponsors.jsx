import MI from "./../assets/mutasimifaz.png";
import Bruvana from "./../assets/bruvana.png";
import JB from "./../assets/jerseybird.png";
import HL from "./../assets/healthline.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHandshake } from "@fortawesome/free-solid-svg-icons";

const Sponsors = () => {
  return (
    <div className="container mx-auto bg-white py-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-yellow-500 sarpanch-regular">
        Meet Our Valuable Sponsors
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 items-center justify-center">
        <div className="sarpanch-regular bg-gray-300 rounded-xl overflow-hidden shadow-lg w-80">
          <img src={MI} alt={`Card`} className="w-full items-center" />
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-2 text-center">
              MI Web Services
            </h2>
            <button className="btn btn-outline btn-secondary">
              <a href="https://mutasimifaz.vercel.app/">
                Visit <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </a>
            </button>
          </div>
        </div>
        <div className="sarpanch-regular bg-gray-300 rounded-xl overflow-hidden shadow-lg w-80">
          <img src={Bruvana} alt={`Card`} className="w-full items-center" />
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-2 text-center">
              Bruvana
            </h2>
            <button className="btn btn-outline btn-secondary">
              <a href="https://bruvana.com/">
                Visit <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </a>
            </button>
          </div>
        </div>
        <div className="sarpanch-regular bg-gray-300 rounded-xl overflow-hidden shadow-lg w-80">
          <img src={JB} alt={`Card`} className="w-full items-center" />
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-2 text-center">
              Jersey Bird
            </h2>
            <button className="btn btn-outline btn-secondary">
              <a href="https://jerseybird.com/">
                Visit <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </a>
            </button>
          </div>
        </div>
        <div className="sarpanch-regular bg-gray-300 rounded-xl overflow-hidden shadow-lg w-80">
          <img src={HL} alt={`Card`} className="w-full items-center" />
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-2 text-center">
              Health Line
            </h2>
            <button className="btn btn-outline btn-secondary">
              <a href="https://healthline.com/">
                Visit <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </a>
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-2 text-center text-lime-500 sarpanch-regular">
        Become a sponsor
      </h1>
      <p className="text-center sarpanch-regular text-yellow-500">
        Let our team represent your brand and make it reach more people around
        the area
      </p>
      <div className="flex items-center justify-center content-center text-center">
        <button className="btn btn-outline btn-accent text-2xl">
          <a href="mailto:zenithfcofficial@gmail.com">
            Do the Deal <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Sponsors;
