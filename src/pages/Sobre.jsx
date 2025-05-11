import React, { useState } from 'react';
import { perguntarKadu } from '../utils/aboutMe';

const Sobre = () => {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarPergunta = async () => {
    if (!pergunta) return;
    setLoading(true);
    const resp = await perguntarKadu(pergunta);
    setResposta(resp);
    setLoading(false);
  };

  return (
    <section className="text-center py-20 bg-light px-4">
      <h2 className="display-4 text-primary">Sobre Mim</h2>
      <p className="lead max-w-3xl mx-auto mt-4 mb-8">
        Olá! Sou Kadu Nogueira, um desenvolvedor apaixonado por tecnologia. Tem alguma pergunta ou curiosidade sobre mim? É só escrever abaixo!
      </p>

      <div className="max-w-xl mx-auto text-left">
        <h3 className="text-lg font-semibold mb-2">Tem alguma pergunta pra mim?</h3>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="form-control border p-2 rounded"
            placeholder="Digite sua pergunta aqui..."
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
          <button
            onClick={enviarPergunta}
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Pensando...' : 'Perguntar'}
          </button>
        </div>

        {resposta && (
          <div className="mt-4 p-3 bg-white border rounded shadow">
            <strong>Kadu responde:</strong>
            <p className="mt-2">{resposta}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sobre;
