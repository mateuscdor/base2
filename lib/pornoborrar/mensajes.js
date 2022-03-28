
const generateLinkPreview = async (id, url2, text2, lci, desc2, title2 = [], options = {}) => {
    lio = lci
     const fakelink = {
     canonicalUrl: url2,
     matchedText: text2,
     jpegThumbnail : {jpegThumbnail: lio},
     description: desc2,
     ttitle: title2,
     previewType: 6
   }
     leo.sendMessage(id, fakelink, MessageType.image, options)
   }
  const generateLinkAbove = async(id, título, descripción, buffer, enlace) => {
      const opción = {
    quoted: choute,
          contextInfo: {
              externalAdReply: {
                  title: título,
                  body: descripción,
                  thumbnail: buffer,
                  sourceUrl: enlace
              }
          }
      }
      leo.sendMessage(id, {name: "𝕭𝖔𝖙-𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 𝕺𝕱𝕮", address: "", jpegThumbnail: fs.readFileSync('./media/imagen/Faketumber.jpg'), }, MessageType.image, opción)}
    
    const messaimg = async(id, título, descripción, buffer, enlace) => {
      const opción = {
      quoted: choute,
        contextInfo: {
          externalAdReply: {
            title: título,
            body: descripción,
            thumbnail: buffer,
            sourceUrl: enlace
          }
        }
      }
      leo.sendMessage(id, {name: "𝕭𝖔𝖙-𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 𝕺𝕱𝕮", address: "", jpegThumbnail: buffer}, MessageType.image, opción)}
  
    const baneado = async(id, título, descripción, buffer, enlace) => {
      const opción = {
      quoted: choute,
        contextInfo: {
          externalAdReply: {
            title: título,
            body: descripción,
            thumbnail: buffer,
            sourceUrl: enlace
          }
        }
      }
      leo.sendMessage(id, {name: `@${mentionUser[0].split('@')[0]} Usuario Baneado Exitosamente`, address: 'Un chopo menos', jpegThumbnail: buffer}, location, opción)}
  
  
  
    const blanco = async(id, título, descripción, buffer, enlace) => {
      const opción = {
      quoted: choute,
        contextInfo: {
          externalAdReply: {
            title: título,
            body: descripción,
            text: buffer,
            sourceUrl: enlace
          }
        }
      }
      
      leo.sendMessage(id, {name: "𝕭𝖔𝖙-𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 𝕺𝕱𝕮", address: "", text: 'a'}, MessageType.text, opción)}
  
  
    const replylogo = async(id, título, descripción, buffer, enlace) => {
        const opción = {
        quoted: choute,
          contextInfo: {
            externalAdReply: {
              title: título,
              body: descripción,
              jpegThumbnail: buffer,
              sourceUrl: enlace
            }
          }
        }
        leo.sendMessage(id, {name: "𝕭𝖔𝖙-𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 𝕺𝕱𝕮", address: "Su logo se esta esta creando espere.", jpegThumbnail: buffer}, MessageType.location, opción)}
      