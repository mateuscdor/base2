const fs = require('fs');

var prefijo = JSON.parse(fs.readFileSync('./database/prefijo.json'))
const en_noreg = 
` To register use

*${prefijo}reg Name|Age*

or

${prefijo}ramdoreg`

const en_admin = 
`*You cannot use this command.*

This command is only for *Administrators* of the group.
`

const en_botadmin = 
`*Command not executed.*

To execute this command the *Bot* must be *Administrator*` 

const en_grupo = 
`*Command not executed.*

This command can only be used in groups
` 

const en_userban = 
`You can't use the bot

You are a banned user.
` 
const en_owne = 
`*You cannot use this command.*

This command can only be used by the Owner and the owner of the bot.` 
const en_bot  = 
`*I can't execute this command.*

_This command can only be used from the bot number._`

const en_notextlogo = `Y el texto para el logo?`



module.exports = {
    en_noreg, en_admin, en_botadmin, en_userban, en_owne, en_bot, en_notextlogo, en_grupo}

