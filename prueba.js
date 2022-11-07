const obj = {
    nombre: 'Ivan',
    apellido: 'Medina'
}

const clonObj = { ...obj , ['Nombre']: 'Mileyvi' }

console.log( clonObj )