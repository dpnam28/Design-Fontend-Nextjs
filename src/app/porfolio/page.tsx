import Link from "next/link";
const page = () => {
  return (
    <div>
      <p className="text-lg font-medium mb-7">Choose a gallary</p>
      <div className="flex gap-10">
        <Link
          href="/porfolio/illustration"
          className="bg-[url('/illustration.png')] porfolio-card group"
        >
          <span className="porfolio-text group-hover:text-login">
            Illustration
          </span>
        </Link>
        <Link
          href="/porfolio/apps"
          className="bg-[url('/apps.jpg')] porfolio-card group"
        >
          <span className="porfolio-text group-hover:text-login">Apps</span>
        </Link>
        <Link
          href="/porfolio/websites"
          className="bg-[url('/websites.jpg')] porfolio-card group"
        >
          <span className="porfolio-text group-hover:text-login">Websites</span>
        </Link>
      </div>
    </div>
  );
};

export default page;
