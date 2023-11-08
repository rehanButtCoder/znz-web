import React from "react";
import style from "./taskcard.module.css";
const TaskCard = () => {
  return (
    <div className={style.card}>
      <img src="asserts/images/view-all-students/student.jpg" alt="" />
      <h2>Jon stark</h2>
      {/* <p>Accepted your request </p> */}
      <div className={style.buttons}>
        <button className={style.continue__btn}>Continue</button>
        <button className={style.visit__btn}>Visit Profile</button>
      </div>
    </div>
  );
};

export default TaskCard;
