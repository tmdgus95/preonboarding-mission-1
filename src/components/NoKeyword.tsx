import RecommendKeyword from './ui/RecommendKeyword';

const keywords = ['B형간염', '비만', '관절염', '우울증', '식도염'];
export default function NoKeyword() {
  return (
    <div className='w-searchinput bg-white mt-4 p-6 rounded-xl'>
      <div>
        <p>최근 검색어</p>
        <p className='my-5 text-gray-400 font-bold'>최근 검색어가 없습니다</p>
      </div>

      <hr />

      <div>
        <p className='mt-5 mb-4'>추천 검색어로 검색해보세요</p>
        <div>
          <ul>
            <li className='flex justify-around'>
              {keywords.map((keyword, i) => (
                <RecommendKeyword key={i} keyword={keyword} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
