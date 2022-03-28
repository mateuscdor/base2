
function isMsgLimit(id){
    if (isAdmin) {return false;}
    let found = false;
    for (let i of msgLimit){
        if(i.id === id){
            if (i.msg >= 8) {
                found === true 
                tobz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!`, id)
                tobz.contactBlock(id)
                banned.push(id)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                return true;
            }else if(i.msg >= 8){
                found === true
                tobz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!`, id)
                return true
            }else{
                found === true
                return false;
            }   
        }
    }
    if (found === false){
        let obj = {id: `${id}`, msg:1};
        msgLimit.push(obj);
        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
        return false;
    }  
}
function addMsgLimit(id){
    if (isAdmin) {return;}
    var found = false
    Object.keys(msgLimit).forEach((i) => {
        if(msgLimit[i].id == id){
            found = i
        }
    })
    if (found !== false) {
        msgLimit[found].msg += 1;
        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
    }
}


function isLimit(id){
    if (isAdmin) {return false;}
    let found = false;
    for (let i of limit){
        if(i.id === id){
            let limits = i.limit;
            if (limits >= limitCount) {
                found = true;
                tobz.reply(from, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                return true;
            }else{
                limit
                found = true;
                return false;
            }
        }
    }
    if (found === false){
        let obj = {id: `${id}`, limit:1};
        limit.push(obj);
        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
        return false;
    }  
}
function limitAdd (id) {
    if (isAdmin) {return;}
    var found = false;
    Object.keys(limit).forEach((i) => {
        if(limit[i].id == id){
            found = i
        }
    })
    if (found !== false) {
        limit[found].limit += 1;
        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
    }
}