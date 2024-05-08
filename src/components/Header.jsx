import React from 'react'

function Header() {
  return (
    
    <header className="bg-dark">
        
        {/* <div class="bg-gradient-to-r from-mtc-dark to-blue-700 hidden lg:block relative z-[9]"><div class="container px-4 sm:px-6 lg:px-4 mx-auto"><div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2"><div class="text-center md:text-left md:order-2 md:flex md:justify-end md:items-center"><div class="flex items-center space-x-3"></div></div><div class="flex items-center"><span class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white transition-all text-xs"><div class="w-4"><i class="text-xl ri-shield-star-line"></i></div>100% SAFETY GUARANTEE</span><span class="inline-block border-r border-white/[.3] w-px h-5 mx-2"></span><span class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white transition-all text-xs"><div class="w-4"><i class="text-xl ri-timer-flash-line"></i></div>24/7 LIVE SUPPORT</span><span class="inline-block border-r border-white/[.3] w-px h-5 mx-2"></span><span class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white transition-all text-xs"><div class="w-4"><i class="text-xl ri-shield-flash-line"></i></div>INSTANT DELIVERY</span></div></div></div></div> */}
      <div className="container mx-auto px-4 py-8 flex items-center">

        {/* Logo */}
        <div className="mr-auto md:w-48 flex-shrink-0">
          <img className="h-48 md:h-18" src="src/images/logo.png" alt="" />
        </div>

        {/* Search */}
        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-400 rounded-md hidden xl:flex items-center">
          <select className="bg-transparent uppercase font-bold text-sm p-4 mr-4">
            <option>All categories</option>
          </select>
          <input className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="I'm searching for ..." />
          <svg className="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
          </svg>
        </div>

        {/* Phone number */}
        <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span className="font-bold md:text-xl">8 800 332 65-66</span>
          <span className="font-semibold text-sm text-gray-400">24/7 LIVE SUPPORT
</span>
        </div>

        {/* Buttons */}
        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            {/* User */}
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a href="">
                <svg className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                </svg>
              </a>
            </li>
            {/* Heart */}
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a href="">
                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">3</div>
                <svg className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                </svg>
              </a>
            </li>
            {/* Shopping Cart */}
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a href="">
                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">12</div>
                <svg className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* Cart Count */}
        <div className="ml-4 hidden sm:flex flex-col font-bold">
          <span className="text-xs text-gray-400">Your Cart</span>
          <span>$200.89</span>
        </div>
      </div>

      {/* <hr /> */}
      
    </header>
    
  )
}

export default Header
