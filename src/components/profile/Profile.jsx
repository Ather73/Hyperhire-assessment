import React from "react";
import Slider from "infinite-react-carousel";
import postimg from "../../images/postimg.svg";
import check from "../../images/check_small.svg";
import heart from "../../images/heart.svg";
import talk from "../../images/talk.svg";
import bookmark from "../../images/bookmark.svg";
import upload from "../../images/imagesmode.svg";
import "./Profile.css";
import CommentTemplate from "../comment/CommentTemplate.jsx";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <img src={postimg} alt="" className="logo" />
        <div className="info">
          <div className="container">
            <div className="user-details">
              <span className="profile-text">안녕 나 응애</span>
              <span className="profile_verified">
                <img src={check} alt=""  />
              </span>
              <span className="time-text">1일전</span>
            </div>
            <div className="bottom">
              <span className="text-cm">165cm</span>
              <span className="text-cm-center">.</span>
              <span className="text-cm">53kg</span>
            </div>
          </div>
        </div>
        <div className="right">
          <button className="btn">팔로우</button>
        </div>
      </div>
      {/* post body */}
      <div className="post">
        <h1 className="product-title">
          지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
        </h1>
        <p className="product-desc">
          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
          어떤 상품이 제일 괜찮았어?{" "}
        </p>

        <p className="product-desc">
          후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일
          재밌었다던데 맞아???
        </p>
        <p className="product-desc">
          올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌
          사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
          팝들 있으면 어땠는지 후기 좀 공유해주라~~!
        </p>
      </div>
      <div className="allchips">
        <span className="chips">#2023</span>
        <span className="chips">#TODAYISMONDAY</span>
        <span className="chips">#TOP</span>
        <span className="chips">#POPS!</span>
        <span className="chips">#WOW</span>
        <span className="chips">#ROW</span>
      </div>
      <div className="product-image">
        <Slider dots arrowsScroll={2} arrows={false}>
          <div className="carousel_container">
            <img
              className="prod-img"
              src="https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg"
              alt=""
            />
          </div>
          <div className="carousel_container">
            <img
              className="prod-img"
              src="https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg"
              alt=""
            />
          </div>
          <div className="carousel_container">
            <img
              className="prod-img"
              src="https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="popularity">
        <span className="heart">
          <img src={heart} alt="" />
        </span>
        <span className="count">5</span>
        <span className="talk">
          <img src={talk} alt="" />
        </span>
        <span className="count">5</span>
        <span className="bookmark">
          <img src={bookmark} alt="" />
        </span>
        <span className="count">...</span>
      </div>
      <hr />
      <div className="comment_section">
        <div className="comment">
          <CommentTemplate
            profile_image={postimg}
            name="안녕 나 응애"
            verified
            tag={"1일전"}
            content="어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 
우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
꼭 봐주세용~!"
            likeCount={5}
            commentCount={5}
          />
        </div>
        <div className="comment_reply">
        <CommentTemplate
            profile_image={postimg}
            name="ㅇㅅㅇ"
            tag={"1일전"}
            content="오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다"
            likeCount={5}
            commentCount={0}
          />

          
        </div>
        
      </div>
      <hr />
      <div className="upload_section">
            <img className="upload_img" src={upload} alt="" />
            <input className="input_text" type="text" placeholder="댓글을 남겨주세요." />
            <span>등록</span>
          </div>
    </>
  );
};

export default Profile;
