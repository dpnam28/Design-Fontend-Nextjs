import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
      <div className="flex flex-col gap-9 leading-7">
        <h1 className="text-[60px] font-bold text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#194c33,#ddd)]">
          Better design for your digital products
        </h1>
        <p>
          Turning your idea into reality. We bring together the best designers,
          developers, and marketers to help your business grow.
        </p>
        <Button
          name="See our works"
          link="/portfolio"
          className="btn-primary font-semibold"
        />
      </div>
      <div className="flex-center">
        <Image
          src={"/hero.png"}
          priority
          width={500}
          height={500}
          alt={"Hero image"}
          className="moving"
        />
      </div>
    </div>
  );
}
