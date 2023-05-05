import React, { useState, useEffect } from 'react';

const SearchData = () => {
  const [steps, setSteps] = useState([
    {id: 1, action: 'START', next_step_id: 3},
    {id: 3, action: 'BOIRE', next_step_id: 2},
    {id: 2, action: 'DORMIR', next_step_id: 5},
    {id: 5, action: 'TRAVAILLER', next_step_id: 4},
    {id: 4, action: 'JOUER', next_step_id: 9},
    {id: 6, action: 'VOYAGER', next_step_id: 7},
    {id: 7, action: 'TERMINER', next_step_id: null},
    {id: 9, action: 'TELEPHONER', next_step_id: 6}
  ]);

  const [ordonnedSteps, setOrdonnedSteps] = useState([]);

  useEffect(() => {
    const currentStep = steps.find(step => step.action === "START");
    const ordonnedSteps = [currentStep]; 

    while (currentStep.next_step_id !== null) { 
      currentStep = steps.find(step => step.id === currentStep.next_step_id);
      ordonnedSteps.push(currentStep);
    }
    setOrdonnedSteps(ordonnedSteps);
  }, [steps]);

  return (
    <div>
      <h2>Steps:</h2>
      <ul>
        {ordonnedSteps.map(step => (
          <li key={step.id}>{step.action}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchData;
