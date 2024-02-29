import React, { useState } from 'react';

function Form ({onSubmit}){
  const [Nombre, setNombre] = useState('');
    const [ColorAuto, setColorAuto] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


    if (Nombre.trim().length >= 3 && ColorAuto.trim().length >= 6) {
        onSubmit(Nombre, ColorAuto);
        setError(false);
    } else {
        setError(true);
    }
};
return (
  <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Ingresa tu nombre: </label>
              <input
              type="text"
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
          />
      </div>
      <div>
          <label>Ingresa el color de tu auto favorito: </label>
          <input
              type="text"
              value={ColorAuto}
          onChange={(e) => setColorAuto(e.target.value)}
          />
      </div>
      <button type="submit">Enviar</button>
      </form>
      <div id="error">
      {error && <p>Por favor, verifica que la información sea correcta.</p>}
      </div>
  </div>
  );
}

export default Form
