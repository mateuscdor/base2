let fs = require("fs")
const {from, leo} = require('../thechoute')
 const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "0@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/imagen/imagen.jpg`) //Gambarnye
					},
					"title": "tokonya bang", //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//FAKEREPLY TROLI
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: 'anjay', //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./media/imagen/imagen.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//FAKEREPLY LOCATION
const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Russia',
                    jpegThumbnail: fs.readFileSync('./media/imagen/imagen.jpg')
                          }
                        }
                      }
                      
const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"jakarta","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')}}
	}
	
const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')}}
	}
	const fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')}}
	}
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')}}
	}
	
	const fcona = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"antibot","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')}}
	}
	const bugcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "vcard": ""}}}
//FAKEREPLY DOCUMENT
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Halo bang', 
                    jpegThumbnail: fs.readFileSync('./media/imagen/imagen.jpg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {  
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')
                        }
                       }
	                  }
//FAKEREPLY GROUPINVITE 
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "0-1625305606@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Mengter", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')
		}
	}
}
//FAKEREPLY GIF 
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')
                        }
                       }
	                  } 
//FAKEREPLY TEXT WITH THUMBNAIL 
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./media/imagen/imagen.jpg')
                        }
	                  } 
                     }
//FAKEREPLY VN
/*
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ?
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }
                     let tes =  leo.sendMessage(from, `ini bwang`, 'conversation', { sendEphemeral: true, quoted: fvn })
      setTimeout(() => {
        leo.deleteMessage(from, tes.key)
      }, 3000) */ 

module.exports = {ftoko, ftroli, flokasi, floc, fliveLoc, fliveLoc2,fcon,fcona,bugcon, fvideo, fdocs, fvideo, fgclink, fgif, ftextt}
