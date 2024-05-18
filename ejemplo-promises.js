const miPromesa = new Promise((resolve, reject)=>{
    //resolve("la promesa fue resuelta");
    //reject("la promesa fallo");
    setTimeout(()=>{
        //resolve("set time out finalizo");
        reject("set time out fallo");
    },2000);
});

miPromesa.then((respuesta)=>console.log(respuesta), (razon)=>console.log(razon));