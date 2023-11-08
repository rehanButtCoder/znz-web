import React, { useEffect, useState } from 'react'
import JobDetail from '../../components/jobDetail/JobDetail'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
const JobDetailPage = () => {
  const [queryParameters] = useSearchParams();

  const jobData = useSelector((state) => state.job.allJobsState);
  const [singleJobData, setSingleJobData] = useState()
  // console.log(jobData);
  const filterJobFunc = () => {
    const filteredJob = jobData?.find((item) => {
      return item._id === queryParameters.get("id");
    });
    setSingleJobData(filteredJob)
  };

  useEffect(() => {
    filterJobFunc()
  }, [])
  
  const userData = useSelector((state) => state.user.userLoginData);

  // console.log(jobData);
  // console.log(singleJobData);

  return (
    <div>
      <JobDetail userData={userData} singleJobData={singleJobData}/>
    </div>
  )
}

export default JobDetailPage