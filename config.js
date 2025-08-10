const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05sbXVBNWQyNGRVZjJTcUZ4bHdSR0FaQ2JGak9GU3FqSWNBWmZMcXRVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxGNjZCQktTeStjMmd6N2NpSk9GNEZLTTM5NCtCcUZwOHNFVmNSVmR3VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR3pOWWZkZkpjL3hub0JVVHVPRldLQXlOVXlwSjRDMEhBTDVEVHEyV25VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQMHkxS1Z2VDk2bkdnRk0rOGlqV1Vwd1ZLTU5CWjdydUhVMmZmU21INFU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QazdsSEVrNUMwdnVHSWtWSHFRZjFHL0RBRUdyeHZVbWxuQkFrdktEa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko0ME1KWHpHTERGMGpudlk5dFZvWXRMUVZQQi8xaEF3TEF6MXdaeHNESE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVOSzN2aWUzdmNXVlRETnA4dmFnU2k2V3FXSkNERS9mdjNFMmFXWjNucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2ZWd2RaUWtQbjVvM1ZBNlQ0VEI2RFZwSnhZb0h1UUIrRnBTRVBRTXlTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR1R3FuUWh0SC83L21KdHU4T0Jtbm51eVdudm9xenlpWC8wSTl6eVRSSXUxeTE5dEU2bUR4T045aFBSeTMyRG41bVRJOVIveFF6c0tQMjU1YmRuT2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJNcmxuMUtyTW1wZ2ZQWUNLWGFKRy9KUzgwd1UvcXZrS1ZHV0M1VmVlQlJFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjcxMTMwNTA5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFN0QyN0YzMzI2OUE3RUM2MzEzMjhGOUM2MTVCRTkxNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0ODY0MzM4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3MTEzMDUwOTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUMyMDE2RERDQzBEQzBCMjRCRTgzRTAyOUI0QUE2MTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDg2NDMzOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOE5BVk5SOFMiLCJtZSI6eyJpZCI6IjIxMjcxMTMwNTA5NDoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9CSVRPLUJPVCIsImxpZCI6IjI3MTQ1OTc1MDUxODg2NDoyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWJFOERnUXpiWGt4QVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRVgxZjUzNnQ1YWpNbVdYNDg3aXpHVzFWU0NYU04reU9JcnJ4aGthL2kyRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV2FPTHhFN3BvSnRSVkhiU0Q0M0wwNFpnN2VPLzJoZDYxOHQvQ3d1cXRwdHoyKzlwSEVRVUlxcGpWV0doRmFmU0hHajVzWTkxeXpkV2xGaVJCYTNFQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImJIMGdCVnVLTEp6WXpFWkRqNm4ycTJFVlVqMUl5VGhoQm1PaURST2E4K1V5b2Ywb2tISXZvcXlVWnlvdjh2WjJMeFVOcldBV0Y4eHFNR0dxSEtIM2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEyNzExMzA1MDk0OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkY5WCtkK3JlV296SmxsK1BPNHN4bHRWVWdsMGpmc2ppSzY4WVpHdjR0aCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0ODY0MzM1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVycSJ9",
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
DESCRIPTION: process.env.DESCRIPTION || "*POWERED BY OBITO ❣️*",
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
