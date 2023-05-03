import SearchExpectation from './SearchExpectation';

export default function RecommendSearch() {
  return (
    <div className='w-searchinput bg-white mt-4 p-6 rounded-xl'>
      <SearchExpectation name={'가'} />
      <span>추천 검색어</span>
    </div>
  );
}
