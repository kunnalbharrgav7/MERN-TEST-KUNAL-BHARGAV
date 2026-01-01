import { useEffect, useState } from "react";
import { UserItem } from "./UserItem";

export const UsersList = () => {

    const [usersApi, setUsersApi] = useState(null);
  //handle loading state
  const [loading, setLoading] = useState(true);
  //handle error state
  const [error, setError] = useState(null);

      useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await result.json();
        setUsersApi(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

    if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

    else if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

    return (
    <div>
    <h2>User List</h2>
      <ul>
      {usersApi.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      </ul>
    </div>
    )
}