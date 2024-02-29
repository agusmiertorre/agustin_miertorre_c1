import React from 'react';

function Card({ Nombre, ColorAuto }) {
    return (
    <div id="card">
        <h2>Información ingresada:</h2>
        <p> Hola {Nombre}, bienvenido. </p>
        <p> El color de tu auto ideal es {ColorAuto} </p>
    </div>
    );
}

export default Card;
