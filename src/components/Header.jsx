import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { urbanstrings } from "../assets";
import { navigation } from "../constants";
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';
import InscriptionFormModal from './InscriptionFormModal'; 


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleNavigation = () => {
    if(openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
};
  const handleClick = () => {
    if(!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };


  const openModal = () => setIsModalOpen(true); // Function to open the modal
  const closeModal = () => setIsModalOpen(false); // Function to close the modal


  return (
    <div 
    className={`fixed top-0 left-0 w-full z-50
     border-b border-n-2/10 lg:bg-n-14
    lg:backdrop-blur-sm ${openNavigation ? 'bg-n-14' : 
    'bg-n-14/90 backdrop-blur-sm'} `}>
        <div className="flex items-center px-5 lg:px-7.5
        xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" 
            href="#hero">
                <img src={urbanstrings} width={160} height={40}
                alt="urbanstrings" />
            </a>
            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0
            right-0 bottom-0 bg-n-8 lg:static lg:flex
             lg:mx-auto lg:bg-transparent`}>
              <div className="relative z-2 flex flex-col items-center
              justify-center m-auto lg:flex-row">
                {navigation.map((item) => (
                  <a 
                  key={item.id} 
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl
                  uppercase text-n-8 transition-colors
                  hover:text-color-1 ${item.onlyMobile ? 'lg:hidden'
                : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs 
                lg:font-semibold ${item.url === pathname.hash ?
                'z-2 lg:text-n-8' : 'lg:text-n-8/50' }
                lg:leading-5 hover:text-color-1 xl:px-12`}
                >
                    {item.title}
                  </a>
                ))}
              </div>
              <HamburgerMenu />
             </nav>
             <Button className="hidden lg:flex text-n-8" onClick={openModal}>
              GET STARTED

             </Button>
             <Button className="ml-auto lg:hidden" px="px-3"
             onClick={toggleNavigation}>
              <MenuSvg openNavigation={openNavigation} />
             </Button>
        </div>
        <InscriptionFormModal isOpen={isModalOpen} onRequestClose={closeModal} /> {/* Modal component */}
    </div>
  );
}

export default Header
 