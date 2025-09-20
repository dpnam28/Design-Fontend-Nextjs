import Link from "next/link";

const Button = ({
  name,
  link,
  className,
  onClick,
}: {
  name: string;
  link?: string;
  className?: string;
  onClick?: () => void;
}) => {
  if (link) {
    return (
      <Link href={link}>
        <button className={className} onClick={onClick}>
          {name}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={className} onClick={onClick} type="submit">
        {name}
      </button>
    );
  }
};

export default Button;
