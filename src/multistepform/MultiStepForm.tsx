import React, { useState } from "react";
import { IFormData, IFormErrors } from "../interfaces/MultiStepForm";

const defaultFormData = {
  name: "",
  email: "",
  age: 0,
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<IFormData>(defaultFormData);
  const [errors, setErrors] = useState<IFormErrors>({});

  const validateStep = () => {
    const newErrors: IFormErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
    } else if (step === 2) {
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
        newErrors.email = "Invalid email";
    } else if (step === 3) {
      if (!formData.age) newErrors.age = "Age is required";
      else if (isNaN(formData.age) || +formData.age < 1)
        newErrors.age = "Enter a valid age";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Multi-Step Form</h1>

      {step === 1 && (
        <div>
          <label className="block mb-2">Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            className="border px-2 py-1 w-full mb-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block mb-2">Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border px-2 py-1 w-full mb-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block mb-2">Age:</label>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border px-2 py-1 w-full mb-2"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="font-semibold mb-2">Summary</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
        </div>
      )}

      <div className="mt-4 flex justify-between">
        {step > 1 && step <= 3 && (
          <button
            onClick={handleBack}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
          >
            Next
          </button>
        )}
        {step === 4 && (
          <button
            onClick={() => alert("Form submitted!")}
            className="bg-green-500 text-white px-4 py-2 rounded ml-auto"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
