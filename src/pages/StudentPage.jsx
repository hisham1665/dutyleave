import React, { useState } from 'react';
import FormToTable from '../widgets/addStudent';

function StudentPage() {
    // State to hold all the form input values
    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        fromHour: '',
        toHour: '',
        facultyName: '',
        facultyId: '',
        eventDescription: '',
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
        <div>
            <div className='font-bold text-4xl place-items-center mt-8'>
                <h1>Duty Leave Application Form</h1>
            </div>
            <div>
                <form className="flex flex-col space-y-4 p-4 max-w-lg mx-auto">
                    <div className="flex flex-col space-y-4 p-4 mb-3">
                        <label className='block mb-1 text-md font-medium text-gray-900'>Event Name*</label>
                        <input
                            type='text'
                            name='eventName'
                            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5'
                            required
                            value={formData.eventName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="date" className="block mb-1 text-md font-medium text-gray-900">Date*</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5"
                                required
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="fromHour" className="block mb-1 text-md font-medium text-gray-900">From Hour*</label>
                            <input
                                type="number"
                                name="fromHour"
                                id="fromHour"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-20"
                                required
                                value={formData.fromHour}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="toHour" className="block mb-1 text-md font-medium text-gray-900">To Hour*</label>
                            <input
                                type="number"
                                name="toHour"
                                id="toHour"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-20"
                                required
                                value={formData.toHour}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-8">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="facultyName" className="block mb-1 text-md font-medium text-gray-900">Consulting Faculty Name*</label>
                            <input
                                type="text"
                                name="facultyName"
                                id="facultyName"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5"
                                required
                                value={formData.facultyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="facultyId" className="block mb-1 text-md font-medium text-gray-900">Fac ID*</label>
                            <input
                                type="text"
                                name="facultyId"
                                id="facultyId"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-20"
                                required
                                value={formData.facultyId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='relative z-0 w-full mb-5'>
                        <label htmlFor="eventDescription" className="block mb-1 text-md font-medium text-gray-900">Briefly Describe The Event*</label>
                        <textarea
                            id="eventDescription"
                            rows="4"
                            name='eventDescription'
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            required
                            value={formData.eventDescription}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </form>
            </div>
            <div>
                <FormToTable formData={formData} />
            </div>
        </div>
    );
}

export default StudentPage;
