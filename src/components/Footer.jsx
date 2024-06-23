import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="mt-20 w-full flex justify-between py-5">
        <p className="text-gray-400 ml-9">
          © 2024 Rushikesh Powar. All rights reserved.
        </p>

        <dic className="footerSocials flex gap-8 mr-5">
           <i class="fa fa-star text-lg text-gray-800 hover:text-red-600 cursor-pointer duration-300"></i>
           <i class="fa fa-star text-lg text-gray-800 hover:text-red-600 cursor-pointer duration-300"></i>
           <i class="fa fa-star text-lg text-gray-800 hover:text-red-600 cursor-pointer duration-300"></i>
           <i class="fa fa-star text-lg text-gray-800 hover:text-red-600 cursor-pointer duration-300"></i>
        </dic>
      </footer>
    </div>
  );
}

export default Footer;
