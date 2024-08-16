const FeatureItem = (props) => {
  return (
    <div className="col-span-4 md:col-span-2 xl:col-span-1 flex items-center px-12 lg:px-0 justify-center h-28 gap-x-6 bg-[#F4F6FA] rounded-md">
      <img
        src={props.icon}
        className=""
        alt="descriptions"
      />
      <div className="flex flex-col mr-6">
        <p className="text-gray-900 text-sm">{props.title}</p>
        <p className="text-gray-400 text-xs pt-2">{props.desc}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
