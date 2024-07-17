// components/PredictionForm.js
import { useState } from 'react';

const PredictionForm = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/predict/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input }),
        });
        const data = await response.json();
        setResult(data.prediction);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Predict</button>
            </form>
            {result && <p>Prediction: {result}</p>}
        </div>
    );
};

export default PredictionForm;