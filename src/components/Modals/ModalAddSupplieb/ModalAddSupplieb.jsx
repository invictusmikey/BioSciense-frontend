import React, { useState } from 'react';

export const ModalAddSupplieb = ({ isOpen, closeModal, onAdd }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        Nombre: '',
        Cantidad_incial: '',
        Inventario_inicial: '',
        Inventario_final: ''
    });

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  
    const addSupplie = async () => {
        try {
            const response = await fetch('http://localhost:3000/suppliesbRoutes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),  
            });

            if (!response.ok) {
                throw new Error('Error al guardar los cambios');
            }

            const data = await response.json();
            onAdd(data);  
            closeModal(); 
        } catch (error) {
            console.error('Error al agregar el insumo:', error);
        }
    };

    return (
        <div className="modalAdd">
            <button className='close' onClick={closeModal}>X</button>
            <h1>Agrega un Insumo/Herramienta</h1>
            <h2>Nombre</h2>
            <input
                placeholder='Ingrese nombre del insumo'
                type="text"
                name="Nombre"
                value={formData.Nombre}  
                onChange={handleChange}
            />
            <h2>cantidad inicial</h2>
            <input
                placeholder='Ingrese la cantidad actual'
                type="text"
                name="Cantidad_incial"
                value={formData.Cantidad_incial}  
                onChange={handleChange}
            />
            <h2>Inventario Inicial</h2>
            <input
                placeholder='Ingrese la cantidad inicial que hay en el stock'
                type="text"
                name="Inventario_inicial"
                value={formData.Inventario_inicial }  
                onChange={handleChange}
            />
            <h2>Inventario final</h2>
            <input
                placeholder='Ingrese la cantidad final que hay en stock'
                type="text"
                name="Inventario_final"
                value={formData.Inventario_final}  
                onChange={handleChange}
            />
            <button onClick={addSupplie}>Agregar</button>
        </div>
    );
};
