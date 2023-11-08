import React from 'react'
import style from './studentsupprt.module.css'
const StudentSupport = () => {
  return (
    <React.Fragment>
        <div className={style.student__support__container}>
            <div className="container">
                <div className="row">
                    <div className="px-3 col-md-6 col-lg-4">
                        <div >
                            <div>
                                <img src="https://www.findZnz.com/assets/images/studentfreelance/flexibleWorkHour_test.svg" alt="card_image" />
                            </div>
                            <div className={style.typography}>
                                <h4>Flexible Work Hours</h4>
                                <p>Design your own work schedule, so you can decide how to prioritize exactly what’s on your agenda.</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 col-md-6 col-lg-4">
                        <div >
                            <div>
                                <img src="https://www.findZnz.com/assets/images/studentfreelance/Student%20Freelancers-simple%20jobs.svg" alt="card_image" width={140} height={140} />
                            </div>
                            <div className={style.typography}>
                                <h4>Simple Jobs</h4>
                                <p>Our platform makes it convenient to find simple work whenever you need it. You decide what tasks you want to work with.</p>
                                </div>
                        </div>
                    </div>
                    <div className="px-3 col-md-6 col-lg-4">
                        <div >
                            <div>
                                <img src="https://www.findZnz.com/assets/images/studentfreelance/flexibleWork_(2)_test.svg" alt="card_image" />
                            </div>
                            <div className={style.typography}>
                                <h4>Pay That Matters</h4>
                                <p>We provide a simple and secure income as well as a great pay. You don’t have to worry about finding a job again.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default StudentSupport