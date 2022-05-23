import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Project() {
  const [project, setProject] = useState({})
  const router = useRouter()
  const { projectName } = router.query;

  useEffect(() => {
    if (projectName) {
      fetchProject();
    }
  }, [projectName])

  async function fetchProject() {
    console.log({ projectName });
    const response = await fetch('/api/' + projectName, {
      method: 'GET',
    });

    const result = await response.json();
    setProject(result);
  }

  async function addStar(name) {
    const data = {
      name
    }
    const response = await fetch('/api/addStar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    window.location.reload();
  }

  return (
    <main>
      <article className="project-thing">
        <small className="star" onClick={() => addStar(project.name)}>★{project.stars}</small>
        <h1 style={{color: project.color}} className="no-margin">{project.name}</h1>
        <h6>Creator: {project.creator}</h6>
        {project.youtube
          ? <iframe width="560" height="315" src={project.youtube.replace('watch?v=', '/embed/')} />
          : <img src={`https://ipfs.infura.io/ipfs/${project.image}`} alt="project image" />
        }
        <p className="p-header">DESCRIPTION</p>
        <p>{project.description}</p>
      </article>
    </main>
  )
}
