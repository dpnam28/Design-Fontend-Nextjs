import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10 items-center">
        <div className="flex flex-col  gap-12 w-1/2">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
            ullam obcaecati fugit quod. Magni cum sed odio minus nesciunt
            consequatur perferendis distinctio, hic laudantium?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Consequuntur, mollitia?Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Unde facilis
          </p>
        </div>

        <div className="w-1/2 h-80 relative ">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_1280.jpg"
            }
            alt="image"
            fill={true}
            className="object-center object-cover"
          />
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default page;
