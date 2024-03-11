import React from "react";

const DiaryList = ({ data }) => {
  return (
    <div className="diary_list">
      {data.map((item) => (
        <div key={item.id} className="list-item">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiaryList;
