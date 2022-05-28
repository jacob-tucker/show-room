import Link from "next/link";

function Project({ project, tab }) {
  console.log(tab)
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

  function onEnter(event) {
    if(event.key === 'Enter'){
      addStar(project.name);
    }
  }

  return (
<<<<<<< HEAD
    <Link style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}} href={`/project?projectName=${project.name}`}>
      <article className="list-element" style={{cursor: 'pointer'}}>
        <small className="star" onKeyDown={onEnter} onClick={() => addStar(project.name)} tabIndex={tab}>★{project.stars}</small>
        <h2>{project.name}</h2>
        <h6>Creator: {project.creator}</h6>
        <img src={`https://ipfs.infura.io/ipfs/${project.image}`} alt="project" />
        <p style={{textDecoration: 'none', color: 'black'}}>{project.description}</p>
=======
    <Link style={{ textDecoration: 'none', cursor: 'pointer' }} href={`/project?projectName=${project.name}`}>
      <article className="list-element" style={{ cursor: 'pointer' }}>
        <small className="star" onClick={() => addStar(project.name)}>★{project.stars}</small>
        <h2>{project.name}</h2>
        <h6>Creator: {project.creator}</h6>
        <img src={`https://ipfs.infura.io/ipfs/${project.image}`} alt="project image" />
        <p style={{ textDecoration: 'none' }}>{project.description}</p>
>>>>>>> bb4d6393e0618ea35e8e5412c7cb0af5b407832a
      </article>
    </Link>
  )
}

export default Project;