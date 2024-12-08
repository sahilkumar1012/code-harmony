// // src/AddDataPage.js
// import React, { useState } from "react";
// import { addChapterData } from "../../firebaseService"; // Import add function

// const AddDataPage = () => {
//   const [chapters, setChapters] = useState([
//     {
//       name: "Arrays",
//       problems: [
//         {
//           id: 1,
//           leetcodeId: "1",
//           title: "Two Sum",
//           link: "https://leetcode.com/problems/two-sum/",
//           difficulty: "Easy",
//           youtubeLink: "https://youtube.com/your-solution-video-1",
//           completed: false,
//         },
//         {
//           id: 2,
//           leetcodeId: "56",
//           title: "Merge Intervals",
//           link: "https://leetcode.com/problems/merge-intervals/",
//           difficulty: "Medium",
//           youtubeLink: "https://youtube.com/your-solution-video-2",
//           completed: false,
//         },
//         {
//           id: 3,
//           leetcodeId: "42",
//           title: "Trapping Rain Water",
//           link: "https://leetcode.com/problems/trapping-rain-water/",
//           difficulty: "Hard",
//           youtubeLink: "https://youtube.com/your-solution-video-3",
//           completed: false,
//         },
//       ],
//     },
//     {
//       name: "Strings",
//       problems: [
//         {
//           id: 1,
//           leetcodeId: "3",
//           title: "Longest Substring Without Repeating Characters",
//           link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
//           difficulty: "Medium",
//           youtubeLink: "https://youtube.com/your-solution-video-4",
//           completed: false,
//         },
//         {
//           id: 2,
//           leetcodeId: "5",
//           title: "Longest Palindromic Substring",
//           link: "https://leetcode.com/problems/longest-palindromic-substring/",
//           difficulty: "Medium",
//           youtubeLink: "https://youtube.com/your-solution-video-5",
//           completed: false,
//         },
//         {
//           id: 3,
//           leetcodeId: "76",
//           title: "Minimum Window Substring",
//           link: "https://leetcode.com/problems/minimum-window-substring/",
//           difficulty: "Hard",
//           youtubeLink: "https://youtube.com/your-solution-video-6",
//           completed: false,
//         },
//       ],
//     },
//   ]);

//   // Submit data to Firebase
//   const handleSubmit = () => {
//     addChapterData(chapters); // Call the service to add data to Firestore
//     // Clear the form after submit
//     setChapters([]);
//   };

//   return (
//     <div className="container">
//       <h1>Add Chapter Data</h1>
//       <div>
//         <h3>Chapters</h3>
//         {chapters.map((chapter, chapterIndex) => (
//           <div key={chapterIndex}>
//             <h4>{chapter.name}</h4>
//             <ul>
//               {chapter.problems.map((problem, problemIndex) => (
//                 <li key={problemIndex}>
//                   <div>
//                     <h5>{problem.title}</h5>
//                     <p>Leetcode ID: {problem.leetcodeId}</p>
//                     <p>Difficulty: {problem.difficulty}</p>
//                     <a href={problem.link} target="_blank" rel="noopener noreferrer">
//                       Leetcode Problem
//                     </a>
//                     <br />
//                     <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer">
//                       Solution Video
//                     </a>
//                     <br />
//                     <label>
//                       Completed
//                       <input
//                         type="checkbox"
//                         checked={problem.completed}
//                         onChange={() => {
//                           const updatedChapters = [...chapters];
//                           updatedChapters[chapterIndex].problems[problemIndex].completed =
//                             !updatedChapters[chapterIndex].problems[problemIndex].completed;
//                           setChapters(updatedChapters);
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//         <button className="btn btn-success mt-3" onClick={handleSubmit}>
//           Submit Data
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddDataPage;
