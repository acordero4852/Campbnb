import React from "react";
import Navbar from "../components/Navbar";
function Listings() {
  return (
    <>
      <Navbar />
      <ListingDisplay />
    </>
  );
}

export default Listings;

function ListingDisplay() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <span class="inline-block h-1 w-12 bg-red-700"></span>

          <h2 class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
            Current Campsites
          </h2>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </section>
  );
}
function ListingCard() {
  return (
    <>
      <a href="#" class="block">
        <div class="flex justify-center">
          <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
            New
          </strong>
        </div>

        <img
          alt="Trainer"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-44828375/original/b9ebb68f-365b-4542-9654-e18b5c311e93.jpeg?im_w=1440"
          class="-mt-3 h-96 w-full object-cover"
        />

        <h3 class="mt-4 text-sm text-black/90">
          Camp location ( city, state )
        </h3>

        <div class="mt-4 flex items-center justify-between font-bold">
          <p class="text-lg">$189.99 (price per night)</p>

          <p class="text-xs uppercase tracking-wide">⭐Rating</p>
        </div>
      </a>
    </>
  );
}
