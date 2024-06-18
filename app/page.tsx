// pages/index.tsx

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Head>
        <title>Grooshack</title>
        <meta name="description" content="Welcome to Grooshack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white text-white p-4 flex flex-row justify-between animate-fade-in-down">
        <div className="flex flex-col md:flex-row">
          <h1 className="text-2xl font-bold text-sky-800">Grooshack</h1>
          <div className="hidden md:block w-auto md:ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-4 py-1 pr-10"
            />
          </div>
        </div>
        <div className='flex flex-row items-center justify-end w-fit'>
          <p className='text-neutral-950 text-sm font-medium cursor-pointer hover:underline mr-4'>Log In</p>
          <button className="bg-sky-800 px-4 py-2 rounded-md md:ml-4">Sign Up</button>
        </div>
      </header>
      <div className='px-8 bg-white md:hidden'>
        <input
          type="text"
          placeholder="Search..."
          className="bg-white w-full border border-gray-300 p-2 rounded-md"
        />
      </div>

      <main className="flex-grow px-8 md:px-48 bg-white animate-fade-in-down">
        <h2 className="text-3xl font-bold mb-4 md:mt-20 mt-8">Welcome to Grooshack</h2>
        <p className='text-base w-full md:w-4/5 lg:w-1/2'>
          Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.
        </p>
        <button className="bg-sky-800 p-2 mt-4 text-white text-sm rounded-md">Join Grooshack</button>

        <div className="w-full md:w-10/12 my-20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
            <a href="#" className="text-blue-500 text-sm font-semibold">See All Events</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((event, index) => (
              <div key={index} className="border rounded-lg p-4 animate-fade-in-up">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3qQ1bNASQVaZlJBH7zjmTMnoBVoHo_rMzg&s" alt="Event Image" className="w-full h-32 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-bold mb-2">Event Title {index + 1}</h4>
                <p className="text-gray-700 mb-2">Hosted by: Host Name</p>
                <p className="text-gray-500 mb-2 font-light text-sm">Mon, June 17, 14:00 WIB</p>
                <p className={`text-sm font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {index % 2 === 0 ? 'Free' : 'Paid'}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 w-full bg-sky-50 mt-16 md:p-8 md:flex md:flex-row hidden items-center justify-between animate-fade-in-bottom">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Join Grooshack</h2>
              <p className="text-sm lg:w-10/12">
                People use Meetup to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.
              </p>
              <button className="bg-sky-800 p-2 mt-4 text-white text-sm rounded-md">Join Grooshack</button>
            </div>
            <img
              src="https://www.meetup.com/_next/image/?url=%2Fimages%2FindexPage%2Fjoin%2Fjoin_meetup.webp&w=750&q=75"
              alt="join_image"
              className="md:h-32 object-cover rounded-md mb-4 md:mb-0 md:ml-4"
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center animate-fade-in-up">
        © 2024 Grooshack. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
