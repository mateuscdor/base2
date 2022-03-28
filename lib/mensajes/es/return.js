const fs = require('fs');

var prefijo = JSON.parse(fs.readFileSync('./database/prefijo.json'))
const es_noreg = 
` Para registrarte utiliza

*${prefijo}reg Nombre|Edad*

o

${prefijo}ramdoreg`

const es_admin = 
`*No puedes utiliar este comando.*

Este comando es solo para *Administradores* del grupo.
`

const es_botadmin = 
`*Comando no ejecutado.*

Para Ejecutar este comando el *Bot* debe ser *Administrador*
` 

const es_grupo = 
`*Comando no ejecutado.*

Este comando solo puede ser utilizado en grupos
` 

const es_userban = 
`No puedes utilizar el bot

Eres un usuaro baneado.
` 
const es_owne = 
`*No puedes utilizar este comando.*

Este comando solo puede ser utilizado por los Owner y el propietario del bot.
` 
const es_bot  = 
`*No puedes ejecutar este comando.*

_Este comando solo puede ser utilizado desde el numero del bot._
`

const es_notextlogo = `Y el texto para el logo?`

module.exports = {
    es_noreg, es_admin, es_botadmin, es_userban, es_owne, es_bot, es_notextlogo, es_grupo,}
