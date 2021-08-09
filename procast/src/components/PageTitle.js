import React from "react";

const PageTitle = (props) => {
  return (
    <div>
      <h1 style={{ marginLeft: "5%", marginTop: "2%", fontSize: "3rem" }}>
        {props.title}
      </h1>
    </div>
  );
};

export default PageTitle;
