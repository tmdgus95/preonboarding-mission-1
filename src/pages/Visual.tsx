import { useEffect } from 'react';
import { KeyWordSearchInstance } from '../api/search';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

export default function Visual() {
  useEffect(() => {
    KeyWordSearchInstance.get('/api/v1/search-conditions/?name=갑상')
      .then(console.log)
      .catch(console.log);
  }, []);

  return (
    <section>
      <SearchBar />
      <SearchResult />
    </section>
  );
}
