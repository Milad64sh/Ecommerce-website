import Navbar from '../components/navbar/Navbar';
import { CiSearch } from 'react-icons/ci';
import SmallCard from '../components/card/SmallCard';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='hro'>
          <h1 className='hro--hdng'>feel the summer?</h1>
          <button className='hro--btn'>shop now</button>
          <div className='search'>
            <form className='search__frm'>
              <input
                type='text'
                className='search__frm--ipt'
                placeholder='Search summer products'
              />
              <span className='search__frm--icn'>
                <CiSearch />
              </span>
            </form>
          </div>
        </div>
        <main>
          <section className='sctn-prds'>
            <h2 className='hdng-2'>summer gifts</h2>
            <h3 className='hdng-3'>
              Give the gift of smoothing, protecting and hydrating faves
            </h3>
            <div className='sld'>
              <SmallCard />
              <SmallCard />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
