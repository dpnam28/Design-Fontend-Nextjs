import Button from "@/components/Button/Button";
import Image from "next/image";

const page = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;

  return (
    <>
      <h2 className="capitalize">{category}</h2>
      <div className="flex flex-col">
        <div className="flex-center gap-10 mt-15">
          <div className="flex-1">
            <div className="flex flex-col gap-5">
              <h1>Creative Portfolio</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                autem, quo voluptatem eligendi repellendus possimus quibusdam.
                Corrupti debitis at accusamus.
              </p>
              <Button
                name="See More"
                link="/portfolio"
                className="btn-primary"
              />
            </div>
          </div>

          <div className="flex-1 w-full lg:h-100 h-70 relative max-sm:hidden">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/29/08/58/hands-1868562_1280.jpg"
              alt="image"
              fill={true}
              className=""
            />
          </div>
        </div>
        <div className="flex-center gap-10 mt-15">
          <div className="flex-1 order-1">
            <div className="flex flex-col gap-5">
              <h1>Creative Portfolio</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                autem, quo voluptatem eligendi repellendus possimus quibusdam.
                Corrupti debitis at accusamus.
              </p>
              <Button
                name="See More"
                link="/portfolio"
                className="btn-primary"
              />
            </div>
          </div>

          <div className="flex-1 w-full lg:h-100 h-70 relative max-sm:hidden">
            <Image
              src="https://cdn.pixabay.com/photo/2017/11/11/21/08/paint-2940513_1280.jpg"
              alt="image"
              fill={true}
              className=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
