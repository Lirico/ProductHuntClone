import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial, validar, fn) => {

    const [ valores, guardarValores ] = useState(stateInicial);
    const [ error, guardarErrores ] = useState({});
    const [ submitForm, guardarSubmitForm ] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores) {
                fn(); // Fn = Función que se ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, []);
}
 
export default useValidacion;
