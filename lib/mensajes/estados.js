/*Activado ✅
Desactivado ❌

🗣️ Bienvenida:
🗣️ Antifake:
🗣️ Uso de Comandos +18: 
🗣️ Autosicker:
🗣️ Autoamg:
🗣️ Antilink:
🗣️ Antigp:
🗣️ Antiig:
🗣️ Antigp: 
*/
const   {isWelkom, isAntiFake, isAntic18, isAutostick, isAutoaimg, isAntiLink, isAntigp, isAntiIg, isAntiface}

if (isWelkom) {
    var estadowelcom = 'Activado ✅'
  } else if (!isWelkom) {
    var estadowelcom = 'Desactivado ❌'
  }

  if (isAntiFake) {
    var estadofake = 'Desactivado ❌'
  } else if (!isAntiFake) {
    var estadofake = 'Activado ✅'
  }

  if (isAntic18) {
    var com18 = 'Activado ✅'
  } else if (!isAntic18) {
    var com18 = 'Desactivado ❌'
  }
  
  if (isAutostick) {
    var estadostic = 'Activado ✅'
  } else if (!isAutostick) {
    var estadostic = 'Desactivado ❌'
  }
  
  if (isAutoaimg) {
    var estadoimg = 'Activado ✅'
  } else if (!isAutoaimg) {
    var estadoimg = 'Desactivado ❌'
  }

  if (isAntiLink) {
    var estadolink = 'Activado ✅'
  } else if (!isAntiLink) {
    var estadolink = 'Desactivado ❌'
  }

  if (isAntigp) {
    var estadogp = 'Activado ✅'
  } else if (!isAntigp) {
    var estadogp = 'Desactivado ❌'
  }

  if (isAntiIg) {
    var estadoig = 'Activado ✅'
  } else if (!isAntiIg) {
    var estadoig = 'Desactivado ❌'
  }

  if (isAntiface) {
    var estadoface = 'Activado ✅'
  } else if (!isAntiface) {
    var estadoface = 'Desactivado ❌'
  }
/*
  if (isBan) {
    var estadolink = 'Activado ✅'
  } else if (!isBan) {
    var estadolink = 'Desactivado ❌'
  }
*/
  if (public) {
    var estadop = 'Publico'
  } else if (!public) {
    var estadop = 'Privado'
  }

  
  module.exports = {estadowelcom, estadofake, com18, estadostic,estadoimg, estadolink, estadogp, estadoig, estadoface, estadop}
