type Props = {
  keyword: string;
};

export default function RecommendKeyword({ keyword }: Props) {
  return (
    <button className='text-blue-500 font-semibold bg-blue-100 p-3 rounded-full'>
      {keyword}
    </button>
  );
}
