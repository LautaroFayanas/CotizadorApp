
export const MARCAS = [
    {id: 1 , nombre: 'Europeo'},
    {id: 2 , nombre: 'Americano'},
    {id: 3 , nombre: 'Asiatico'},
]

const YEARMAX = new Date().getFullYear();

//Array from me lo convierte a un array. De ese Array ... Quiero uno nuevo con 20 elementos. En este caso le paso YEARMAX
//Entonces los 20 elementos seran las fechas.

export const YEARS = Array.from(new Array(20), (valor, index) => (YEARMAX - index))

export const PLANES = [
    {id: 1 , nombre: 'Basico'},
    {id: 2 , nombre: 'Completo'},
]