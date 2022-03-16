import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="gradient__bg gpt3__404">
        <h1 className="gradient__text">404: This page could not be found</h1>

        <Link to="/">
          <button type="button">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
