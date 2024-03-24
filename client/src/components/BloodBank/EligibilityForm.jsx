import React, { useState } from 'react';

const EligibilityForm = ({ onSubmit }) => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [haemoglobin, setHaemoglobin] = useState('');
  const [tattooOrPiercing, setTattooOrPiercing] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [highBloodPressure, setHighBloodPressure] = useState(false);
  const [healthConditions, setHealthConditions] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (age < 18) {
      setErrorMessage('You must be at least 18 years old to donate blood.');
      return;
    }
    if (weight < 50) {
      setErrorMessage('Your weight must be at least 50kg to donate blood.');
      return;
    }
    if (haemoglobin < 12) {
      setErrorMessage('Your haemoglobin level must be at least 13 g/dL for males or 12 g/dL for females to donate blood.');
      return;
    }
    if (tattooOrPiercing) {
      setErrorMessage('You cannot donate blood if you have had a tattoo or piercing within the last 6 months.');
      return;
    }
    if (diabetes) {
      setErrorMessage('You cannot donate blood if you have diabetes.');
      return;
    }
    if (highBloodPressure) {
      setErrorMessage('You cannot donate blood if you have high blood pressure.');
      return;
    }
    if (healthConditions.toLowerCase().includes('diabetes')) {
      setErrorMessage('You cannot donate blood if you have diabetes.');
      return;
    }
    if (healthConditions.toLowerCase().includes('high blood pressure')) {
      setErrorMessage('You cannot donate blood if you have unstable blood pressure.Should not risk.');
      return;
    }
    if (healthConditions.toLowerCase().includes('pregnancy')) {
      setErrorMessage('You cannot donate blood if you are pregnant.');
      return;
    }
    
    
    if (healthConditions.toLowerCase().includes('flu')) {
      setErrorMessage('You cannot donate blood if you have flu.');
      return;
    }

    if (healthConditions.toLowerCase().includes('stomach bug')) {
      setErrorMessage('You cannot donate blood if you have stomach bug');
      return;
    }
    if (healthConditions.toLowerCase().includes('cold')) {
      setErrorMessage('You cannot donate blood if you have cold.');
      return;
    }
    if (healthConditions.toLowerCase().includes('sore thorat')) {
      setErrorMessage('You cannot donate blood if you have sore throat.');
      return;
    }
  
    onSubmit({ age, weight, haemoglobin, tattooOrPiercing, diabetes, highBloodPressure, healthConditions });
  };
  
  return (
    <div className="max-w-[1040px] mx-auto">
      <h2 className="text-5xl font-bold mb-4">Eligibility Criteria Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Age:</label>
            <input className="border-2 rounded-lg p-3 border-gray-300" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Weight:</label>
            <input className="border-2 rounded-lg p-3 border-gray-300" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Haemoglobin (g/dL):</label>
            <input className="border-2 rounded-lg p-3 border-gray-300" type="number" value={haemoglobin} onChange={(e) => setHaemoglobin(e.target.value)} />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="uppercase text-sm py-2">Recent Tattoo or Piercing <em>(If no then can skip)</em>:</label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" checked={tattooOrPiercing} onChange={(e) => setTattooOrPiercing(e.target.checked)} />
              <span className="ml-2">Yes</span>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Diabetes  <em>(If no then can skip)</em> :</label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" checked={diabetes} onChange={(e) => setDiabetes(e.target.checked)} />
              <span className="ml-2">Yes</span>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">High Blood Pressure  <em>(If no then can skip)</em>:</label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" checked={highBloodPressure} onChange={(e) => setHighBloodPressure(e.target.checked)} />
              <span className="ml-2">Yes</span>
            </label>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="uppercase text-sm py-2">Health Conditions like(Blood Pressure/Pregnancy/HIV/cold/ flu/ sore throat/ stomach bug) :</label>
            <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="4" value={healthConditions} onChange={(e) => setHealthConditions(e.target.value)}></textarea>
          </div>
        </div>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <button type="submit" className="bg-red-600 text-white p-3 rounded-md mt-4">Check Eligibility</button>
      </form>
    </div>
  );
};

export default EligibilityForm;
