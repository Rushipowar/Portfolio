import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="Navbar flex justify-between items-center bg-white px-8">
        <section>
          <p className="text-red-600">Logo</p>
          <img src="" alt="" />
        </section>

        <section className="Navigate">
          <ul className="flex gap-9 font-bold text-gray-300">
            <li className="hover:text-red-600 duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600 duration-200">
              <Link to="/portfolio">PortFolio</Link>
            </li>
            <li className="hover:text-red-600 duration-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </section>

        <section className="Talk">
          <Link
            to="/contact"
            className="border border-red-600 px-5 py-3 font-bold text-red-600 rounded-md hover:bg-white duration-300"
          >
            <i class="fa fa-paper-plane text-red-600 mr-2 hover:-rotate-180 duration-300"></i>  
            Lets Talk
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
