import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=''>
      <div className='bg-gray-50 text-gray-700'>
        <div className='container mx-auto transform duration-500'>
          <div id='home' className='pl-4 pr-4 pt-5 pb-10'>
            <div className='flex justify-between items-center'>
              <div>
                list logo
              </div>
              <div>
                Home Menu Product Blogs About
              </div>
              <div>
                icon01 icon02 icon03
              </div>
            </div>
          </div>
          <div id='hero'></div>
          <div id='menu' className='pl-5 pr-5'></div>
          <div id='product' className='pl-5 pr-5'></div>
          <div id='blog' className='pl-5 pr-5'></div>
          <div id='about' className='pl-5 pr-5'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
