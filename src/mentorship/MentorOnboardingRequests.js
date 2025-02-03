import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const MentorOnboardingRequests = () => {
  const [requests, setRequests] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchMentorRequests = async () => {
      try {
        const mentorOnboardingDoc = doc(db, "requests", "mentorOnboarding");
        const docSnap = await getDoc(mentorOnboardingDoc);

        if (docSnap.exists()) {
          const mentorRequests = docSnap.data().mentorOnboarding;
          setRequests(mentorRequests);
        } else {
          console.log("No mentor onboarding requests found.");
        }
      } catch (error) {
        console.error("Error fetching mentor requests:", error);
      }
    };

    fetchMentorRequests();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mentor Onboarding Requests</h2>
      <div className="list-group">
        {requests.length === 0 ? (
          <p>No requests found.</p>
        ) : (
          requests.map((request, index) => (
            <div key={index} className="list-group-item">
              <p><strong>Name:</strong> {request.name}</p>
              <p><strong>Email:</strong> {request.email}</p>
              <p><strong>Mobile:</strong> {request.mobile}</p>
              <p><strong>LinkedIn:</strong> <a href={request.linkedIn} target="_blank" rel="noopener noreferrer">{request.linkedIn}</a></p>
              <p><strong>Topmate:</strong> <a href={request.topmate} target="_blank" rel="noopener noreferrer">{request.topmate}</a></p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MentorOnboardingRequests;
