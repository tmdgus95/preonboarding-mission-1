import { useEffect } from 'react';
import { KeyWordSearchInstance } from '../api/search';

export default function SearchBar() {
  useEffect(() => {
    KeyWordSearchInstance.get('api/v1/search-conditions/?name=갑상선')
      .then((res) => console.log(res))
      .catch(console.log);
  }, []);
  return <div>SearchBar</div>;
}
