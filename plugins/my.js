let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { usedPrefix }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let mynya = `
╭──「 BALANCE 」──༉
│✇ Name: *${user.name}*
│✇ Limit: *${user.limit}*
│✇ Money: *${user.money}*
│✇ Exp: *${user.exp}*
│✇ Level: *${user.level}*
│✇ Role: *${user.role}*
╰──────⳹
`
 conn.sendButtonLoc(m.chat, mynya, wm, await(await fetch(fla + `${await this.getName(who)}`)).buffer(), [[`Menu`,`${usedPrefix}menu`]], m) 
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my|limit|balance)$/i

module.exports = handler
