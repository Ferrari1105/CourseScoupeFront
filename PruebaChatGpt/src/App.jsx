import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

    const requestData = {
      prompt: inputText,
      max_tokens: 50,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Error al realizar la solicitud a la API de OpenAI');
      }

      const data = await response.json();
      setResponse(data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Generador de Texto con OpenAI GPT-3.5</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Instrucciones:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Generar</button>
      </form>
      <div>
        <h2>Respuesta:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
