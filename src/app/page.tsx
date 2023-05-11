'use client'
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

export default function Home() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
   setModal(true) 
  }, [])
  return (
    <Modal title='teste' description='teste teste' open={modal}>
      <p className='text-gray-700 text-base'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </Modal>
  );
}
