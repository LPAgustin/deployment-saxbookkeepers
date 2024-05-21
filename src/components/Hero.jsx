import Button from "./Button";
import Section from "./Section";
import { curve } from "../assets";
import { heroBackground } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useState, useRef } from "react";
import Notification from "./Notification";
import abstract from '../assets/hero/abstract.jpg'
import InscriptionFormModal from './InscriptionFormModal'; 

const Hero = () => {
    const parallaxRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center
        mb-[4rem] md:mb-20 lg:mb:[6rem]">
                                <ScrollParallax isAbsolutelyPositioned>
                        <ScrollParallax isAbsolutelyPositioned>
                            <Notification 
                            className="hidden
                            absolute
                            -right-[20rem]
                            bottom-[11rem]
                            w-[18rem]
                            xl:flex"
                            title="Our clients"/>
                        </ScrollParallax>
                        <ul className="hidden absolute -left-[20rem]
                        bottom-[7.5rem] px-5 bg-n-9/40
                        backdrop-blur border border-n-1/10
                        rounded-2xl xl:flex">
                            {heroIcons.map((icon, index) => (
                                <li key={index}>
                                    <img 
                                    src={icon} 
                                    width={84}
                                    alt="icon" />
                                </li>
                            ))}

                        </ul>
                    </ScrollParallax>
            <h1 className="h1 mb-6 mt-15 text-n-13">
                Charting Your Financial Success
                <span className="inline-block relative">
                    SAX Bookkeepers{" "} 
                <img 
                    src={curve} 
                    className="absolute top-full left-0
                    w-full xl:-mt-2" 
                    width={624} 
                    height={28}
                    alt="Curve"
                />
                </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-13
            lg:mb-8">
            Simplifying bookkeeping for your peace of mind.
            </p>
            <Button onClick={openModal}>
                Get started
            </Button>
        </div>
        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl
        xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl
            bg-conic-gradient">
                <div className="relative bg-n-8 
                rounded-[1rem]">
                    <div className="h-[1.4rem] bg-n-10
                    rounded-t-[0.9rem]"/>
<               div className="aspect-[145/80] 
                rounded-b-[0.9rem] overflow-hidden 
                md:aspect-[1024/560] lg:aspect-[1024/560]">
                    <img src={abstract} />
                </div>
                
                </div>
                <Gradient />
                
            </div>
            <div className="absolute -top-[54%] left-1/2
            w-[234%] -translate-x-1/2 md:-top-[46%]
            md:w-[138%] lg:-top-[104%]">
            </div>
            <div className="absolute -top-[54%] left-[35rem]
            w-[234%] -translate-x-1/2 md:-top-[46%]
            md:w-[138%] lg:-top-[150%] lg:w-[177%]">
                <img 
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
                />
            </div>
            

            <BackgroundCircles />
        </div>

       </div>
       <BottomLine />
       <InscriptionFormModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </Section>
  );
};

export default Hero;