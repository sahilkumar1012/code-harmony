// External dependencies
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'; // Firestore functions

// Internal application modules
// import problemsData from "../../data/problemsData"; // Adjust path as needed
import problemsData from '../../data/problems.json';
import { useUser } from "../../UserContext";
import { app } from '../../firebaseConfig'; // Import Firebase app


const DSASheet = () => {
  const { user, storeRedirectUrl } = useUser(); // Access user state and logout function
  const navigate = useNavigate();

  const [problems, setProblems] = useState(problemsData);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [completedProblemsSet, setCompletedProblemsSet] = useState(new Set()); // State to store completed problems

  const db = getFirestore(app); // Get Firestore instance
  const completedProblemsKey = "completedProblems";

  // Fetch completed problems from Firestore and update the state
  useEffect(() => {
    const fetchCompletedProblems = async () => {
      const userDoc = doc(db, 'users', user.id);
      const userData = await getDoc(userDoc);
      if (userData.exists()) {
        const completedProblems = userData.data()[completedProblemsKey] || [];
        setCompletedProblemsSet(new Set(completedProblems)); // Update the state with the completed problems set
      }
    };

    if (user) {
      fetchCompletedProblems();
    }
  }, [user, db]);

  // Toggle completion status
  const handleToggleCompletion = async (problemId) => {
    // Initialize the navigate function
    // console.log(user);
    if (user == null || user.id == null) {
      // Store the current URL as the redirect URL before navigating to login page
      storeRedirectUrl(window.location.pathname);
      navigate('/login'); // Redirect to login if the user is not logged in
      return;
    }

    const userDoc = doc(db, 'users', user.id);

    // Check if the problem is already marked as completed
    if (completedProblemsSet.has(problemId)) {
      // If the problem is checked, we need to remove it from the completedProblems array
      await updateDoc(userDoc, {
        [completedProblemsKey]: arrayRemove(problemId),
      });

      // Update the completed problems set locally after removing from the database
      setCompletedProblemsSet((prevSet) => {
        const updatedSet = new Set(prevSet);
        updatedSet.delete(problemId); // Remove the problemId from the set
        return updatedSet;
      });
    } else {
      // If the problem is not checked, we need to add it to the completedProblems array
      await updateDoc(userDoc, {
        [completedProblemsKey]: arrayUnion(problemId),
      });

      // Update the completed problems set locally after adding to the database
      setCompletedProblemsSet((prevSet) => new Set(prevSet.add(problemId)));
    }
  };


  // Get CSS class for difficulty
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-success";
      case "Medium":
        return "text-warning";
      case "Hard":
        return "text-danger";
      default:
        return "";
    }
  };

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });

    const sortedProblems = [...problems].sort((a, b) => {
      if (key === "difficulty") {
        const order = { Easy: 1, Medium: 2, Hard: 3 };
        return direction === "asc"
          ? order[a.difficulty] - order[b.difficulty]
          : order[b.difficulty] - order[a.difficulty];
      }
      if (key === "completed") {
        // Compare based on whether the problem is completed or not
        const isACompleted = completedProblemsSet.has(a.leetcodeId);
        const isBCompleted = completedProblemsSet.has(b.leetcodeId);

        return direction === "asc"
          ? Number(isACompleted) - Number(isBCompleted)
          : Number(isBCompleted) - Number(isACompleted);
      }
      return 0; // Default: No sorting for other columns
    });

    setProblems(sortedProblems);
  };


  // Filter problems by topic
  const filterProblemsByTopic = () => {
    return selectedTopic === "All"
      ? problems
      : problems.filter((problem) => problem.topics.includes(selectedTopic));
  };

  // Unique topics list
  const uniqueTopics = [
    "All",
    ...new Set(problems.flatMap((problem) => problem.topics)),
  ];

  // Render problems in a table
  const renderTable = (filteredProblems) => (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>LeetCode ID</th>
          <th>Problem Title</th>
          <th
            onClick={() => handleSort("difficulty")}
            style={{ cursor: "pointer" }}
          >
            Difficulty
          </th>
          <th className="text-center">Explanation</th>
          <th
            onClick={() => handleSort("completed")}
            style={{ cursor: "pointer" }}
            className="text-center"
          >
            Completed
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredProblems.map((problem) => (
          <tr key={problem.leetcodeId}>
            <td>
              <a
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {problem.leetcodeId}
              </a>
            </td>
            <td>
              <a
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {problem.title}
              </a>
            </td>
            <td className={getDifficultyClass(problem.difficulty)}>
              {problem.difficulty}
            </td>
            <td className="text-center">
              {problem.youtubeLink && (
                <a
                  href={problem.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FF0000' }}
                >
                  <FaYoutube />
                </a>
              )}
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                checked={completedProblemsSet.has(problem.leetcodeId)}
                onChange={(e) => handleToggleCompletion(problem.leetcodeId)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="d-flex flex-column align-items-center mb-4">
        <h1 className="text-center">DSA Essentials Sheet</h1>
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content Section */}
      {renderTable(filterProblemsByTopic())}
    </div>
  );
};

export default DSASheet;
