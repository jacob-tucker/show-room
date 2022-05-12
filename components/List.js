import { useState, useEffect } from 'react';
import Project from "../components/Project.js";

function List() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, [])

  async function fetchProjects() {
    const response = await fetch('/api/getPosts', {
      method: 'GET',
    });

    const results = await response.json();
    console.log(results);
    setProjects(results);
  }

  return (
    projects.map((project, key) => (
      <Project project={project} key={key} />
    ))
  )
}

export default List;