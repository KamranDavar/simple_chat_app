import { useState, useEffect } from "react";

export function useProfile() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    function getProfile() {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${Math.floor(
          Math.random() * 10
        )}`
      )
        .then((response) => response.json())
        .then((json) => setProfile(json));
    }
    getProfile();
  }, []);

  return { profile, setProfile };
}
