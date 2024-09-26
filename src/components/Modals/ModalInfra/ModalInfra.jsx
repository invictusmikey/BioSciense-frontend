import { useState } from "react";
import React from 'react'
import { SideBar } from "../../SideBar/SideBar";

export const ModalInfra = () => {

   

    
  return (
    <div>
        <button onClick={() => toggle()}>Esta es mi ventana modal</button>

         <SideBar show={modal}/>
        
    </div>
  )
}
