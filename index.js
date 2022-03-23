const {default:
       makeWASocket,
       DisconnectReason,
       useSingleFileAuthState,
       makeInMemoryStore,
       fetchLatestBaileysVersion} = require("@adiwajshing/baileys");
const { state, saveState } = useSingleFileAuthState('./toxic.json')
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const moment = require("moment-timezone")
const { exec, spawn, execSync } = require("child_process")
const { color, bgcolor } = require('./lib/color')
const prefix = "."
//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function start() {
    let { version, isLatest } = await fetchLatestBaileysVersion()

        const client = makeWASocket({
        printQRInTerminal: false,
		logger: pino({ level: 'silent' }),
        browser: ['Chrome',],
		auth: state,
        version,
	})

    store.bind(client.ev)
    client.ev.on('connection.update', async (update) => {
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
    console.log(color('Conectado :D'))

	client.ev.on('messages.upsert', async (up) => {
		try {
			if (!up.messages) return
        const mek = up.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        const fromMe = mek.key.fromMe
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const body = (type === 'conversation') ? mek.message.conversation : (type == 'imageMessage') ? mek.message.imageMessage.caption : (type == 'videoMessage') ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (mek.message.buttonsResponseMessage?.selectedButtonId || mek.message.listResponseMessage?.singleSelectReply.selectedRowId || (type == 'listResponseMessage' ? mek.msg.singleSelectReply.selectedRowId : '') || mek.msg.text || mek.msg.caption || mek.msg || '') : ''
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const args = body.trim().split(/ +/).slice(1)
const ar = args.map((v) => v.toLowerCase())
const q = args.join(' ')
const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net'
const ownerNumber = ["5492615112937@s.whatsapp.net"]
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const pushname =  mek.pushName || "A/Z"
        const reply = (text) => {
            client.sendMessage(from, { text: text }, {quoted: mek, sendEphemeral: true})
        }
        
switch (command) {
case 'test':
reply(`*Hola ${pushname}!*`)
break



}
} catch (e) {
e = String(e)
console.log(color('[ERROR]', 'red'), color(e, 'cyan'))
}
})
}
start()