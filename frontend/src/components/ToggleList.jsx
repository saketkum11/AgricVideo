/* eslint-disable react/prop-types */

const ToggleList = ({ children }) => {
  return (
    <ul className="bg-zinc-800   py-4  absolute right-0 z-30 top-10">
      {children}
    </ul>
  );
};

export default ToggleList;
