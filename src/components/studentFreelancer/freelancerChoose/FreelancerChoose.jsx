import React from "react";
import style from "./freelancerchoose.module.css";
import TaskCard from "./TaskCard";

const FreelancerChoose = () => {
  return (
    <React.Fragment>
      <div className={style.main__container}>
        <div className="container">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className={style.title}>
              Choose Tasks that <span className={style.green}>Fit You</span>
            </h2>
            <h6 className={style.subtitle}>
              You decide what simple tasks you want to help with to make money.
            </h6>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"HouseKeeping"}
                subtitle={
                  "Help with dishes, vacuuming, window cleaning and other errands in the house."
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Housekeeping.svg"
                }
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"Tutoring"}
                subtitle={
                  "Tutor children in any subject to help improve their grades in the classroom."
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Tutoring.svg"
                }
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"Pet Sitting"}
                subtitle={
                  "Get paid to play around with pets or take them for a long work in your neighbourhood. "
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Pet%20Sitting.svg"
                }
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"Sports Coaching"}
                subtitle={
                  "Coach kids in your favorite school sport to advance and develop their athletic skills."
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Sports%20Coaching.svg"
                }
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"Moving"}
                subtitle={
                  "Give families an extra hand carrying boxes and preparing for their new home."
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Moving.svg"
                }
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"Child Care"}
                subtitle={
                  "Babysit and play with young children, while their parents are busy with other errands."
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Child%20Care.svg"
                }
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"Elder Care"}
                subtitle={
                  "Take care of the elderly by cherising and helping them carry out their daily tasks."
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Eldercare.svg"
                }
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <TaskCard
                title={"Yard Work"}
                subtitle={
                  "Earn money by mowing the lawn, remove dirt and water plants to clean the backyard."
                }
                image={
                  "https://www.findZnz.com/assets/images/studentfreelance/Yard%20Work.svg"
                }
              />
            </div>
          </div>
        </div>
      </div>

    

    </React.Fragment>
  );
};

export default FreelancerChoose;
