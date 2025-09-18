import Button from "@/components/Button/Button";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full relative h-100">
        <Image
          src={
            "https://cdn.pixabay.com/photo/2017/04/14/16/29/workplace-2230698_1280.jpg"
          }
          fill={true}
          alt="about"
          loading="lazy"
          className="object-cover object-center grayscale-100"
        />
        <div className="absolute bottom-5 left-5 bg-login p-4 opacity-85">
          <h2 className="font-black text-3xl">Digital Storytellers</h2>
        </div>
      </div>
      <div className="flex gap-10 sm:gap-13 mt-10">
        <div className="flex-1">
          <h2>Who Are We?</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            sunt. Consectetur nisi sit deserunt nihil modi delectus atque, natus
            quasi?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Excepturi hic doloremque quibusdam aliquid nihil quasi itaque sequi
            laboriosam mollitia nobis.
          </p>
        </div>
        <div className="flex-1">
          <h2>What Do We Offer?</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            minima unde dolorum delectus nisi quidem veritatis impedit corporis
            molestiae beatae!
          </p>
          <ul className="list-disc list-inside">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
          <Button name="Contact" link="/contact" className="btn-primary mt-5" />
        </div>
      </div>
    </div>
  );
};

export default page;
