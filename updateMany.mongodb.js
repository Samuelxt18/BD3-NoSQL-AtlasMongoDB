const database= 'BD3-NoSQL-AtlasMongoDB'


const collection = 'bd3-nosql-atv1'

use(database)
db[collection].updateMany(
    {cod_aluno:'2'},
    {$set:{
        cpf:'85545216325',
        rg:'3526254',
        nome: 'Joaquim Marcelo Soares'
    }},
   
    

    
);