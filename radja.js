/* 

Thanks a lot to
 
> Allah SWT

> My parents
> My Family

Note : Jangan Hapus Nama Creator!
Kalo Mau Reupload Atau Recode Kasih Credits!

*/
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const crypto = require('crypto')
const speed = require('performance-now')
const client = new WAConnection()
const dtod = "6282138919347@s.whatsapp.net"
const otod = "6282138919347@s.whatsapp.net"

    //── 「 Lib 」 ──//

const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { antiSpam } = require('./lib/antispam')
const { exec } = require('child_process')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif')
const exif = new Exif()

    //── 「 DataBase 」 ──//

const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
playmusic = false
antidelete = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
multi = true
nopref = false

    //── 「 LolKey 」 ──//
HelKey = settings.HelKey

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = radja = async (radja, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        radja.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        radja.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = radja.user
		m = simple.smsg(radja, mek)
		  const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
		
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		radja.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./radja.jpg')
		cmhit.push(command)
        mess = {
			wait: '𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿!',
			success: '𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹!',
			toxic: 'Jangan Toxic!',
			error: {
				stick: '𝗧𝗶𝗱𝗮𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗲𝗻𝗴𝗮𝗸𝘀𝗲𝘀 𝘃𝗶𝗱𝗲𝗼!',
				Iv: '𝗟𝗶𝗻𝗸 𝗧𝗶𝗱𝗮𝗸 𝗩𝗮𝗹𝗶𝗱!',
                api: '𝗘𝗿𝗿𝗼𝗿'
			},
			only: {
				group: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗱𝗶 𝗱𝗮𝗹𝗮𝗺 𝗴𝗿𝘂𝗽!',
				ownerG: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗽𝗲𝗺𝗶𝗹𝗶𝗸 𝗴𝗿𝘂𝗽!',
				ownerB: 'Khusus Owner!',
				admin: 'Khusus admins!',
				Badmin: 'Jadikan Bot admin!'
			}
		}
		const botNumber = radja.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? radja.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? radja.user.jid : radja.contacts[mek.sender]
        const pushname = mek.key.fromMe ? radja.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await radja.chats.all()
		const groupMetadata = isGroup ? await radja.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const q = args.join(' ')
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = radja.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_©itschandra_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:mek})
             radja.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = radja.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6281262163214-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/itschandra', "groupName": `${NamaBot}`, "footerText": "*_©itschandra_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            radja.relayWAMessage(grup)
        }
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await radja.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i.ibb.co/dgzdQgz/e54c21c208a1.png'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./radja.jpg')
		const sekarang = new Date().getTime();
			
			
    //── 「 Waktuuu 」 ──//			
			
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Good Midnight 🌚"; break;
                case 1: jamss = "Good Midnight 🌚"; break;
                case 2: jamss = "Good Midnight 🌚"; break;
                case 3: jamss = "Good Midnight 🌔"; break;
                case 4: jamss = "Good Midnight 🌔"; break;
                case 5: jamss = "Good Dawn 🌄"; break;
                case 6: jamss = "Good Morning 🌄"; break;
                case 7: jamss = "Good Morning 🌄"; break;
                case 8: jamss = "Good Morning ☀️"; break;
                case 9: jamss = "Good Morning ☀️"; break;
                case 10: jamss = "Good Good Morning ☀️"; break;
                case 11: jamss = "Good Afternoon 🌞"; break;
                case 12: jamss = "Good Zuhur 🌞"; break;
                case 13: jamss = "Good Afternoon 🌞"; break;
                case 14: jamss = "Good Afternoon 🌞"; break;
                case 15: jamss = "Good Asr 🌞"; break;
                case 16: jamss = "Good Afternoon ☀️"; break;
                case 17: jamss = "Good Evening 🌄"; break;
                case 18: jamss = "Good Maghrib 🌄"; break;
                case 19: jamss = "Good Isha 🌙"; break;
                case 20: jamss = "Good Night 🌙"; break;
                case 21: jamss = "Good Night 🌙"; break;
                case 22: jamss = "Good Midnight 🌙"; break;
                case 23: jamss = "Good Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}


    //── 「 Produc 」 ──//

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `Follow IG : itschandra_28`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI

const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 500,
                            status: 1,
                            surface : 1,
                            message: `Follow IG : itschandra_28`, //Kasih namalu
                            orderTitle: `Follow IG : itschandra_28`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6281262163214-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
////////////CONST GAME/RANDOM MATH
            const mekla1 = ['1','2','3','4','5','6','7','8','9']
            const mekla2 = ['1','2','3','4','5','6','7','8','9'] 
            const random1 = ['1','2','3','4','5','6','7','8','9'] 
            const random2 = ['1','2','3','4','5','6','7','8','9'] 
            const random3 = ['1','2','3','4','5','6','7','8','9'] 
            const random4 = ['1','2','3','4','5','6','7','8','9'] 
            const random5 = ['1','2','3','4','5','6','7','8','9'] 
            const mekla3 = mekla1[Math.floor(Math.random() * (mekla1.length))]
            const mekla4 = mekla2[Math.floor(Math.random() * (mekla2.length))]   
            const random6 = random1[Math.floor(Math.random() * (random1.length))]      
            const random7 = random2[Math.floor(Math.random() * (random5.length))]      
            const random8 = random3[Math.floor(Math.random() * (random5.length))]      
            const random9 = random4[Math.floor(Math.random() * (random5.length))]      
            const random10 = random5[Math.floor(Math.random() * (random5.length))] 
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6281262163214-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await radja.relayWAMessage(
        radja.prepareMessageFromContent(
          target,
          radja.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
	const snas = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
		'🍇 : 🍇 : 🍇 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
radja.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya, Bot Ini Di Susun Kembangkan Oleh Radja Adity`
const daftar2 = '```Ketik Tombol Di Bawah Untuk Mendaftar Ke Database itschandra```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🌸𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙀𝘿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
radja.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await radja.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
radja.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await radja.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
radja.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await radja.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
radja.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_©itschandra_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === radja.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© itschandra_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					radja.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        radja.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        radja.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await radja.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        radja.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			radja.sendMessage(from, teks, text, { quoted:mek })
		}
		const simir = (teks) => {
			radja.sendMessage(from, teks, text, { quoted:mek })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			radja.sendMessage(hehe, teks, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? radja.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : radja.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
radja.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
radja.sendMessage(from, hasil, type, options).catch(e => {
radja.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					radja.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await radja.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				radja.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return radja.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					radja.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					radja.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					radja.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        radja.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				radja.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    radja.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
        

			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				radja.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    radja.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
                      }
if (!settings.autoread) {
radja.chatRead(from)
}
if (!settings.autocomposing) {
radja.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
radja.updatePresence(from, Presence.recording)
}
if (budy.startsWith('radja')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "*RadjaAditya*", [{buttonId: 'igm', buttonText: {displayText: 'Instagram'}, type: 1},{buttonId: 'ytm', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
if(isButton == 'igm'){
reply('http://instagram.com/itschandra_28')
}
if(isButton == 'ytm'){
reply('https://youtube.com/c/')
}

   
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('[~] Permintaan Di Prosess...')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('Jangan Spam Command ya Sayang 😘😘 :(')}
if (isCmd && !isOwner) antiSpam.addFilter(from)
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|COMMAND|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|PESAN|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        
    //── 「 Fiturr 」 ──//        
        
        case 'about':
  if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await radja.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status     
       menu = `*「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC
9. DILARANG MEMASUKAN KE GROUP TAMPA IZIN
10. JANGAN LUPA SAVE NOMOR OWNER NYA JUGA HEHEHE
⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!

Instagram : @itschandra_28
`
sendButLocation(from, `${menu}`, "*Radja Aditya*", {jpegThumbnail:ofrply,name:""}, [{buttonId:`ping`,buttonText:{displayText:'SPEED BOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =`itschandra`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`scripht`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await radja.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
radja.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : mek})
}
break
     case 'allmenu':
     const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = radja.user.phone
        ptod = "6281262163214@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
        		var ra2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			 stst = await radja.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
menu = `
Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Ketik Command Berikut
Untuk Menampilkan Menu Bot



_⫹⫺🎯Library : *Baileys-script*_
_⫹⫺🍰Version : *2.0.0*_
_⫹⫺📯Pengembang : *Radja Aditya*_
_⫹⫺💬Time : *${timeWib} WIB*_
_⫹⫺🖥️Operasi System : *${os_version}*_

_FITUR DOSA SUDAH DI HAPUS_


╭───── • ✩ • ─────
├ ➽ *DOWNLOAD MENU 📥* 
│ ❑ ${prefix}ytmp4 < link >
│ ❑ ${prefix}mediafire < link >
│ ❑ ${prefix}ytmp3 < link >
│ ❑ ${prefix}ytsearch < query >
│ ❑ ${prefix}zippyshare < link >
│ ❑ ${prefix}tiktok < link >
│ ❑ ${prefix}igdl < link >
╰────

╭───── • ✩ • ─────
├ ➽ *STICKER Menu 📌* 
│ ❑ ${prefix}swm
│ ❑ ${prefix}telesticker [ link ]
│ ❑ ${prefix}stickerwa [ Query ]
│ ❑ ${prefix}smoji
│ ❑ ${prefix}smoji2
│ ❑ ${prefix}sticker [ Reply ]
│ ❑ ${prefix}sgif 
│ ❑ ${prefix}toimg [ Reply/Video ]
│ ❑ ${prefix}attp
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *SOUND MENU 🔊* 
│ ❑ ${prefix}azan 
│ ❑ ${prefix}an-nnas
│ ❑ ${prefix}al-aadiyaat
│ ❑ ${prefix}azansubuh
│ ❑ ${prefix}ayatkursi
│ ❑ ${prefix}doapagihari
│ ❑ ${prefix}arrahman
│ ❑ ${prefix}sound1
│ ❑ ${prefix}sound2
│ ❑ ${prefix}sound3
│ ❑ ${prefix}sound4
│ ❑ ${prefix}sound5-70
│ ❑ ${prefix}onichan
│ ❑ ${prefix}araara
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *RANDOM TEXT & IMAGE* 📃
│ ❑ ${prefix}quotes
│ ❑ ${prefix}quotesyt
│ ❑ ${prefix}quotesdilan
│ ❑ ${prefix}quotesimage
│ ❑ ${prefix}quotesanime
│ ❑ ${prefix}quotesislami
│ ❑ ${prefix}quoteskanye
│ ❑ ${prefix}katasindiran
│ ❑ ${prefix}pantun
│ ❑ ${prefix}pantun2
│ ❑ ${prefix}puisi
│ ❑ ${prefix}faktaunik
│ ❑ ${prefix}katailham
│ ❑ ${prefix}katabucin
│ ❑ ${prefix}katabucin2
│ ❑ ${prefix}katabijak
│ ❑ ${prefix}tongue
│ ❑ ${prefix}renungan
│ ❑ ${prefix}truth
│ ❑ ${prefix}dare
│ ❑ ${prefix}nama
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *INFO MENU ℹ️* 
│ ❑ ${prefix}infogempa
│ ❑ ${prefix}kodepos
│ ❑ ${prefix}jadwaltv
│ ❑ ${prefix}jarak
│ ❑ ${prefix}heroml
│ ❑ ${prefix}newsinfo
│ ❑ ${prefix}cnnindonesia
│ ❑ ${prefix}cnnnasional
│ ❑ ${prefix}cnninternasional
│ ❑ ${prefix}hoax
│ ❑ ${prefix}jalantikus
│ ❑ ${prefix}republika
│ ❑ ${prefix}kumparan
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *ISLAM MENU* ☪️
│ ❑ ${prefix}jadwalsolat 
│ ❑ ${prefix}alquran
│ ❑ ${prefix}alquranaudio
│ ❑ ${prefix}asmaulhusna
│ ❑ ${prefix}kisahnabi
│ ❑ ${prefix}listsurah
│ ❑ ${prefix}jadwalsolat2
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *WALLPAPER MENU* 🖨️
│ ❑ ${prefix}wallpaper 
│ ❑ ${prefix}wallpapermuslim
│ ❑ ${prefix}wallpapercyberspace
│ ❑ ${prefix}wallpapermountain
│ ❑ ${prefix}wallpapertechnology
│ ❑ ${prefix}wallpaperprogramming
│ ❑ ${prefix}wallpaperestetik
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *MOVIE & STORY MENU 🎬* 
│ ❑ ${prefix}lk21
│ ❑ ${prefix}wattpadsearch
│ ❑ ${prefix}wattpad
│ ❑ ${prefix}drakorongoing
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *PLAY MENU ▶️️*
│ ❑ ${prefix}spotify
│ ❑ ${prefix}musicplay
│ ❑ ${prefix}jooxplay
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *GAME MENU 🎮* 
│ ❑ ${prefix}bisakah
│ ❑ ${prefix}rate
│ ❑ ${prefix}kapankah
│ ❑ ${prefix}namaninja
│ ❑ ${prefix}apakah
│ ❑ ${prefix}caklontong
│ ❑ ${prefix}tebakgambar
│ ❑ ${prefix}siapakah
│ ❑ ${prefix}suit
│ ❑ ${prefix}slot
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *VOCAL MENU 💢* 
│ ❑ ${prefix}huluh
│ ❑ ${prefix}holoh
│ ❑ ${prefix}halah
│ ❑ ${prefix}hilih
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *MANGA MENU 🀄*
│ ❑ ${prefix}anime
│ ❑ ${prefix}character
│ ❑ ${prefix}manga
│ ❑ ${prefix}kusonime
│ ❑ ${prefix}kusonimesearch
╰───── • ✩ • ─────
 
╭───── • ✩ • ─────
├ ➽ *TO MENU* 🔘
│ ❑ ${prefix}toimg [ ReplyStiker ]
│ ❑ ${prefix}img2url [ Photo ]
│ ❑ ${prefix}ttp4
│ ❑ ${prefix}ttp2
│ ❑ ${prefix}ttp3
│ ❑ ${prefix}ttp
│ ❑ ${prefix}tts
│ ❑ ${prefix}attp
│ ❑ ${prefix}attp2
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *SEARCHING MENU* 🔎 
│ ❑ ${prefix}pinterest [ Query ]
│ ❑ ${prefix}playstore [ nama apk ]
│ ❑ ${prefix}lirik [ judul lagu ]
│ ❑ ${prefix}wikipedia [ query ]
│ ❑ ${prefix}kbbi [ query ]
╰───── • ✩ • ─────
 
╭───── • ✩ • ─────
├ ➽ *RANDOM IMAGE* 🖼️
│ ❑ ${prefix}loli
│ ❑ ${prefix}meme
│ ❑ ${prefix}memeindo
│ ❑ ${prefix}ppcouple
│ ❑ ${prefix}quotemaker
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *PRINBON MENU 🥴* 
│ ❑ ${prefix}artinama [ Nama Kamu ]
│ ❑ ${prefix}cerpen
│ ❑ ${prefix}jadian
│ ❑ ${prefix}artimimpi
│ ❑ ${prefix}zodiak
│ ❑ ${prefix}ceritahoror
│ ❑ ${prefix}darkjokes
╰───── • ✩ • ─────
 
╭───── • ✩ • ─────
├ ➽ *HEWAN MENU* 🦴
│ ❑ ${prefix}kucing
│ ❑ ${prefix}dog
│ ❑ ${prefix}fox
│ ❑ ${prefix}burung
│ ❑ ${prefix}panda
│ ❑ ${prefix}redpanda
│ ❑ ${prefix}koala
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *CANVAS MENU* 📁
│ ❑ ${prefix}serti1
│ ❑ ${prefix}serti2
│ ❑ ${prefix}serti3
│ ❑ ${prefix}rem
│ ❑ ${prefix}gura
│ ❑ ${prefix}sadboy
│ ❑ ${prefix}kaneki
│ ❑ ${prefix}girlneko
│ ❑ ${prefix}lolimaker
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *SERTIFIKAT MENU* 🖍️
│ ❑ ${prefix}goodgirl
│ ❑ ${prefix}badgirl
│ ❑ ${prefix}amongus
│ ❑ ${prefix}tweettrump
│ ❑ ${prefix}hartacustom
│ ❑ ${prefix}toloserti
│ ❑ ${prefix}bucinserti
│ ❑ ${prefix}qrcode
╰───── • ✩ • ─────


╭───── • ✩ • ─────
├ ➽ *ePHOTO360 MENU* 📷
│ ❑ ${prefix}wetglass [ text ]
│ ❑ ${prefix}multicolor3d [ text ]
│ ❑ ${prefix}watercolor [ text ]
│ ❑ ${prefix}luxurygold [ text ]
│ ❑ ${prefix}galaxywallpaper [ text ]
│ ❑ ${prefix}lighttext [ text ]
│ ❑ ${prefix}beautifulflower [ text ]
│ ❑ ${prefix}puppycute [ text ]
│ ❑ ${prefix}royaltext [ text ]
│ ❑ ${prefix}heartshaped [ text ]
│ ❑ ${prefix}birthdaycake [ text ]
│ ❑ ${prefix}galaxystyle [ text ]
│ ❑ ${prefix}hologram3d [ text ]
│ ❑ ${prefix}greenneon [ text ]
│ ❑ ${prefix}glossychrome [ text ]
│ ❑ ${prefix}greenbush [ text ]
│ ❑ ${prefix}metallogo [ text ]
│ ❑ ${prefix}glittergold [ text ]
│ ❑ ${prefix}textcake [ text ]
│ ❑ ${prefix}starsnight [ text ]
│ ❑ ${prefix}wooden3d [ text ]
│ ❑ ${prefix}snow3d [ text ]
│ ❑ ${prefix}writegalacy [ text ]
│ ❑ ${prefix}textbyname [ text ]
│ ❑ ${prefix}galaxybat [ text ]
│ ❑ ${prefix}birthdayday [ text ]
│ ❑ ${prefix}goldplaybutton [ text ]
│ ❑ ${prefix}goldplaybutton [ text ]
│ ❑ ${prefix}silverplaybutton [ text ]
│ ❑ ${prefix}silverplaybutton [ text ]
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *ePHOTO360 MENU v2* 📸
│ ❑ ${prefix}pornhub <text> <text>
│ ❑ ${prefix}avenger <text> <text>
│ ❑ ${prefix}space <text> <text>
│ ❑ ${prefix}ninjalogo <text> <text>
│ ❑ ${prefix}marvelstudio <text> <text>
│ ❑ ${prefix}lionlogo <text> <text>
│ ❑ ${prefix}wolflogo <text> <text>
│ ❑ ${prefix}steel3d <text> <text>
│ ❑ ${prefix}wallgravity <text> <text>
│ ❑ ${prefix}glitch <text> <text>
│ ❑ ${prefix}coolgravity <text> <text>
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *MAKER MENU* 🖼️
│ ❑ ${prefix}magma <text>
│ ❑ ${prefix}glossy <text>
│ ❑ ${prefix}luxury <text>
│ ❑ ${prefix}vintage <text>
│ ❑ ${prefix}writing <text>
│ ❑ ${prefix}engraved <text>
│ ❑ ${prefix}holograpic <text>
│ ❑ ${prefix}fabric <text>
│ ❑ ${prefix}wicker <text>
│ ❑ ${prefix}larva <text>
│ ❑ ${prefix}toxic <text>
│ ❑ ${prefix}stroberi <text>
│ ❑ ${prefix}ice <text>
│ ❑ ${prefix}rusty <text>
│ ❑ ${prefix}koi <text>
│ ❑ ${prefix}bread <text>
│ ❑ ${prefix}honey <text>
│ ❑ ${prefix}captain <text>
│ ❑ ${prefix}gradien <text>
│ ❑ ${prefix}christmas <text>
│ ❑ ${prefix}3dstone <text>
│ ❑ ${prefix}1917 <text>
│ ❑ ${prefix}thunder2 <text>
│ ❑ ${prefix}hallowen <text>
│ ❑ ${prefix}blood <text>
│ ❑ ${prefix}black-pink <text>
│ ❑ ${prefix}astone <text>
│ ❑ ${prefix}art-papper <text>
│ ❑ ${prefix}sky-tex <text>
│ ❑ ${prefix}neon-devil <text>
│ ❑ ${prefix}deluxe-silver <text>
│ ❑ ${prefix}glue-text <text>
│ ❑ ${prefix}neon-light <text>
│ ❑ ${prefix}hallowen-text <text>
│ ❑ ${prefix}water-color <text>
│ ❑ ${prefix}multi-color <text>
│ ❑ ${prefix}horor-blood <text>
│ ❑ ${prefix}drop-water <text>
│ ❑ ${prefix}harry-potter <text>
│ ❑ ${prefix}grafity-text <text>
│ ❑ ${prefix}joker-logo <text>
│ ❑ ${prefix}broken-glass <text>
╰───── • ✩ • ─────


╭───── • ✩ • ─────
├ ➽ *Group Menu 🛠️* 
│ ❑ ${prefix}tagall
│ ❑ ${prefix}group open / close
│ ❑ ${prefix}antilink on / off
│ ❑ ${prefix}antiwame on / off
│ ❑ ${prefix}welcome on / off
│ ❑ ${prefix}linkgc
│ ❑ ${prefix}add [ reply ]
│ ❑ ${prefix}add +628
│ ❑ ${prefix}kick
│ ❑ ${prefix}creategroup
│ ❑ ${prefix}sticktag
│ ❑ ${prefix}promote
│ ❑ ${prefix}demote
│ ❑ ${prefix}promoteall
│ ❑ ${prefix}demoteall
│ ❑ ${prefix}revoke
│ ❑ ${prefix}leave
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *Tag Menu 🌀* 
│ ❑ ${prefix}ganteng
│ ❑ ${prefix}goblok
│ ❑ ${prefix}pinter
│ ❑ ${prefix}beban
│ ❑ ${prefix}baik
│ ❑ ${prefix}hebat
│ ❑ ${prefix}sadboy
│ ❑ ${prefix}wibu
│ ❑ ${prefix}haram
│ ❑ ${prefix}pakboy
│ ❑ ${prefix}pakgirl
│ ❑ ${prefix}jago
│ ❑ ${prefix}sadgirl
│ ❑ ${prefix}monyet
│ ❑ ${prefix}jahat
│ ❑ ${prefix}bego
│ ❑ ${prefix}nolep
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *Owner Menu 🤴*
│ ❑ ${prefix}setmenu
│ ❑ ${prefix}setallmenu
│ ❑ ${prefix}setprefix multi / nopref
│ ❑ ${prefix}hidetag
│ ❑ ${prefix}mode
│ ❑ ${prefix}bc
│ ❑ ${prefix}setbio
│ ❑ ${prefix}setname
│ ❑ ${prefix}self
│ ❑ ${prefix}public
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *INFORMASI 🗺️*
│ ❑ ${prefix}ping
│ ❑ ${prefix}speed
│ ❑ ${prefix}runtime
│ ❑ ${prefix}cekapikey
│ ❑ ${prefix}tes
│ ❑ ${prefix}bugreport [ query ]
╰───── • ✩ • ─────


*「 TERIMKASIH 」*

1. HUMAN | ApiKEY !!

2. HELGA | BASE !!

3. RADJA |  PENGEMBANG !!

⚠️TERIMAKASIH!!
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
`
sendButLocation(from, `${menu}`, `${uwu}Jangan Lupa Follow\n\nInstagram : @itschandra_28${uwu}`, {jpegThumbnail:ofrply}, [{buttonId:`.about`,buttonText:{displayText:'ABOUT🌱'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break
case 'menu':
        case 'help':
        ptod = "6281262163214@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await radja.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu Bot

_⫹⫺🐋Status :  ${isOwner ? 'Owner' : 'User'}_
_⫹⫺🧸Nama : ${pushname}_
_⫹⫺📬Bio User : ${stst}_
_⫹⫺🧰Nomor : @${stod.split('@')[0]}_
`
sendButLocation(from, `${menu}`, `${uwu}follow : @itschandra_28\nBase Ini Sedang Dalam Tahap Pengembangan, Gunakan Bot Dengan Sebaik Mungkin!${uwu}`, {jpegThumbnail:ofrply}, [{buttonId:`.allmenu`,buttonText:{displayText:'ALL MENU📝'},type:1},{buttonId:`.owner`,buttonText:{displayText:'OWNER🍁'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break
case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              radja.sendMessage('6281262163214@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
              case 'verify':
if (isRegistered) return reply(mess.success)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `    Verify Sukses
	         
- Nama : ${pushname}
- Nomor : @${sender.split('@')[0]}
- Seri: ${serialUser}
- Pengguna: 10482
`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},
]
mhan = await radja.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*©itschandra*',  
buttons: gbutsan,
headerType: 4
}
radja.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:mek, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[Verify]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'Red'), 'in', color(sender || groupName))
	    // console.log(e)
        break
        
        //── 「 Owner Menu 」 ──//          
              
              case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*©itschandra*',
    buttons: buttons,
    headerType: 1
}
await radja.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: mek})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*Radja Aditya*',
    buttons: buttons,
    headerType: 1
}
await radja.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: mek})
}
break
//Sampai sini


case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = radja.contacts[i] != undefined ? radja.contacts[i].vname || radja.contacts[i].notify : undefined
ini_list.push({
"displayName": `Author ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;RADJA ADITYA CHANDRA!;;;\nFN:${vname ? `${vname}` : `${radja.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
radja.sendMessage(from, {
"displayName": `Developer ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break

   //TAGALL

case 'tagall':
					if (!isGroup) return reply('KHSUS GROUP BROO!!!!')
					if (!isGroupAdmins) return reply('Khususs ADMIN')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➽ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
					
    //── 「 Download Menu 」 ──//

case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'tiktok': 
if (!q) return

tiktok1 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok4 = await getBuffer(tiktok1.result.nowatermark)
radja.sendMessage(from, tiktok4, video, {quoted: mek, caption:'ғᴏʟʟᴏᴡ ɪɢ : @𝚒𝚝𝚜𝚌𝚑𝚊𝚗𝚍𝚛𝚊_28'})
break

case 'mediafire':
if (!q) return

awokkk = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/mediafire?url=${q}&apikey=rcYersFHsr`)
sendFileFromUrl(awokkk.result.link, document, {mimetype: awokkk.result.mime, filename: awokkk.result.nama, quoted: mek})
break

                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*Radja Aditya*',
    buttons: buttons,
    headerType: 1
}
await radja.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
        case 'test':
				case 'cek':
				case 'tes':
if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				reply(`- Active!\n98 days, 19 hour, 16 minutes, 27 seconds`)
				break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await radja.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
				case 'antiwame':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur 4')
						radja.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antiwame')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_Radja Aditya*',
    buttons: punten,
    headerType: 1
}
await radja.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: mek})
					}
					break
				 case 'antilink':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						radja.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*Radja Aditya*',
    buttons: punten,
    headerType: 1
}
await radja.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: mek})
					}
					break 
				case 'demote':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    radja.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    radja.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await radja.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					radja.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         radja.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await radja.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: mek})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						radja.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						radja.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                radja.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                radja.groupMakeAdmin(from, members_id)
                break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				radja.updatePresence(from, Presence.composing)
				radja.groupLeave(from)
						break
				case 'bc':
					radja.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await radja.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await radja.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							radja.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await radja.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							radja.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await radja.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							radja.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `.menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `.rules`, buttonText: {displayText: 'RULES'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: `_${timeWib}_`,
    buttons: buttons,
    headerType: 1
}
await radja.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: mek})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					 case 'slot':
            case 'slots':
            
            const somtoy = snas[Math.floor(Math.random() * snas.length)]
            radja.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
			
		
				case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n*${prefix}${command}* RadjaAditya`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=itschandra&text=${encodeURIComponent(c)}`)
					radja.sendMessage(from, atetepe, sticker, { quoted: mek })
					break             
            case 'hidetag':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                
                
            break
			
			case 'spamsms':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 0812621636312`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=itschandra&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=itschandra&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=itschandra&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=itschandra&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=itschandra&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=itschandra&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=itschandra&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=itschandra&nomor=${nomor}`)
                    reply("Success")
                    break
					
		                       case 'tts':
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return kurr.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                radja.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                radja.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break 

//SOUND MENU ISLAM

case 'al-aadiyaat':
const home = fs.readFileSync('./mp3islam/Al-Aadiyaat.mp3')
radja.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break  

case 'azan':
const azan = fs.readFileSync('./mp3islam/azan.mp3')
radja.sendMessage(from, azan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break  

case 'an-nnas':
const su = fs.readFileSync('./mp3islam/an-nnas.mp3')
radja.sendMessage(from, su, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'qunut':
const getting = fs.readFileSync('./mp3islam/qunut.mp3')
radja.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'azansubuh':
const sad1 = fs.readFileSync('./mp3islam/azansubuh.mp3')
radja .sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi':
const sad2 = fs.readFileSync('./mp3islam/ayatkursi.mp3')
radja .sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'doapagihari':
const sad3 = fs.readFileSync('./mp3islam/doapagihari.mp3')
radja .sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('./mp3/sad4.mp3')
radja .sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('./mp3/aeshtetic.mp3')
radja .sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('./mp3/aeshtetic2.mp3')
radja .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('./mp3/aeshtetic3.mp3')
radja .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('./mp3/aeshtetic4.mp3')
radja .sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('./mp3/allnight.mp3')
radja .sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'baka':
const baka = fs.readFileSync('./mp3/baka.mp3')
radja .sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'lucas':
const lucas = fs.readFileSync('./mp3/lucas.mp3')
radja .sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'araara':
const prii = fs.readFileSync('./mp3/AraAra.mp3')
radja.sendMessage(from, prii, MessageType.audio, {quoted:mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sowell':
const well = fs.readFileSync('./mp3/sowell.mp3')
radja .sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('./mp3/wanna.mp3')
radja .sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('./mp3/yourskin.mp3')
radja.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('./mp3/cutmeoff.mp3')
radja .sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('./mp3/beautiful.mp3')
radja.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('./mp3/loosinggame.mp3')
radja .sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('./mp3/loosinginterest.mp3')
radja.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('./mp3/playdate.mp3')
radja.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
radja.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3islam/arrahman.mp3')
radja.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('./mp3/ayatkursi2.mp3')
radja.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('./mp3/tilawah.mp3')
radja.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawat':
const nabi = fs.readFileSync('./mp3/sholawatnabi.mp3')
radja.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./mp3/ngaji.mp3')
radja.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./mp3/ngaji2.mp3')
radja.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
radja.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
radja.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
radja.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
radja.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
radja.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
radja.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
radja.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
radja.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
radja.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
radja.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
radja.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
radja.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
radja.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
radja.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
radja.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
radja.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
radja.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
radja.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
radja.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
radja.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
radja.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
radja.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
radja.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
radja.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
radja.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
radja.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
radja.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
radja.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
radja.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
radja.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
radja.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
radja.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
radja.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
radja.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
radja.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
radja.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
radja.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
radja.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
radja.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
radja.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
radja.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
radja.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
radja.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
radja.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
radja.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
radja.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
radja.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
radja.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
radja.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
radja.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
radja.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
radja.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
radja.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
radja.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
radja.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
radja.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
radja.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
radja.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
radja.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
radja.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
radja.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
radja.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desahan4.mp3');
radja.sendMessage(from, delapansatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
radja.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
radja.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
radja.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
radja.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
radja.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
radja.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/sound62.mp3');
radja.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/sound63.mp3');
radja.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/sound64.mp3');
radja.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
radja.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
radja.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/hujan.mp3');
radja.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
client.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//exit

case 'jadian':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
			
			case 'takestick':
			case 'ts':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await radja.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=itschandra`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            radja.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
					
			
					
  case 'ytmp4':
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://melcanz.com/yt?url=${ini_link}&apikey=rmci9bR5`)
ini_txt =`Judul : *${anu.title}*\n`
ini_txt +=`Author : *${anu.channel}*\n`
ini_txt +=`Di Publikasi : *${anu.published}*\n`
ini_txt +=`Jumlah Penonton : *${anu.views}*\n\n`

thu = await getBuffer(anu.thumb)
radja.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })

res = await getBuffer(anu.video[1].url)
radja.sendMessage(from, res, video)
break
	
     case 'imgtourl':
       case 'img2url':

               reply(`mohon menunggu!!`) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  radja.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               radja.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
			   
			          case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await radja.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
			   
case 'ytmp3':
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://melcanz.com/yt?url=${ini_link}&apikey=rmci9bR5`)
ini_txt =`Judul : *${anu.title}*\n`
ini_txt +=`Author : *${anu.channel}*\n`
ini_txt +=`Di Publikasi : *${anu.published}*\n`
ini_txt +=`Jumlah Penonton : *${anu.views}*\n\n`
thu = await getBuffer(anu.thumb)
radja.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })

res = await getBuffer(anu.audio[0].url)
radja.sendMessage(from, res, audio)
break
	
				case 'pin':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
 radja.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
					
            case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
			case 'sticker':
			case 'stiker':
			case 's':
			case 'stickergif':
			case 'stikergif':
			case 'sgif':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await radja.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Succes Gan')
								buffer = fs.readFileSync(ran)
								radja.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await radja.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								radja.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
					case 'stickerwm':
					case 'swm':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await radja.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											radja.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await radja.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											radja.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
				                  case 'u':
			     	reply ('Mohon Menunggu...')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await radja.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Eror Kak')
						buffer = fs.readFileSync(ran)
						radja.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
						fs.unlinkSync(ran)
					})
					break
						break
			case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return radja.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return radja.sendMessage(from, `root @radja ilham:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await radja.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await radja.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							radja.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
case 'loli': 

anu = await fetchJson(`https://apidhani.herokuapp.com/api/anime/loli?apikey=NisaaCantik`)
loli = await getBuffer(anu.result)
radja.sendMessage(from, loli, image, {quoted: mek, caption: '*Nih Kak* _Loli_ nya '})
break

case 'meme':
if(!q)
cantik = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=itschandra`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'quotes':
case 'qoutes':
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=itschandra`)
dhani = (anu.result.quote)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `.quotes`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);

break 
case 'namaninja':  
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
 break
case 'tongue':
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
dhani = `${anu.result}`
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `.tongue`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);


break
case 'pantun':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=NisaaCantik`)
dhani = (oke.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

case 'quotesislami':
case 'qoutesislami':
anu = await fetchJson(`https://hardianto.xyz/api/random/quotes/muslim?apikey=hardianto`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

case 'quoteskanye':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes/kanye?apikey=NisaaCantik`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break;

case 'qoutesyt':
case 'quotesyt':
if(!q)
cantik = await getBuffer(`https://api.dapuhy.xyz/api/randomimage/quotesyt?apikey=rcYersFHsr`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'renungan':
chan = await fetchJson(`https://apidhani.herokuapp.com/api/random/renungan?apikey=NisaaCantik`)
radja = await getBuffer(chan.result)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, radja, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

case 'wallpaper':
case 'walpaper':
chan = await fetchJson(`https://apidhani.herokuapp.com/api/random/wallpaper?apikey=NisaaCantik`)
radja = await getBuffer(chan.result.url)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, radja, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

case 'darkjokes':
if(!q)

cantik = await getBuffer(`https://apidhani.herokuapp.com/api/random/darkjokes?apikey=NisaaCantik`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'truth':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/truth?apikey=NisaaCantik`)
dhani = (anu.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break;

case 'dare':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/dare?apikey=NisaaCantik`)
dhani = (anu.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break;
//
case 'wallpapermuslim':
chan = await fetchJson(`https://apidhani.herokuapp.com/api/other/wallpapermuslim?apikey=NisaaCantik`)
radja = await getBuffer(chan.result)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, radja, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

case 'wallpapercyberspace':
case 'cyberspace':
chan = await fetchJson(`https://apidhani.herokuapp.com/api/other/wallpapercyberspace?apikey=NisaaCantik`)
radja = await getBuffer(chan.result)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, radja, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

case 'wallpapermountain':
case 'mountain':
chan = await fetchJson(`https://apidhani.herokuapp.com/api/other/wallpapermountain?apikey=NisaaCantik`)
radja = await getBuffer(chan.result)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, radja, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break
case 'wallpaperprogramming':
case 'programming':
chan = await fetchJson(`https:https://apidhani.herokuapp.com/api/other/wallpaperprogramming?apikey=NisaaCantik`)
radja = await getBuffer(chan.result)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, radja, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

case 'wallpapertechnology':
case 'technology':
chan = await fetchJson(`https://apidhani.herokuapp.com/api/other/wallpapertechnology?apikey=NisaaCantik`)
radja = await getBuffer(chan.result)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, radja, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

case 'art-papper':
case 'broken-glass':
case 'neon-light':
case 'hallowen-text':
case 'magma':
case 'glossy':
case 'water-color':
case 'multi-color':
case 'sky-tex':
case 'neon-devil':
case 'luxury':
case 'vintage':
case 'writing':
case 'engraved':
case 'glue-text':
case 'holograpic':
case 'deluxe-silver':
case 'fabric':
case 'wicker':
case 'larva':
case 'toxic':
case 'stroberi':
case 'koi':
case 'bread':
case 'horor-blood':
case 'honey':
case 'ice':
case 'rusty':
case 'captain':
case 'gradien':
case 'christmas':
case 'drop-water':
case 'black-pink':
case 'harry-potter':
case '3dstone':
case '1917':
case 'thunder2':
case 'joker-logo':
case 'hallowen':
case 'blood':
case 'astone':
case 'grafity-text':
if (!c)return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Itschandra`)
									
			nyz5 = await fetchJson(`https://server-api-rey.herokuapp.com/api/textpro/${command}?text=${c}&apikey=apirey`) 
			nyz4 = await getBuffer(nyz5.result)
			radja.sendMessage(from, nyz4, image, {caption:`Nih *${command}* nya sudah jadi...`,quoted:mek}) 					
			break
			
case 'wiki': case 'wikipedia':
if (!q) return

ilmu = await fetchJson(`https://rest2yeriko.herokuapp.com/api/wikipedia?search=${q}&apikey=Yuzzu`)
ilmu2 = `*Nama* : ${q}\n*Hasil* : ${ilmu.result.result}`
reply(ilmu2)
break

case 'musicplay':
case 'playmusic':
case 'play':
reply('Lagi Proses Upload...')
bo = args.join(" ")
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
p3 = await getBuffer(ini.url)
radja.sendMessage(from, p3, audio)
break

case 'kbbi':
if (!q) return

ilmu3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kbbi?kata=${q}&apikey=Yuzzu`)
ilmu4 =`*Nama* : ${q}\n*Hasil* : ${ilmu3.result.arti}`
reply(ilmu4)
break

case 'pinterest':
case 'pinrest':
if (!q) return

foto = await fetchJson(`https://rest2yeriko.herokuapp.com/api/pinterest/?text=${q}&apikey=Yuzzu`)
fotoget = await getBuffer(foto.result)
sendButImage(from, `Foto *${q}* Nya Kak`, `Lagi? Klik Button Nya Kak⬇️`, fotoget, [{buttonId: `.pinterest ${q}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'cerpen': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
 break 
case 'playstore':
case 'ps':
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '❉─────────────────────❉\n'
for (let i of play){
store += `\n[ *PLAY STORE* ]\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(store)
break


case 'lirik':
            if(!q) return reply('mau lagu apa?')
            
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break		  
			  
case 'artinama':
if (!q) return reply('contoh: *!artinama* radja') 
b = args.join(" ")
anu = await fetchJson(`https://api.dapuhy.xyz/api/fun/artinama?nama=${q}&apikey=rcYersFHsr`)
bu =`${anu.result}`
reply(bu)
break

case 'artimimpi':
if (!q) return reply('contoh: *!artimimpi* dikejar ular') 
b = args.join(" ")
anu = await fetchJson(`https://api.dapuhy.xyz/api/fun/artimimpi?mimpi=${q}&apikey=rcYersFHsr`)
bu =`${anu.result}`
reply(bu)
break

case 'zodiak':
if (!q) return reply('contoh: *!zodiak* leo') 
b = args.join(" ")
anu = await fetchJson(`https://api.lolhuman.xyz/api/zodiak/${q}?apikey=itschandra`)
bu =`${anu.result}`
reply(bu)
break


case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
radja.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
break

case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
radja.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
break

case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
radja.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
break

case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
radja.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
break

case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
radja.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'onichan':
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/sound70.mp3`)
radja.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break

case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
radja.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
    break

case 'ttp':
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Radja Aditya`)
tp = args.join (" ")
ttp = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${tp}&color=black&apikey=hardianto`)
radja.sendMessage(from, ttp, sticker)
break

case 'caklontong':
game1 = await fetchJson (`https://rest2yeriko.herokuapp.com/api/kuis/caklontong?apikey=Yuzzu`)
setTimeout( () => {
reply(`❑ *Soal* :\n${game1.result.result.soal}\n❑ *Waktu* : 30detik`)
}, 0)       
setTimeout( () => {
reply(`❑ Jawabanya \n${game1.result.result.jawaban}\n❑ *Deskripsi*:\n${game1.result.result.desc}`)
}, 3000)    
break

case 'tebakgambar':
game2 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kuis/tebakgambar?apikey=Yuzzu`)
game3 = await getBuffer(game2.result.result.soalImg)
setTimeout( () => {
radja.sendMessage(from, game3, image, { quoted:mek, caption: 'Waktu 30detik'})
}, 0)   
setTimeout( () => { 
reply(`❑ Jawabanya : ${game2.result.result.jawaban}`)
}, 30000)
break

case 'siapakah':
game1 = await fetchJson (`https://api.dapuhy.xyz/api/fun/siapakah?apikey=rcYersFHsr`)
setTimeout( () => {
reply(`❑ *Pertanyaan* : ${game1.pertanyaan}\n❑ *Waktu* : 30detik`)
}, 0)       
setTimeout( () => {
reply(`❑ *Jawabannya* : ${game1.jawaban}`)
}, 30000)    
break

//CANVAS
case 'gura':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} itschandra`)
bo = args.join(" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${bo}&apikey=xZiyy`)
radja.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo By Itschandra Official' })
break

case 'kaneki':
case 'rem':
case 'lolimaker':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
bo = args.join(" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?nama=${bo}&apikey=xZiyy`)
radja.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo By Itschandra Official' })

case 'wallpaperflare':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
bo = args.join(" ")
bf = await fetchJson(`https://server-api-rey.herokuapp.com/api/downloader/wallpaperflare?query=${bo}&apikey=apirey`)
itschandra = await getBuffer(bf.result)
radja.sendMessage(from, itschandra, image, { quoted: mek, caption: 'Logo By Itschandra Official' })
break
///==========SERTIFIKAT MENU=========\\\
case 'hartacustom':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
bo = args.join(" ")
open = await getBuffer(`https://api.lolhuman.xyz/api/hartacustom?apikey=itschandra&text=${bo}`)
radja.sendMessage(from, open, image, { quoted: mek, caption: 'Logo By Itschandra Official' })
break
case 'tweettrump':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
bo = args.join(" ")
sedih = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=itschandra&text=${bo}`)
radja.sendMessage(from, sedih, image, { quoted: mek, caption: 'Logo By Itschandra Official' })
break
case 'amongus':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
bo = args.join(" ")
among = await getBuffer(`https://api.lolhuman.xyz/api/amongus?apikey=itschandra&text=${bo}`)
radja.sendMessage(from, among, sticker)
break
case 'badgirl':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
nama = args.join(" ")
open = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=itschandra&name=${nama}`)
radja.sendMessage(from, open, image, { quoted: mek, caption: 'SERTI By Itschandra Official' })
break
case 'goodgirl':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
nama = args.join(" ")
open = await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=itschandra&name=${nama}`)
radja.sendMessage(from, open, image, { quoted: mek, caption: 'SERTI By Itschandra Official' })
break
case 'bucinserti':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
nama = args.join(" ")
open = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=itschandra&name=${nama}`)
radja.sendMessage(from, open, image, { quoted: mek, caption: 'SERTI By Itschandra Official' })
break

case 'toloserti':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
nama = args.join(" ")
open = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=itschandra&name=${nama}`)
radja.sendMessage(from, open, image, { quoted: mek, caption: 'SERTI By Itschandra Official' })
break

case 'qrcode':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra`)
nama = args.join(" ")
open = await getBuffer(`https://api.lolhuman.xyz/api/qrcode?apikey=itschandra&text=${nama}`)
radja.sendMessage(from, open, image, { quoted: mek, caption: 'QR By Itschandra Official' })
break
			case 'attp2':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n*${prefix}${command}* RadjaAditya`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=itschandra&text=${encodeURIComponent(c)}`)
					radja.sendMessage(from, atetepe, sticker, { quoted: mek })
					break          
					case 'memeindo':
if(!q)
cantik = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=itschandra`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

///===========RANDOM MENU=====///

case 'estetic':
case 'elf':
case 'blackpink':
case 'megumin':
case 'wallnime':
if(!q)
cantik = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=itschandra`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break
case 'patrick':
case 'p':
if (args.length ==0)
bo = args.join(" ")
among = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=itschandra`)
radja.sendMessage(from, among, sticker)
break

case 'dadu':
if (args.length ==0)
bo = args.join(" ")
among = await getBuffer(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=itschandra`)
radja.sendMessage(from, among, sticker)
break

case 'stickeramong':
if (args.length ==0)
bo = args.join(" ")
among = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=itschandra`)
radja.sendMessage(from, among, sticker)
break
case 'dance':
if (args.length ==0)
bo = args.join(" ")
among = await getBuffer(`https://api.lolhuman.xyz/api/random/dance?apikey=itschandra`)
radja.sendMessage(from, among, GIF)
break


case 'girlneko':
case 'sadboy':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra Official`)
txt1 = args[0]
txt2 = args[1]
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?text1=${txt1}&text2=${txt2}&apikey=xZiyy`)
radja.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo By Itschandra Official' })
break

case 'serti1':
case 'serti2':
case 'serti3':
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} itschandra`)
txtt = args.join (" ")
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
radja.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Bro Hasil nya' })
break

case 'quotemaker':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Itschandra Official`)
txt1 = args.join (" ")
bf = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker?apikey=itschandra&text=${txt1} `)
radja.sendMessage(from, bf, image, { quoted: mek, caption: `Ini dia ${command} nya !!`})
break
//Group


  case 'fitnah':
            
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
			radja.sendMessage(from, cs[2], MessageType.text, target)
				break
				

case 'simi':
case 'simih':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} hai`)
boo = args.join(" ")
bll = await fetchJson(`https://apikey-bear3.herokuapp.com/api/f/simi?apikey=KingOfBear&query=${boo}`)
ini_txt =`*Simi: ${bll.result}*`
reply(ini_txt)
break

case 'welcome2':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
sendButton(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}welcome 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}welcome 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}

//═════════════════════════ [ VOKAL MENU ] ═════════════════════════

case 'hilih':
if (!q) return reply('contoh: *!hilih* Kamu Lagi Apa?') 
b = args.join(" ")
anu = await fetchJson(`https://api.dapuhy.xyz/api/vokal/hilih?kata=${q}&apikey=rcYersFHsr`)
bu =`${anu.result}`
reply(bu)
break

case 'halah':
if (!q) return reply('contoh: *!halah* Kamu Lagi Apa?') 
radja = args.join(" ")
itschandra = await fetchJson(`https://api.dapuhy.xyz/api/vokal/halah?kata=${q}&apikey=rcYersFHsr`)
botz =`${itschandra.result}`
reply(botz)
break

case 'holoh':
if (!q) return reply('contoh: *!holoh* Kamu Lagi Apa?') 
radja = args.join(" ")
itschandra = await fetchJson(`https://api.dapuhy.xyz/api/vokal/holoh?kata=${q}&apikey=rcYersFHsr`)
botz =`${itschandra.result}`
reply(botz)
break

case 'huluh':
if (!q) return reply('contoh: *!huluh* Kamu Lagi Apa?') 
radja = args.join(" ")
itschandra = await fetchJson(`https://api.dapuhy.xyz/api/vokal/huluh?kata=${q}&apikey=rcYersFHsr`)
botz =`${itschandra.result}`
reply(botz)
break  

//═════════════════════════ [ HEWAN MENU ] ═════════════════════════
case 'dog':  

anu = await fetchJson(`https://some-random-api.ml/img/dog`)
anu1 = await getBuffer(anu.link)
dha.sendMessage(from, anu1, image, {caption: `Lucu kan *ANJING* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'redpanda':  

anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
anu1 = await getBuffer(anu.link)
radja.sendMessage(from, anu1, image, {caption: `Lucu kan *RED PANDA* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'burung':  

anu = await fetchJson(`https://some-random-api.ml/img/bird`)
anu1 = await getBuffer(anu.link)
radja.sendMessage(from, anu1, image, {caption: `Lucu kan *BURUNG* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'fox':  

anu = await fetchJson(`https://some-random-api.ml/img/fox`)
anu1 = await getBuffer(anu.link)
radja.sendMessage(from, anu1, image, {caption: `Lucu kan *FOX* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'koala':  

anu = await fetchJson(`https://some-random-api.ml/img/koala`)
anu1 = await getBuffer(anu.link)
radja.sendMessage(from, anu1, image, {caption: `Lucu kan *KOALA* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'kucing':  

anu = await fetchJson(`https://some-random-api.ml/img/cat`)
anu1 = await getBuffer(anu.link)
radja.sendMessage(from, anu1, image, {caption: `Lucu kan *KUCING* nya mirip Kamu 😚😚`, quoted: mek})
break
       case 'panda':  

anu = await fetchJson(`https://some-random-api.ml/img/panda`)
anu1 = await getBuffer(anu.link)
radja.sendMessage(from, anu1, image, {caption: `Lucu kan *PANDA* nya mirip Kamu 😚😚`, quoted: mek})
                   break
				   
case 'infogempa':
if (!q) 

anu = await fetchJson (`https://app-botpri.herokuapp.com/api/info/gempa?apikey=Fxc7`)
aku = `INFO GEMPA\n\n*Waktu: ${anu.result.Waktu}*\n*Lintang: ${anu.result.Lintang}*\n*Bujur: ${anu.result.Bujur}*\n*Kekuatan: ${anu.result.Magnitudo}*\n*Kedalaman: ${anu.result.Kedalaman}*\n*Wilayah: ${anu.result.Wilayah}*`
buffer = await getBuffer (anu.result.Map)
radja.sendMessage(from, buffer, image, {quoted: mek, caption: aku})
break

case '62':
if (!q)

buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupan?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'santuy':
if (!q)

buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupansantuy?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'bocil':
if (!q)

buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanbocil?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'ukhti':
if (!q)

buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanukhty?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'rikagusriani':
if (!q)

buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanrikagusriani?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break


case 'ghea':
if (!q)

buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanghea?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break


case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': 
  
				   if (!isGroup) return reply(`Bukan Group Ya Sayang`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
                    case 'gantengcek':
                      	  
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                      	  
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                        	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                      	  
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                      	 
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':
                      	  
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':
                      	 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':
                      	  
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':
                      	  
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                      	  
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':
                      	  
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek':
                      	  
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':
                      	   
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                      	  
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':
                      	   
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':
                      	   
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':                      	  
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':                    	  
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😘`
                    reply(N)
                    break   

  case 'jadwalsholat':  
			       
   if (!q)return reply(`[❗] Example :\n !jadwalsholat *makassar*`)  
                   
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break

case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://api.dapuhy.xyz/api/randomimage/couple?apikey=rcYersFHsr`)
buff1 = await getBuffer (anu.result.pria)
radja.sendMessage(from, buff1, image, {quoted: mek, caption: '_Nih kak cowoknya_♂️'})
buff2 =await getBuffer (anu.result.wanita)
radja.sendMessage(from, buff2, image, {quoted: mek, caption: '_Nih kak ceweknya_♀️'})
break				   

//═════════════════════════ [ ISLAM MENU ] ═════════════════════════

case 'jadwalsholat2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
   
                     case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=itschandra`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break

case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 atau ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=itschandra`)
                    await radja.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break

case 'listkota':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/kota?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break

case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break

case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
//═════════════════════════ [ Download MENU ] ═════════════════════════

case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break


//═════════════════════════ [ STIKER MENU ] ═════════════════════════

case 'telesticker':
case 'stickertele':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=itschandra&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await radja.sendMessage(from, ini_buffer, sticker)
                    }      
   break

case 'zippyshare':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=itschandra&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
//═════════════════════════ [ Music MENU ] ═════════════════════════

case 'spotifysearch':
case 'spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break

case 'jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await radja.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await radja.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
//═════════════════════════ [ API RANDOM ] ═════════════════════════
case 'character':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                    ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await radja.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
               
case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await radja.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break


case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await radja.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break



case 'kusonime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=itschandra&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await radja.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break

case 'kusonimesearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await radja.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break

//═════════════════════════ [ Movie Menu ] ═════════════════════════

case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await radja.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break


case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=itschandra&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await radja.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=itschandra&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break


case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await radja.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

//═════════════════════════ [ ~QOUYES RANDOM ] ═════════════════════════
                    
                    
					  case 'stickerwa':
					  case 'swa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=itschandra&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=itschandra&img=${x}`)
                        await radja.sendMessage(from, ini_buffer, sticker)
                    }
                    break
					
case 'quotesdilan':
case 'qoutesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=itschandra`)
dhani = (quotedilan.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke *${command}* Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break
case 'puisi':
case 'piisi':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/random/puisi?apikey=itschandra`)
dhani = (quotedilan.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke *${command}* Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

case 'bucin2':
case 'katabucin2':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=itschandra`)
dhani = (quotedilan.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke *${command}* Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

case 'pantun2':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=itschandra`)
dhani = (quotedilan.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke *${command}* Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

case 'nama':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=itschandra`)
dhani = (quotedilan.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke *${command}* Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break


case 'faktaunik':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=itschandra`)
dhani = (quotedilan.result)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke *${command}* Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

  case 'ocr':
                    if ((isMedia && !radja.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(radja).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : radja
                        var filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=itschandra`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        reply(`Result : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
					
case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=itschandra`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break

case 'quotesimage':
cantik = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=itschandra`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break
//═════════════════════════ [ API RANDOM ] ═════════════════════════

case 'heroml':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await radja.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
//═════════════════════════ [ API RANDOM ] ═════════════════════════
  case 'jadwaltv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} rcti`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break

case 'kodepos':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=itschandra&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break

case 'jarak':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=itschandra&kota1=${teks1}&kota2=${teks2}`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   ╭───────────────❏\n`
                    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                    ini_txt += `❍┤ Motor : ${x.motor}\n`
                    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   ╰───────────────❏\n`
                    reply(ini_txt)
                    break
//═════════════════════════ [ API RANDOM ] ═════════════════════════

case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break


case 'hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'kumparan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kumparan?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n`
                        ini_txt += `Kategori : ${x.category}\n`
                        ini_txt += `Published : ${x.publish}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'republika':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/republika?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n`
                        ini_txt += `Kategori : ${x.category}\n`
                        ini_txt += `Published : ${x.publish}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'jalantikus':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jalantikus?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Kategori : ${x.category}\n`
                        ini_txt += `Published : ${x.time}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'cekapikey':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = "RESULT :\n"
                        ini_txt += `Username : *${get_result.username}*\n`
                        ini_txt += `Requests : *${get_result.requests}*\n`
                        ini_txt += `Terpkai hari ini : *${get_result.today}*\n`
                        ini_txt += `Tipe akun : *${get_result.account_type}*\n`
                        ini_txt += `Exp : *${get_result.expired}*\n\n`
                    reply(ini_txt)
                    break
// OTHER

case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=itschandra&url=${ini_link}`)
                    await radja.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
					
case 'togif':
        if (!m.quoted && m.quoted.mtype != mType.sticker) throw 'Reply Stikernya!'
        m.reply('Mohon tunggu sebentar~')
        var url = await require('../lib/webp2mp4').webp2mp4(await m.quoted.download())
        radja.sendMessage(m.chat, { url }, 'videoMessage', { caption: `Sukses~`, mimetype: 'video/gif', quoted: m })
        break


                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Radja Aditya`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=itschandra&text=${ini_txt}`).then((gambar) => {
                        radja.sendMessage(from, gambar, image, { quoted: mek, caption: `Nih Udah jadi *${command}* nya`})
                    })
                    break

                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Radja Aditya`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=itschandra&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        radja.sendMessage(from, gambar, image, { quoted: mek, caption: `Nih Udah jadi *${command}* nya`})
                    })
                    break

break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                case 'coolgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Radja Aditya`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=itschandra&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        radja.sendMessage(from, gambar, image, { quoted: mek, caption: `Nih Udah jadi *${command}* nya`})
                    })
                    break


case 'shortlink':
case 'sl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.indocan.asia`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=itschandra&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break

case 'stalktiktok':
                    if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=itschandra`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    radja.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt })
                    break

case 'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${prefix + command} usernamemu`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=itschandra`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    radja.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
//═════════════════════════ [ API RANDOM ] ═════════════════════════

case 'wasted':
return reply(`Example: ${prefix + command} https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=itschandra&img=${ini_url}`)
                    await radja.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'smoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=itschandra`)
                    await radja.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break

case 'smoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=itschandra`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=itschandra&img=` + ini_buffer.result.emoji.whatsapp)
                    await radja.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break


case 'mlcheck':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=itschandra`)
                    reply(get_result.result)
                    break
	//═════════════════════════ [ API RANDOM ] ═════════════════════════		  
			  
		
			  
					
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await radja.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				radja.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
      
				runtime = process.uptime()
				reply(`Runtime : 98 days, 19 hour, 16 minutes, 27 seconds`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					radja.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                radja.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break

	case 'kick':
			if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
radja.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
						
                    break
					
case 'suit':
            
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
			
                    case 'creategroup':
			case 'creategrup':
              
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					radja.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '_itschandra_',
    buttons: punten,
    headerType: 1
}
await radja.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: mek})
					}
					break
					default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  radja.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
radja.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
radja.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 radja.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
radja.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 radja.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERROR KAK|', 'red'), color(e, 'cyan'))
	}
    }
    }
    }
    }
    }
    }
