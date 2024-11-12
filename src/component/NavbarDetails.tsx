

import { useState, useEffect } from "react";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import React from "react";


const NavbarDetails = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);



  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
  className={`w-full h-[70px] md:h-[100px] bg-white shadow-lg flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
>
  <a href="/" className="flex items-center space-x-3">
    <img
      src="vignan.svg"
      alt="Vignan-Herbal Garden"
      width={200}
      height={180}
    />
    <h1 className="text-green-800 font-bold text-lg md:text-3xl tracking-wider">
      Vignan's Herbal Garden
    </h1>
  </a>

  <Menu />

  <img src="herbal.png" alt="herbal" width={100} height={80} />
  
  {/* Mobile icon */}
  <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
    {mobileMenu ? (
      <VscChromeClose className="text-[16px]" onClick={() => setMobileMenu(false)} />
    ) : (
      <BiMenuAltRight className="text-[20px]" onClick={() => setMobileMenu(true)} />
    )}
  </div>
</header>

    // <header
    //   className={`w-full h-[70px] md:h-[100px] p-5 mt-5 bg-white shadow-lg flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    // >
    //   <a href="/">
    //     <img
    //       src="vignan.svg"
    //       alt="Vignan-Herabal Garden"
    //       width={200}
    //       height={180}
    //     ></img>
    //     <h1 className={"text-green-800 font-bold text-lg md:text-3xl tracking-wider mb-3"}>Vignan's Herbal Garden</h1>
    //   </a>

    //   <Menu />

    //   {mobileMenu && (
    //     <MenuMobile
    //       showCatMenu={showCatMenu}
    //       setShowCatMenu={setShowCatMenu}
    //       setMobileMenu={setMobileMenu}
    //       categories={categories}
    //     />
    //   )}

      
        
    //     <img src='herbal.png' alt='herbal' width={100} height={80}></img>
       
    //     {/* Icon end */}

    //     {/* Mobile icon start */}
    //     <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
    //       {mobileMenu ? (
    //         <VscChromeClose
    //           className="text-[16px]"
    //           onClick={() => setMobileMenu(false)}
    //         />
    //       ) : (
    //         <BiMenuAltRight
    //           className="text-[20px]"
    //           onClick={() => setMobileMenu(true)}
    //         />
    //       )}
    //     </div>
    //     {/* Mobile icon end */}
      
    // </header>
  );
};

export default NavbarDetails;
