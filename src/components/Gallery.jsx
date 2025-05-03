import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="text-center py-9 mt-9">
        <p className=" text-6xl font-bold">Gallery</p>
      </div>

      <div className="dark:bg-black dark:text-white">
        <div className="container px-[40px] grid grid-cols-1 md:grid-cols-4  gap-[40px] mt-8">
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/31019576/pexels-photo-31019576/free-photo-of-industrial-textile-factory-with-workers-at-sewing-machines.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 1"
            />
          </div>
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/4492091/pexels-photo-4492091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 2"
            />
          </div>
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/4492077/pexels-photo-4492077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 3"
            />
          </div>
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/7679868/pexels-photo-7679868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/5531541/pexels-photo-5531541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/5531540/pexels-photo-5531540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/15153910/pexels-photo-15153910/free-photo-of-an-armchair-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src="https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>

          {/* <div>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/broadway.tours.travels/videos"
              width="500"
              height="280"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
