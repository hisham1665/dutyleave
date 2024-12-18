import React, { useState } from "react";


function Cards() {

  const events = [
    {
      eventName: "CyberSec Workshop",
      date: "16/06/2023",
      hours: "1-4",
      facultyApproved: true,
      principalApproved: false,
      description: "A workshop focusing on cybersecurity practices and strategies."
    },
    {
      eventName: "Tech Talk",
      date: "20/06/2023",
      hours: "3-6",
      facultyApproved: false,
      principalApproved: true,
      description: "A tech talk covering the latest trends in technology and innovation."
    },
    {
        eventName: "AI talk",
        date: "20/06/2023",
        hours: "3-6",
        facultyApproved: true,
        principalApproved: true
      },
      {
        eventName: "Tech Talk",
        date: "20/06/2023",
        hours: "3-6",
        facultyApproved: false,
        principalApproved: false
      },

  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      {}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="google.com">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {event.eventName}
              </h5>
            </a>

            {}
            <div className="flex justify-between items-center">
              <p className="font-normal text-gray-500 dark:text-gray-400">
                {event.date}
              </p>
              <p className="font-normal text-gray-500 dark:text-gray-400 flex items-center">
                Approved by Faculty
                {event.facultyApproved ? (
                  <svg
                    className="w-5 h-5 text-green-500 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 0 0-1.414 0L8 12.586 4.707 9.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-red-500 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 8.586 4.707 3.293a1 1 0 0 0-1.414 1.414l5.293 5.293-5.293 5.293a1 1 0 1 0 1.414 1.414L10 11.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-5.293-5.293 5.293-5.293a1 1 0 1 0-1.414-1.414L10 8.586Z" />
                  </svg>
                )}
              </p>
            </div>

            {}
            <div className="flex justify-between items-center mt-2">
              <p className="font-normal text-gray-500 dark:text-gray-400">
                Hours: {event.hours}
              </p>
              <p className="font-normal text-gray-500 dark:text-gray-400 flex items-center">
                Approved by Principal
                {event.principalApproved ? (
                  <svg
                    className="w-5 h-5 text-green-500 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 0 0-1.414 0L8 12.586 4.707 9.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-red-500 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 8.586 4.707 3.293a1 1 0 0 0-1.414 1.414l5.293 5.293-5.293 5.293a1 1 0 1 0 1.414 1.414L10 11.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-5.293-5.293 5.293-5.293a1 1 0 1 0-1.414-1.414L10 8.586Z" />
                  </svg>
                )}
              </p>
            </div>

            {}
            <button
              onClick={() => openModal(event)}
              className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedEvent.eventName}</h2>
            <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
            <div className="flex justify-between">
              <p className="font-normal text-gray-500">Date: {selectedEvent.date}</p>
              <p className="font-normal text-gray-500">Hours: {selectedEvent.hours}</p>
            </div>
            <div className="mt-4">
              <button
                onClick={closeModal}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;