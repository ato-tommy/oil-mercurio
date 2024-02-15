import React, { useState } from 'react'

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className='navbarWrapper w-full fixed top-0 left-0 '>
                <div className=" w-full flex justify-between">
                    <div className='logo flex justify-center items-center '>
                        <img src="./logo.png" className='w-56 ' alt="" />
                    </div>
                    <div className='block lg:hidden text-white text-xl absolute top-6 right-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowMenu(!showMenu)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 hw-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className={showMenu ? 'block lg:hidden text-white text-xl absolute top-6 right-6':'hidden lg:hidden text-white text-xl absolute top-6 right-6'}>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowMenu(!showMenu)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 hw-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className='navbarItems  justify-around items-center  w-[85%] hidden lg:flex'>
                        <div className='text-lg text-white cp'>Home</div>
                        <div className='text-lg text-white cp'>Products</div>
                        <div className='text-lg text-white cp'>Projects</div>
                        <div className='text-lg text-white cp'>Services</div>
                        <div className='text-lg text-white cp'>About Us</div>
                        <div className='text-lg text-white cp'>Contact Us</div>
                        <div className="serachContainer relative">
                            <input type="text" className='rounded-md w-full h-full px-3 py-1' placeholder='Search ... ' />
                            <button className='text-gray-600 absolute top-1 right-0 pr-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
                <div className={showMenu ? 'block lg:hidden relative' : 'hidden  relative'}>
                         <div className='text-lg text-white bg-slate-600 text-center text-xl my-1 py-3 cp'>Home</div>
                        <div className='text-lg text-white bg-slate-600 text-center text-xl my-1 py-3 cp'>Products</div>
                        <div className='text-lg text-white bg-slate-600 text-center text-xl my-1 py-3 cp'>Projects</div>
                        <div className='text-lg text-white bg-slate-600 text-center text-xl my-1 py-3 cp'>Services</div>
                        <div className='text-lg text-white bg-slate-600 text-center text-xl my-1 py-3 cp'>About Us</div>
                        <div className='text-lg text-white bg-slate-600 text-center text-xl my-1 py-3 cp'>Contact Us</div>
                </div>
            </div>

        </>
    )
}

export default Navbar