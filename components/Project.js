import Link from "next/link";

function Project({ project }) {
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
    <Link style={{ textDecoration: 'none', cursor: 'pointer' }} href={`/project?projectName=${project.name}`}>
      <article className="list-element" style={{ cursor: 'pointer' }}>
        <small className="star" onClick={() => addStar(project.name)}>★{project.stars}</small>
        <h2>{project.name}</h2>
        <h6>Creator: {project.creator}</h6>
        <img src={`https://ipfs.infura.io/ipfs/${project.image}`} alt="project image" />
        <p style={{ textDecoration: 'none' }}>{project.description}</p>
      </article>
    </Link>
  )
}

export default Project;