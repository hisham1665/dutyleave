import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/cofig"; // Import Firestore instance

const FormToTable = (props) => {
    const data = props.formData
  // State to hold input form values
  const [formData, setFormData] = useState({
    Sr_Number: "",
    Name: "",
    Sem: "",
    Class_Div: "",
    Rollno: ""
  });

  // State to hold table rows
  const [rows, setRows] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add row to table and clear form fields
  const handleAdd = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      formData.Sr_Number &&
      formData.Name &&
      formData.Sem &&
      formData.Class_Div &&
      formData.Rollno
    ) {
      setRows([...rows, formData]); // Add new row
      setFormData({
        Sr_Number: "",
        Name: "",
        Sem: "",
        Class_Div: "",
        Rollno: "",
      }); // Clear form
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Submit table data to Firestore
  const handleSubmitToFirestore = async () => {
    if (rows.length === 0) {
      alert("Table is empty. Add some data first!");
      return;
    }

    try {
      // Add rows array as a single document in Firestore
      const docRef = await addDoc(collection(db, "Application"), {
        tableData: rows,
        data: data,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Table data submitted successfully!");

      // Clear table after submission
      setRows([]);
      window.location.reload()
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting data to Firestore!");
    }
  };

  return (
    <div className="p-4 place-items-center ">
      <h1 className="text-2xl font-bold mb-4">Students List</h1>

      {/* Form Section */}
      <form onSubmit={handleAdd} className="grid grid-cols-1 gap-5 mb-4">
        <div className="grid grid-cols-5 gap-4">
          <label className="block mb-1 text-md font-medium text-gray-900">
            SR NO*
          </label>
          <label className="block mb-1 text-md font-medium text-gray-900">
            Name*
          </label>
          <label className="block mb-1 text-md font-medium text-gray-900">
            Semester*
          </label>
          <label className="block mb-1 text-md font-medium text-gray-900">
            Class*
          </label>
          <label className="block mb-1 text-md font-medium text-gray-900">
            Roll NO*
          </label>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <input
            type="number"
            name="Sr_Number"
            value={formData.Sr_Number}
            onChange={handleChange}
            placeholder="SR"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 "
          />
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 "
          />
          <input
            type="text"
            name="Sem"
            value={formData.Sem}
            onChange={handleChange}
            placeholder="Semester"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 "
          />
          <input
            type="text"
            name="Class_Div"
            value={formData.Class_Div}
            onChange={handleChange}
            placeholder="Class"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 "
          />
          <input
            type="number"
            name="Rollno"
            value={formData.Rollno}
            onChange={handleChange}
            placeholder="Roll NO"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 "
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Table
        </button>
      </form>

      {/* Table Section */}
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2 bg-red-500 w-40">SR NO</th>
            <th className="border p-2 bg-red-500 w-64">Name</th>
            <th className="border p-2 bg-red-500 w-16">Semester</th>
            <th className="border p-2 bg-red-500 w-16 " >Class</th>
            <th className="border p-2 bg-red-500 w-16">Roll NO</th>
          </tr>
        </thead>
        <tbody>
          {/* Display Rows Dynamically */}
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border p-2">{row.Sr_Number}</td>
              <td className="border p-2">{row.Name}</td>
              <td className="border p-2">{row.Sem}</td>
              <td className="border p-2">{row.Class_Div}</td>
              <td className="border p-2">{row.Rollno}</td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan="4" className="border p-2 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Submit Button */}
      <button
        onClick={handleSubmitToFirestore}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
      >
        Submit to Firestore
      </button>
    </div>
  );
};

export default FormToTable;
