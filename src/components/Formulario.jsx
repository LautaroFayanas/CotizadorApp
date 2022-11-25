import { MARCAS, YEARS } from "../constants/Index";



export const Formulario = () => {
  return (
    <>
        <form>
            <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>

                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
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
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
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
        </form>
    </>
  )
}
