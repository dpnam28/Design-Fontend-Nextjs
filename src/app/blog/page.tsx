import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="flex gap-10 mt-15">
        <div className="order-1">
          <div className="flex flex-col gap-5">
            <h1>Creative Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              autem, quo voluptatem eligendi repellendus possimus quibusdam.
              Corrupti debitis at accusamus.
            </p>
          </div>
        </div>

        <div className="w-100 lg:h-50 h-40 relative max-sm:hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2017/03/01/11/15/paint-2108185_1280.jpg"
            alt="image"
            fill={true}
            className=""
          />
        </div>
      </div>
      <div className="flex gap-10 mt-15">
        <div className="order-1">
          <div className="flex flex-col gap-5">
            <h1>Creative Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              autem, quo voluptatem eligendi repellendus possimus quibusdam.
              Corrupti debitis at accusamus.
            </p>
          </div>
        </div>

        <div className="w-100 lg:h-50 h-40 relative max-sm:hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_1280.jpg"
            alt="image"
            fill={true}
            className=""
          />
        </div>
      </div>
      <div className="flex gap-10 mt-15">
        <div className="order-1">
          <div className="flex flex-col gap-5">
            <h1>Creative Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              autem, quo voluptatem eligendi repellendus possimus quibusdam.
              Corrupti debitis at accusamus.
            </p>
          </div>
        </div>

        <div className="w-100 lg:h-50 h-40 relative max-sm:hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/29/08/58/hands-1868562_1280.jpg"
            alt="image"
            fill={true}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
