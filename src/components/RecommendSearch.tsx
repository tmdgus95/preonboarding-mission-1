import { useSelector } from 'react-redux';
import SearchExpectation from './SearchExpectation';
import { RootState } from '../store/store';

export default function RecommendSearch() {
  const recommends = useSelector((state: RootState) => state.recommend);

  return (
    <div className='w-searchinput bg-white mt-4 p-6 rounded-xl'>
      <ul>
        {recommends.map(({ name, id }) => (
          <SearchExpectation key={id} name={name} id={id} />
        ))}
      </ul>
    </div>
  );
}
