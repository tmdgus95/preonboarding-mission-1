import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  id?: number;
  name: string;
};

export default function SearchExpectation({ id, name }: Props) {
  return (
    <li className='flex items-center'>
      <span className='pr-2'>
        <AiOutlineSearch />
      </span>
      <span>{name}</span>
    </li>
  );
}
