import React from "react";
import { useSelector } from "react-redux";

export let NavBar = () => {
  let updatedLikes = useSelector((state) => state.counter.value);
  let userCount = useSelector((state) => state.newSubscriber.user);
  let commentCount = useSelector((state) => state.newComments.comments);
  return (
    <div className="navSection">
      <div className="navTitle">Redux</div>
      <div className="navUser">Subscribers: {userCount.length}</div>
      <div className="navComments">Comments: {commentCount.length}</div>
      <div className="navLikes">Likes: {updatedLikes}</div>
    </div>
  );
};
