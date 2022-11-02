import PropTypes from "prop-types"

const Saludo = ( { nombre, apellido, edad } ) => {
    // const { nombre, apellido, edad } = props ;  //desestructuring del objeto props
    
    return (
        <>
            
            <p>Bienvenido Sr(a). { nombre } { apellido } y su edad es { edad } </p>
        </>
    )
}

export default Saludo;

//Declaracion de las PropTypes para obligar a recibir un tipo de dato concreto
Saludo.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number
}

//declaracion de props por defecto
Saludo.defaultProps = {
    nombre: 'Carlos',
    apellido: 'Enciso',
    edad: 0
}