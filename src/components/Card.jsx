import React from 'react';

function Card({ question, number, rangeValue, setRangeValue }) {
  const handleInputChange = (event) => {
    setRangeValue(event.target.value); // Call the parent handler
  };

  return (
    <div className="card" style={{ width: '50vw', margin: 'auto' }}>
      <div className="card-body text-center">
        <h5 className="card-title">Question No : {number}</h5>
        <h6 className="card-subtitle mb-2 text-dark fs-5 fw-bold">
          {question}
        </h6>
        <input
          className="text-center w-50 mt-3"
          type="range"
          step={0.5}
          min={0}
          max={10}
          value={rangeValue} // Controlled input
          onChange={handleInputChange} // Trigger parent handler
        />
        <div className="mt-2">
          <strong> Your Rating: </strong>  <span className='fw-bold fs-5'> {rangeValue} </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
