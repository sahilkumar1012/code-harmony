// Import necessary React hooks
import React, { useEffect } from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaYoutube, FaSort } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { FaSearch, FaTimes } from "react-icons/fa";

import problemsData from '../../data/problems.json';
import { useUser } from "../../UserContext";
import { app } from '../../firebaseConfig';
import './DSASheet.css';
import RenderTags from "./RenderTags";
import leetcodeLogo from "../../../src/assets/leetcode-icon.png";

const DSASheet = () => {
  const { user, storeRedirectUrl } = useUser();
  const navigate = useNavigate();

  const [problems, setProblems] = useState(problemsData);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [completedProblemsSet, setCompletedProblemsSet] = useState(new Set());

  const db = getFirestore(app);
  const completedProblemsKey = "completedProblems";

  useEffect(() => {
    const fetchCompletedProblems = async () => {
      if (!user) return;
      const userDoc = doc(db, 'users', user.id);
      const userData = await getDoc(userDoc);
      if (userData.exists()) {
        const completedProblems = userData.data()[completedProblemsKey] || [];
        setCompletedProblemsSet(new Set(completedProblems));
      }
    };
    fetchCompletedProblems();
  }, [user, db]);

  const handleToggleCompletion = async (problemId) => {
    if (!user || !user.id) {
      storeRedirectUrl(window.location.pathname);
      navigate('/login');
      return;
    }

    const userDoc = doc(db, 'users', user.id);
    if (completedProblemsSet.has(problemId)) {
      await updateDoc(userDoc, {
        [completedProblemsKey]: arrayRemove(problemId),
      });
      setCompletedProblemsSet((prevSet) => {
        const updatedSet = new Set(prevSet);
        updatedSet.delete(problemId);
        return updatedSet;
      });
    } else {
      await updateDoc(userDoc, {
        [completedProblemsKey]: arrayUnion(problemId),
      });
      setCompletedProblemsSet((prevSet) => new Set(prevSet.add(problemId)));
    }
  };

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
        const isACompleted = completedProblemsSet.has(a.leetcodeId);
        const isBCompleted = completedProblemsSet.has(b.leetcodeId);

        return direction === "asc"
          ? Number(isACompleted) - Number(isBCompleted)
          : Number(isBCompleted) - Number(isACompleted);
      }
      return 0;
    });

    setProblems(sortedProblems);
  };

  const filterProblems = () => {
    return problems.filter((problem) =>
      (selectedTopic === "All" || problem.topics.includes(selectedTopic)) &&
      (problem.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const uniqueTopics = [
    "All",
    ...new Set(problems.flatMap((problem) => problem.topics)),
  ];

  const filteredProblems = filterProblems();
  const completedCount = filteredProblems.filter(problem => completedProblemsSet.has(problem.leetcodeId)).length;
  const totalProblems = problems.length;
  const completionPercentage = Math.round((completedProblemsSet.size / totalProblems) * 100);


  const renderTable = (filteredProblems) => (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th className="problem-id">
              <img 
                src={leetcodeLogo} 
                alt="LeetCode Logo" 
                style={{ height: '25px', verticalAlign: 'middle' }} 
              /> 
            </th>

            <th className="problem-title">Problem Title</th>
            <th onClick={() => handleSort("difficulty")} style={{ cursor: "pointer" }}>
              Difficulty<FaSort />
            </th>
            <th className="text-center explanation-column">Explanation</th>
            <th className="text-center tags-column">Tags</th>
            <th
              onClick={() => handleSort("completed")}
              style={{ cursor: "pointer" }}
              className="text-center"
            >
              Done ({completedCount}/{filteredProblems.length}) <FaSort />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProblems.map((problem) => (
            <tr key={problem.leetcodeId}>
              <td>
                <a href={problem.link} target="_blank" rel="noopener noreferrer">
                  {problem.leetcodeId}
                </a>
              </td>
              <td>
                <a href={problem.link} target="_blank" rel="noopener noreferrer">
                  {problem.title}
                </a>
              </td>
              <td className={getDifficultyClass(problem.difficulty)}>
                {problem.difficulty}
              </td>
              <td className="text-center youtube-link">
                {problem.youtubeLink && (
                  <a
                    href={problem.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-icon"
                  >
                    <FaYoutube />
                  </a>
                )}
              </td>
              <td>
                <RenderTags problem={problem}/>
              </td>
              <td className="text-center">
                <label className="fancy-checkbox">
                  <input
                    type="checkbox"
                    checked={completedProblemsSet.has(problem.leetcodeId)}
                    onChange={() => handleToggleCompletion(problem.leetcodeId)}
                  />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container-fluid mt-5">
      <div className="d-flex flex-wrap justify-content-center flex-column mb-1 align-items-center">
        
        <h1 className="text-center mb-4">DSA Essentials Sheet</h1>

        {/* Progress Bar */}
        <div className="progress-container col-12 col-md-8 col-lg-6 mb-4">
          <div className="progress" style={{ height: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
            <div
              className="progress-bar progress-bar-success progress-bar-animated"
              role="progressbar"
              style={{
                width: `${completionPercentage}%`,
                // background: "linear-gradient(90deg, #4caf50, #2196f3)",
                transition: "width 0.6s ease-in-out",
                borderRadius: "10px",
                minWidth:"3ch"
              }}
            >
              {completionPercentage}%
            </div>
          </div>
        </div>        

        <div className="row justify-content-center align-items-center">
          {/* Dropdown */}
          <div className="col-auto mb-3">
            <select
              className="form-select"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              style={{ minWidth: "200px" }} // Ensure dropdown is not too narrow
            >
              {uniqueTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Search Bar */}
          <div className="col-auto mb-3">
            <div className="input-group">
              <span className="input-group-text bg-light">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search problems by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: "250px", color: "#212529" }}
              />
              {searchQuery && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={clearSearch}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
        </div>


      </div>

      {renderTable(filterProblems())}
    </div>
  );
};

export default DSASheet;
