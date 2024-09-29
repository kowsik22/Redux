import React from "react";
import { useSelector } from "react-redux";
export default function NewUser() {
  let newUsers = useSelector((state) => state.newSubscriber.user);
  return (
    <div className="userSection">
      Subscribers:
      {newUsers.map((item, index) => {
        return (
          <div>
            <ul key={index}>
              <li>{item}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
