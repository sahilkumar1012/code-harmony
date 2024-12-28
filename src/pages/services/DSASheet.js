import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaYoutube, FaSort } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import problemsData from '../../data/problems.json';
import { useUser } from "../../UserContext";
import { app } from '../../firebaseConfig';
import './DSASheet.css';

const DSASheet = () => {
  const { user, storeRedirectUrl } = useUser();
  const navigate = useNavigate();

  const [problems, setProblems] = useState(problemsData);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [completedProblemsSet, setCompletedProblemsSet] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const db = getFirestore(app);
  const completedProblemsKey = "completedProblems";

  useEffect(() => {
    const fetchCompletedProblems = async () => {
      const userDoc = doc(db, 'users', user.id);
      const userData = await getDoc(userDoc);
      if (userData.exists()) {
        const completedProblems = userData.data()[completedProblemsKey] || [];
        setCompletedProblemsSet(new Set(completedProblems));
      }
    };

    if (user) {
      fetchCompletedProblems();
    }
  }, [user, db]);

  const handleToggleCompletion = async (problemId) => {
    if (user == null || user.id == null) {
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
    const filteredByTopic = selectedTopic === "All"
      ? problems
      : problems.filter((problem) => problem.topics.includes(selectedTopic));

    return filteredByTopic.filter((problem) =>
      problem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const uniqueTopics = [
    "All",
    ...new Set(problems.flatMap((problem) => problem.topics)),
  ];

  const renderTable = (filteredProblems) => (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="problem-id">LeetCode ID</th>
            <th className="problem-title">Problem Title</th>
            <th
              onClick={() => handleSort("difficulty")}
              style={{ cursor: "pointer" }}
            >
              Difficulty<FaSort />
            </th>
            <th className="text-center explanation-column">Explanation</th>
            <th
              onClick={() => handleSort("completed")}
              style={{ cursor: "pointer" }}
              className="text-center"
            >
              Done<FaSort />
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

              <td className="text-center">
                <label className="fancy-checkbox">
                  <input
                    type="checkbox"
                    checked={completedProblemsSet.has(problem.leetcodeId)}
                    onChange={(e) => handleToggleCompletion(problem.leetcodeId)}
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
      <div className="d-flex flex-column align-items-center mb-4">
        <h1 className="text-center">DSA Essentials Sheet</h1>
        <div className="mb-3 d-flex gap-3">
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
          <input
            type="text"
            className="form-control"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {renderTable(filterProblems())}
    </div>
  );
};

export default DSASheet;
