import React, { useContext, useEffect, useState } from 'react';
import { Contexts } from '../context/OpenContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Responses() {
  const {questions , responses , setResponses , suggestions , setSuggestions} = useContext(Contexts);

  // Fetch responses from backend
  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const { data } = await axios.get('/responses'); // Adjust endpoint if needed
        setResponses(data); // Set the fetched responses to state
      } catch (err) {
        console.error(err);
        toast.error('Error fetching responses. Please try again later.');
      }
    };

    fetchResponses();
  }, []);

  console.log(responses[0].submittedValues[0] + responses[2].submittedValues[0])
  
  

  return (
     <div className="d-flex flex-column align-items-center " style={{paddingTop:'4rem' , backgroundColor:' #ff5722'}}>
      <p title='Student Count' className='d-flex justify-content-center align-items-center border border-success rounded bg-dark text-light p-3' style={{position:'fixed' , top:'10%' , right:'5%' , height:'1.5rem' , width:'3rem'}}>
        {responses.length}
      </p>
     <h3 className='text-light bg-success border rounded p-3 jusify-self-start' style={{position:'sticky' , top:'9%'}}>Feedback Responses</h3>
     {responses.length === 0 ? (
       <p>No feedback yet.</p>
     ) : (
       responses.map((response, index) => (
         <div key={index} className="d-flex flex-column align-items-center border rounded p-3 mb-3 w-50 shadow response-card">
           <h5 className='mb-3'>Response {index + 1}</h5>
           {response.submittedValues.map((item, i) => (
             <p className='d-flex justify-content-center align-items-center gap-3' key={i}>
               <strong>{questions[i]?.question || `Question ${i + 1}`}</strong> <span className='fw-bold'>:</span> <span className='fs-4 fw-bold text-primary'>{item}</span>
             </p>
           ))}
           {response.suggestions && (
            <div>
              <p className="mb-0">
                <strong>
                Suggestion : 
                </strong>{" "}
                {response.suggestions}
              </p>
            </div>
           )}
         </div>
       ))
     )}
   </div>
  );
}

export default Responses;
