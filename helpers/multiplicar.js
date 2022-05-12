const fs = require('fs')
const colors = require('colors')



const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = ''
        
        for (let i = 1; i <= hasta; i++){
            salida += `${base} ${ 'x'} ${i} = ${base * i}\n`
        }

        if ( listar ){
            console.log('=====================')
            console.log('    Tabla del ', base)
            console.log('=====================')
            console.log(salida)      
        } 

        fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida);
    
        return `tabla de la base ${ base } creada`;
        
        

    } catch (error) {
        throw error


        
    }


}

module.exports = {
    crearArchivo}
