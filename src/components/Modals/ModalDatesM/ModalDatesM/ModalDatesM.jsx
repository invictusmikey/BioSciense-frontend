import React, {useState, useEffect } from 'react'

import './ModalDatesM.css'

export const ModalDatesM = ({ title,closeModal ,valor }) => {
    const [supplies, setSupplies] = useState([]);


    const fetchSupplies = async () => {
        try {
            const response = await fetch('http://localhost:3000/inventorybRoutes');
            if (!response.ok) {
                throw new Error('Error al obtener los insumos');
            }
            const data = await response.json();
            setSupplies(data);
        } catch (error) {
            console.error('Error al obtener los insumos:', error);
        }
    };
    useEffect(() => {
        fetchSupplies()
    },[]);

    return (
        <div id='m-date'>

        <button onClick={closeModal}>x</button>
           <h1>{title}</h1>
        <div>
            <label>Ingrese fecha de mantenimiento</label>
               <input type="date"  value={valor}  />
        </div>
        <div>
            <label>ingrese fecha proximo mantenimiento</label>
            <input type="date" />
        </div>
        <button id='Btn-md' >Enviar</button>
        
        </div>
    )
}

