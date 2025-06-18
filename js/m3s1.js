function agregarClientes(){

    let lisClientes=[];

    for(let i=0; i<2; i++){

    let id=prompt("Ingresa el id del cliente");
    let nombre=prompt("Ingresa el nombre del cliente");
    let edad=prompt("Ingresa la edad del cliente")
  
    let cliente={};
    cliente.id=id;
    cliente.nombre=nombre;
    cliente.edad=edad;
    cliente.estado=true

    let ListRole=[];

    if(Number(edad)<18)
        return;
    
    for(let i=0;i<2;i++){
        let role={};
        let id=prompt("Ingresa el id del rol");
        let nombre=prompt("Ingresa el nombre del rol");

        role.id=id;
        role.nombre=nombre;

        ListRole.push(role);
    }

    cliente.roles=ListRole;
    lisClientes.push(role); 
    }

    const lista = document.getElementById("cliente-lista");

        lisClientes.forEach(cliente =>{
            const listitem = document.createElement("li");
            listitem.textContent = `${cliente.nombre} - ${cliente.edad} - ${cliente.estado}`;
            lista.appendChild(listitem);
        });

console.log(cliente);
alert(JSON.stringify(cliente));
}