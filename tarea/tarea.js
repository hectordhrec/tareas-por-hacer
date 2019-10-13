const fs = require('fs');

let listaTareas = [];

const crear = (descripcion) => {
    cargarDB();
    let tarea ={
        descripcion,
        completado: false
    }

    listaTareas.push(tarea);
    guardarDB();

    return tarea;
}

const cargarDB = () => {
    try {
        listaTareas = require('../db/data.json');
    } catch (err) {
        listaTareas = [];
    }
}

const getListado = () => {
    cargarDB();
    return listaTareas;
}

const actualizar = (numeroTarea, estado=true) => {
    cargarDB();
    if(listaTareas[(numeroTarea-1)]){
        listaTareas[numeroTarea-1].completado = estado;
        guardarDB();
    } else{
        console.log('El número de tarea no existe en la DB');
    }
}

const borrar = (numeroTarea) => {
    cargarDB();
    /* forma 1 por medio de splice */
    // if(listaTareas[(numeroTarea-1)]){
    //     listaTareas.splice((numeroTarea-1),1);
    //     guardarDB();
    //     console.log('Tarea borrada con éxito');
    // } else{
    //     console.log('El número de tarea no existe en la DB');
    // }

    /* Forma dos por medio de filter */
    let nuevoArreglo = listaTareas.filter(tarea => {
        return listaTareas.indexOf(tarea) !== (numeroTarea-1);
    });
    if (listaTareas.length === nuevoArreglo.length) {
        console.log('No se borro la tarea indicada');
    } else {
        listaTareas = nuevoArreglo;
        guardarDB();
        console.log('Tarea borrada con éxito');
    }
}

const guardarDB = () => {
    fs.writeFile(`./db/data.json`, JSON.stringify(listaTareas), (err) =>{
        if (err) throw new Error('Ocurrió un error al procesar los daros', err)
    });
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}