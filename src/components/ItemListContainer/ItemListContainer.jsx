import React from "react";

const ItemListContainer = (props) => {
  let { greeting = " " } = props;
  return (
    <div>
      <h2> {greeting} </h2>
    </div>
  );
};

export default ItemListContainer;
