const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error(err);
        else
        // return resolve(`tabla-${base}.txt`);
            return console.log('Se guardo en la DB');
    });
}

const CargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    CargarBD();
    return listadoPorHacer;
}


const crear = (descripcion) => {
    CargarBD();
    let Actividad = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(Actividad);
    guardarDB();
    return Actividad;
}

const Actualizar = (descripcion, completado = true) => {
    CargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const Borrar = (descripcion) => {
    CargarBD();
    /*
        OTRA FORMA DE HACER
        let neuvoListado=listadoPorHacer.filter(tarea=>tarea.descripcion!==descripcion)
        if(listadoPorHacer.length===nuevoListado.length){
            return false;
        }else{
            listadoPorHacer=nuevoListado();
            guardarDB();
            return true;
        }
    */
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    Actualizar,
    Borrar
}