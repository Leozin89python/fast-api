/*pode-se requisitar no interior da função ao json()
ou externo pela própria promisse do fetch

neste caso usei o nivel mais interno da função
*/

let url = 'http://localhost:8080/server'

const options = {
    method: 'GET',
    mode:'cors',
    cache: 'default'
}

fetch(url, options).then(res => { res.json()
                    .then(res =>{
                        console.log(res)
                    })
                    .then(list =>{
                        const elements = list.forEach(campo =>{
                            let nome = campo.nome
                            let sexo = campo.sexo
                            let escolaridade = campo.escolaridade

                            return {nome, sexo, escolaridade}
                        }) 
                        document.body.innerHTML = elements  
                    })
                    .catch(err =>{
                        console.error('error' + err)
                    }) 
                })

 /**
  * erros de ajax:
  * 
  * 
  * 
  * errorTypeError: Cannot read property 'forEach' of undefined
  * 
  * 
  */
