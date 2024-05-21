import React from 'react'
import Joblisting from "./Joblisting.jsx";
import {useState, useEffect} from "react";
import Spinner from "./Spinner.jsx";

const Joblistings = ({isHome = false}) => {

    // Array to store jobs
    const[jobs,setJobs] = useState([]);
    // Buffering animation -> True display until data is fetched.
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
                // Fetch data from static site.
                const data = await fetch(apiUrl);
                // Convert into json.
                const dataJson = await data.json();
                // Load it into array
                setJobs(dataJson);
            } catch (e){
                console.log('Error fetching data', e);
            } finally {
                // Stop Buffer animation.
                setLoading(false);
            }

        }

        fetchData();
    },[]);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Latest Jobs' : 'Browse Jobs'}
                </h2>
                    {loading ? (<Spinner loading={loading}/>) :
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/*Iterating jobs*/}
                        {jobs.map((job) => (
                            <Joblisting key={job.id} job={job}/>
                        ))}
                        </div>
                    }
            </div>
        </section>
    )
}
export default Joblistings
