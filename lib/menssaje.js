const {en_noreg, en_admin, en_botadmin, en_userban, en_grupo, en_owne, en_bot, en_notextlogo, } = require('./mensajes/en/return')
const {es_noreg, es_admin, es_botadmin, es_userban, es_grupo, es_owne, es_bot, es_notextlogo, } = require('./mensajes/es/return')


module.exports = (isGroup, from) => {
//const isGroup = from.endsWith('@g.us')
const english = JSON.parse(fs.readFileSync('./database/ingles.json'))

const isEnglish = isGroup ? english.includes(from) : false


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
  module.exports = {noreg, admin, botadmin, userban, grupo, owne, bot, notextlogo, isEnglish, english}

}
