/* eslint-disable react/prop-types */

const ListItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="bg-white hover:bg-gray-600 hover:text-white  px-8 py-1 cursor-pointer"
    >
      {children}
    </li>
  );
};

export default ListItem;
