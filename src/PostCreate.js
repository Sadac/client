import React, {useState} from 'react'
import axios from 'axios'

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.post('http://posts.com/posts/create', {
        title
      });

      setTitle('');
    } catch (error) {
      console.log(error);
    }
  }

  return <div>
    <form onSubmit={onSubmit}>
      <div>
        <label className='form-group'>Title</label>
        <input
          value={title}
          onChange={ e => setTitle( e.target.value )}
          className='form-control'
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  </div>
}
