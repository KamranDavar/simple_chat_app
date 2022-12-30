import { useState, useEffect } from 'react';

export function useUsers() {
    const [users, setUsers] = useState();

    useEffect(() => {
      function getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => setUsers(json));
      }
  
      getUsers();
    }, []);

  return {users, setUsers} ;
}