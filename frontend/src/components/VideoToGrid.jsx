/* eslint-disable react/prop-types */
export const VideoGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 h-48  p-4 min-h-screen">
      {children}
    </div>
  );
};
