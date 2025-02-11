import FeatureItem from "./FeatureItem";

const Feature = () => {
  return (
      <div className="container overflow-hidden pt-10 pb-10 md:pt-20">
        <div className="grid grid-cols-4 gap-x-5 gap-y-5">
            <FeatureItem icon={'./icons/easy-return.svg'} title={'ضمانت بازگشت'} desc={'بعد از گذشت ۳۰ روز'}/>
            <FeatureItem icon={'./icons/free-delivery.svg'} title={"ارسال رایگان"} desc='ارسال به موقع و رایگان' />
            <FeatureItem icon={'./icons/best-offers.svg'} title={"بهترین محصولات"} desc='پشتیبانی خرید بهترین محصول' />
            <FeatureItem icon={'./icons/daily-discount.svg'} title={"تخفیفات روزانه"} desc='تخفیفات با قیمت باورنکردنی' />
        </div>
      </div>
  );
};

export default Feature;
