import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import VisulText from '../components/VisulText';

export default function Visual() {
  return (
    <section className='w-full md:h-mbhi lg:h-pchi flex flex-col items-center bg-visual'>
      <VisulText />
      <SearchBar />
    </section>
  );
}
