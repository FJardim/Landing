import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/image/EscribaniaD.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  const showLogin = router.query.login ? true : false;
  const { isAuthenticated, user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(showLogin);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOpenLoginModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between mx-2">
        <Link href={"/"}>
          <Image src={logo} className="w-48 h-20 mt-4 mb-4" alt="Logo" />
        </Link>
        <button
          className="md:hidden text-white mx-2 bg-main hover:text-black px-2 py-1 rounded-lg"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
        <ul className="hidden md:flex ml-4 space-x-6">
          <li className="text-white cursor-pointer">
            <Link href="/#nosotros">Nosotros</Link>
          </li>
          <li className="text-white cursor-pointer">
            <Link href="/#especialidades">Especialidades</Link>
          </li>
          <li className="text-white cursor-pointer">
            <Link href="/#servicios">Servicios</Link>
          </li>
          <li className="text-white cursor-pointer">
            <Link href="/documents">Documento</Link>
          </li>
          <li className="text-white cursor-pointer">
            <Link href="/#contacto">Contacto</Link>
          </li>
          <li className="text-white cursor-pointer">
            <Link href="/citas">Citas</Link>
          </li>
          <li className="text-white cursor-pointer m-auto">
            <Link href="/carrito">
              <AiOutlineShoppingCart />
            </Link>
          </li>
          <li className="text-white cursor-pointer">
            <Link href="/">Marketplace Abogados</Link>
          </li>
        </ul>
        {menuOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col bg-white h-[700px] text-xl z-50">
            <div className="flex items-center mx-2 justify-between">
              <Link href={"/"}>
                <Image src={logo} className="w-48 h-20 mt-4 mb-4" alt="Logo" />
              </Link>

              <button
                className="md:hidden text-2xl text-white mx-4 bg-main hover:text-black p-4 rounded-lg"
                onClick={closeMenu}
              >
                X
              </button>
            </div>
            <ul className="lg:flex lg:ml-4 p-6 md:block w-full">
              <li className="lg:mx-2 border-b text-black cursor-pointer px-6 pb-6">
                <Link href="/#nosotros">Nosotros</Link>
              </li>
              <li className="lg:mx-2 border-b text-black cursor-pointer p-4">
                <Link href="/#especialidades">Especialidades</Link>
              </li>
              <li className="lg:mx-2 border-b text-black cursor-pointer p-4">
                <Link href="/#servicios">Servicios</Link>
              </li>
              <li className="lg:mx-2 border-b text-black cursor-pointer p-4">
                <Link href="/documents">Documento</Link>
              </li>
              <li className="lg:mx-2 border-b text-black cursor-pointer p-4">
                <Link href="/#contacto">Contacto</Link>
              </li>
              <li className="lg:mx-2 border-b text-black cursor-pointer p-4">
                <Link href="/citas">Citas</Link>
              </li>
              <li className="lg:mx-2 border-b text-black cursor-pointer p-4">
                <Link href="/carrito" className="flex">
                  <AiOutlineShoppingCart />
                </Link>
              </li>
              <li className="lg:mx-2 border-b text-black cursor-pointer p-4">
                <Link href="/">Marketplace Abogados</Link>
              </li>
            </ul>
          </div>
        )}
        <div className="flex">
          {isAuthenticated ? (
            <>
              <button className="flex items-center text-white mx-2 bg-main hover:text-black px-4 py-1 rounded-2xl">
                <FaUserCircle className="m-1" />
                {user?.userName}
              </button>
              <button
                className="text-white mx-2 bg-red-500 hover:bg-red-600 px-4 py-1 rounded-2xl"
                onClick={logout}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              className="flex items-center text-white mx-2 bg-main hover:text-black px-4 py-1 rounded-2xl"
              onClick={handleOpenLoginModal}
            >
              <FaUserCircle className="m-1" />
              Login
            </button>
          )}
        </div>
      </div>
      <AuthModal visible={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
