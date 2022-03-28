
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const fs = require('fs');




const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const jsonformat = (string) => {
  return JSON.stringify(string, null, 2)
}

const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }
 
            const banner = cfonts.render(('Baby'), {
                font: 'block',
                color: 'white',
                align: 'left',
                gradient: ["red","yellow"],
                lineHeight: 2
                });



//𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖔
const registrados = JSON.parse(fs.readFileSync('./database/registro.json'))
const getRegisteredRandomId = () => {
  return registrados[Math.floor(Math.random() * registrados.length)].id
  }
  const addRegisteredUser = (Usuario, NameUser, nombre, edad, DNI, hora,) => {
    const obj = { id: Usuario, Nick: NameUser, name: nombre, edad: edad, dni: DNI, hora: hora }
    registrados.push(obj)
    fs.writeFileSync('./database/registro.json', JSON.stringify(registrados))

    const test = { id: Usuario}
    registrados.push(test)
    fs.writeFileSync('./database/test.json', JSON.stringify(test))


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


module.exports = { jsonformat, getRegisteredRandomId, addRegisteredUser, checkRegisteredUser, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }