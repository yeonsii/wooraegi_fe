import React from "react";

const Intro = () => {
  return (
    <div className="intro_inner">
      <input
        className="intro_search"
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <button className="search_button">검색</button>
      <div className="diary_list">
        <div className="list_left">
          <div className="list_image">이미지 주소</div>
        </div>
        <div className="list_right">
          <div className="list_title">글 제목</div>
          <div className="list_tags">글 태그</div>
        </div>
      </div>
      <div className="diary_list">
        <div className="list_left">
          <div className="list_image">이미지 주소</div>
        </div>
        <div className="list_right">
          <div className="list_title">글 제목</div>
          <div className="list_tags">글 태그</div>
        </div>
      </div>
      <div className="diary_list">
        <div className="list_left">
          <div className="list_image">이미지 주소</div>
        </div>
        <div className="list_right">
          <div className="list_title">글 제목</div>
          <div className="list_tags">글 태그</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
