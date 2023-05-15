import React from "react";
import dots from "../../images/dots.svg";
import like from '../../images/heart.svg';
import talk from '../../images/talk.svg';
import profile from '../../images/postimg.svg';
import verified from '../../images/check_small.svg'
import './CommentTemplate.css'
const CommentTemplate = (props) => {
  return (
    <div className="comment_wrapper">
      <div className="cm_header">
        <div className="cm_profile">
          <img className="profile_image" src={props.profile_image} alt="#" />
          <span className="profile_name">{props.name} </span>
          {
            props.verified && <span className="profile_verified">
            <img src={verified} alt="" />
          </span>
          }

          <span className="profile_tag">{props.tag}</span>
        </div>

        <div className="cm_menu">
          <img src={dots} alt="" />
        </div>
      </div>
      <div className="cm_body">
        <p>
          {props.content}
        </p>
      </div>
      <div className="cm_footer">
            <div className="cm_action_wrapper">
                <img src={like} alt="" />
                <span>{props.likeCount}</span>
            </div>
            {
                props.commentCount>0 &&             <div className="cm_action_wrapper">
                <img  src={talk} alt="" />
                <span>{props.commentCount}</span>
            </div>
            }

      </div>
    </div>
  );
};

export default CommentTemplate;
