const Fixtures = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10"
      style={{
        backgroundImage: "url('https://i.ibb.co/5cgSxf1/pngwing-com.png')",
      }}
    >
      <div className="max-w-4xl bg-lime-500 rounded-lg shadow-md p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Match Fixtures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="flex items-center justify-center text-center flex-col text-green-600 bg-lime-400 rounded-lg p-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Match 1</h2>
              <p>Date: May 12, 2024</p>
              <p>Time: 14:00</p>
              <p>Location: Pilot Field</p>
            </div>
            <div className="mt-4">
              <p>Home Team: Zenith FC</p>
              <p>Away Team: Strikerz FC</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-center flex-col  text-green-600 bg-lime-400 rounded-lg p-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Match 2</h2>
              <p>Date: May 15, 2024</p>
              <p>Time: 14:00</p>
              <p>Location: Stadium 1</p>
            </div>
            <div className="mt-4">
              <p>Home Team: Falcon FC</p>

              <p>Away Team: Zenith FC</p>
            </div>
          </div>

          {/* Add more match fixtures as needed */}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
