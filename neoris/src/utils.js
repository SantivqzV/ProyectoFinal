export const getTrabajadores = async ()=> {

    const result=await fetch("http://localhost:5000/items",{method:"POST", headers: {"content-type":"application/json"},body: JSON.stringify({nombre: "Carmelo", apellido1: "iii"})});
    
    const data = await result.json();
    console.log(data);
    return data
};

 