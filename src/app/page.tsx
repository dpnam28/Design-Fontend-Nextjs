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
        <button className="btn-log max-w-max text-md font-bold">
          See our works
        </button>
      </div>
      <div className="flex-center">
        <Image src={"/hero.png"} width={500} height={500} alt={"Hero image"} />
      </div>
    </div>
  );
}
