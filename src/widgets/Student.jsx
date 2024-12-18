import React, { useState } from 'react';
import FormToTable from './addStudent';

function Student() {
    // State to hold all the form input values
    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        fromHour: '',
        toHour: '',
        facultyName: '',
        facultyId: '',
    });

    // Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="p-4">
        {/* Header */}
        <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mt-8">
          <h1>Duty Leave Application Form</h1>
        </div>
      
        {/* Form */}
        <div className='mt-5'>
          <form className="flex flex-col space-y-6  max-w-xl mx-auto bg-white rounded-xl p-10 shadow-md">
            {/* Event Name */}
            <div className="flex flex-col space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-900">
                Event Name*
              </label>
              <input
                type="text"
                name="eventName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                required
                value={formData.eventName}
                onChange={handleChange}
              />
            </div>
      
            {/* Date and Hours */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Date */}
              <div className="flex flex-col">
                <label className="block text-sm sm:text-base font-medium text-gray-900">
                  Date*
                </label>
                <input
                  type="date"
                  name="date"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
      
              {/* From Hour */}
              <div className="flex flex-col">
                <label className="block text-sm sm:text-base font-medium text-gray-900">
                  From Hour*
                </label>
                <input
                  type="number"
                  name="fromHour"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  required
                  value={formData.fromHour}
                  onChange={handleChange}
                />
              </div>
      
              {/* To Hour */}
              <div className="flex flex-col">
                <label className="block text-sm sm:text-base font-medium text-gray-900">
                  To Hour*
                </label>
                <input
                  type="number"
                  name="toHour"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  required
                  value={formData.toHour}
                  onChange={handleChange}
                />
              </div>
            </div>
      
            {/* Faculty Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Faculty Name */}
              <div className="flex flex-col">
                <label className="block text-sm sm:text-base font-medium text-gray-900">
                  Consulting Faculty Name*
                </label>
                <input
                  type="text"
                  name="facultyName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  required
                  value={formData.facultyName}
                  onChange={handleChange}
                />
              </div>
      
              {/* Faculty ID */}
              <div className="flex flex-col">
                <label className="block text-sm sm:text-base font-medium text-gray-900">
                  Fac ID*
                </label>
                <input
                  type="text"
                  name="facultyId"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  required
                  value={formData.facultyId}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      
        {/* Form Data to Table */}
        <div className="mt-8">
          <FormToTable formData={formData} />
        </div>
      

       
      </div>
      
    );
}

export default Student;
