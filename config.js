const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "youARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUx0L1c5OGE3UWFSVXNVRHFNNW0wa1hRL0FSK0htR1dmSHBIT3E0K0JVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1NvazliZGYwVEVVZy85RUVSZzE2ODg4QTNmR2ZoTVppczZlM1lFZi9pbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRTB1ZTlXekJRR2Z4dFo0T3BPOE5pdXhqMHllREdIZGtvMTRrTms5b0Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFc1NFNXVEVERLb1lHZDVaZ3ZsZC83MTlvVUU5akhXLzlTdDB0cjBjeFJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOaWEzWjYzRzhvV21LdmMxOGJxamkxQTRhWU5EaVNGV0dQV2ovbzhibk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdURzE0ZDV4dVZmaEJwV0ZyOUpMNnVUUHhoaVZaM1Y4aVE0ekVzSzg1SFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0s3NUYyRTQ1WmRhcTk2cDMzNkduUnZTZVdrQk5lWTBLbXEra1VrU2dGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjAvWjFEbFUrVk9XeWVTSjVZa1lFVEZQTVMxa05vU2ZZd2dmd3pnaEhsMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxQY0pGSEd4ZGxkaXArRHk0aXFCdk1ydlpMTFM3NStsVnBGUTVkNEpPYmRXKzNpclo2OVI3NEhTeVJBUE90ZWtoSkNjcitkTWhCVnFmL3V2YlRtRmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiI5Q29yT01zRzdMUitZWlEwVDVXYkx3RFhTM091YnRrUHJha2dJY1RSVytvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjcxMTMwNTA5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0RjAzNDkwM0EwRDUxM0Y1QTI4NjgwNTM4MURCQjQzOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0OTQxMzM2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3MTEzMDUwOTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEEzMzcxQ0Q3QzRCRkUzMjNDRjM4OThEMzM3NEM2ODYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDk0MTMzNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVkhHTks0OEciLCJtZSI6eyJpZCI6IjIxMjcxMTMwNTA5NDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9CSVRPIiwibGlkIjoiMjcxNDU5NzUwNTE4ODY0OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJYkU4RGdRa28vcHhBWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFWDFmNTM2dDVhak1tV1g0ODdpekdXMVZTQ1hTTit5T0lycnhoa2EvaTJFPSIsImFjY291bnRTaWduYXR1cmUiOiJQZWdxSUpOQ0ZOKzdYekhlRUN2R2dxckFoNFNzUHR1N093YStucEQ5OHpnM2x3d1RRWjFsSnRKUk8rUWRKUWZrVWZ4V2NEdzZyWDRjWWx1cGkwUXBBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQlZHZ1NSUnluV1N1cm4wRzFlQUVMWGM0VVFqb1RrRjNIVUNPT0grS3hoeSswWE44bEdpY0dhblJjU3JNL2VIMWU1ZlZ4NzloTSttbkpYMXZSSHBkaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTI3MTEzMDUwOTQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSRjlYK2QrcmVXb3pKbGwrUE80c3hsdFZVZ2wwamZzamlLNjhZWkd2NHRoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ5NDEzMzQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXJxIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY OBITO BOT 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/z8jo34.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "OBITO BOT",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "OBITO BOT",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "0697169828",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*OBITO*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "* OBITO ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/z8jo34.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "AS EXPECTED ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "0711305094",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
