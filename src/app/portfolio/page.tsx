import Link from "next/link";
const page = () => {
  return (
    <div>
      <p className="text-lg font-medium mb-7">Choose a gallary</p>
      <div className="flex gap-10">
        <Link
          href="/portfolio/illustration"
          className="bg-[url('/illustration.png')] portfolio-card group"
        >
          <span className="portfolio-text group-hover:text-login">
            Illustration
          </span>
        </Link>
        <Link
          href="/portfolio/application"
          className="bg-[url('/apps.jpg')] portfolio-card group"
        >
          <span className="portfolio-text group-hover:text-login">Apps</span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="bg-[url('/websites.jpg')] portfolio-card group"
        >
          <span className="portfolio-text group-hover:text-login">
            Websites
          </span>
        </Link>
      </div>
    </div>
  );
};

export default page;
