import { useState } from 'react';

function MiComponente() {
  const [mostrarIcono, setMostrarIcono] = useState(false);

  const handleClick = () => {
    setMostrarIcono(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic aquí</button>
      {mostrarIcono && <div className="iconoAnimado"></div>}
    </div>
  );
}

export default MiComponente;