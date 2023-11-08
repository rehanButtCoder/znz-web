import React from "react";
import style from "./freelancerchoose.module.css";
const TaskCard = ({title,subtitle,image}) => {
  return (
    <div className={style.box}>
      <div>
        <img src={image} alt="housekeeping" width={71} height={71} />
      </div>
      <h4>{title}</h4>
      <p>
       {subtitle}
      </p>
    </div>
  );
};

export default TaskCard;
