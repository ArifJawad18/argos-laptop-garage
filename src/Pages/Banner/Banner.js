import React from 'react';

const Banner = () => {
  return (
    <div>
      <section
  class="relative bg-[url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)] bg-cover bg-center bg-no-repeat " 
>

  <div
    class="absolute inset-0 bg-white/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/50 sm:to-white/5"  
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" data-aos="flip-left"
    data-aos-duration="2000"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl text-white font-extrabold sm:text-5xl">
        Let's find your

        <strong class="block font-extrabold text-blue-600">
        Best Laptop 
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl text-white sm:leading-relaxed">
      Welcome To Argos Laptop Garage <br/>
      Get Products Easily
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="/"
          class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-200 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Banner;
