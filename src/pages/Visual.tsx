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
    <section className='w-full md:h-mbhi lg:h-pchi flex flex-col items-center bg-visual'>
      <div className='text-center text-3xl font-bold tracking-tight leading-10'>
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
      </div>
      <SearchBar />
      <SearchResult />
    </section>
  );
}
