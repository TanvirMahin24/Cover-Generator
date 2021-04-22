import React from "react";
import { useHistory } from "react-router";
import errImg from "../../Assets/NotFound/404.svg";

const Error = () => {
  const history = useHistory();
  const clickHandeler = () => {
    history.goBack();
  };
  return (
    <div className="text-center py-5">
      <img src={errImg} alt="" className="img-fluid" />
      <span className="d-block heading__2 pb-3">Page Not Found</span>
      <button
        className="btn btn-lg btn-primary"
        onClick={() => clickHandeler()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
