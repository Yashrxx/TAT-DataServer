import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './components/Card.css';
import './App.css'

function App() {
  const [allEntries, setAllEntries] = useState([]);
  const [bottomEntries, setBottomEntries] = useState([]);
  const [topEntries, setTopEntries] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dressRes, btxRes, txRes] = await Promise.all([
          axios.get('https://tat-f2rq.onrender.com/api/auth/dress'),
          axios.get('https://tat-f2rq.onrender.com/api/auth/btx'),
          axios.get('https://tat-f2rq.onrender.com/api/auth/tx')
        ]);

        setAllEntries(dressRes.data);
        setBottomEntries(btxRes.data);
        setTopEntries(txRes.data);
        setIsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <h2>Fulldress Entries</h2>
          <div className="card-grid">
            {allEntries.map((entry, idx) => (
              <Card key={idx} data={entry} />
            ))}
          </div>

          <h2>Bottom Wear (BTX)</h2>
          <div className="card-grid">
            {bottomEntries.map((entry, idx) => (
              <Card key={idx + 'b'} data={entry} />
            ))}
          </div>

          <h2>Top Wear (TX)</h2>
          <div className="card-grid">
            {topEntries.map((entry, idx) => (
              <Card key={idx + 't'} data={entry} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;