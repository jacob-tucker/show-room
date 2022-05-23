import { useState, useEffect } from 'react';
import Project from "../components/Project.js";

function List() {
  const [projects, setProjects] = useState([]);
  console.log(projects)

  useEffect(() => {
    fetchProjects();
  }, [])

  async function fetchProjects() {
    const response = await fetch('/api/getPosts', {
      method: 'GET',
    });

    const results = await response.json();
    setProjects(results || []);
  }

  return (
    projects.map((project, key) => (
      <Project project={project} key={key} />
    ))
  )
}

export default List;