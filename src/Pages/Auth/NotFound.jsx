import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>The page is not found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};
export { NotFound };
