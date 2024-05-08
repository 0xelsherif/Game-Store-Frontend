import React from 'react'

function HeroSection() {
  return (
    <header>
        <div id="sticky-header" class="tg-header__area transparent-header fixed w-full z-[9] h-auto left-0 top-0 transition-all duration-[0.4s] ease-[ease] px-0 py-[11px] lg:py-[25px] md:py-[25px] sm:py-[25px] xsm:py-[25px]">
            <div class="container custom-container">
                <div class="flex flex-wrap mx-[-15px]">
                    <div class="w-full basis-full relative px-[15px]">
                        <div class="mobile-nav-toggler relative float-right text-[26px] cursor-pointer leading-none text-[#45f882] hidden lg:block md:block sm:block xsm:block border-[#45f882] mt-[3px] px-2.5 py-[5px] border-2 border-solid"><i class="fas fa-bars"></i></div>
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav  flex items-center flex-wrap justify-start lg:justify-between md:justify-between">
                                <div class="logo flex items-center"><a class="inline-block" href="index.html"><img class="max-w-[177px]" src="assets/img/logo/logo.png" alt="Logo"></a>
                                </div>
                                <div class="tgmenu__navbar-wrap tgmenu__main-menu flex grow lg:hidden md:hidden sm:hidden xsm:hidden">
                                    <ul class="navigation flex flex-row flex-wrap ml-[122px] mr-auto my-0 p-0 xl:flex xl:ml-[65px]  xl:mr-auto  xl:my-0">
                <li class="active menu-item-has-children block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled">
                    <a class=" text-[15px] font-bold uppercase block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] text-[#45f882] before:opacity-100 before:-translate-y-2/4 before:rotate-[-40deg]" href="#">Home</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    
                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none 
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none 
                    ">
                        <li class="active text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-[7px]" href="index.html">Home One</a></li>
                        <li class=" text-left block ml-0  group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="index-2.html">Home Two</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class=" block relative list-none group"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="about-us.html">ABOUT US</a></li>
                <li class="menu-item-has-children  block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="#">TOURNAMENT</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    
                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none 
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none ">
                    <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="tournament.html">TOURNAMENT</a></li>
                    <li class="active text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="tournament-details.html">TOURNAMENT Single</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class="menu-item-has-children  block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="#">PAGES</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    
                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none ">
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="shop.html">Gaming Shop</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="shop-details.html">Shop Details</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="services.html">Our Services</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="services-details.html">Services Details</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="team-details.html">Player Details</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class="menu-item-has-children  block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="#">News</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none 
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none ">
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="blog.html">Our Blog</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="blog-details.html">Blog Details</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class=" block relative list-none group"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="contact.html">contact</a></li>
                                    </ul>
                                </div>
                                <div class="tgmenu__action block lg:mr-10 md:mr-10 sm:hidden xsm:hidden">
                                    <ul class="list-wrap m-0 p-0  flex items-center ml-2.5">
            <li class="search relative ml-0"><a class=" block text-[20px] hover:text-[#45f882] text-[#fff]" href="#"><i class="flaticon-search-1"></i></a></li>
            <li class="header-btn relative ml-[25px] pl-[25px] before:content-[''] before:absolute before:-translate-y-2/4 before:w-1.5 before:h-7 before:bg-[#131b22] before:shadow-[inset_0px_3px_7px_0px_rgba(0,0,0,0.61)] before:left-0 before:top-2/4
            
            lg:before:shadow-[inset_0px_3px_7px_0px_#45f882] lg:before:opacity-10
            md:before:shadow-[inset_0px_3px_7px_0px_#45f882] md:before:opacity-10
            sm:before:shadow-[inset_0px_3px_7px_0px_#45f882] sm:before:opacity-10
            xsm:before:shadow-[inset_0px_3px_7px_0px_#45f882] xsm:before:opacity-10
            "><a href="contact.html" class="tg-border-btn text-[#fff]"><i class="flaticon-edit"></i> ~sing in</a></li>
                                        <li class="side-toggle-icon group relative ml-[25px] flex flex-col min-w-[45px] gap-2.5 cursor-pointer md:hidden">
        <span class=" block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px]  group-hover:w-[45px]"></span>
        <span class=" block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[45px]  group-hover:w-[45px]"></span>
        <span class=" block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px] self-end  group-hover:w-[45px]"></span>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <!-- Mobile Menu  -->
                        <div class="tgmobile__menu fixed w-[300px] max-w-full h-full z-[99] transition-all duration-[0.3s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] translate-x-[101%] pr-[30px] rounded-none right-0 top-0">
                            <nav class="tgmobile__menu-box absolute w-full h-full max-h-full overflow-y-auto overflow-x-hidden z-[5] shadow-[-9px_0_14px_0px_rgba(0,0,0,0.06)] p-0 left-0 top-0 bg-[#0f161b]">
                                <div class="close-btn absolute leading-[30px] w-[35px] text-center text-[20px] text-[#45f882] cursor-pointer z-10 transition-all duration-[0.5s] ease-[ease] right-[15px] top-7"><i class="flaticon-swords-in-cross-arrangement"></i></div>
                                <div class="nav-logo relative text-left px-[25px] py-[30px]">
                                    <a href="index.html"><img class=" max-w-[150px]" src="assets/img/logo/logo.png" alt="Logo"></a>
                                </div>
                                <div class="tgmobile__search pl-[25px] pr-5 pt-0 pb-[25px]">
                                    <form action="#" class="relative">
                                        <input type="text" placeholder="Search here..." class=" block w-full text-[14px] h-[45px] text-[#fff] pl-5 pr-[45px] py-2.5 border-none bg-[#182029] placeholder:text-[14px] placeholder:text-[#c7c7c7]
                                        focus:!ring-[none] focus:!border-none
                                        ">
                                        <button class=" absolute -translate-y-2/4 leading-none text-[#fff] p-0 border-[none] right-5 top-2/4 bg-transparent"><i class="flaticon-loupe"></i></button>
                                    </form>
                                </div>
                                <div class="tgmobile__menu-outer">
                                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                                
                                    <ul class="navigation flex flex-row flex-wrap ml-[122px] mr-auto my-0 p-0 xl:flex xl:ml-[65px]  xl:mr-auto  xl:my-0">
                <li class="active menu-item-has-children block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled">
                    <a class=" text-[15px] font-bold uppercase block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] text-[#45f882] before:opacity-100 before:-translate-y-2/4 before:rotate-[-40deg]" href="#">Home</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    
                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none 
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none 
                    ">
                        <li class="active text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-[7px]" href="index.html">Home One</a></li>
                        <li class=" text-left block ml-0  group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="index-2.html">Home Two</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class=" block relative list-none group"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="about-us.html">ABOUT US</a></li>
                <li class="menu-item-has-children  block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="#">TOURNAMENT</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    
                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none 
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none ">
                    <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="tournament.html">TOURNAMENT</a></li>
                    <li class="active text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="tournament-details.html">TOURNAMENT Single</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class="menu-item-has-children  block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="#">PAGES</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    
                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none ">
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="shop.html">Gaming Shop</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="shop-details.html">Shop Details</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="services.html">Our Services</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="services-details.html">Services Details</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="team-details.html">Player Details</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class="menu-item-has-children  block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="#">News</a>
                    <ul class="sub-menu absolute min-w-[230px] border border-[#22292f] origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px] rounded-none border-solid scale-x-100 scale-y-0 left-0 top-full bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100                    lg:opacity-100 lg:visible lg:scale-100 lg:w-full lg:static lg:bg-[#0f161b] lg:border-none 
                    md:opacity-100 md:visible md:scale-100 md:w-full md:static md:bg-[#0f161b] md:border-none 
                    sm:opacity-100 sm:visible sm:scale-100 sm:w-full sm:static sm:bg-[#0f161b] sm:border-none 
                    xsm:opacity-100 xsm:visible xsm:scale-100 xsm:w-full xsm:static xsm:bg-[#0f161b] xsm:border-none ">
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="blog.html">Our Blog</a></li>
                        <li class=" text-left block ml-0 group/second"><a class="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]" href="blog-details.html">Blog Details</a></li>
                    </ul>
                <div class="dropdown-btn"><span class="plus-line"></span></div></li>
                <li class=" block relative list-none group"><a class=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]" href="contact.html">contact</a></li>
                                    </ul>
                                </div>
                                <div class="social-links">
                                    <ul class="list-wrap flex relative text-center items-center justify-center flex-wrap gap-3 pt-[30px] pb-5 px-5 m-0">
            <li class=" relative block"><a class=" flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882] " href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class=" relative block"><a class=" flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882] " href="#"><i class="fab fa-twitter"></i></a></li>
            <li class=" relative block"><a class=" flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882] " href="#"><i class="fab fa-instagram"></i></a></li>
            <li class=" relative block"><a class=" flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882] " href="#"><i class="fab fa-linkedin-in"></i></a></li>
            <li class=" relative block"><a class=" flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882] " href="#"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="tgmobile__menu-backdrop fixed w-full h-full z-[2] transition-all duration-700 ease-[ease] opacity-0 invisible right-0 top-0 bg-[rgba(0,0,0,0.5)]"></div>
                        <!-- End Mobile Menu -->
                    </div>
                </div>
            </div>
        </div>

        <!-- header-search -->
        <div class="search__popup-wrap fixed h-screen w-full z-[99] mt-[-370px] -translate-y-full transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] left-0 top-0 after:content-[''] after:absolute after:w-full after:h-[370px] after:bg-[url(./assets/img/bg/search\_wave.png)] after:bg-no-repeat after:bg-center after:bg-cover after:mt-0 after:left-0 after:top-full">
            <div class="search__layer content-[''] absolute h-screen w-full bg-[rgba(15,22,27,0.9)] transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] z-[-1] left-0 top-0"></div>
            <div class="search__close absolute text-3xl text-[#45f882] cursor-pointer right-[5%] top-[5%]">
                <span><i class="flaticon-swords-in-cross-arrangement"></i></span>
            </div>
            <div class="search__wrap text-center absolute -translate-y-2/4 top-2/4 inset-x-0">
                <div class="container">
                    <div class="flex flex-wrap mx-[-15px]">
                        <div class="w-full basis-full relative px-[15px]">
                            <h2 class="title text-[47px] font-extrabold uppercase text-[#45f882] tracking-[-1px] mt-0 mb-[70px] mx-0 font-Barlow">... <span class=" text-[#fff] tracking-[5px] drop-shadow-[-2px_2.5px_0px_rgba(69,248,130,0.66)]">Search Here</span> ...</h2>
                            <div class="search__form relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:transition-all after:duration-[600ms] after:ease-[ease] after:left-0 after:bottom-0 after:bg-[#45f882] focus:after:!bg-[#45f882] ">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Type keywords here" required="" class=" block w-full text-center font-medium text-3xl text-[#fff] pt-2.5 pb-5 px-[50px] border-transparent bg-transparent placeholder:text-3xl placeholder:opacity-50
                                    focus:!ring-[none] focus:!border-transparent
                                    ">
                                    <button class="search-btn absolute text-[25px] text-[#45f882] -translate-y-2/4 border-0 right-5 top-2/4 bg-transparent"><i class="flaticon-loupe"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- header-search-end -->

        <!-- offCanvas-area -->
        <div class="offCanvas__wrap fixed overflow-y-auto w-[485px] translate-x-full h-full block bg-[#0d141b] z-[1020] transition-all duration-[600ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col right-0 top-0">
            <div class="offCanvas__body flex flex-col flex-1">
                <div class="offCanvas__top flex items-center pt-[35px] pb-[25px] px-10 border-b-[#18202a] border-b border-solid">
                    <div class="offCanvas__logo logo">
                        <a class="inline-block" href="index.html"><img class="max-w-[177px]" src="assets/img/logo/logo.png" alt="Logo"></a>
                    </div>
                    <div class="offCanvas__toggle w-[50px] h-[50px] flex items-center justify-center text-[20px] text-[#adb0bc] cursor-pointer transition-all duration-[0.3s] ease-[ease-out] delay-[0s] ml-auto rounded-[50%] hover:text-[#0f161b] hover:bg-[#45f882] ">
                        <i class="flaticon-swords-in-cross-arrangement"></i>
                    </div>
                </div>
                <div class="offCanvas__content pt-[25px] pb-[50px] px-10">
                    <h2 class="title text-3xl tracking-[1px] mt-0 mb-[50px] mx-0">Best Seller of Month Ideas for <span class=" text-[#45f882]">NFT Wallet</span></h2>
                    <div class="offCanvas__contact mt-0 mb-10 mx-0">
                        <h4 class="small-title text-[16px] tracking-[0.5px] font-semibold mt-0 mb-[22px] mx-0">CONTACT US</h4>
                        <ul class="offCanvas__contact-list list-wrap m-0 p-0 ">
        <li class=" text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]"><a class=" text-[#adb0bc] hover:text-[#45f882]" href="tel:93332225557">+9 333 222 5557</a></li>
        <li class=" text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]"><a class=" text-[#adb0bc] hover:text-[#45f882]" href="mailto:info@webmail.com">info@webmail.com</a></li>
        <li class=" text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]">New Central Park W7 Street ,New York</li>
                        </ul>
                    </div>
                    <div class="offCanvas__newsletter">
                        <h4 class="small-title text-[16px] tracking-[0.5px] font-semibold text-[#45f882] mt-0 mb-[22px] mx-0">Subscribe</h4>
                        <form action="#" class="offCanvas__newsletter-form relative mt-0 mb-5 mx-0">
                            <input type="email" placeholder="Get News &amp; Updates" class="block w-full border text-[14px] font-medium transition-all duration-[0.3s] ease-[ease-out] delay-[0s] pl-[22px] pr-20 py-[15px] border-solid border-[#202b36] font-Barlow bg-transparent  focus:!ring-[none] focus:!border-[#535d68] focus:border-solid focus:!outline-offset-0  focus:outline-0">
                            <button type="submit" class=" absolute w-[60px] text-[22px] border-[none] right-0 inset-y-0
                            bg-transparent before:content-[''] before:absolute before:w-px before:left-0 before:inset-y-1.5 before:bg-[#202b36] group"><i class="flaticon-send group-hover:text-[#ffbe18]"></i></button>
                        </form>
                        <p class=" text-[14px] font-medium m-0">Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin augue.</p>
                    </div>
                    <ul class="offCanvas__social list-wrap m-0 p-0  flex items-center flex-wrap gap-[10px_28px] mt-[50px] mb-0 mx-0 pt-[30px] pb-0 px-0 border-t-[#202b36] border-t border-solid">
<li class=" leading-none"><a class=" block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i class="fab fa-twitter"></i></a></li>
<li class=" leading-none"><a class=" block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i class="fab fa-facebook-f"></i></a></li>
<li class=" leading-none"><a class=" block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i class="fab fa-linkedin-in"></i></a></li>
<li class=" leading-none"><a class=" block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div class="offCanvas__copyright mt-auto mb-0 mx-0 px-10 py-[30px] bg-[#090f16]">
                    <p class=" text-[14px] uppercase font-semibold tracking-[1px] m-0 font-Barlow">Copyright © 2023 - By <span class=" text-[#45f882]">MYKD</span></p>
                </div>
            </div>
        </div>
        <div class="offCanvas__overlay fixed w-full h-full z-[99] transition-all duration-700 ease-[ease] opacity-0 invisible cursor-none right-0 top-0 bg-[#111922]"></div>
        <!-- offCanvas-area-end -->

    </header>


  )
}

export default HeroSection
