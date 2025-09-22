import React from "react";

const VideoBanner = () => {
  return (
    <div className="bg-yellow-500 ">
      <div className="container  py-8 md:py-16">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8 ">
          {/* video Banner */}
          <div>
            <iframe
          
              src="https://www.youtube.com/embed/4sc6Bhgs_Co?si=VmlzFERPSsJH0dd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="aspect-video w-full"
            ></iframe>
          </div>
          {/* text Container */}
               <div className="space-y-4 text-center md:text-left text-white dark:text-black">
            <h1 className="text-4xl font-bold">Watch our Video</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              blanditiis vel molestiae, cum beatae officiis iusto autem
              voluptate consequuntur facilis veniam omnis nihil eaque
              repudiandae, quod, ipsa iste ipsum! Dolorum.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
