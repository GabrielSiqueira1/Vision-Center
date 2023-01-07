import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker';
import { BsList, BsCart4, BsSearch, BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { AiOutlineLogin } from 'react-icons/ai';

import Logo from './assets/logo.png';
import Hero from './assets/hero.jpg';
import Glasses01 from './assets/glasses-01.jpg';
import Glasses02 from './assets/glasses-02.jpg';
import Glasses03 from './assets/glasses-03.jpg';
import Glasses04 from './assets/glasses-04.jpg';
import Glasses05 from './assets/glasses-05.jpeg';
import Lens01 from './assets/lens-01.jpg'
import Lens02 from './assets/lens-02.jpg'
import Lens03 from './assets/lens-03.jpg'

function App() {

  const MiddleBar = `p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500`;
  const LastBar = `text-2xl p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer`;
  const SectionItems = `mx-auto group shadow-2xl pb-8 rounded-b-2xl transform duration-500 bg-white`;

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
                <div className={MiddleBar}>
                  <a href='#home'>Home</a>
                </div>
                <div className={MiddleBar}>
                  <a href='#menu'>Menu</a>
                </div>
                <div className={MiddleBar}>
                  <a href='#product'>Product</a>
                </div>
                <div className={MiddleBar}>
                  <a href='#blog'>Blogs</a>
                </div>
                <div className={MiddleBar}>
                  <a href='#about'>About</a>
                </div>
              </div>
              <div className='flex justify-between gap-2'>
                <div className={LastBar}>
                  <BsSearch />
                </div>
                <div className='text-2xl p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer relative inline-flex'>
                  <BsCart4 />
                  <div className='absolute -top-0 -right-1 h-5 w-5 text-xs text-center text-black border-1 rounded-full'>
                    5
                  </div>
                </div>
                <div className={LastBar}>
                  <AiOutlineLogin />
                </div>
              </div>
            </div>
          </div>
          <div id='hero' className='p-5'>
            <div className='transform duration-500 hover:shadow-2xl relative'>
              <img className='xl:max-w=6xl' src={Hero} alt='' />
              <div className='content bg-white md:p-12 p-12 pt-8 lg:max-w-3xl w-full lg:absolute top-48 right-5 shadow-2xl'>
                <div className='flex justify-between font-bold text-sm'>
                  <p>Peaceful Glasses</p>
                  <p>{faker.date.past().getFullYear()}</p>
                </div>
                <h2 className='text-5xl font-bold mt-4 md:mt-10 uppercase'>Peaceful Glasses</h2>
                <p className='pt-5'>{faker.lorem.sentence()}</p>
                <p className='text-center text-[24px] pt-10 pb-10'>
                  <button className='p-3 w-60 text-black font-bold rounded-full transform duration-500' style={{ background: '#888888' }}> Register Now </button>
                </p>
              </div>
            </div>
          </div>
          <div id='menu' className='pl-5 pr-5'>
            <div className='p-5 pt-10'>
              <div className='text-[26px] font-bold text-center uppercase'>
                AVAILABLE GLASSES
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5'>
              <div className={SectionItems}>
                <img className='object-cover w-full rounded-2xl h-64' src={Glasses01} alt='' />
                <div className='p-5'>
                  <div className='flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarHalf /></span>
                  </div>
                </div>
                <div className='p-5 pr-5 text-justify'>
                  <h5 className='text-2xl font-bold tracking-tight'>
                    {faker.lorem.sentence()}
                  </h5>
                  <p>
                    {faker.lorem.sentences()}
                  </p>
                </div>
                <div className='p-5 flex flex-row justify-between items-baseline'>
                  <p className='font-bold text-2xl'>
                    ${faker.commerce.price(100)}
                  </p>
                  <div>
                    <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className={SectionItems}>
                <img className='object-cover w-full rounded-2xl h-64' src={Glasses02} alt='' />
                <div className='p-5'>
                  <div className='flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStar /></span>
                  </div>
                </div>
                <div className='p-5 pr-5 text-justify'>
                  <h5 className='text-2xl font-bold tracking-tight'>
                    {faker.lorem.sentence()}
                  </h5>
                  <p>
                    {faker.lorem.sentences()}
                  </p>
                </div>
                <div className='p-5 flex flex-row justify-between items-baseline'>
                  <p className='font-bold text-2xl'>
                    ${faker.commerce.price(100)}
                  </p>
                  <div>
                    <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className={SectionItems}>
                <img className='object-cover w-full rounded-2xl h-64' src={Glasses03} alt='' />
                <div className='p-5'>
                  <div className='flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStar /></span>
                  </div>
                </div>
                <div className='p-5 pr-5 text-justify'>
                  <h5 className='text-2xl font-bold tracking-tight'>
                    {faker.lorem.sentence()}
                  </h5>
                  <p>
                    {faker.lorem.sentences()}
                  </p>
                </div>
                <div className='p-5 flex flex-row justify-between items-baseline'>
                  <p className='font-bold text-2xl'>
                    ${faker.commerce.price(100)}
                  </p>
                  <div>
                    <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className={SectionItems}>
                <img className='object-cover w-full rounded-2xl h-64' src={Glasses04} alt='' />
                <div className='p-5'>
                  <div className='flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStar /></span>
                  </div>
                </div>
                <div className='p-5 pr-5 text-justify'>
                  <h5 className='text-2xl font-bold tracking-tight'>
                    {faker.lorem.sentence()}
                  </h5>
                  <p>
                    {faker.lorem.sentences()}
                  </p>
                </div>
                <div className='p-5 flex flex-row justify-between items-baseline'>
                  <p className='font-bold text-2xl'>
                    ${faker.commerce.price(100)}
                  </p>
                  <div>
                    <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className={SectionItems}>
                <img className='object-cover w-full rounded-2xl h-64' src={Glasses05} alt='' />
                <div className='p-5'>
                  <div className='flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStar /></span>
                  </div>
                </div>
                <div className='p-5 pr-5 text-justify'>
                  <h5 className='text-2xl font-bold tracking-tight'>
                    {faker.lorem.sentence()}
                  </h5>
                  <p>
                    {faker.lorem.sentences()}
                  </p>
                </div>
                <div className='p-5 flex flex-row justify-between items-baseline'>
                  <p className='font-bold text-2xl'>
                    ${faker.commerce.price(100)}
                  </p>
                  <div>
                    <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='product' className='pl-5 pr-5'>
            <div className='p-5 pt-10'>
              <div className='text-[26px] font-bold text-center uppercase'>
                PRODUCTS
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5'>
              <div className={SectionItems}>
              <img className='object-cover w-full rounded-2xl h-64' src={Lens01} alt='' />
              <div className='p-5 pr-5 text-justify'>
                <div className='pb-5 flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStar /></span>
                </div>
                <h5 className='text-2xl font-bold tracking-tight'>
                  {faker.lorem.sentence()}
                </h5>
                <p>
                  {faker.lorem.sentences()}
                </p>
              </div>
              <div className='p-5 flex justify-between flex-col items-center'>
                <p className='font-bold text-2xl pb-5'>
                  ${faker.commerce.price(100)}
                </p>
                <div>
                  <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                    Add to cart
                  </button>
                </div>
              </div>
              </div>
              <div className={SectionItems}>
              <img className='object-cover w-full rounded-2xl h-64' src={Lens03} alt='' />
              <div className='p-5 pr-5 text-justify'>
                <div className='pb-5 flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStar /></span>
                </div>
                <h5 className='text-2xl font-bold tracking-tight'>
                  {faker.lorem.sentence()}
                </h5>
                <p>
                  {faker.lorem.sentences()}
                </p>
              </div>
              <div className='p-5 flex justify-between flex-col items-center'>
                <p className='font-bold text-2xl pb-5'>
                  ${faker.commerce.price(100)}
                </p>
                <div>
                  <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                    Add to cart
                  </button>
                </div>
              </div>
              </div>
              <div className={SectionItems}>
              <img className='object-cover w-full rounded-2xl h-64' src={Lens02} alt='' />
              <div className='p-5 pr-5 text-justify'>
                <div className='pb-5 flex items-center gap-1'>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStarFill /></span>
                    <span><BsStar /></span>
                </div>
                <h5 className='text-2xl font-bold tracking-tight'>
                  {faker.lorem.sentence()}
                </h5>
                <p>
                  {faker.lorem.sentences()}
                </p>
              </div>
              <div className='p-5 flex justify-between flex-col items-center'>
                <p className='font-bold text-2xl pb-5'>
                  ${faker.commerce.price(100)}
                </p>
                <div>
                  <button className='rounded-full p-2 w-36 font-bold text-gray-50' style={{ background: '#888888' }}>
                    Add to cart
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div id='blog' className='pl-5 pr-5'></div>
          <div id='about' className='pl-5 pr-5'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
