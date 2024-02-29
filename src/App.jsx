import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'
function App() {
  const [showCard, setShowCard] = useState(false);
  const [cardInfo, setCardInfo] = useState({});
  const handleFormSubmit = (Nombre, ColorAuto) => {
    setCardInfo({ Nombre, ColorAuto });
    setShowCard(true);
  };

  return (
    <div className="App">
      <h1>Contanos sobre tu auto favorito </h1>
      <Form onSubmit={handleFormSubmit} />
      {showCard && <Card Nombre={cardInfo.Nombre} ColorAuto={cardInfo.ColorAuto} />}
    </div>
  );
}

export default App
