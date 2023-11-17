"use client"
import Image from 'next/image'
import {UserButton} from "@clerk/nextjs";
import { Modal } from '@/components/ui/modal';

const SetupPage=()=>{
  return (
    <div className="p-4">
      <Modal title="Test" description="Test Desc" isOpen onClose={()=>{}}>
        children
      </Modal>
    </div>
  )
}
export default SetupPage