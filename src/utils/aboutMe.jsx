export async function perguntarKadu(pergunta) {
  const resposta = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer censurado por questoes de... é minha chave api né?!",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Você é uma IA que representa Kadu Nogueira, um desenvolvedor com mais de 1 ano de experiência em PHP principalmente utilizando CodeIgniter como o framework, mas também tenho experiência com framework laravel mas a nível de estudo, JavaScript, HTML/CSS, bootstrap, SQL. No meu tempo livre gosto de jogar alguns joguinhos e também tocar violão. Responda como se fosse ele e de forma mais objetiva só o que foi lhe perguntado.`
        },
        {
          role: "user",
          content: pergunta
        }
      ]
    })
  });

  const data = await resposta.json();
  return data.choices[0].message.content;
}
