// src/firebaseService.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import Firestore instance

// Function to add chapter data with problems
const addChapterData = async (chapters) => {
  try {
    // Loop through the chapters array
    for (const chapter of chapters) {
      // Create a document for each chapter
      const docRef = await addDoc(collection(db, "chapters"), {
        name: chapter.name, // Chapter name
        problems: chapter.problems, // Array of problems under the chapter
      });
      console.log("Chapter added with ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { addChapterData };
