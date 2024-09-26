import React from 'react'
import './TableInsumos.css'
import { SearchBar } from "../SearchBar/SearchBar";

export const TableInsumos = () => {
    return (
       
        <div className='TableInsumos'>

            <h1>Esta es la tabla de los insumos de infraestructura <br /></h1>
             <SearchBar />

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Stock</th>
                        <th>Cantidad Usada</th>
                        <th>Cantidad Restante</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Producto 1</td>
                        <td>Descripción del producto 1</td>
                        <td>100</td>
                        <td>20</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>Producto 2</td>
                        <td>Descripción del producto 2</td>
                        <td>50</td>
                        <td>15</td>
                        <td>35</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
