const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tCWUFnQzNQczhwS3pRK1Y4TW43UTgrWDdMUXV6MFdabnRWUmJONm9Gaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXV4b2RmVUVIcGQwQnRoY1hVTWErVHhRUWY3aVBQNHJEU1QrVjlhSU5pRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTmJFN1IxQjRSWU5EZ2lOeDA5bkdVTGV5a2ZzeDZzQmlvOHhTS1pJclZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMaGlmb2dWNDNUMUFFTXZ4QjluSHlGOVd5aWRWYkoxWEZ2OXM5aXRUY0ZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLb3lNL3RobmYxYVJCTnpjb3BSM2VWZGhaSzFaNU9TMW0zMjFxM0l2Vm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZQYzlOTFRQT05Dc0liaVBncTdQb0dCbFA4Z0UvK05VdHhkN21LSWptU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU52cmY2MkJUR0orb1hwR0h1YXR0K2FDeEEwK0dlSXBPQ05PVUlWYmdIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2lWN01wUzdVZTd2d2Q3UVBkMHB1TzdvS0lqbEM5akJSYWlQSU5kYVVVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZXVmtXKzNzVjluRlB3bDF6Z1hNcW9oQWlybW1yazBYS21HL1l2c2J3T05uYlV4RnUydHNBZ1J4cmVYYmhJeGlOdEdFRUtHeHQrcVQxdjVkampoZmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IlYyR0lKOHdoaG9tWEwrOTBZQThnNmsrb1Nob0x4ZU85YVIwTzZKWmlEVU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzExMzA1MDk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEzNDQzMkJDQTk1Q0U2MUFCOTE4MUZCQTBFOUVGM0I0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ5NDMwNDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjcxMTMwNTA5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMEFENTI0QkQ1NkUwRkIwNDZEMEVDOEZDODgxOTQ4MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0OTQzMDQ4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJESEs2UUI0UiIsIm1lIjp7ImlkIjoiMjEyNzExMzA1MDk0OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT0JJVE8iLCJsaWQiOiIyNzE0NTk3NTA1MTg4NjQ6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liRThEZ1F3cHpweEFZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVYMWY1MzZ0NWFqTW1XWDQ4N2l6R1cxVlNDWFNOK3lPSXJyeGhrYS9pMkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdyY2xVdEtKclByWFlZNUxvaS92ejZIeG5YSGhNL3FobGV6YW83N2xtdmpDSHhXYXZ2Z0RCUzdFQ3A1dDczL2JXSDBnOE1zRXhBWXl0eHk5WHZ5UERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmSG03c3V1MkxpT2lRVWRRWkhReEJ3N25XQlVvd0c3TjRZUHBlVTQ3Z1JJdU9WMUlURjRNRkNVN0Fpd1JmY2w0dndNdkxpbGJrOUxJQW1SOUw5dnhqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjcxMTMwNTA5NDo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJGOVgrZCtyZVdvekpsbCtQTzRzeGx0VlVnbDBqZnNqaUs2OFlaR3Y0dGgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDk0MzA0NiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFcnEifQ==",
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
