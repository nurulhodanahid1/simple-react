import React from 'react';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;

    let name = " ";
    let salary;
    for (let i = 0; i < cart.length; i++) {
        const player= cart[i];
        name = name + player.name + ' , ';
        salary = player.salary;
    }

    const totalSalary = cart.reduce( (total, salary) => total + salary.salary, 0);
    return (
        <div className="cart-container">
            <h1 className="text-center text-danger">Make your own team</h1>
            <p className="item"><span style={{color: "#2990D2", fontSize:"28px"}}>Your selected player list:</span> <span style={{color: "green"}}>{name}</span></p>
            <p className="item">Your Selected player market value: <span style={{color:"#c0392b"}}><FontAwesomeIcon icon={faEuroSign} /> {salary} m</span></p>
            <h4 className="item">Total Selected: <span style={{color:"#c0392b", fontSize:"23px"}}>{cart.length}</span></h4>
            <h4 className="item">Total Market Value: <span style={{color:"#c0392b"}}><FontAwesomeIcon icon={faEuroSign} /> {totalSalary} m</span></h4>
            <button className="btn btn-success">Contact now</button>
        </div>
    );
};

export default Cart;