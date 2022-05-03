import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/")

      setPosts(response.data);
      setLoading();
    }
    loadPost();
  }, []);

  return (
    <>
      <div className='App'>
        {loading? (
          <h4>Loading...</h4>):
          (posts.map((item)=>
            <h4>{item.title}</h4>
          )
        )

        }
      </div>
    </>
  );
}

export default App;
