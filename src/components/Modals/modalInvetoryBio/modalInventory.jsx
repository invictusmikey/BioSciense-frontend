import React, { useState, useEffect } from 'react';
import './modalInventoryBio.css';
import { ModalDatesM } from '../ModalDatesM/ModalDatesM/ModalDatesM';

export const ModalInventoryBio = ({ isOpen, closeModal, selectedSupply, onUpdate, onDelete }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDeleting] = useState(false)
  const [isOpenDates, setIsOpDates] = useState(false);


  const [edit, setEdit] = useState({
    equipo: '',
    serial: '',
    modelo: '',
    ubicacion: '',
    fechaMantenimiento: '',
    fechaProximoM: ''
  });

  useEffect(() => {
    if (selectedSupply) {
      setEdit({
        equipo: selectedSupply.equipo,
        serial: selectedSupply.serial,
        modelo: selectedSupply.modelo,
        ubicacion: selectedSupply.ubicacion,
        fechaMantenimiento: selectedSupply.fechaMantenimiento,
        fechaProximoM: selectedSupply.fechaProximoM
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
      const response = await fetch(`http://localhost:3000/inventorybRoutes/${selectedSupply._id}`, {
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
      const response = await fetch(`http://localhost:3000/inventorybRoutes/${selectedSupply._id}`, {
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
      setIsDeleting(true);
    }
  };

  const cambioMant = () => {
    setIsOpDates(true)
  }


  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal} className="close-button">X</button>
        {isEditing ? (
          <>
            <h1>
              <input
                type="text"
                name="equipo"
                value={edit.equipo}
                onChange={manejarCambio}
              />
            </h1>
            <p>
              <strong>Serial:</strong>
              <input
                type="text"
                name="serial"
                value={edit.serial}
                onChange={manejarCambio}
              />
            </p>
            <p>
              <strong>Modelo:</strong>
              <input
                type="text"
                name="modelo"
                value={edit.modelo}
                onChange={manejarCambio}
              />
            </p>
            <p>
              <strong>Ubicación:</strong>
              <input
                type="text"
                name="ubicacion"
                value={edit.ubicacion}
                onChange={manejarCambio}
              />
            </p>
            <button className="buttonsCrud" onClick={guardarCambios}>Guardar Cambios</button>

          </>
        ) : (
          <>
            <h1>{edit.equipo}</h1>
            <p><strong>Serial:</strong> {edit.serial}</p>
            <p><strong>Modelo:</strong> {edit.modelo}</p>
            <p><strong>Ubicación:</strong> {edit.ubicacion}</p>
            <p><strong>Fecha ultima actualizacion <br /></strong>{selectedSupply.updatedAt}</p>
            <button className="buttonsCrud" onClick={() => setIsEditing(true)}>Editar</button>
          </>
        )}

        <button className="buttonsCrud" onClick={deleteSupplie}>Eliminar</button>
        <button className="buttonsCrud" onClick={() => setIsOpDates(true)}>Mantenimiento</button>


      </div>
      {isOpenDates && (
        <ModalDatesM
          key={selectedSupply._id}
          title="Mantenimiento"
          closeModal={() => setIsOpDates(false)}
          valor={selectedSupply.fechaMantenimiento}
        />
      )}
    </div>

  );
};
