import Container from "../Container";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-white">
      <Container>
        {/* TODO: Create footer */}
        <div className="mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Logo */}
            <div>
              <img
                src="https://techit.education/img/techit_by_likelion_logo.svg"
                alt="techit"
                className="cursor-pointer"
              />
            </div>

            {/* Kinh nghiệm giáo dục */}
            <div className="mt-8 flex flex-col md:mt-0 md:flex-row">
              <div>
                <h3 className="text-xs text-gray-500">Kinh nghiệm giáo dục</h3>
                <ul className="mt-4">
                  <li className="my-3 text-sm font-semibold">
                    <a href="#">Trường KĐT Tekit</a>
                  </li>
                  <li className="my-3 text-sm font-semibold">
                    <a href="#">Trạm khởi động</a>
                  </li>
                  <li className="my-3 text-sm font-semibold">
                    <a href="#">Lớp VOD</a>
                  </li>
                  <li className="my-3 text-sm font-semibold">
                    <a href="#">Sự kiện</a>
                  </li>
                </ul>
              </div>

              {/* Giới thiệu */}
              <div className="mt-4 flex flex-col md:mt-0 md:ml-20">
                <h3 className="text-xs text-gray-500">Giới thiệu</h3>
                <div className="mt-4 mb-2">
                  <a
                    href="#"
                    target="_blank"
                    className="flex items-center text-sm font-semibold"
                  >
                    LIKELION
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-5 w-full border-gray-300" />

          {/* Media */}
          <div className="mt-4">
            <ul className="mb-6 flex">
              <li className="mr-1 text-sm">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block rounded-full bg-black p-2 text-xl text-white"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li className="mx-1 text-sm">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block rounded-full bg-black p-2 text-xl text-white"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="mx-1 text-sm">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block rounded-full bg-black p-2 text-xl text-white"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="ml-1 text-sm">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block rounded-full bg-black p-2 text-xl text-white"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>

            {/* Thông tin */}
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
            <div className="mt-3">
              <div className="flex flex-col">
                <div className="my-0.5 text-xs text-gray-500">
                  <span>Tên công ty: LikeLion</span>

                  <span className="mx-2 inline-block h-2.5 w-px bg-[#737373]"></span>

                  <span>Người đại diện: Lee Doo-hee</span>

                  <span className="mx-2 inline-block h-2.5 w-px bg-[#737373]"></span>

                  <span>contact@likelion.net</span>
                </div>

                <div className="my-0.5 flex text-xs text-gray-500">
                  <span>Số doanh nghiệp: 264-88-01106</span>

                  <span className="mx-2 inline-block h-auto w-px bg-[#737373]"></span>

                  <span>
                    Số báo cáo kinh doanh đặt hàng qua thư: 2019-Seoul
                    Gangnam-00774
                  </span>
                </div>
              </div>
              <div className="mt-0.5 flex flex-col text-xs text-gray-500">
                <span className="my-0.5">
                  Địa chỉ: Tầng 16 và 17, D1-dong, Gwanghwamun D Tower, 17
                  Jong-ro 3-gil, Jongno-gu, Seoul
                </span>
                <span className="my-0.5">
                  Copyright © 2022 LikeLion All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
