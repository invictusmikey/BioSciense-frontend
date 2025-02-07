import React from 'react';
import './ModalDivArchives.css';
import { use } from 'react';

export const DivArchives = ({ isOpen, onClose , id}) => {

  const [archives,setArchives ] = useState([]);

  const fetchinArchives  = async () => {
    try {
      const archivos = await fetch(`http://localhost:3000/archiveRoutes/traer-archivo/${id}`);
      const data = await archivos.json();
      setArchives(data);

    } catch (error) {
      
      console.log('Error al obtener los archivos:', error);
      
    }

  }

  return (
    <div className='modal-archives'>
      <div className='modal-content-archives'>
        <button onClick={onClose}>X</button>

        <h1>Archivos</h1>
        <ul>
        
        </ul>
      </div>
    </div>
  )
}
