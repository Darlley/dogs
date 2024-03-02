'use client';

import React, { useState } from 'react';

export default function ImcPage() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [result, setResult] = useState<string | number>(0);

  console.log({altura, peso, result})

  function getIMC() {
    setResult(0);
    const alturaMetro = altura / 100;
    const imc = (peso / (alturaMetro * alturaMetro)).toFixed(2);
    setResult(imc);
  }

  return (
    <div>
      <h1>IMC</h1>

      <div className="flex flex-col">
        <label htmlFor="altura">Digite sua altura:</label>
        <input
          type="number"
          name="altura"
          id="altura"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="peso">Digite seu peso:</label>
        <input
          type="number"
          name="peso"
          id="peso"
          step="0.01"
          value={peso}
          onChange={(e) => setPeso(Number(e.target.value))}
        />
      </div>

      <button onClick={() => getIMC()}>Calcular</button>
      <p>IMC: {(result !== 'NaN' && result !== 0) ? result : ''}</p>
    </div>
  );
}
