import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function TopHeader() {
  return (
    <div className="hidden md:flex h-8 bg-info text-white items-center overflow-x-hidden">
      <div className="container flex justify-between">
        <div className="flex gap-x-5">
          <FaLinkedinIn className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaTelegram className="icon" />
        </div>
        <div className="flex items-center gap-x-9">
          <div className="flex justify-center items-center">
            <p className="ml-2 text-sm">0934429898</p>
            <FiPhoneCall />
          </div>
          <div className="flex items-center">
            <p className="ml-2 text-sm ">sales@yourstorename.com</p>
            <FaEnvelope className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
