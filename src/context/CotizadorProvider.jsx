import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, obtenerDiferenciaYear , formatearDinero  } from "../helpers/Index";

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    const [ datos , setDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [ error , setError ] = useState('');
    const [ resultado , setResultado] = useState(0);
    const [ cargando , setCargando ] = useState(false);
   
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const CotizarSeguro = () => {
        //Base obtenida por el cliente
        let resultado = 2000

        //Obtener diferencia de anos
        const diferencia = obtenerDiferenciaYear(datos.year);

        //Restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100

        //Europeo 30%
        //Americano 15%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca);

        //Plan Basico Incrementa 20%
        //Plan Completo Incrementa 50%
        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado);

        setCargando(true)
        
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false)
        }, 3000);
        
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                error,
                resultado,
                cargando,
                setError,
                handleChangeDatos,
                CotizarSeguro,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext;
