import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker';
import { BsList } from 'react-icons/bs';

import Logo from './assets/logo.png'

function App() {
  return (
    <div className=''>
      <div className='bg-gray-50 text-gray-700'>
        <div className='container mx-auto transform duration-500'>
          <div id='home' className='pl-4 pr-4 pt-5 pb-7'>
            <div className='flex justify-between items-center align-middle'>
              <div className='flex items-center gap-3'>
                <span className='text-2xl cursor-pointer hover:bg-gray-200 p-2 rounded-full hover:ease-in-out duration-500'>
                  <BsList />
                </span>
                <img className='w-10 h-5 rounded-full' src={Logo} alt='' />
                <p className='text-[20px] uppercase'>Vision Center</p>
              </div>
              <div className='font-bold hidden justify-center lg:flex'>
                <div className='p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500'>
                  <a href='#home'>Home</a>
                </div>
                <div className='p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500'>
                  <a href='#menu'>Menu</a>
                </div>
                <div className='p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500'>
                  <a href='#product'>Product</a>
                </div>
                <div className='p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500'>
                  <a href='#blog'>Blogs</a>
                </div>
                <div className='p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500'>
                  <a href='#about'>About</a>
                </div>
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
