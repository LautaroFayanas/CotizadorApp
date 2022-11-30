import { Fragment } from "react";
import { MARCAS, YEARS ,PLANES } from "../constants/Index";
import useCotizador from "../hooks/useCotizador";
import { Error } from "./Error";


export const Formulario = () => {

    const { handleChangeDatos , datos , error , setError , CotizarSeguro } = useCotizador();

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios');
            return
        }

        setError('');
        CotizarSeguro()
    }


  return (
    <>
        {error && <Error />}
        <form 
            onSubmit={handleSubmit}>
            <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>

                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={ e => handleChangeDatos(e)}
                        value= {datos.marca}
                    >
                        <option value=''>--Selecione la marca--</option>
                        {
                            MARCAS.map(marca => (
                                <option 
                                    key={marca.id} 
                                    value={marca.id} 
                                > 
                                     {marca.nombre} 
                                </option>
                            ))
                        }
                    </select>
            </div>

            <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>

                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={ e => handleChangeDatos(e)}
                        value= {datos.year}
                    >
                        <option value=''>--Selecione el año--</option>
                        {
                            YEARS.map(years => (
                                <option 
                                    key={years}     
                                    value={years} 
                                > 
                                    {years} 
                                </option>
                            ))
                        }
                    </select>
            </div>

            <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un Plan
                    </label>

                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={ e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
            </div>

                <input
                    type='submit'
                    className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
                    value='Cotizar'
                />

        </form>
    </>
  )
}
