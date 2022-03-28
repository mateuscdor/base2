const {default:
    makeWASocket,
    DisconnectReason,
    useSingleFileAuthState,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto,
    } = require("@adiwajshing/baileys");

    
const { state, saveState } = useSingleFileAuthState('./KaoriMD.json')
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const axios = require("axios")
const util = require('util')
const capimg = 'capimg'
const ffmpeg = require('fluent-ffmpeg')
const moment = require("moment-timezone")
const { exec, spawn, execSync } = require("child_process")
const { color, bgcolor } = require('./libreria/color')
const prefijo = "."
const DNI = require('./libreria/choute')
const {en_noreg, en_admin, en_botadmin, en_userban, en_grupo, en_owne, en_bot, en_notextlogo, } = require('./libreria/mensajes/en/return')
const {es_noreg, es_admin, es_botadmin, es_userban, es_grupo, es_owne, es_bot, es_notextlogo, } = require('./libreria/mensajes/es/return')
const {bienvenida, baybay} = require('./libreria/mensajes/despedidas')
const {links, linkgpwa, facelink, instalink, kick} = require('./libreria/mensajes/action.js')

const {rango, nivelActual, baby, } = require ('./libreria/uva.js')
const hit_today = [] 
//
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./libreria/myfunc')
//
const LeoGg = require('google-it');
const LeoGgImg = require('g-i-s');
const yo = '*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*'
//const leo = require('./libreria/index')
//
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./libreria/baneado.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab,  } = require('./libreria/leveling.js');
//const wa = require("./libreria/wa")

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
// - - - - - GRUPO
const Bienvenida = JSON.parse(fs.readFileSync('./database/grupo/bienvenida.json'))
const antifake = JSON.parse(fs.readFileSync('./database/grupo/antifake.json'))
const antidoc = JSON.parse(fs.readFileSync('./database/grupo/antidoc.json'))
const english = JSON.parse(fs.readFileSync('./database/ingles.json'))

const autosticker = JSON.parse(fs.readFileSync('./database/grupo/autosticker.json'))
const autoaimg = JSON.parse(fs.readFileSync('./database/grupo/autoaimg.json'))
const comandos18 = JSON.parse(fs.readFileSync('./database/grupo/comandos18.json'))
const multiprefijo = JSON.parse(fs.readFileSync('./database/grupo/multiprefijo.json'))
/*Enlaces*/
const antigp = JSON.parse(fs.readFileSync('./database/grupo/antigp.json'))
const antiIg = JSON.parse(fs.readFileSync('./database/grupo/antiig.json'))
const antiface = JSON.parse(fs.readFileSync('./database/grupo/antiface.json'))
const antilink = JSON.parse(fs.readFileSync('./database/grupo/antilink.json'))

//
const config = JSON.parse(fs.readFileSync("./config.json"))

const owner = config.owner
const mods = config.mods
const fake = 'Leon'
var public = config.public
//
const prefix = '_'
const registrados = JSON.parse(fs.readFileSync('./database/registro.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))

const getRegisteredRandomId = () => {
  return registrados[Math.floor(Math.random() * registrados.length)].id
  }
  const addRegisteredUser = (Usuario, NameUser, nombre, edad, DNI, hora,) => {
    const obj = { id: Usuario, Nick: NameUser, name: nombre, edad: edad, dni: DNI, hora: hora }
    registrados.push(obj)
    fs.writeFileSync('./database/registro.json', JSON.stringify(registrados))
    }
  const checkRegisteredUser = (Usuario) => {
  let status = false
  Object.keys(registrados).forEach((i) => {
  if (registrados[i].id === Usuario) {
  status = true
  }
  })
      return status
  } 

  async function start() {
        let { version, isLatest } = await fetchLatestBaileysVersion()
   
        const leo = makeWASocket({
        printQRInTerminal: true,
        logger: pino({ level: 'silent' }),
        browser: ['Bot By TheChoute',],
        auth: state,
        version
    })     
    store.bind(leo.ev)
    leo.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = lastDisconnect.error ? lastDisconnect?.error?.output.statusCode : 0;
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); start(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); start(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); start(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); start(); }
            else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        }
        console.log('Connected...', update)
    })
    



 leo.ev.on('messages.upsert', async (up, choute) => {
     try {
         if (!up.messages) return
     const chui = up.messages[0]
     if (!chui.message) return
     chui.message = (Object.keys(chui.message)[0] === 'ephemeralMessage') ? chui.message.ephemeralMessage.message : chui.message
     if (chui.key && chui.key.remoteJid === 'status@broadcast') return
     if (chui.key.id.startsWith('BAE5') && chui.key.id.length === 16) return
     const fromMe = chui.key.fromMe
     const content = JSON.stringify(chui.message)
     const from = chui.key.remoteJid
      const type = Object.keys(chui.message)[0]
      const budy = (type === 'conversation') ? chui.message.conversation : (type == 'imageMessage') ? chui.message.imageMessage.caption : (type == 'videoMessage') ? chui.message.videoMessage.caption : (type == 'extendedTextMessage') ? chui.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? chui.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? chui.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? chui.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (chui.message.buttonsResponseMessage?.selectedButtonId || chui.message.listResponseMessage?.singleSelectReply.selectedRowId || (type == 'listResponseMessage' ? chui.msg.singleSelectReply.selectedRowId : '') || chui.msg.text || chui.msg.caption || chui.msg || '') : ''
      const body = (type === 'conversation') ? chui.message.conversation : (type === 'extendedTextMessage') ? chui.message.extendedTextMessage.text : ''


     
        //var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = chui.pushName || "No Name"
        //const botNumber = await leo.decodeJid(leo.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.Usuario)
        const itsMe = m.Usuario == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime) 

        // Group
        const isGroup = choute.isGroup
        const Usuario = isGroup ? (chui.key.participant ? chui.key.participant : chui.participant) : chui.key.remoteJid

        const groupMetadata = isGroup ? await leo.groupMetadata(from).catch(e => {}) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = isGroup ? groupAdmins.includes(Usuario) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(Usuario) || false
	


     //const command = body.replace(prefijo, '').trim().split(/ +/).shift().toLowerCase()
//const isCmd = body.startsWith(prefijo)
//const args = budy.trim().split(/ +/).slice(1)
const txt = args.join(' ')
const Botnumero = leo.user.id.split(':')[0] + '@s.whatsapp.net'
const Owner = ["18299897014@s.whatsapp.net"]
//const groupMetadata = isGroup ? await leo.groupMetadata(from).catch(e => {}) : ''
//const groupName = isGroup ? groupMetadata.subject : ''
//const participants = isGroup ? await groupMetadata.participants : ''

const groupMembers = isGroup ? await groupMetadata.participants : ''
const gpnombre = isGroup ? groupMetadata.subject : ''

//const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''



//const groupOwner = isGroup ? groupMetadata.owner : ''

const isBotadmin = isGroup ? groupAdmins.includes(Botnumero) : false

const isAdmin = isGroup ? groupAdmins.includes(Usuario) : false

const isBot =  Usuario == Botnumero ? true : false
//const isBot = UsuarioNumber == Botnumero == Owner
//const isBot = Owner == Botnumero

const NameUser =  chui.pushName || "A/Z"
const isWelkom = isGroup ? Bienvenida.includes(from) : false
const isAntiFake = isGroup ? antifake.includes(from) : false
//const isContador = isGroup ? fcontador.includes(from) : false
     const isAntic18 = isGroup ? comandos18.includes(from) : false  
const isAutostick = isGroup ? autosticker.includes(from) : false  
const isEnglish = isGroup ? antilink.includes(from) : false

const isAntidoc = isGroup ? antidoc.includes(from) : false  

const isAutoaimg = isGroup ? autoaimg.includes(from) : false  
const isAntilink = isGroup ? antilink.includes(from) : false
const isAntigp = isGroup ? antigp.includes(from) : false
const isAntiIg = isGroup ? antiIg.includes(from) : false
const isAntiface = isGroup ? antiface.includes(from) : false 
const isMultiprefijo = isGroup ? multiprefijo.includes(from) : false 

const isRegister = checkRegisteredUser(Usuario)
var prefijo = JSON.parse(fs.readFileSync('./database/prefijo.json'))
//if (isMultiprefijo) {		
  //var prefijo = /-/.test(cmd) ? cmd.match(/-/gi) : '-'
  //}
  const NumeroUser = Usuario.split("@")[0]
  const jid = Usuario
  const isOwner = NumeroUser == owner || NumeroUser == Botnumero || mods.includes(NumeroUser)
    const isBan = cekBannedUser(Usuario, ban)  
    const getLevel1 = getLevelingLevel(Usuario)  
  
  
//    const conts = chui.key.fromMe ? leo.user.jid : leo.contacts[Usuario] || { notHify: jid.replace(/@.+/, '') }
    const totalchat = 'a'//await leo.chats.all()
//   const chatget = await leo.chats.toJSON()
const mentionUser = chui.mentionedJid ? chui.mentionedJid : chui.quoted ? chui.quoted.Usuario : txt.replace(/[^0-9]/g, '')+'@s.whatsapp.net'


    if (!public) {
      mods.indexOf(Botnumero) === -1 ? mods.push(Botnumero) : false
      mods.indexOf(owner) === -1 ? mods.push(owner) : false
      if (!mods.includes(NumeroUser)) return
      mods.slice(mods.indexOf(owner), 1)
      }
    let i = []
    let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
    for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
  //  var { device_manufacturer,  device_model, mcc, mnc, os_version, cpu, batterylevel, os_build_number, wa_version, phoneId  } = leo.user.phone

    const reply = (text) => {
         leo.sendMessage(from, { text: text }, {quoted: chui, ephemeralExpiration: true})
     }

     const replyply = (text) => {
      leo.sendMessage(from, { text: text }, {quoted: chui, ephemeralExpiration: true})
  }

     const sendImage = (imagen, texto) => {
      leo.sendMessage(from, {image:imagen, caption: texto}, {quoted: chui})
  }


    const replyreg = (text) => {
         leo.sendMessage(from, { text: text }, {quoted: chui, ephemeralExpiration: true})
     }
     const noentender = (text) => {
        leo.sendMessage(from, { text: text }, {quoted: chui, ephemeralExpiration: true})
    }

    const enable = (text) => {
        leo.sendMessage(from, { text: text }, {quoted: chui, ephemeralExpiration: true})
    }

    const disable = (text) => {
        leo.sendMessage(from, { text: text }, {quoted: chui, ephemeralExpiration: true})
    }




    const sendText = (jid, text, quoted = '', options) => leo.sendMessage(jid, { text: text, ...options }, { quoted })


    try {
        var fotouser = await leo.profilePictureUrl(Usuario, 'image')
    } catch {
        var fotouser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }


    try {
      var ftgp = await leo.profilePictureUrl(from, 'image')
  } catch {
      var ftgp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }



    if (isWelkom) {
        var estadowelcom = ' ✅'
      } else if (!isWelkom) {
        var estadowelcom = ' ❌'
      }
    
      if (isAntiFake) {
        var estadofake = ' ❌'
      } else if (!isAntiFake) {
        var estadofake = ' ✅'
      }
    
      if (isAntic18) {
        var com18 = ' ✅'
      } else if (!isAntic18) {
        var com18 = ' ❌'
      }
      
      if (isAutostick) {
        var estadostic = ' ✅'
      } else if (!isAutostick) {
        var estadostic = ' ❌'
      }
      
      if (isAutoaimg) {
        var estadoimg = ' ✅'
      } else if (!isAutoaimg) {
        var estadoimg = ' ❌'
      }
  
      //IF
      if (isAntilink) {
        var estadolink = ' ✅'
      } else if (!isAntilink) {
        var estadolink = ' ❌'
      }
    
      if (isAntigp) {
        var estadogp = ' ✅'
      } else if (!isAntigp) {
        var estadogp = ' ❌'
      }
    
      if (isAntiIg) {
        var estadoig = ' ✅'
      } else if (!isAntiIg) {
        var estadoig = ' ❌'
      }
    
      if (isAntiface) {
        var estadoface = ' ✅'
      } else if (!isAntiface) {
        var estadoface = ' ❌'
      }
    
   /*     
    if (isEnglish) {
      var noreg = en_noreg
    } else if (!isEnglish) {
      var noreg = es_noreg
    }
    
    
    if (isEnglish) {
      var admin = en_admin
    } else if (!isEnglish) {
      var admin = es_admin
    }
    
    
    if (isEnglish) {
      var botadmin = en_botadmin
    } else if (!isEnglish) {
      var botadmin = es_botadmin
    }
    
    
    
    if (isEnglish) {
      var userban = en_userban
    } else if (!isEnglish) {
      var userban = es_userban
    }
    
    if (isEnglish) {
      var grupo = en_grupo
    } else if (!isEnglish) {
      var grupo = es_grupo
    }
    
    if (isEnglish) {
      var owne = en_owne
    } else if (!isEnglish) {
      var owne = es_owne
    }
    
    
    if (isEnglish) {
      var bot = en_bot
    } else if (!isEnglish) {
      var bot = es_bot
    }
    
    
    if (isEnglish) {
      var notextlogo = en_notextlogo
    } else if (!isEnglish) {
      var notextlogo = es_notextlogo
    }
*/
    /*
    leo.ev.on('group-participants.update', async (anu) => {
      console.log(anu)
      try {
          let metadata = await leo.groupMetadata(anu.id)
          let participants = anu.participants
          for (let num of participants) {
              // Get Profile Picture User
              try {
                  ppuser = await leo.profilePictureUrl(num, 'image')
              } catch {
                  ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }

              // Get Profile Picture Group
              try {
                  ppgroup = await leo.profilePictureUrl(anu.id, 'image')
              } catch {
                  ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }

              if (anu.action == 'add') {
                teks = 
                `Hola, @${num.split('@')[0]}
                Bienvenido a ${metadata.subject}
                ${bienvenida}`
                  leo.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: teks })
              } else if (anu.action == 'remove') {
                  leo.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split('@')[0]} ${baybay}` })
              } else if (anu.action == 'promote') {
                teks = 
                `👑 *NUEVO ADMIN* 👑
                👤 *Nombre:* @${num.split('@')[0]}
                🌎 *Grupo:* ${metadata.subject}
                *Felicitaciones eres uno de los administradores.*`

                leo.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: teks})
            } else if (anu.action == 'demote') {
              teks = 
              `❌ *ADMIN MENOS* ❌
              👤 *Nombre:* @${num.split('@')[0]}
              🌎 *Grupo:* ${metadata.subject} 
              *F chota ya no eres administrador.*`

              leo.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption:teks })
          }
          }
      } catch (err) {
          console.log(err)
      }
  })  

  */

  //𝐓𝐢𝐩𝐨𝐬 𝐝𝐞 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 
if (isOwner) {var tipoDeUsr = '*🔮Ownwer*'} else 
if (Usuario == isAdmin) {var tipoDeUsr = '*👑Admin*'} else 
{var tipoDeUsr = '*Ramdon*'}
//𝐓𝐢𝐞𝐦𝐩𝐨 - 𝐅𝐞𝐜𝐡𝐚𝐬
const hora = moment.tz('America/Santo_Domingo').format('HH:mm:ss') 
let d1 = new Date
let locale1 = 'es'
let gmt1 = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let ayer = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'][
Math.floor(((d1 * 1) + gmt1) / 84600000) % 7]
let dia = d1.toLocaleDateString(locale1, { weekday: 'long' })
let calendario = d1.toLocaleDateString(locale1, {
day: 'numeric',
month: 'numeric',
year: 'numeric'
})  

const infocreador = `
☎️ *Número* : @{Owner.split("@")[0]}
🌐 *Instagram* : //
🌐 *Github:* //
🌐 *Youtube:* youtube.com/c/thechout`


const es_gptxt =
`┌─「 INFO DEL GRUPO」─
🚀 Nombre: ${groupMetadata.subject}
🔮 Creador: ${groupMetadata.owner}
🗓️ Fecha: ${groupMetadata.creation}
🤴 Total de admin: ${groupAdmins.length}
🤵‍♂️Total de miembros: ${groupMembers.length - groupAdmins.length }
👤 Total de Participantes: ${groupMembers.length}

⚙️ *FUNCIONES ACTIVAS*
[💈] *Bienvenida:* ${estadowelcom}
[💈] *Antifake:* ${estadofake}
[💈] *Comandos NSFW:* ${com18}
[💈] *Antilink:* ${estadolink}
[💈] *AntiGP:* ${estadogp}
[💈] *AntFace:* ${estadoface}
[💈] *Antiig:* ${estadoig}
[💈] *AutoSticker:*  ${estadostic}
[💈] *AutoAimg:* ${estadoimg}

♻️ *DATOS DEL GRUPO*
[💈] Nombre: _${groupMetadata.subject}_
[💈] Creador:
[💈] Administradores: _${groupAdmins.length}_
[💈] Miembros: _${groupMembers.length - groupAdmins.length }_
[💈] Total de Participantes: _${groupMembers.length}_


*DESCRIPCION:*
${groupMetadata.desc}`


const en_gptxt =
`┌─「GROUP INFO」─
🚀 Name: ${groupMetadata.subject}
🔮 Creator: ${groupMetadata.owner}
🗓️Date: ${groupMetadata.owner}
🤴 Total admins: ${groupAdmins.length}
🤵‍♂️Total Members: ${groupMembers.length - groupAdmins.length }
👤 Total Members: ${groupMembers.length}

⚙️ *ACTIVE FUNCTIONS*
[💈] *Welcome:* ${estadowelcom}
[💈] *Antifake:* ${estadofake}
[💈] *NSFW commands:* ${com18}
[💈] *Antilink:* ${estadolink}
[💈] *AntiGP:* ${estadogp}
[💈] *Ant Face:* ${estadoface}
[💈] *Antiig:* ${estadoig}
[💈] *AutoSticker:* ${estadostic}
[💈] *AutoAimg:* ${estadoimg}

♻️ *GROUP DATA*
[💈] Name: _${groupMetadata.subject}_
[💈] Creator:
[💈] Admins: _${groupAdmins.length}_
[💈] Members: _${groupMembers.length - groupAdmins.length }_
[💈] Total Members: _${groupMembers.length}_


*DESCRIPTION:*
${groupMetadata.desc}`


if (isEnglish) {
  var gptxt = en_gptxt
} else if (!isEnglish) {
  var gptxt = es_gptxt
}

const joingp = 
` {} Soy un bot creado por @{Owner.split('@')[0]}, fui invtado por ${Usuario.split('@')[0]}, para utilizarme principalmente deben estar registrado y para ver mi menu escribir ${prefijo}menu

♻️ *INFO DEL GRUPO*♻️
🚀 Nombre: ${groupMetadata.subject}
🔮 Creador: 
🗓️ Fecha:
🤴 Total de admin: ${groupAdmins.length}
🤵‍♂️Total de miembros: ${groupMembers.length - groupAdmins.length }
👤 Total de Participantes: ${groupMembers.length}

`
const menu =
`┌─「 INFO DEL BOT 」─
🔮 Creador: @{Owner.split('@')[0]}
📌 Prefijo: "${prefijo}"
💨 Velocidad: ${process.uptime()} 
🤖 Servidor: {leo.browserDescription[0]}
🌐 Navegador: {leo.browserDescription[1]}
📩 Chat Privado: ${totalchat.length - giid.length}
🔰 Chat de Grupos: ${giid.length} 
📧 Chat Totales: :${totalchat.length}
✉️ Mesajes sin leer: {chatget.length}
🤹‍♂️ Comandos Ejecutados: ${hit_today.length} 

┌─「 DISPOSITIVO 」─
📱 Dispositivo: {device_manufacturer}s
🔒 Modelo: {device_model}
📲 Android: {os_version} 
🔋 Bateria: ?
♾️ Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
⏲️ Hora: ${hora}
📆 Fecha: ${dia}  ${calendario}

┌「 DATOS DEL USUARIO 」─
👤 User: @{Usuario.split("@")[0]}
👑 Usuario: ${tipoDeUsr}
✨ XP:  ${getLevelingXp(Usuario)}
🎗️ Nivel: ${getLevel1}
🎖️ Rango: ${rango}

♻️ Lista de Menus♻️
🎓⃟Soporte
🎓⃟Grupos
🎓⃟Sticker
🎓⃟Descargas
🎓⃟Busquedas
🎓⃟Juegos
━━━━━━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`
if (isEnglish) {
  var gptxt = en_gptxt
} else if (!isEnglish) {
  var gptxt = es_gptxt
}
const reglas =
`*REGLAS DEL BOT*
*1 - No hacer spam de comandos*
_Usar los comando cada 5 segundos_
_De lo contrario el bot se cashea y se apaga automáticamente_

*2 - No estar enviando link del grupos al bot para que se una*
_Hablare al creador y el lo une a tu grupo_

*3 - No llamar al bot, ni al creador*
_Si lo haces, seras baneado del bot y bloqueado_
`

const bon = 
` *BOT ENLINEA NUEVAMENTE*
INFO DEL CREADOR

*Conctaco:* 
*Canal de Youtube:*
*Instagram:*
*Github:*

Para ser un bot
Envia ${prefijo}serbot

a`

const wait = 
`
      CARGANDO...      
`



  switch (command) {
    case 'reg':   
    if (isRegister) return reply('Tu ya *ESTAS* *REGISTRADO*')
    if (!txt.includes('|')) return  reply(`Por favor escriba bien el formato de registro *Ejemplo*\n${prefijo}reg Leo|23`)
    const nombre = txt.substring(0, txt.indexOf('|') - 0)
    const edad = txt.substring(txt.lastIndexOf('|') + 1)
    if(isNaN(edad)) return reply('*La edad es numero, no letras*')
    if (nombre.length >= 10) return reply(`Mio escriba un nombre con menos de 10 letras, no queremos un puente de letras`)
    if (edad > 70) return reply(`Aqui sta el mamaguevo, que quiere llamar la atencion, pon tu edad normal y deja de estar mamando guevo, maricon`)
    if (edad > 50) return reply(`Tienes mas de 50?\nNo te puedes registrar.`)
    if (edad < 13) return reply(`Eres menor de 13 años, mejor vete a limpiarte el culo, que para ti no hay registro.\n*Si me das algo puedo hacer la vista gorda :D*`)
    veri = Usuario     
    addRegisteredUser(Usuario, NameUser, nombre, edad, DNI, hora)
capt = `
┌────「 *REGISTRADO* 」─
👤 *Usuario:* _@${Usuario.split("@")[0]}__
📋 *Nombre:* _${nombre}_
👣 *Edad:* _${edad}_
🗒️ *DNI:* ${DNI}
📲 *Numero:* _@${Usuario.split("@")[0]}_
⏳ *Hora:* _${hora}_
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* `,                  
   // leo.sendMessage(from, daftarimg, image, {quoted: chui,  caption: capt, contextInfo: { mentionedJid: [Usuario]}})

    leo.sendMessage(from, { image: { url: fotouser }, contextInfo: { mentionedJid: [Usuario] }, caption: capt})
    /*leo.sendMessage(from, fotouser, image, {quoted: chui, caption: capt, contextInfo: { mentionedJid: [Usuario], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": '「 𝕿𝖍ٌ𝖊  𝕮𝖍𝖔𝖚𝖙𝖊 」',            
    "body": 'Github  OFC',
    "thumbnail": fotouser,
    "sourceUrl": 'https://github.com/thechoute/Baby-Ofc'}}})*/
    break

case 'ramdonreg':   
case 'verificar':   
case 'datafa':   

                  if (isRegister) return reply('Tu ya *ESTAS* *REGISTRADO*')                                            
                  addRegisteredUser(Usuario, NameUser,  DNI, hora)
        capt = `
┌────「 *REGISTRADO* 」─
👤 *User:* _${NameUser}_
📲 *Numero:* @${Usuario.split("@")[0]}
⏳ *Hora:* _${hora}_
🗒️ *DNI:* ${DNI}
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* `     
                    leo.sendMessage(from, { image: { url: fotouser }, contextInfo: { mentionedJid: [Usuario] }, caption: capt})
                    break
case '_yo':
case '_miperfil':
  teks = 

`👤 *Nombre* : ${NameUser}
☎️ *Número* : @${Usuario.split("@")[0]}
🌐 *Link* : wa.me/${Usuario.split("@")[0]}
🗣️ *Tipo de Usuario* : ${tipoDeUsr}
⚙️ *Nivel* : ${getLevel1}
🎖️ *Rango* : ${rango}
📋 *INFO:* {tu.status}
`
  leo.sendMessage(from,  {image:{ url: fotouser }, contextInfo: { mentionedJid: [Usuario]}, quoted: chui, caption: teks})
break

case 'join': {
  if (!isRegister) return replyreg (es_noreg)   
  if (isBan) return reply (es_userban)
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link invalido')
  reply(wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await leo.groupAcceptInvite(result)//.then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//𝑨𝑫𝑴𝑰𝑵𝑰𝑺𝑻𝑹𝑨𝑫𝑶𝑹𝑬𝑺 𝑫𝑬 𝑮𝑹𝑼𝑷𝑶
case 'hidetag': {
                    if (!isRegister) return replyreg (es_noreg)   
                    if (isBan) return reply (es_userban)		
                    if (!isGroup) return replyply(es_grupo)
                    if (!isAdmin) return replyply(es_admin)
                   if (!isBotadmin) return replyply(es_botadmin)
            leo.sendMessage(from, { text : txt, mentions: participants.map(a => a.id)})}
            break

case 'miembros':
case 'todos':
case 'tangall':
case 'tagall':
case 'alltang':
                      if (!isRegister) return replyreg (es_noreg)   
                      if (isBan) return reply (es_userban)		
                      if (!isGroup) return replyply(es_grupo)
                      //if (!isAdmin) return replyply(es_admin)
                    //  if (!isBotadmin) return replyply(es_botadmin)
            teks = (args.length > 1) ? body.slice(8).trim(): ''
          //  teks += ` *𝐓𝐨𝐭𝐚𝐥* : ${groupMembers.length}\n`
          for (let mem of participants) {
            teks += `╠ @${mem.id.split('@')[0]}\n`
            }
            leo.sendMessage(from, {text:
`*Grupo:* ${groupMetadata.subject}
*Miembros:* ${groupMembers.length}
*Admin:* ${groupAdmins.length}
*Mensaje:* ${txt}
╔════ *MIEMBROS DEL GRUPO*
`+teks+`╚══════ *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* ═════`, mentions: participants.map(a => a.id)}, {quoted: chui})
            break

              
case 'kick':
     if (!isRegister) return replyreg (es_noreg)   
                      if (isBan) return reply (es_userban)		
                      if (!isGroup) return replyply(es_grupo)
                      if (!isAdmin) return replyply(es_admin)
                      if (!isBotadmin) return replyply(es_botadmin)
                      if (!mentionUser.length == 1) return reply('Pum, mira elimine al aire, xD, Down de mierda etiqueta alguien, desperdicio de oxigeno') 
                      reply(`${kick}`)
                      {await leo.groupParticipantsUpdate(from, [mentionUser], 'remove')}
                      break

case 'promote':
                    if (!isRegister) return replyreg (es_noreg)   
                    if (isBan) return reply (es_userban)		
                    if (!isGroup) return replyply(es_grupo)
                    if (!isAdmin) return replyply(es_admin)
                    if (!isBotadmin) return replyply(es_botadmin)
                    if (!mentionUser.length == 1) return reply('Dando admin a tu puta madre, que es la que haz etiquetado, ahora etiqueta a alguien')
                    {await leo.groupParticipantsUpdate(from, [mentionUser], 'promote')}
                    reply ('Nuevo Admin')
                    break


case 'demote':
                    if (!isRegister) return replyreg (es_noreg)   
                    if (isBan) return reply (es_userban)		
                    if (!isGroup) return replyply(es_grupo)
                    if (!isAdmin) return replyply(es_admin)
                    if (!isBotadmin) return replyply(es_botadmin)
                    if (!mentionUser.length == 1) return reply('Eliqueta un mensaje de aquien debo quitarle admin')
                    {await leo.groupParticipantsUpdate(from, [mentionUser], 'demote')}
                    reply ('Un admin menos')
                    break

case 'add':
case 'agg':
case 'añadir':
                      if (!isRegister) return replyreg (es_noreg)   
                      if (isBan) return reply (es_userban)		
                      if (!isGroup) return replyply(es_grupo)
                      if (!isAdmin) return replyply(es_admin)
                      if (!isBotadmin) return replyply(es_botadmin)
                      if (!mentionUser.length == 1) return reply('Eliqueta un mensaje de aquien debo eliminar o mencionalo')
                      if (mentionUser) {await leo.groupParticipantsUpdate(from, [mentionUser], 'add')}
                      else if (!txt) return
                       {await leo.groupParticipantsUpdate(from, [mentionUser], 'add')}
                      break

case 'linkgroup':
case 'link': 
case 'linkgp': 
case 'linkgc': {
                        if (!isRegister) return replyreg (es_noreg)   
                        if (isBan) return reply (es_userban)		
                        if (!isGroup) return replyply(es_grupo)
                        if (!isAdmin) return replyply(es_admin)
                        if (!isBotadmin) return replyply(es_botadmin)
                        let response = await leo.groupInviteCode(from)
                        reply(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, { detectLink: true })
                    }
                    break

case 'infogrupo':
case 'infogp':
                      if (!isRegister) return replyreg (es_noreg)   
                      if (isBan) return reply (es_userban)		
                      if (!isGroup) return replyply(es_grupo)
  leo.sendMessage(groupMetadata.id, {image: {url: ftgp}, contextInfo: { mentionedJid: [Usuario]}, quoted: chui, caption: gptxt})
  break

 
//DESCARGAS
case 'play': 
case 'ytplay': 
if (!isRegister) return replyreg (es_noreg)   
if (isBan) return reply (es_userban)	
if (args.length < 1) return noentender('Tienes que colocar el nombre de la cancion')

{
  let yts = require("yt-search")
  let search = await yts(txt)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [
      {buttonId: `${prefijo}ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
      {buttonId: `${prefijo}ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}]
  let buttonMessage = {
      image: { url: anu.thumbnail },
      caption: `
🎧 Título: ${anu.title}
ID: ${anu.videoId}
⏱️ Duracion:  ${anu.timestamp}
Vistas: ${anu.views}
Fecha de Subida: ${anu.ago}
Author: ${anu.author.name}
Canal: ${anu.author.url}
Descripcion:  ${anu.description}
Url: ${anu.url}`,
      footer: leo.user.name,
      buttons: buttons,
      headerType: 4,
      contentText: `𝕿𝖍ٌ𝖊 𝕮𝖍𝖔𝖚𝖙𝖊 - 𝕭𝖔𝖙`,
  }
  leo.sendMessage(from, buttonMessage, { quoted: chui })
}
break
case 'ytmp3': case 'ytaudio': {
  let { yta } = require('./libreria/y2mate')
  if (!txt) return reply(`Manda el link de la cancion junto al comando\n*Ejemplo:*${prefijo + command} https://www.youtube.com/watch?v=cxZ98u3Jqto 128kbps`)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(txt, quality)
  if (media.filesize >= 100000) return reply('El archivo es demasiado grande '+util.format(media))
  sendImage(from, media.thumb, `Titulo: ${media.title}\nTamaño: ${media.filesizeF}\nUrl: ${isUrl(txt)}\nExtencion: MP3\nCalidad: ${args[1] || '128kbps'}`,)
  leo.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: chui })
}
break
case 'ytmp4': case 'ytvideo': {
  let { ytv } = require('./libreria/y2mate')
  if (!txt)return reply (`Manda el link de la cancion junto al comando\n*Ejemplo:*${prefijo + command} https://www.youtube.com/watch?v=cxZ98u3Jqto 360p`)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(txt, quality)
  if (media.filesize >= 100000) return reply('El archivo es demasiado grande '+util.format(media))
  leo.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Titulo: ${media.title}\nTamaño ${media.filesizeF}\nUrl: ${isUrl(txt)}\nExtencion: MP3\nCaliddad: ${args[1] || '360p'}` }, { quoted: chui })
}
break

case 'google':
 // if (!isRegister) return leoply(baby.only.usrReg)
  //if (isBan) return leoply  (baby.only.benned)	
              let buscar = args.join(' ')
              if (!buscar) return reply('Que deseas buscar?')
              reply(wait)
              let search = await LeoGg({ query: buscar })
             let ggsm = ``
              for (let i of search) {
              ggsm += `
*Titulo :* ${i.title}
*Link :* ${i.link}
*Contenido :* ${i.snippet}
`
              }
              var gg = ggsm.trim()
              reply(`*🔍Busqueda realizada por* ${yo} \n\n${gg}`)
              addFilter(from)
              break  


case 'porno':
                  if (!isRegister) return replyreg (es_noreg) 
                  if (isBan) return reply (es_userban)		  
                  ggimg = 'Porno HD'
                  res = LeoGgImg(ggimg, google)
                  function google(error, result){
                  if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
                  else {
                  var gugIm = result
                  var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                  leo.sendMessage(from, {image: {url: random}, contextInfo: { mentionedJid: [Usuario]}, quoted: chui, caption: capimg})

                  }
                  }
                  break

case 'hetai':
                  if (!isRegister) return replyreg (es_noreg) 
                  if (isBan) return reply (es_userban)		  
                  ggimg = 'Hetai HD'
                  res = LeoGgImg(ggimg, google)
                  function google(error, result){
                  if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
                  else {
                  var gugIm = result
                  var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                  leo.sendMessage(from, { image: { url: random }, contextInfo: { mentionedJid: [Usuario] }, caption: capimg})
                  }
                  }
                  addFilter(from)
                  break

case 'loli':
                  if (!isRegister) return replyreg (es_noreg) 
                  if (isBan) return reply (es_userban)		  
                  ggimg = 'loli HD'
                  res = LeoGgImg(ggimg, google)
                  function google(error, result){
                  if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
                  else {
                  var gugIm = result
                  var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                  leo.sendMessage(from, { image: { url: random }, contextInfo: { mentionedJid: [Usuario] }, caption: capimg})
                  }
                  }
                  addFilter(from)
                  break

case 'teta':
case 'tetas':
                  if (!isRegister) return replyreg (es_noreg) 
                  if (isBan) return reply (es_userban)		  
                  ggimg = 'tetas HD'
                  res = LeoGgImg(ggimg, google)
                  function google(error, result){
                  if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
                  else {
                  var gugIm = result
                  var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                  leo.sendMessage(from, { image: { url: random }, contextInfo: { mentionedJid: [Usuario] }, caption: capimg})
                  }
                  }
                  addFilter(from)
                  break

case 'meme':
case 'memes':
                  if (!isRegister) return replyreg (es_noreg) 
                  if (isBan) return reply (es_userban)		  
                  ggimg = 'Memes HD'
                  res = LeoGgImg(ggimg, google)
                  function google(error, result){
                  if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
                  else {
                  var gugIm = result
                  var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                  leo.sendMessage(from, { image: { url: random }, contextInfo: { mentionedJid: [Usuario] }, caption: capimg})
                  }
                  }
                  addFilter(from)
                  break
/*
    case 'list': case 'menu': case 'help': case '?': {
        const notc = 'No hay menu pana, y mas adelante se le dara una mejor formato a las secciones con los comandos'
        let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/imagen/ofc.jpg') }, { upload: leo.waUploadToServer })
        const template = generateWAMessageFromContent(from, proto.Message.fromObject({
            templateMessage: {
                hydratedTemplate: {
                    imageMessage: message.imageMessage,
                    hydratedContentText: `${menu + notc}`,
                    hydratedButtons: [{
                        urlButton: {
                            displayText: 'Github del Creador',
                            url: 'https://github.com/thechoute'
                        }
                    }, 
                    {
                        urlButton: {
                            displayText: 'Youtube',
                            url: 'https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1'
                        }
                    },
                    {
                    }, {
                        quickReplyButton: {
                            displayText: 'Estado del bot',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Creador',
                            id: 'owner'
                        }  
                    }, {
                        quickReplyButton: {
                            displayText: 'Script',
                            id: 'sc'
                        }
                    }]
                }
            }
        }), { userJid: from, quoted: chui })
        leo.relayMessage(from, template.message, { messageId: template.key.id })
    }
    break*/
case 'nsfw':
  reply('Proximamente se presentaran los comandos nsfw')
  break

case 'menuadmin':
  reply('Mas adelante se agregaran los comandos para admin')
  break

case 'menudownload':
case 'descargas':
  reply('Mas adelante')
  break

case 'juegos':
  reply('Juegos mas adelante')

  break

  case 'msticker':
    reply('Mas adelante comandos de sticker')
    break
case 'test':
reply(`*Hola ${NameUser}!*`)
break
/*
case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
    leo.sendMessage(from, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${NameUser}*\n\n Bot Rental Prices\n⭔ 13k Per Group via E-Walet 1 Month\n⭔ 18k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\n⭔ Paypal : https://www.paypal.me/Cakhaho\n⭔ Saweria : https://saweria.co/DikaArdnt` }, { quoted: chui })
}
break
*/
//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
    if (!quoted) throw `Balas Video/Image Dengan Caption ${prefijo + command}`
    reply(mess.wait)
            if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await leo.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
        let media = await quoted.download()
        let encmedia = await leo.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else {
        throw `Kirim Gambar/Video Dengan Caption ${prefijo + command}\nDurasi Video 1-9 Detik`
        }
    }
    break


//FUNCIONES
case 'antilink':
            if (!isRegister) return replyreg (es_noreg)   
            if (isBan) return reply (es_userban)		
            if (!isGroup) return reply(es_grupo)
            if (!isAdmin) return replyply(es_admin)
            if (!isBotadmin) return replyply(es_botadmin)
            if (args[0] === 'on') {
              if (isAntilink) return reply('_La antilink ya esta activa_')
              antilink.push(from)
              fs.writeFileSync('./database/grupo/antilink.json', JSON.stringify(antilink))
              enable(`Se ha activado el antilink para ${groupMetadata.subject}, cualquier usuario que envie enlaces de cualquier tipo y no sea admin del grupo sera eliminado`)
              } else if ((args[0]) === 'off') {
              var ini = antilink.indexOf(from)
              antilink.splice(ini, 1)
              fs.writeFileSync('./database/grupo/antilink.json', JSON.stringify(antilink))
              if (!isAntilink) return reply('_La antilink ya esta desactivada')
              disable(`La función de Antilink se desactivo en el grupo ${groupMetadata.subject}`)
              } else {
              noentender(`Que deseas hacer?\n*${prefijo + command} on* para activar\n\n*${prefijo + command} off* para desactivar`)
              }
              break
case 'ingles':
            if (!isRegister) return replyreg (es_noreg)   
            if (isBan) return reply (es_userban)		
            if (!isGroup) return reply(`${grupo}`)
           // if (!isAdmin) return replyply(es_admin)
            //if (!isBotadmin) return replyply(es_botadmin)
            if (args[0] === 'on') {
              if (isEnglish) return reply('The bot is already in English for this group')
              english.push(from)
              fs.writeFileSync('./database/ingles.json', JSON.stringify(english))
              enable(`Language has been changed to English for ${groupMetadata.subject}`)
              } else if ((args[0]) === 'off') {
              var ini = english.indexOf(from)
              english.splice(ini, 1)
              fs.writeFileSync('./database/ingles.json', JSON.stringify(english))
              if (!isEnglish) return reply('El bot ya estaba en español')
              disable(`El bot se ha puesto en español para ${groupMetadata.subject}`)
              } else {
              noentender(`Que deseas hacer?\n*${prefijo + command} on* para activar\n\n*${prefijo + command} off* para desactivar`)
              }
              break



case 'antigp':
            if (!isRegister) return replyreg (es_noreg)   
            if (isBan) return reply (es_userban)		
            if (!isGroup) return reply(`${grupo}`)
            if (!isAdmin) return replyply(es_admin)
            if (!isBotadmin) return replyply(es_botadmin)
            if (args[0] === 'on') {
              if (isAntigp) return reply('_La antigp ya esta activa_')
              antigp.push(from)
              fs.writeFileSync('./database/grupo/antigp.json', JSON.stringify(antigp))
              enable(`Se ha activado el antigp para ${groupMetadata.subject}, cualquier usuario que envie enlaces de cualquier tipo y no sea admin del grupo sera eliminado`)
              } else if ((args[0]) === 'off') {
              var ini = antigp.indexOf(from)
              antigp.splice(ini, 1)
              fs.writeFileSync('./database/grupo/antigp.json', JSON.stringify(antigp))
              if (!isAntigp) return reply('_La antigp ya esta desactivada')
              disable(`La función de antigp se desactivo en el grupo ${groupMetadata.subject}`)
              } else {
              noentender(`Que deseas hacer?\n*${prefijo + command} on* para activar\n\n*${prefijo + command} off* para desactivar`)
              }
              break



case 'antiig':
                    if (!isRegister) return replyreg (es_noreg)   
                    if (isBan) return reply (es_userban)	
                    if (isBotadmin) 
                    if (args.length < 1) return reply('Escribe 1 para activar')
                    if ((args[0]) === 'on') {
                    if (isAntiIg) return reply('Ya está activo')
                    antiIg.push(from)
                    fs.writeFileSync('./database/grupo/antiig.json', JSON.stringify(antiIg))                   
                    enable(`Se ha activado el _Anti Instagram_, todos los usuarios que envien link de instagram seran eliminados.`)} 
                    else if ((args[0]) === 'off') { 
                    var Ig = antiIg.indexOf(from)
                    antiIg.splice(Ig, 1)
                    fs.writeFileSync('./database/grupo/antiig.json', JSON.stringify(antiIg))
                    reply('Desactivar con éxito ✔️')
                    } 
                    break

case 'autosticker':
            if (!isRegister) return replyreg (es_noreg)   
            if (isBan) return reply (es_userban)		
            if (!isGroup) return reply(`${grupo}`)
            if (!isAdmin) return replyply(es_admin)
            if (args[0] === 'on') {
              if (isAutostick) return reply('_El autosticker ya esta activo_')
              autosticker.push(from)
              fs.writeFileSync('./database/grupo/autosticker.json', JSON.stringify(autosticker))
              enable(`Se ha activado el autosticker para ${groupMetadata.subject}, cualquier imagen que envien sera convertido a sticker automaticamente`)
              } else if ((args[0]) === 'off') {
              var ini = autosticker.indexOf(from)
              autosticker.splice(ini, 1)
              fs.writeFileSync('./database/grupo/autosticker.json', JSON.stringify(autosticker))
              disable(`La función de autosticker se desactivo en el grupo ${groupMetadata.subject}`)
              } else {
              noentender(`${prefijo + command} on* para activar\n\n*${prefijo + command} off* para desactivar`)
              }
              break


case 'antidoc':
case 'antidocumentos':
            if (!isRegister) return replyreg (es_noreg)   
            if (isBan) return reply (es_userban)		
            if (!isGroup) return reply(`${grupo}`)
            if (!isAdmin) return replyply(es_admin)
            if (args[0] === 'on') {
              if (isAntidoc) return reply('_El antidocumentos ya estaba activo_')
              antidoc.push(from)
              fs.writeFileSync('./database/grupo/antidoc.json', JSON.stringify(antidoc))
              enable(`Se ha activado el antidoc para ${groupMetadata.subject}, cualquier imagen que envien sera convertido a sticker automaticamente`)
              } else if ((args[0]) === 'off') {
              var ini = antidoc.indexOf(from)
              antidoc.splice(ini, 1)
              fs.writeFileSync('./database/grupo/antidoc.json', JSON.stringify(antidoc))
              disable(`La función de antidoc se desactivo en el grupo ${groupMetadata.subject}`)
              } else {
              noentender(`${prefijo + command} on* para activar\n\n*${prefijo + command} off* para desactivar`)
              }
              break

case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
            if (!isRegister) return replyreg (es_noreg)   
            if (isBan) return reply (es_userban)		
            if (!isGroup) return reply(`${grupo}`)
          //  if (!isAdmin) return replyply(es_admin)
            if (args.length < 1) return noentender(`*BIENVENIDAS*\n\n*${prefijo + command} on* para activar\n*${prefijo + command} off* para desactivar`)
            if ((args[0]) === 'on') {
            if (isWelkom) return reply('_La bienvenida ya esta activa_')
            Bienvenida.push(from)
            fs.writeFileSync('./database/grupo/bienvenida.json', JSON.stringify(Bienvenida))
            enable(`Se ha activado la bienvenida para el grupo *${groupMetadata.subject}*\n\nTodos los usuario que entren seran recibidos con foto`)
            } else if ((args[0]) === 'off') {
            if (!isWelkom) return reply('_La bienvenida ya esta desactivada')
            Bienvenida.splice(from, 1)
            fs.writeFileSync('./database/grupo/bienvenida.json', JSON.stringify(Bienvenida))
            disable(`La función de Bienvenida se desactivo en el grupo ${groupMetadata.subject}`)
            } else {
            noentender(`*BIENVENIDAS*\n\n*${prefijo + command} on* para activar\n*${prefijo + command} off* para desactivar`)
            }
            break

            case 'chat': {
                if (!isOwner && !isBot) return reply(baby.only.ownerB)
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    leo.chatModify({ mute: 'Infinity' }, from, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    leo.chatModify({ mute: null }, from, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    leo.chatModify({  archive: true }, from, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    leo.chatModify({ archive: false }, from, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    leo.chatModify({ markRead: true }, from, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    leo.chatModify({ markRead: false }, from, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    leo.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, from, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
//PERSONAL

//JUEGOS
case 'ttc': 
case 'ttt': 
case 'tictactoe': {
  let TicTacToe = require("./libreria/tictactoe")
  this.game = this.game ? this.game : {}
  if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.Usuario))) throw 'Kamu masih didalam game'
  let room = Object.values(this.game).find(room => room.state === 'WAITING' && (txt ? room.name === txt : true))
  if (room) {
  reply('Socios encontrados! ')
  room.o = from
  room.game.playerO = m.Usuario
  room.state = 'PLAYING'
  let arr = room.game.render().map(v => {
  return {
  X: '❌',
  O: '⭕',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣',
  }[v]
  })
  let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Se rindio y admitio su derrota`
  if (room.x !== room.o) await sendText(room.x, str, m, { mentions: parseMention(str) } )
  await sendText(room.o, str, chui, { mentions: parseMention(str) } )
  } else {
  room = {
  id: 'tictactoe-' + (+new Date),
  x: from,
  o: '',
  game: new TicTacToe(m.Usuario, 'o'),
  state: 'WAITING'
  }
  if (txt) room.name = txt
  reply('Menunggu partner' + (txt? ` mengetik command dibawah ini ${prefijo}${command} ${txt}` : ''))
  this.game[room.id] = room
  }
  }
  break
  //OWNER CREADOR O BOT
  case 'ban':
                  if (!isOwner)
                mentionUser = choute.message.extendedTextmessage.contextInfo.mentionedJid
                if (mentionUser.length !== 0){
                for (let i = 0; i < mentionUser.length; i++){
                addBanned(mentionUser[0], args[1], ban)}
                  (`@${mentionUser[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentionUser, true)
                  //leo.sendMessage(from, `Listo `, MessageType.text, { quoted: chui})
                  leo.sendMessage(from,{text: `@${mentionUser[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`}, {quoted: chui, contextInfo: {mentionedJid: [mentionUser]}})                 
                } else if (isQuotedMsg) {
                  if (quotedMsg.Usuario.match('12')) return reply(`🤨`)
                  addBanned(quotedMsg.Usuario, args[1], ban)
                  mentions(`@${mentionUser[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentionUser, true)
                  } else if (!isNaN(args[1])) {
                  addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                  mentions(`@${mentionUser[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentionUser, true)
                  }
                  break
}

if(body.includes('.com')) 
if (isGroup && isBotadmin && isAntilink) {                                                         	  
    if (!isBot) {                                 {
      if (!isAntilink) return //reply(`Che admin pendejo, la bienvenida ya estaba activa, por pendejo te quedas sin admin                     
    if (!isBotadmin) return                                                                     
    if (isAdmin) return reply ('Agradece que eres admin o te mandaria a la mierda')                                 
    //leo.groupDemoteAdmin(from, [Usuario])
    reply(`${links}`)   
        setTimeout( () => { 
          
         // leo.groupRemove(from, [Usuario]) }, 100) 

          leo.groupParticipantsUpdate(from, [Usuario], 'remove')}, 100) 
    }             
    }                     
    }

if(body.includes('https://chat.whatsapp.com/')) 
if (isGroup && isBotadmin && isAntigp) {                                                         	  
    if (!isBot) {                                 {
      if (!isAntigp) return //reply(`Che admin pendejo, la bienvenida ya estaba activa, por pendejo te quedas sin admin                     
    if (!isBotadmin) return                                                                     
    if (isAdmin) return reply ('Agradece que eres admin o te mandaria a la mierda')                                 
    //leo.groupDemoteAdmin(from, [Usuario])
    reply(`${linkgpwa}`)   
        setTimeout( () => { 
          leo.groupParticipantsUpdate(from, [Usuario], 'remove')}, 100) 
    }             
    }                     
    }

//INSTAGRAM
    if(body.includes('instagram.com')) 
    if (isGroup && isBotadmin && isAntiIg) {                                                         	  
        if (!isBot) {                                 {
        //  if (!isAntiIg) return //reply(`Che admin pendejo, la bienvenida ya estaba activa, por pendejo te quedas sin admin                     
        if (!isBotadmin) return                                                                     
        if (isAdmin) return reply ('Agradece que eres admin o te mandaria a la mierda')                                 
        //leo.groupDemoteAdmin(from, [Usuario])
        reply(`${instalink}`)   
            setTimeout( () => { 
               leo.groupParticipantsUpdate(from, [Usuario], 'remove')}, 100) 
            }             
        }                     
        }
//FACEBOOK
        if(body.includes('facebook.com')) 
        if (isGroup && isBotadmin && isAntiface) {                                                         	  
            if (!isBot) {                                 {
              if (!isAntiface) return //reply(`Che admin pendejo, la bienvenida ya estaba activa, por pendejo te quedas sin admin                     
            if (!isBotadmin) return                                                                     
            if (isAdmin) return reply ('Agradece que eres admin o te mandaria a la mierda')                                 
            //leo.groupDemoteAdmin(from, [Usuario])
            reply(`${facelink}`)   
                setTimeout( () => { 
                   leo.groupParticipantsUpdate(from, [Usuario], 'remove')}, 100) 
                }             
            }                     
            }   
            
            
            if(body.includes('Abu')){
                          reply('a')
                }  



} catch (e) {
e = String(e)
console.log(color('[ERROR]', 'red'), color(e, 'cyan'))
}
})
  }
start()