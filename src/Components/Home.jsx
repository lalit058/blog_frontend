import React from 'react';
import heroImg from '../assets/image.jpg'; // Ensure the image exists at src/assets/image.jpg

const Home = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-32 lg:px-8">

        {/* Left: Text Section */}
        <div className="max-w-prose text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to my portfolio! I am a
            <strong className="text-indigo-600"> Web Developer, </strong>
            <strong className="text-indigo-600"> Graphic Designer</strong>
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed">
            I'm currently working on my mini project
            <strong className="text-indigo-600"> Student Management System</strong>, where parents can access their child's school activity online
            and chat with staff if the progress is not satisfactory.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#contact"
            >
              Contact
            </a>

            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="./assets/My cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="mt-12 lg:mt-0">
          <img
            src={heroImg}
            alt="Illustration of web developer"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
