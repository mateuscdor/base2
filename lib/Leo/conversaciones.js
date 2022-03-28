
const { WAConnection, 
    Presence, 
    MessageType, 
    Mimetype, 
} = require('@adiwajshing/baileys');
const fs = require('fs')
const {body, leo} = fs.readFileSync('./thechoute.js')
const conn = fs.readFileSync("./index")
const leo = conn.leo;
const {isRegister, choute} = fs.readFileSync('../thechoute.js')

//𝐙𝐎𝐍𝐀 𝐃𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐀𝐂𝐈𝐎𝐍𝐄𝐒
if(body == ('Hola')) {
if (!isRegister)
leo.sendMessage(from, 'Hola, como estas?', MessageType.text, {quoted: choute})}

if(body == ('Bien')) 
if (!isRegister){
leo.sendMessage(from, 'Me alegro mucho :D', MessageType.text, {quoted: choute})}

if(body == ('Holaa')) 
if (!isRegister){
leo.sendMessage(from, 'Tu naliz contra mis bolaaaaasss', MessageType.text, {quoted: choute})}

if(body == ('Tengo hambre')) 
if (!isRegister){
leo.sendMessage(from, 'Nos comemos?', MessageType.text, {quoted: choute})}

if(body == ('Lol')) 
if (!isRegister){
leo.sendMessage(from, 'Lol? Te gusta la pija cierto', MessageType.text, {quoted: choute})}

if(body == ('Que estan haciendo?')) 
if (!isRegister){
leo.sendMessage(from, 'Ando pajeandome, te paso video?', MessageType.text, {quoted: choute})}

if(body == ('Mmg')) 
if (!isRegister){
leo.sendMessage(from, 'Mamguevo eres tu', MessageType.text, {quoted: choute})}