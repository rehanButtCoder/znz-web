import Style from "./jobforu.module.css";
import JobCard from "./JobCard";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const JobForU = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="container">
      <div className={Style.image__container}>
        <div className={Style.back__image}>
          <img src="/asserts/images/job-detail/jobdetail-back.png" alt="" />
        </div>
      </div>

      <div className={Style.detail__container}>
        <div className={Style.job__detail}>
          <div className={Style.search__container}>
            <div className={Style.search__bar}>
              <img src="asserts/images/jobforyou/search-icon.png" alt="" />
              <input type="text" placeholder="Search your dream job here" />
            </div>
            <div>
              <ReactFlagsSelect
                selected={selected}
                searchable
                onSelect={(code) => setSelected(code)}
                className="menu-flags"
              />
            </div>
            <span className={Style.search__btn}>Search</span>
          </div>
        </div>
      </div>
      <div className={Style.job__title__sectn}>
        <div className={Style.title}>
          <h2>Jobs for you</h2>
          <p>Find Your Perfect Freelance Opportunity</p>
        </div>
      </div>

      <div className={Style.job__cards}>
      <div className={Style.grid__card}>
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
        
        
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
        
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
        
        
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
          <JobCard
            title={"Looking For UI/UX Designer With Creative Skill"}
            location={"Lahore, Pakistan"}
            jobType={"Part Time"}
          />
        </div>
      </div>
    </div>
  );
};

export default JobForU;
