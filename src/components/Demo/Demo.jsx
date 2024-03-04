import React, { useState } from "react";
import './style.css';

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send the data to a server
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      company: "",
      email: "",
    });
  };

  return (
    <section className="bg-primary py-10">
      <div className="container mx-auto p-6">
        <div className="demo-block" >
        <h2 className="text-2xl font-bold italic mb-4">Request a Demo</h2>
        <p className="form-wrapper">
          Experience the future of <em className='italic font-bold'>digital journaling</em> and see for yourself how it can revolutionise your <em className='italic font-bold'>productivity</em>
        </p>
        </div>
       
        <form onSubmit={handleSubmit} className=" form-style mx-auto flex flex-wrap gap-4 pt-16 ">
          <div className="flex-1 field-wrapper">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              required
              autoComplete="name" // Autocomplete attribute
            />
          </div>
          <div className="flex-1 field-wrapper ">
            <label htmlFor="company" className="block text-sm font-bold mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              autoComplete="organization" // Autocomplete attribute
            />
          </div>
          <div className="flex-1 field-wrapper">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              autoComplete="email" // Autocomplete attribute
            />
          </div>
          <div className="flex-1 flex items-end">
            <button
              type="submit"
              className="bg-pink-200 hover:bg-secondary text-gray font-bold py-2 px-4 rounded shadow-xl submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestDemo;
