import { useEffect, useMemo, useState } from "react";
import type { User } from "./types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function UserComponents() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [users, searchTerm]);

  const handleDelete = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div>
          {filteredUsers.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              <button>Edit</button>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && filteredUsers.length === 0 && (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserComponents;
