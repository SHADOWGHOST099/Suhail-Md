const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//â•â•â•â•â•â•â•[Required Variables]â•â•â•â•â•â•â•â•\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Shadowxghost099@gmail.com"
global.location="Accra, Ghana."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SHADOWGHOST099/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va861KXCBtxGv3AUjY2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va861KXCBtxGv3AUjY2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/GHOST-BOT.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "✰Ghost-Bot✰" 


global.devs = "233597087405" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233597087405";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "Ghost-Bot" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_55_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNCMW5lN1R4cFZkRFFOWGxaVWxuQ3Avb2cxYXdwT0w5QzlQcWFyZjNFSms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIngyRklUM1oyVGM2NFh2Yy1RTXA0QndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTc3ZDNkYTctYzM2NC00NGZjLTk5ZWQtZjJkMDQxNGM1YjRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTEsXG4gICAgICAxMDYsXG4gICAgICA1MCxcbiAgICAgIDIzLFxuICAgICAgMjM2LFxuICAgICAgMzcsXG4gICAgICAxMDcsXG4gICAgICAxODEsXG4gICAgICAxMDAsXG4gICAgICAyMDgsXG4gICAgICA4OCxcbiAgICAgIDE2MSxcbiAgICAgIDEwNSxcbiAgICAgIDIwMyxcbiAgICAgIDE4MixcbiAgICAgIDk2LFxuICAgICAgMTU2LFxuICAgICAgMTY1LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDExNyxcbiAgICAgIDI1MixcbiAgICAgIDgzLFxuICAgICAgMTYwLFxuICAgICAgMTYzLFxuICAgICAgMjI5LFxuICAgICAgMTUzLFxuICAgICAgNTQsXG4gICAgICAxNyxcbiAgICAgIDg5LFxuICAgICAgMTQ3LFxuICAgICAgMTQ5LFxuICAgICAgMTgzLFxuICAgICAgMjI4LFxuICAgICAgNTAsXG4gICAgICAzOCxcbiAgICAgIDIwMixcbiAgICAgIDE1NixcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlk2VkxUTEc5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTcwODc0MDU6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMjg0MzI2MzQwNjMwOTozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKN1hzcEVIRU1pWXpMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRBL3FtdDJ0YSs2YjhPTmJWY3NqQno0TE5LOVJJYU1HWWkwTVEvZnFYVVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWExvREJCbFdTb1FnMUkwUlZpYWxxeFBrRTd6ZFFDTE1Ld3BvUDhKeGsxejIrbzgvWUdwL01tTUplVDBvaCtBeW1zZW9PVmhEb3Z0dWZaZzBDUVppREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVBqNkl2VmIxbnc2WjRqWEpBOFU5alhyV0QrWTgvWC9jUk5Ca2F6NVFpbjZLVFhQb0g0TGwzNFFvNy9BSkZBNWxLMzFQa3lGK0NrTmI5Q1IyQkdGQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTk3MDg3NDA1OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAxMDEyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9ENFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0Q0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSnR4SU5TV0UwUU83MHNrTkw3TVkvOUZscG44eWozWEozMjhPR215T3FYUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE1NTMwMTM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNzcyOTk5MTgxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "The S Team" , // ```ã€Ž á´˜á´á´¡á´‡Ê€á´‡á´… Ê™Ê sá´œÊœá´€ÉªÊŸÂ²Â²Â¹-á´á´… ã€```", //*ã€Žsá´œÊ™sá´„Ê€ÉªÊ™á´‡ â€¢ sá´œÊœá´€ÉªÊŸ á´›á´‡á´„Êœã€*\n https://www.youtube.com/@SHADOWGHOST099"),
 
  author : process.env.PACK_AUTHER|| "GHOST-BOT",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ghost-Bot",
  ownername:process.env.OWNER_NAME|| "S͓̽M͓̽A͓̽L͓̽L͓̽ B͓̽O͓̽Y͓̽ O͓̽F͓̽F͓̽I͓̽9",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GHOST-BOT"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
