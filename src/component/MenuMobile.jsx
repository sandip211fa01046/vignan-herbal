import React from "react";
import PropTypes from "prop-types";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({
    showCatMenu,
    setShowCatMenu,
    setMobileMenu,
    categories,
}) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>

                                {showCatMenu && (
                                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                        {categories?.map(
                                            ({ attributes: c, id }) => {
                                                return (
                                                    <a
                                                        key={id}
                                                        href={`/category/${c.slug}`}
                                                        onClick={() => {
                                                            setShowCatMenu(
                                                                false
                                                            );
                                                            setMobileMenu(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        <li className="py-4 px-8 border-t flex justify-between">
                                                            {c.name}
                                                            <span className="opacity-50 text-sm">
                                                                {`(${c.products.data.length})`}
                                                            </span>
                                                        </li>
                                                    </a>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="py-4 px-5 border-b">
                                <a
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};
MenuMobile.propTypes = {
    showCatMenu: PropTypes.bool.isRequired,
    setShowCatMenu: PropTypes.func.isRequired,
    setMobileMenu: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            attributes: PropTypes.shape({
                c: PropTypes.shape({
                    slug: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    products: PropTypes.shape({
                        data: PropTypes.array.isRequired,
                    }).isRequired,
                }).isRequired,
            }).isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default MenuMobile;
