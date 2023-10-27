//APIKEY:gAAAAABlO7l-vP1tp-L-j-5tXNBcAo3bQ-dMV-55n9jJAX_HFDhjI2qjYZmkoHjMEFgZuvSoxj_X-pnBAL5YaL0KUoerTYJs9CbefuFkvjF4pQjOHGzTMpgQ6kHtEmhNf7F3mGBeCCHx


function llamadoIA(){
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer gAAAAABlO7l-vP1tp-L-j-5tXNBcAo3bQ-dMV-55n9jJAX_HFDhjI2qjYZmkoHjMEFgZuvSoxj_X-pnBAL5YaL0KUoerTYJs9CbefuFkvjF4pQjOHGzTMpgQ6kHtEmhNf7F3mGBeCCHx'
        },
        body: '{"context":"un texto como profesional en fotografia","keywords":["fotografia"],"max_tokens":512,"model":"gpt-3.5-turbo-16k","n":1,"source_lang":"en","target_lang":"es","temperature":0.65,"title":"string"}'
      };
      
      fetch('https://api.textcortex.com/v1/texts/blogs', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
     
}
export default llamadoIA