import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const internsDataStatic = [
  // Removed static data as per user request to fetch only from Firebase
];

const Intern = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem("internSearchTerm") || "";
  });
  const [internsData, setInternsData] = useState([]);

  useEffect(() => {
    localStorage.setItem("internSearchTerm", searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "interns"));
        const internsList = [];
        querySnapshot.forEach((doc) => {
          internsList.push(doc.data());
        });
        setInternsData(internsList);
      } catch (error) {
        console.error("Error fetching interns data: ", error);
        // Fallback to static data if fetch fails
        setInternsData(internsDataStatic);
      }
    };
    fetchInterns();
  }, []);

  // If user is logged in and student ID matches, show only that intern
  const filteredInterns = user && user.studentId
    ? internsData.filter(
        (intern) =>
          intern.id.toLowerCase() === user.studentId.toLowerCase() &&
          (intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            intern.id.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : internsData.filter(
        (intern) =>
          intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          intern.id.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="min-h-screen p-6 bg-gray-100 pt-24">
      <h1 className="text-3xl font-bold mb-4">Interns</h1>
      <input
        type="text"
        placeholder="Search by Student Name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded w-full max-w-sm"
      />
      <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded">
        <strong>Coming Soon:</strong> New internship programs and opportunities will be available soon.
      </div>
      <div className="mb-6 p-4 bg-blue-100 border border-blue-400 rounded">
        <strong>Important Details:</strong> Please ensure your student ID is correct when searching. Contact HR for any queries.
      </div>
      <table className="w-full max-w-md border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">Student ID</th>
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredInterns.length > 0 ? (
            filteredInterns.map((intern) => (
              <tr key={intern.id}>
                <td className="border border-gray-300 p-2">{intern.id}</td>
                <td className="border border-gray-300 p-2">{intern.name}</td>
                <td className="border border-gray-300 p-2">{intern.department}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border border-gray-300 p-2 text-center">
                No interns found with the given search criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Intern;
