const database= 'BD3-NoSQL-AtlasMongoDB'


const collection = 'bd3-nosql-atv1'

use(database)

db[collection].insertMany([
    {
        "cod_aluno":"1",
        "cod_turma":"s1",
        "nome":"Marcela Joaquina da Silva",
        "cpf":"12365478921",
        "rg":"124587652",
        "telefone_aluno":'987542136',
        "telefone_responsavel": "965845217",
        "e-mail":"marcela@gmail.com",
        "data_nascimento":"05/10/2000"
    },
    {
        "cod_aluno":"2",
        "cod_turma":"s1",
        "nome":"Paulo Mauro Santos",
        "cpf":"165958745123",
        "rg":"1258649785",
        "telefone_aluno":'965874213',
        "telefone_responsavel": "996582147",
        "e-mail":"paulo@gmail.com",
        "data_nascimento":"09/02/2002"
    },
    {
        "cod_aluno":"3",
        "cod_turma":"s2",
        "nome":"Mariovaldo Justino",
        "cpf":"132654187451",
        "rg":"1968574215",
        "telefone_aluno":'952525263',
        "telefone_responsavel": "963854721",
        "e-mail":"justino@gmail.com",
        "data_nascimento":"04/08/1998"
    },
    {
        "cod_aluno":"4",
        "cod_turma":"ss3",
        "nome":"Adriana da Conceição",
        "cpf":"98574632154",
        "rg":"52864791",
        "telefone_aluno":'912453256',
        "telefone_responsavel": "985858585",
        "e-mail":"adri_cout@gmail.com",
        "data_nascimento":"28/04/1998"
    },
    {
        "cod_aluno":"5",
        "cod_turma":"ss3",
        "nome":"Luciana Maria Chaves",
        "cpf":"8585746952",
        "rg":"9856471",
        "telefone_aluno":'922214536',
        "telefone_responsavel": "965558745",
        "e-mail":"lucimari@gmail.com",
        "data_nascimento":"03/09/999"
    },
    {
        "cod_aluno":"6",
        "cod_turma":"s1",
        "nome":"Paulina Marcelina Jose",
        "cpf":"8759645216",
        "rg":"6523521",
        "telefone_aluno":'928859745',
        "telefone_responsavel": "963521874",
        "e-mail":"paulina@gmail.com",
        "data_nascimento":"08081988"
    },
    {
        "cod_aluno":"7",
        "cod_turma":"s2",
        "nome":"Roberta Mariano",
        "cpf":"666875488",
        "rg":"6359582",
        "telefone_aluno":'999968857',
        "telefone_responsavel": "922356698",
        "e-mail":"roberta@gmail.com",
        "data_nascimento":"12/04/1998"
    },
    {
        "cod_aluno":"8",
        "cod_turma":"s1",
        "nome":"Lourival Silva",
        "cpf":"85747777741",
        "rg":"65658542",
        "telefone_aluno":'966624441',
        "telefone_responsavel": "968595253",
        "e-mail":"lourival@gmail.com",
        "data_nascimento":"08/10/2000"
    },
    {
        "cod_aluno":"9",
        "cod_turma":"s2",
        "nome":"Paloma Mari Santos",
        "cpf":"74747458621",
        "rg":"32656984",
        "telefone_aluno":'921222365',
        "telefone_responsavel": "941587698",
        "e-mail":"palomamari@gmail.com",
        "data_nascimento":"14/07/1995"
    },
    {
        "cod_aluno":"10",
        "cod_turma":"s1",
        "nome":"Karina Moura",
        "cpf":"23564189746",
        "rg":"656325",
        "telefone_aluno":'955286491',
        "telefone_responsavel": "987450012",
        "e-mail":"karina@gmail.com",
        "data_nascimento":"07/11/2003"
    }


])