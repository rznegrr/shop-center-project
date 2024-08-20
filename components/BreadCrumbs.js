import { useRouter } from "next/router";
import { RiArrowDropLeftLine } from "react-icons/ri";
import Link from "next/link";

const Breadcrumbs = (props) => {
  const router = useRouter();
  const { asPath } = router;
//   const pathParts = asPath.split("/").filter((part) => part);

  return (
    <nav className="container flex items-center gap-x-1 pb-5 text-xs md:text-base">
      <Link href="/" className="text-info800">خانه</Link>
      <RiArrowDropLeftLine className="text-gray-500"/>

      <Link href="/product" className="text-info800">محصولات</Link>
      <RiArrowDropLeftLine className="text-gray-500"/>

      <Link href={`/product/${props.id}`}>{props.name}</Link>
    </nav>
  );
};

export default Breadcrumbs;

