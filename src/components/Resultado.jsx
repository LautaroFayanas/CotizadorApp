import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from '../constants/Index';
import { useCallback, useMemo , useRef } from "react";

export const Resultado = () => {

    const { resultado, datos } = useCotizador();
    const { marca, plan, year } = datos;
    const useYear = useRef(year)
    const nombresMarcas = useCallback( MARCAS.filter(m => m.id === Number(marca)) , [resultado] ) 
    const nombrePlanes =  useCallback( PLANES.filter(m => m.id === Number(plan)), [resultado]) 

    if (resultado === 0) {return null}

    return (
        <div className="bg-gray-100 text-center mt-4 p-4 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-1">
                <span className="font-bold"> Marca: </span>
                {nombresMarcas[0].nombre}
            </p>

            <p className="my-1">
                <span className="font-bold"> Plan: </span>
                {nombrePlanes[0].nombre}
            </p>

            <p className="my-1">
                <span className="font-bold"> Año: </span>
                {useYear.current}
            </p>

            <p className="my-1 text-2xl ">
                <span className="font-bold"> Total: </span>
                {resultado}
            </p>

        </div>
    )
}
