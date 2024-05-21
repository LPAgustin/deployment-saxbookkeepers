import Section from './Section'
import Heading from './Heading'
import { roadmap } from '../constants'
import { check2, grid, loading1 } from '../assets'
import TagLine from './TagLine'
import Button from './Button'
import { useState } from "react";
import InscriptionFormModal from './InscriptionFormModal';

const Roadmap = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Section className='overflor-hidden' id="roadmap">
      <div className='container md:pb-10'>
        <Heading
        tag="Ready to get started"
        title="Why choose us"/>
        <div className='relative grid gap-6 md:grid-cols-2 md:gap-4
        md:pb-[7rem]'>
          {roadmap.map((item) => {
            const status = item.status === 'done' ?
            "Done" : "In progress";
            return (
              <div key={item.id} className={`md:flex even:md:translate-y-[7em]
              p-0.25 rounded-[2.5rem]
              ${item.colorful ? 'bg-conic-gradient' : "bg-n-6"
              }`}>
                <div className='relative p-8 bg-n-8 rounded-[2rem]
                overflow-hidden xl:p-15'>

                  <div className='relative z-1'>
                    <div className='flex items-center justify-between max-w-[27rem]
                    mb-8 md:mb-20'>
                      <TagLine>{item.date}</TagLine>
                      <div className='flex items-center px-4 py-1 bg-n-1
                      rounded text-n-8'>
                        <img src={item.status === 'done' ?
                          check2 : loading1} 
                          className='mr-2.5'
                          width={16}
                          height={16}
                          alt='Status'
                          />
                          <div className='tagline'>{status}</div>
                      </div>
                    </div>
                    <div className='mb-10 -my-30 -mx-15'>
                      <img src={item.imageUrl} className='w-full'
                      width={630}
                      height={420}
                      alt={item.title}
                      />
                    </div>
                    <h4 className='h4'>{item.title}</h4>
                    <p className='body-2 text-n-4'>{item.text}</p>
                  </div>
                </div>
                
              </div>
              
            )
          })}
           <Button onClick={openModal}>Ready?</Button>
        </div>
        
      </div>
      <InscriptionFormModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </Section>
  )
}

export default Roadmap;
