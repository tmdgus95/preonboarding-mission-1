import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import NoKeyword from './NoKeyword';
import RecommendSearch from './RecommendSearch';

export default function SearchResult() {
  const keyword = useSelector((state: RootState) => state.keyword);

  return (
    <>
      {!keyword && <NoKeyword />}
      {keyword && <RecommendSearch />}
    </>
  );
}
