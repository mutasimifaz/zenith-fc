// const HeroSection = () => {
//   return (
//     <div className="rubik-doodle-shadow-regular relative bg-gradient-to-r from-blue-400 to-purple-500 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-purple-600 to-purple-700"></div>
//         <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-500 to-blue-600"></div>
//         <div className="absolute inset-0 flex justify-center items-center">
//           <img
//             src="https://i.ibb.co/0ywbRcD/bar.png"
//             alt="Soccer Field"
//             className="w-full max-w-6xl"
//           />
//           <div className="absolute inset-0 flex justify-center items-center">
//             <div className="flex justify-center items-center shadow-lg transform hover:scale-110 transition duration-500">
//               <img
//                 src="https://i.ibb.co/qssmzQP/playing.png"
//                 alt="Player"
//                 className="w-64"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//
//     </div>
//   );
// };

// export default HeroSection;
function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 lg:h-96 flex items-center justify-center">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div>
          <img
            src="https://i.ibb.co/z5pXLQZ/Untitled-design-1.png"
            alt="Football Club"
            className="w-80 md:max-w-lg mx-auto md:ml-auto rounded-lg"
          />
        </div>

        <div className="relative z-0 max-w-7xl my-20 mx-auto flex flex-col items-center justify-center text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-green-300 font-bold mb-4 inset-0 bg-blur-xl mix-blend-overlay"
            style={{
              textShadow: "0 2px black",
            }}
          >
            Welcome to Our Football Club
          </h1>
          <p
            style={{
              textShadow: "0 0 5px black",
            }}
            className="text-lg md:text-xl lg:text-2xl text-yellow-400 mb-8"
          >
            The home of champions
          </p>
          <div className="flex gap-4 md:gap-8 rubik-doodle-shadow-regular">
            <a
              href="/fixtures"
              className="inline-block bg-white text-gray-900 py-3 px-8 rounded-full text-base lg:text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Fixtures
            </a>
            <a
              href="/tickets"
              className="inline-block border border-blue-500  py-3 px-8 rounded-full text-base lg:text-lg font-semibold bg-blue-500 text-gray-900 transition duration-300"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
