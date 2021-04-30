import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageProductDetails = ({ products }) => {

    const { productName, productPrice, productWeight, _id } = products;

    const deleteProduct = (id) => {

        fetch(`https://secret-dusk-30528.herokuapp.com/deleteProduct/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
               console.log('delete_success');
            }
        })
    }

    return (

        <tr>
            <td>{productName}</td>
            <td>{productWeight}</td>
            <td>$ {productPrice}</td>
            <td>
                <button onClick={() => deleteProduct(_id)} className='btn delete-btn'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>

    );
};

export default ManageProductDetails;