import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./cofig"; // Import Firestore instance

// Function to fetch student details based on SR Number (partial match)
export const fetchStudentDetailsBySrNumber = async (srNumber) => {
  // Ensure srNumber is a string (Firestore stores it as a string)
  const srPrefix = srNumber.toString();

  // Firestore query to fetch students where SR number starts with the entered digits
  const q = query(
    collection(db, "StudentsCollection"),
    where("SR", ">=", srPrefix), // Matches SR numbers >= entered digits
    where("SR", "<", srPrefix + "\uf8ff"), // Matches SR numbers that are lexicographically less than srPrefix + special character to ensure the query works for all possible SR numbers
    orderBy("SR") // Optional: Order by SR Number for consistent results
  );

  try {
    const querySnapshot = await getDocs(q);
    const fetchedSuggestions = [];

    querySnapshot.forEach((doc) => {
      fetchedSuggestions.push(doc.data());
    });

    return fetchedSuggestions; // Return fetched suggestions
  } catch (error) {
    console.error("Error fetching suggestions: ", error);
    return []; // Return an empty array in case of error
  }
};
