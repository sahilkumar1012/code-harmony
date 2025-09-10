import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function UserList() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function fetchUsers() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Registered Users</h2>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li key={index} className="border p-2 rounded">
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
