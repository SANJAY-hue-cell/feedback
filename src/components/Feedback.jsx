import React, { useContext, useState } from 'react';
import Card from './Card';
import { Contexts } from '../context/OpenContext';
import { toast } from 'react-toastify';
import axios from 'axios' ;

function Feedback() {
  const { questions , submittedValues , setSubmittedValues , suggestions , setSuggestions } = useContext(Contexts);

  // State array to store range values for all questions
  const [rangeValues, setRangeValues] = useState(
    Array(questions.length).fill(0) // Initialize with zeros for each question
  );

  // State to store error and success messages
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handler to update a specific question's range value
  const handleRangeChange = (index, value) => {
    setRangeValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value; // Update the value for the specific index
      return updatedValues;
    });
    setError(''); // Clear the error when the user updates the range
    setSuccess(false); // Clear the success message if user updates any range
  };

  /* // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate that all range values are non-zero
    if (rangeValues.some((value) => value === 0)) {
      toast.error('Please provide a rating for all questions!' , {autoClose:2000});
      return;
    }

    // Retrieve existing responses from localStorage or initialize with an empty array
    const existingResponses = JSON.parse(localStorage.getItem('response')) || [];

    // Append the new response
    const updatedResponses = [...existingResponses, rangeValues];

    // Store the updated array in localStorage
    localStorage.setItem('response', JSON.stringify(updatedResponses));

    // Update the state with the submitted values
    setSubmittedValues(rangeValues);

    // Reset the range values to zeros
    setRangeValues(Array(questions.length).fill(0));

    // Clear error and show success message
    setError('');
    setSuccess(true);
    toast.success('Response Counted !' , {autoClose:2000})
  }; */

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validation
    if (rangeValues.some((value) => value === 0)) {
      toast.error('Please provide a rating for all questions!', { autoClose: 2000 });
      return;
    }
  
    try {
      const responses = await axios.post('/response', {
        submittedValues: rangeValues,
        suggestions
      });
      if (responses.data.error) {
        toast.error(responses.data.error , {autoClose:2000});
      } else {
        toast.success("Feedback counted!" , {autoClose:2000});
        setRangeValues(Array(questions.length).fill(0)); // Reset ranges
        setSuggestions('') ;
      }
    } catch (err) {
      console.error(err);
      toast.error("Unexpected error. Please try again later.");
    }
  };
  
  
  

  return (
    <div className="text-center" style={{backgroundColor:' #ff5722' , paddingTop:'4rem'}}>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center p-4 gap-3">
        <h4 className='text-light bg-success border rounded p-3 jusify-self-start' style={{position:'sticky' , top:'8%' , zIndex:'998'}}>
          Feedback Form
        </h4>
        {questions.map((item, index) => (
          <div
            key={index} // Unique key for each question
            className="d-flex flex-column justify-content-center align-items-center gap-2"
          >
            <Card
              question={item.question}
              number={item.no}
              rangeValue={rangeValues[index]} // Pass the current range value
              setRangeValue={(value) => handleRangeChange(index, value)} // Update the specific value
            />
          </div>
        ))}

        <textarea 
        className='p-2' 
        rows={5} 
        cols={60} 
        placeholder='Any suggestions !'
        value={suggestions}
        onChange={(event)=> setSuggestions(event.target.value)}
        ></textarea>


        <button type="submit" className="btn btn-dark mt-2">
          Rate Us
        </button>
      </form>

     
    </div>
  );
}

export default Feedback;
