const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1ESmVuS082RHZWMjlyUW91eUpvbDJ1UGlRcHY2U3RDMEx6WEx2OWJubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2VHWU44SVF3V2RUT3RTcyt3MmU2cG1LalVDSWlDSkJQTDZpREpEYWNXRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRTNNWGh1b0lLckRBL0diUUpFdEh1ajZSSk5BSThaVmNIZnBQdHpPYUVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWRDUrSmhtVEYzR1NEY2ZjWWtOZG0zbko5VzZhZWFPSUc1aGhLOTB2Qmh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOME1leWVNaHh4RE5KcmZOSzJMeDJJc0loeWdZc2FucFdiU2czdGZLbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFZdzIydjA1NUwxVWJGS1F4dXV1ZmFkenUyV2ZhKzI1TlFod0FBdjU4U3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlLSFFmYWh4bUMrbmV6OEJTdytPejNWeEdJR0FyN0lqVXcwZXhJRXJWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2FzSEFVSnAyRWdibkUwRlJFQWFpenRsTEFKRVZteFZ6UURRK3Q0eThpaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI5K25uSEFjOExIL1VqcDNoRW1JcEx6amd2ekhOb1diRWZhUXZLMXRKb2dYNkxoTU9xMFJ4Wk04aGI4N3ZnM0twNUphZHpicmZCanpHY3k4dFdsU0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJBZVFJVjhDREZCaTV4MkFlTjZ3cHJGc2VQN05kcXdWRVA2UUQ5REdOQStJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjcxMTMwNTA5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNEQ2QzM5RjUxNUE5NTBGOUE4MUE3QkVBNTkwMzREOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NzgwMjM3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3MTEzMDUwOTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREQ1MjdDMEEyNEVCOTE2QTlDNUVCMUQzQ0Y4RjJGMjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDc4MDIzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzExMzA1MDk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ5NkRGQkNDOTY1Q0EyMjJGNDc4NDYxNkMxOTQxNEJDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ3ODAyMzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkpENVhSOUVMIiwibWUiOnsiaWQiOiIyMTI3MTEzMDUwOTQ6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLYrNin2LHZiiDYp9mE2KjYrdirINi52YYg2KfYs9mFIiwibGlkIjoiMjcxNDU5NzUwNTE4ODY0OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJYkU4RGdReUtUZnhBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFWDFmNTM2dDVhak1tV1g0ODdpekdXMVZTQ1hTTit5T0lycnhoa2EvaTJFPSIsImFjY291bnRTaWduYXR1cmUiOiJFZ2JrSnpCWnFOaWRqZXJydVllZksyZnVnakRvTWNWZWVPT2JKdzNCRGxCRkx2bmRyanArYTJYQ2ZyNUNIa0x3RXV4SkIrK1B0b0loY1dmTzRhWkhCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXZWTW1tVlJSRkN1SjJDWkdpSHcwaEtxOG1JN2Z1cGNNZlN0aEJsMXAveWRJRHQ4clVPUitNaDhUMTltTmdGVDRBd25TZHAraTk4RWh1bnFMai9FQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTI3MTEzMDUwOTQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSRjlYK2QrcmVXb3pKbGwrUE80c3hsdFZVZ2wwamZzamlLNjhZWkd2NHRoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ3ODAyMzYsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXJxIn0=",
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
