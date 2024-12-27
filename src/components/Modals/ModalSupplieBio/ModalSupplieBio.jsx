import React, { useState, useEffect } from 'react';

export const ModalSupplieBio = ({ isOpen, closeModal, selectedSupply, onUpdate, onDelete }) => {
  if (!isOpen) return null; 

  const [isEditing, setIsEditing] = useState(false);
  const [isDelete,setIsDeleting] = useState(false)

  const [edit, setEdit] = useState({
    Nombre: '',
    Cantidad_incial: '',
    Inventario_inicial: '',
    Inventario_final: ''
  });

  useEffect(() => {
    if (selectedSupply) {
      setEdit({
        Nombre: selectedSupply.Nombre,
        Cantidad_incial: selectedSupply.Cantidad_incial,
        Inventario_inicial: selectedSupply.Inventario_inicial,
        Inventario_final: selectedSupply.Inventario_final,
      });
    }
  }, [selectedSupply]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const guardarCambios = async () => {
    try {
      const response = await fetch(`http://localhost:3000/suppliesbRoutes/${selectedSupply._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(edit),
      });

      if (!response.ok) {
        throw new Error('Error al guardar los cambios');
      }

      const updatedSupply = await response.json();
      onUpdate(updatedSupply); 
      setIsEditing(false);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };
  const deleteSupplie = async () => {
    try {
      const response = await fetch(`http://localhost:3000/suppliesbRoutes/${selectedSupply._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar los insumos');
      }
  
      const deletedSupply = await response.json();  
      alert('insumo eliminado')
      
      onDelete(deletedSupply); 
      setIsDeleting(false);   
      closeModal()
    } catch (error) {
      console.error('Error al eliminar el insumo:', error); 
      setIsDeleting(false); 
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal} className="close-button">X</button>
        {isEditing ? (
          <>
            <h1>
              <input 
                type="text" 
                name="Nombre" 
                value={edit.Nombre} 
                onChange={manejarCambio} 
              />
            </h1>
            <p>
              <strong>Cantidad_incial:</strong>
              <input 
                type="text" 
                name="Cantidad_incial" 
                value={edit.Cantidad_incial} 
                onChange={manejarCambio} 
              />
            </p>
            <p>
              <strong>Inventario_inicial:</strong>
              <input 
                type="text" 
                name="Inventario_inicial" 
                value={edit.Inventario_inicial} 
                onChange={manejarCambio} 
              />
            </p>
            <p>
              <strong>Inventario_final:</strong>
              <input 
                type="text" 
                name="Inventario_final" 
                value={edit.Inventario_final}
                onChange={manejarCambio} 
              />
            </p>
            <button className="buttonsCrud" onClick={guardarCambios}>Guardar Cambios</button>
          </>
        ) : (
          <>
            <h1>{edit.Nombre}</h1>
            <p><strong>Cantidad_incial:</strong> {edit.Cantidad_incial}</p>
            <p><strong>Inventario_inicial:</strong> {edit.Inventario_inicial}</p>
            <p><strong>Inventario_final: </strong> {edit.Inventario_final}</p>
            <p><strong>Fecha ultima actualizacion <br/></strong>{selectedSupply.updatedAt}</p>
            <button className="buttonsCrud" onClick={() => setIsEditing(true)}>Editar</button>
          </>
        )}
        <button className="buttonsCrud" onClick={deleteSupplie}>Eliminar</button>
      </div>
    </div>
  );
};
