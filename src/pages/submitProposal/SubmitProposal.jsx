import React from 'react'
import SubmitPropsl from '../../components/submit-proposal/SubmitPropsl'
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const SubmitProposal = () => {
  const [queryParameters] = useSearchParams();
  // 
  const jobData = useSelector((state) => state.job.allJobsState);
  // 
  const [singleJobData, setSingleJobData] = useState()
  console.log(singleJobData);
  const filterJobFunc = () => {
    const filteredJob = jobData?.find((item) => {
      return item._id === queryParameters.get("jobId");
    });
    setSingleJobData(filteredJob)
  };

  useEffect(() => {
    filterJobFunc()
  }, [])

  // 
  // const userData = useSelector((state) => state.user.userData);
  // console.log(queryParameters.get("userId"));

  return (
    <React.Fragment>
      <SubmitPropsl singleJobData={singleJobData} userId={queryParameters.get("userId")} />
    </React.Fragment>
  )
}

export default SubmitProposal