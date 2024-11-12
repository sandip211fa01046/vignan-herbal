
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// const data = [
//     { id: 1, name: "Home", url: "/" },
//     { id: 2, name: "About", url: "/about" },
//     { id: 3, name: "Categories", subMenu: true },
//     { id: 4, name: "Contact", url: "/contact" },
// ];

// const subMenuData = [
//     { id: 1, name: "Jordan", doc_count: 11 },
//     { id: 2, name: "Sneakers", doc_count: 8 },
//     { id: 3, name: "Running shoes", doc_count: 64 },
//     { id: 4, name: "Football shoes", doc_count: 107 },
// ];
const categories = ["ANNUAL", "BIENNIAL", "PERENIAL", "DECORATION", "MEDICINAL"];

const Menu = () => {
    const navigate = useNavigate();
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            <li className={"text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer"} onClick={() => navigate("/")
            }>Home</li>
            <li  className={"text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer"}>About</li>
            <li  className={"text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer"}>Contact us</li>
            {/* <li  className={"text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer"}>Category</li> */}
            
                <div className="relative group">
                <li className={"flex items-center justify-center gap-2 text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer"}>
                    Category
                    <IoIosArrowDropdown size={25}/>
                </li>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-b">
                    {categories.map((category, index) => (
                    <a key={index} href={`#${category}`} className="block px-4 py-2 w-[100%] text-sm text-gray-900 hover:bg-gray-200">
                        {category}
                    </a>
                    ))}
                </div>
                
            </div>
        </ul>
    );
};

export default Menu;
