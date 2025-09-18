import Link from "next/link";

const Button = ({
  name,
  link,
  className,
}: {
  name: string;
  link: string;
  className?: string;
}) => {
  return (
    <Link href={link}>
      <button className={className}>{name}</button>
    </Link>
  );
};

export default Button;
