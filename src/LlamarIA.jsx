async function LlamadaIA(Tema, NumeroDeLecciones, Topicos) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer gAAAAABlX6NRWqrFrSQBzr6NlGN5CjIhlpvG3gzX7hd5qax5qoY9rI_eOaFwXlFDUZQEmg9QTxci0wZO-9ILtviNPwDS1KwDpHYniFMAruBBDaZII7cqK6XFnLpZLKFXzIEZ_9V6NF7H'
    },
    body: JSON.stringify({
      context: `Podrias hacer ${NumeroDeLecciones} lecciones sobre ${Tema} que abarquen los siguientes temas ${Topicos} cada una de estas lleciones deben empezar con el numero de la leccion tambien tenes que desarrollar las lecciones para que parezca un curso real`,
      keywords: [""],
      max_tokens: 512,
      model: "gpt-3.5-turbo-16k",
      n: 1,
      source_lang: "en",
      target_lang: "es",
      temperature: 0.65,
      title: "string"
    }),
  };

  try {
    const response = await fetch('https://api.textcortex.com/v1/texts/blogs', options);
    const data = await response.json();
    console.log(response)
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function DescripcionIA(Tema, Topicos) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer gAAAAABlX6NRWqrFrSQBzr6NlGN5CjIhlpvG3gzX7hd5qax5qoY9rI_eOaFwXlFDUZQEmg9QTxci0wZO-9ILtviNPwDS1KwDpHYniFMAruBBDaZII7cqK6XFnLpZLKFXzIEZ_9V6NF7H'
    },
    body: JSON.stringify({
      context: `una descripcion sobre un curso de ${Tema} que abarcara los siguientes topicos ${Topicos} no debe superar los 100 caracteres`,
      keywords: [""],
      max_tokens: 512,
      model: "gpt-3.5-turbo-16k",
      n: 1,
      source_lang: "en",
      target_lang: "es",
      temperature: 0.65,
      title: "string"
    }),
  };

  try {
    const response = await fetch('https://api.textcortex.com/v1/texts/blogs', options);
    const data = await response.json();
    console.log(response)
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}



export { LlamadaIA,DescripcionIA };
