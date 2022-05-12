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
    <article className="list-element">
      <small className="star" onClick={() => addStar(project.name)}>★{project.stars}</small>
      <h2>{project.name}</h2>
      <h6>Creator: {project.creator}</h6>
      <img src={`https://ipfs.infura.io/ipfs/${project.image}`} alt="project image" />
      <p>{project.description}</p>
    </article>
  )
}

export default Project;