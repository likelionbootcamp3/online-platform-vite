import Container from "../Container";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-white">
      <Container>
        {/* TODO: Create footer */}
        <div className="mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Logo */}
            <div>
              <Link to="/">
                <img
                  src="https://techit.education/img/techit_by_likelion_logo.svg"
                  alt="techit"
                  height={38}
                  width={133}
                />
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-7 md:mt-0 md:flex-row md:gap-20">
              {/* Education */}
              <div>
                <h6 className="text-xs text-gray-500">Kinh nghiệm giáo dục</h6>
                <ul className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                  <li>
                    <a href="#">Trường KĐT Tekit</a>
                  </li>
                  <li>
                    <a href="#">Trạm khởi động</a>
                  </li>
                  <li>
                    <a href="#">Lớp VOD</a>
                  </li>
                  <li>
                    <a href="#">Sự kiện</a>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div>
                <h6 className="text-xs text-gray-500">Giới thiệu</h6>
                <ul className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                  <li>
                    <a href="#" target="_blank">
                      LIKELION
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-5 w-full border-gray-300" />

          <div>
            {/* Company Media */}
            <ul className="mb-6 flex items-center gap-2 text-base text-white">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="rounded-full bg-black p-2"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="rounded-full bg-black p-2"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="rounded-full bg-black p-2"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="rounded-full bg-black p-2"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>

            {/* Company Info */}
            <div className="flex items-center text-xs font-medium">
              <a href="#" target="_blank" className="text-gray-500">
                Điều khoản sử dụng
              </a>

              <span className="mx-2 h-1 w-1 rounded-full bg-gray-500"></span>

              <a href="#" target="_blank" className="text-gray-500">
                Chính sách quyền riêng tư
              </a>

              <span className="mx-2 h-1 w-1 rounded-full bg-gray-500"></span>

              <a href="#" target="_blank" className="text-gray-500">
                Chính sách hoàn tiền
              </a>
            </div>

            <div className="mt-3 flex flex-col gap-0.5 text-xs text-gray-500">
              <div className="flex flex-col gap-0.5 py-0.5 lg:flex-row lg:items-center lg:gap-2">
                {/* Company name */}
                <div className="flex items-center">
                  <span>Tên công ty: LikeLion</span>

                  <span className="mx-2 inline-block h-2.5 w-px bg-[#737373]"></span>

                  <span>Người đại diện: Lee Doo-hee</span>

                  <span className="mx-2 inline-block h-2.5 w-px bg-[#737373]"></span>

                  <span>contact@likelion.net</span>
                </div>

                {/* Company Id */}
                <div className="flex items-center">
                  <span>Số doanh nghiệp: 264-88-01106</span>

                  <span className="mx-2 inline-block h-2.5 w-px bg-[#737373]"></span>

                  <span>
                    Số báo cáo kinh doanh đặt hàng qua thư: 2019-Seoul
                    Gangnam-00774
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-0.5 py-0.5 lg:flex-row lg:items-center lg:gap-2">
                {/* Company Address */}
                <span>
                  Địa chỉ: Tầng 16 và 17, D1-dong, Gwanghwamun D Tower, 17
                  Jong-ro 3-gil, Jongno-gu, Seoul
                </span>

                {/* Copyright */}
                <span>Copyright © 2022 LikeLion All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
