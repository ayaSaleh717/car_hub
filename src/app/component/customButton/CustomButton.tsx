'use client'
import React from 'react'
import Image from "next/image";
import { CustomButtonProps } from './typs'

function CustomButton({title, containerStyles,btnType , 
  handleClick, textStyles, rightIcon,isDisabled}:CustomButtonProps) {
  return (
    <>
    <button type={btnType} 
    className={containerStyles}
     onClick={()=>{handleClick}} >
      
     <span className={`flex-1 ${textStyles}`}> 
   
     
     {title} 
     {/* {
       rightIcon &&(
         <div className="relative w-10 h-10">  
           <Image 
           src={rightIcon} 
           alt="right icon"
           fill
           className="object-contain"/>
           </div>
       )
     }
     */}
     </span>
    
    
       
      
    </button></>
  )
}

export default CustomButton
