const Notfound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you`re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <img
          src="https://svgur.com/i/15pB.svg"
          alt="404 Error"
          className="mx-auto mb-8"
          style={{ maxWidth: "300px" }}
        />
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go to Home Page
        </a>
      </div>
    </div>
  );
};

export default Notfound;
