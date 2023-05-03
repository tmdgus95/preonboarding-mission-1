import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
  return (
    <div className='relative'>
      <input
        type='text'
        className='w-searchinput h-16 rounded-full pl-12 font-medium text-lg'
        placeholder='질환명을 입력해 주세요.'
      />
      <AiOutlineSearch className='absolute top-5 left-4  text-gray-400 text-2xl' />
      <button className='absolute top-1 right-3 bg-searchRound p-3 rounded-full'>
        <AiOutlineSearch className='text-white text-3xl' />
      </button>
    </div>
  );
}
