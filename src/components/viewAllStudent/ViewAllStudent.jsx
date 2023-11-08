import Style from "./viewallstudent.module.css";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
// import StudentCard from "./studentcard/StudentCard";
// import SellerCard from "../home/sellerCard/SellerCard";
const ViewAllStudent = () => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <div className="container">
        <div className={Style.image__container}>
          <div className={Style.back__image}>
            <img src="/asserts/images/job-detail/jobdetail-back.png" alt="" />
          </div>
        </div>

        <div className={Style.detail__container}>
          <div className={Style.job__detail}>
            <h2 className={Style.title}>
              View All <span>Student</span>
            </h2>
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
            {/* card section  */}
            <div className={Style.card__container}>
                {/* <StudentCard/> */}
                {/* <SellerCard/> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ViewAllStudent;
