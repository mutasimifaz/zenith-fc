import zfc from "./../assets/zenithfc.svg";
const About = () => {
  return (
    <div className="bg-purple-600 min-h-screen flex flex-col justify-center items-center py-10 ">
      <div className="max-w-3xl bg-purple-500 rounded-lg shadow-md p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 stalinist-one-regular">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 teko">
          <div className="flex flex-col justify-center items-center ">
            <img
              src={zfc}
              alt="Company Logo"
              className="w-64 h-64 object-cover mb-6"
            />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              erat volutpat.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              quam et libero ultricies vehicula. Duis a ante nec ligula dictum
              dictum. Vivamus nec elit a nunc tristique laoreet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              quam et libero ultricies vehicula. Duis a ante nec ligula dictum
              dictum. Vivamus nec elit a nunc tristique laoreet.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-400 rounded-lg p-4 flex flex-col items-center">
              <img
                src="https://i.ibb.co/F3VLSNs/438032017-474470744904167-3905888118886803066-n.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Tahsin Alam Siam</h3>
              <p className="text-gray-600">President</p>
            </div>
            <div className="bg-purple-400 rounded-lg p-4 flex flex-col items-center">
              <img
                src="https://i.ibb.co/2FqHQ3f/438300341-454026487123323-6260555900541756196-n.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Mutasim Ifaz</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="bg-purple-400 rounded-lg p-4 flex flex-col items-center">
              <img
                src="https://i.ibb.co/0KStprd/408020778-899377505036771-1128604023257641593-n.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Rejoanul Karim</h3>
              <p className="text-gray-600">Chairman</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            quam et libero ultricies vehicula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
