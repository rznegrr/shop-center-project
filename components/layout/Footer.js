import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="lg:h-[33rem] bg-info mt-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <p className="text-md sm:text-3xl text-[#ebebeb] py-5 md:py-10">
            فروشگاه لوازم خانگی شاپ سنتر
          </p>
          <span className="w-full border-b-2 border-gray-100/20"></span>
        </div>

        <div className="grid grid-cols-12 py-7 xl:px-20 gap-x-4 footer">
          <div className="col-span-6 lg:col-span-3 flex flex-col gap-y-4 text-[#ebebeb] md:mt-10">
            <h2>اطلاعات تماس</h2>
            <span className="w-10 border-b-2 border-gray-300 my-3"></span>
            <p className="text-[12px] sm:text-[16px] w-32 sm:w-72 lg:w-60 leading-relaxed">
              تهران , خیابان ری , سرای امین حضور , پاساژ خلیج فارس
            </p>

            <div className="sm:my-2">
              <div className="flex gap-x-5">
                <FaLinkedinIn className="icon" />
                <FaTwitter className="icon" />
                <FaInstagram className="icon" />
                <FaTelegram className="icon" />
              </div>
            </div>

            <div className="text-[12px] sm:text-sm">
              <p>تلفن تماس : 12345-021</p>
              <p>ایمیل : sales@storename.com</p>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3 flex flex-col gap-y-4 md:mt-10">
            <h2>حساب کاربری</h2>
            <span className="w-10 border-b-2 border-gray-300 my-2"></span>
            <li>پروفایل</li>
            <li>محصولات خریداری شده</li>
            <li>پیگیری سفارش</li>
            <li>اطلاعات حساب کاربری</li>
            <li>تغییر یا فراموشی رمز عبور</li>
          </div>
          <div className="col-span-6 lg:col-span-3 flex flex-col gap-y-4 mt-10">
            <h2>خدمات مشتریان</h2>
            <span className="w-10 border-b-2 border-gray-300 my-2"></span>
            <li>سوالات متداول</li>
            <li>شیوه های پرداخت</li>
            <li>گزارش تخلف</li>
            <li>رویه بازگرداندن کالا</li>
            <li>حریم خصوصی</li>
          </div>
          <div className="flex flex-col col-span-6 lg:col-span-3 gap-y-4 mt-10">
            <h2>با شاپ سنتر</h2>
            <span className="w-10 border-b-2 border-gray-300 my-2"></span>
            <li>راهنمای خرید از شاپ سنتر</li>
            <li>قوانین و شرایط شاپ سنتر</li>
            <li>فروش در شاپ سنتر</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
