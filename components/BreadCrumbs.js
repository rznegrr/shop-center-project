import { RiArrowDropLeftLine } from "react-icons/ri";
import Link from "next/link";

const Breadcrumbs = (props) => {
  const {part1 , name1 , part2 , name2} = props

  return (
    <nav className="container flex items-center gap-x-1 pb-5 text-xs md:text-base">
      <Link href="/" className="text-info800">خانه</Link>
      <RiArrowDropLeftLine className="text-gray-500"/>

      <Link href={`/${part1}`} className="text-info800">{name1}</Link>
      <RiArrowDropLeftLine className="text-gray-500"/>

      <Link href={`/${part1}/${part2}`}>{name2}</Link>
    </nav>
  );
};

export default Breadcrumbs;

