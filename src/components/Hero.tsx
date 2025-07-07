// import Image from '../../src/assets/bg.png'

// const Hero = () => {
//   return (
//    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
//   {" "}
//   <div className="md:flex">
//     {" "}
//     <div className="md:shrink-0">
//       {" "}
//       <img
//         className="h-48 w-full object-cover md:h-full md:w-48"
//         src={Image}
//         alt="Modern building architecture"
//       />{" "}
//     </div>{" "}
//     <div className="p-8">
//       {" "}
//       <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
//         Company retreats
//       </div>{" "}
//       <a
//         href="#"
//         className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
//       >
//         {" "}
//         Incredible accommodation for your team{" "}
//       </a>{" "}
//       <p className="mt-2 text-gray-500">
//         {" "}
//         Looking to take your team away on a retreat to enjoy awesome food and
//         take in some sunshine? We have a list of places to do just that.{" "}
//       </p>{" "}
//     </div>{" "}
//   </div>
// </div>

//   )
// }

// export default Hero

import bgImage from '../../src/assets/bg.png'

const Hero = () => {
  return (
    <div className="py-6 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center gap-6">
      
      <div className="w-full md:w-1/2">
        <img
          src={bgImage}
          alt="Bookshelf background representing library management"
          className="w-full h-auto object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-6">
        <div className="text-indigo-600 md:text-2xl text-sm uppercase font-semibold tracking-wide">
          Minimal Library Management
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
          Welcome to Your Book Library
        </h1>
        <p className="mt-3 text-gray-600">
          Explore books, add new ones, and keep track of borrowed books in a clean and minimal system.
        </p>
        <div className="mt-4">
          <a
            href="/books"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>

    </div>
  </div>
</div>


  );
};

export default Hero;
