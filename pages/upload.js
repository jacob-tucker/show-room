import { create } from 'ipfs-http-client';
import { useState } from 'react';
const client = create('https://ipfs.infura.io:5001/api/v0');

function Upload() {
  const [uploaded, setUploaded] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const added = await client.add(target.image.files[0]);
    const hash = added.path;
    const data = {
      name: target.name.value,
      description: target.description.value,
      image: hash,
      youtube: target.youtube.value,
      color: target.color.value,
      creator: target.creator.value,
      stars: 0
    }
    const response = await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    console.log(uploaded)
    setUploaded(true);
  }

  return (
    <main className="list-max">
      <article className="create">
        <h2>Upload a new Makerspace activity</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="creator">Your name</label>
          <input type="text" name="creator" id="creator" placeholder="Jacob Tucker" />

          <label htmlFor="name">The name of your project</label>
          <input type="text" name="name" id="name" placeholder="Make a Paper Circuit" />

          <label htmlFor="description">The description of your project</label>
          <input type="text" name="description" id="description" placeholder="We will be making a paper circuit..." />

          <label htmlFor="image">An image to show your project</label>
          <input type="file" name="image" id="image" />

          <label htmlFor="youtube">A YouTube video link</label>
          <input type="text" name="youtube" id="youtube" placeholder="https://www.youtube.com/watch?v=ZaTKVjxt_kQ" />

          <label htmlFor="color">Choose a color for your project</label>
          <input type="color" name="color" id="color" />

          {!uploaded
            ? <button type="submit">Upload to Show Room</button>
            : <button>Done!</button>
          }
        </form>
      </article>
    </main>
  )
}

export default Upload;