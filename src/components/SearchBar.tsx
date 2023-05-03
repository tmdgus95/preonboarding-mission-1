import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../store/slice/keywordSlice';
import { ChangeEvent, useState } from 'react';
import { KeyWordSearchInstance } from '../api/search';
import { RootState } from '../store/store';
import SearchResult from './SearchResult';
import { setRecommend } from '../store/slice/recommendSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const keyword = useSelector((state: RootState) => state.keyword);
  const [focused, setFocused] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    dispatch(setKeyword(keyword));
    KeyWordSearchInstance.get(`/api/v1/search-conditions/?name=${keyword}`)
      .then((res) => {
        dispatch(setRecommend(res.data));
        console.info('calling api');
      })
      .catch(console.log);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    KeyWordSearchInstance.get(`/api/v1/search-conditions/?name=${keyword}`)
      .then((res) => {
        dispatch(setRecommend(res.data));
        console.info('calling api');
      })
      .catch(console.log);
  };

  const handleFocus = () => {
    setFocused((focused) => !focused);
  };

  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='w-searchinput h-16 rounded-full pl-12 font-medium text-lg'
          placeholder='질환명을 입력해 주세요.'
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        <AiOutlineSearch className='absolute top-5 left-4  text-gray-400 text-2xl' />
        <button className='absolute top-1 right-3 bg-searchRound p-3 rounded-full'>
          <AiOutlineSearch className='text-white text-3xl' />
        </button>
      </form>
      {focused && <SearchResult />}
    </div>
  );
}
