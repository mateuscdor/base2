const fs = require('fs')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab,  } = require ('./leveling')
const {isOwner, isAdmin, isBan, choute, Usuario,fromMe,} = require ('../index.js')

const nivelActual = getLevelingLevel(Usuario)
var rango = 'Aspirante'
if (nivelActual == 10) {
    rango = '*Aprendiz*'
} else if (nivelActual == 20) {
    rango = '*Novato*'
} else if (nivelActual == 30) {
    rango = '*Promesa*'
} else if (nivelActual == 30) {
    rango = '*Profesional*'
} else if (nivelActual == 100) {
    rango = '*Veterano*'
} else if (nivelActual == 150) {
    rango = '*Elite*'
} else if (nivelActual > 200) {
    rango = '*Elite Global🗡*'
}


    if (!isBan) {
const currentLevel = getLevelingLevel(Usuario)
const checkId = getLevelingId(Usuario)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(Usuario)
const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15) 
const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 
const getLevel = getLevelingLevel(Usuario)
const namelv = checkId
addLevelingXp(Usuario, amountXp)
if (requiredXp <= getLevelingXp(Usuario)) {
addLevelingLevel(Usuario, 1)
const lvup =  `
🎉@${namelv.split('@')[0]} Subiste de Nivel 🎉
🎗️ *Nivel :*  ${getLevel} ➫ ${getLevelingLevel(Usuario)}
✨ *XP :* ${getLevelingXp(Usuario)}
🏆 *Posición :*
🏅 *Rango :* ${nivelActual}`}
} catch (err) {
console.error(err)
}
}


//
const prefijo = '_'
baby = {
    wait: '*EN PROCESO, ESPERA* 🫂❤️',
    success: '✔️ *LISTO* ✔️',
    ferr: 'Intentalo de nuevo mas tarde',
    error: {
    stick: 'Mmmmm',
    Iv: 'Mmmmm'
    },
    only: {
        group: 'Este Comando Solo Puede ser Utilizado en *GRUPOS*',
        benned: 'Losiento, eres un usario *BANEADO* no puedes usar el Bot',
        ownerG: 'Este comando solo puede ser utilizado por el creador de este grupo.',
        ownerB: `Losiento este comando solo puede ser utilizado por Mi Creador`,
        admin: 'No puedes usar este comando. \nEs solo para los administradores del grupo.',
        Badmin: 'Botcito debe ser admin para poder usar este comando',

      }
    }

    // - - - - if
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
// - - - Respuestas
const welcomeactivo = 
`Este grupo ya tiene la bienveida activa.

Si desceas desactivar la bienvenida escriba

${prefijo}welcome off`



/*
    bot = {
        espera: '*EN PROCESO, ESPERA* 🫂❤️',
        correcto: '✔️ *LISTO* ✔️',
        ferr: 'Intentalo de nuevo mas tarde',
        error: {
        stick: 'Mmmmm',
        Iv: 'Mmmmm'
        },
        
        only: {
            grupo: 'Este Comando Solo Puede ser Utilizado en *GRUPOS*',
            baneado: 'Losiento, eres un usario *BANEADO* no puedes usar el Bot',
            ownerG: 'Este comando solo puede ser utilizado por el creador de este grupo.',
            thechoute: `Losiento este comando solo puede ser utilizado por Mi Creador`,
            admin: 'No puedes usar este comando. \nEs solo para los administradores del grupo.',
            Badmin: 'Botcito debe ser admin para poder usar este comando',
            usrReg: `No estas registrado.\nPara registrarte utiliza: .reg \n*Ejmplo:*\n \n*.reg 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊|18*`
          }
        }
        */
module.exports = {
  es_noreg, es_admin, es_botadmin, es_userban, es_owne, es_bot, es_notextlogo, es_grupo,

    rango, 
    getLevelingXp, nivelActual,}