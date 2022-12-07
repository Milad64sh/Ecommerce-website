import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='hro'>
          <h1 className='hro--hdng'>feel the summer?</h1>
          <button className='hro--btn'>shop now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
