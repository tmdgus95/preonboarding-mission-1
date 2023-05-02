import { useEffect } from 'react';
import { KeyWordSearchInstance } from '../api/search';
import axios from 'axios';

export default function SearchBar() {
  useEffect(() => {
    KeyWordSearchInstance.get('/api/v1/search-conditions/?name=갑상')
      .then(console.log)
      .catch(console.log);
  }, []);

  return <div>SearchBar</div>;
}
