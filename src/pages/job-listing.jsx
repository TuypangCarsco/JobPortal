import { getJobs } from "@/api/apijobs"
import useFetch from "@/hooks/use-fetch";
import { useSession, useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners";

const JobListing = () => {
 const [searchQuery, setSearchQuery] = useState("");
 const [location, setLocation] = useState("");
 const [company_id, setCompany_id] = useState("");
  const {isLoaded} = useUser()
  
  const{
    data:jobs, 
    loading:loadingJobs, 
    fn: fnJobs
  } = useFetch(getJobs,{
    location,
    company_id,
    searchQuery,
  });

  console.log(jobs);

  useEffect(()=>{
    if(isLoaded) fnJobs();
  },[isLoaded, location, company_id, searchQuery]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }
  
  return <div>
    <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs</h1>
    {/*add filters */}
    
    {loadingJobs && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
    )}
     {loadingJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs?.length ? (
            jobs.map((job) => {
              return <span>{job.title}</span>
            })
          ) : (
            <div>No Jobs Found 😢</div>
          )}
        </div>
      )}
  </div>
};

export default JobListing