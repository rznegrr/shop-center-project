import { TbCategory2 } from "react-icons/tb";

function CategoryTitle(props) {
  return (
    <div className={`flex gap-x-2 items-center container ${props.className}`}>
      <TbCategory2 className="h-3 w-3 md:h-5 md:w-5" />
      <h3 className="text-xs md:text-sm lg:text-xl py-10 font-semibold text-gray-800">{props.title}</h3>
    </div>
  );
}

export default CategoryTitle;
