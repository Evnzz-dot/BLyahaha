const fetch = require('node-fetch');
const cheerio = require('cheerio');
const readlineSync = require('readline-sync');
const randomname = require('node-random-name');
const chalk = require('chalk');
const email = () => new Promise((resolve,reject)=>{
  fetch("https://10minutemail.com",{
    method:"GET",
    
  })
})

const getauth = ()=> new Promise((resolve,reject)=>{
  fetch("https://accounts.bukalapak.com/register",{
    method:"GET",
  })
  .then( async ress=>{
    const $ = cheerio.load(await ress.text())
    const cookie = ress.headers.raw()['set-cookie'];
    const headers = ress.headers.raw()
    const result = {
      headers : headers,
      cookie : cookie,
      authorize : $('meta[name=csrf-token]').attr("content")
    }
    resolve(result)
  })
  .catch(err=>{
    reject(err)
  })
});
const get_regist = (identi, identi1, cookieidenti, browser_id, session, bebe, email, authenticity)=> new Promise((resolve,reject)=>{
  fetch("https://accounts.bukalapak.com/register",{
    method:"POST",
    headers:{
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'bukalapak-identity': `${identi}`,
      'bukalapak-otp-device-id': `${identi1}`,
      'bukalapak-otp-method': 'email',
      'content-length': '214',
      'content-type': 'application/json',
      'cookie': `${cookieidenti}; ${browser_id}; ${session}; _gcl_au=1.1.1907857496.1629531744; __asc=b259899517b67a928e15dd62ba5; __auc=b259899517b67a928e15dd62ba5; _ga=GA1.2.1602511861.1629531744; _gid=GA1.2.33248540.1629531745; _fbp=fb.1.1629531744982.547853850; cto_bundle=4C8NaF9hakdEdThtZWxkQ3B2UzJlNnU1dDd4bnZjb3pyU3ZMOElrSTd1UGVuTjJDSGlSJTJCcGo2VnJpTEhEOW5NTFBJWmVLSHdzWVU2bkJxZW5iY3ZRMXFYNmZrZUJ2TkZCSlBacGhUVHd6aWZRMGJoRFFDR1JHR0MyUVRLMWFsbE1mJTJGT3U; _gat_UA-12425854-1=1; _ga_R2T40V5QM5=GS1.1.1629531744.1.0.1629531747.57; G_ENABLED_IDPS=google; ${bebe}`,
      'origin': 'https://accounts.bukalapak.com',
      'referer': 'https://accounts.bukalapak.com/register?comeback=https%3A%2F%2Fwww.bukalapak.com%2F&from=nav_header',
      'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
    },
    body: JSON.stringify({"access_token":"12n9yzQKGbP7yccftqZPlfa8rTxNAoh_dIoDD6KTMJiX6Q","user":{"email":email},"authenticity_token":`${authenticity}`})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});
const get_regist_Otp = (identi, identi1, kode_otp,cookieidenti, browser_id, session, bebe, email, authenticity)=> new Promise((resolve,reject)=>{
  fetch("https://accounts.bukalapak.com/register",{
    method:"POST",
    headers:{
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'bukalapak-email-token': kode_otp,
      'bukalapak-identity': `${identi}`,
      'bukalapak-otp': kode_otp,
      'bukalapak-otp-device-id': `${identi1}`,
      'bukalapak-otp-method': 'email',
      'bukalapak-phone-token' : kode_otp,
      'content-length': '214',
      'content-type': 'application/json',
      'cookie': `${cookieidenti}; ${browser_id}; ${session}; _gcl_au=1.1.1907857496.1629531744; __asc=b259899517b67a928e15dd62ba5; __auc=b259899517b67a928e15dd62ba5; _ga=GA1.2.1602511861.1629531744; _gid=GA1.2.33248540.1629531745; _fbp=fb.1.1629531744982.547853850; cto_bundle=4C8NaF9hakdEdThtZWxkQ3B2UzJlNnU1dDd4bnZjb3pyU3ZMOElrSTd1UGVuTjJDSGlSJTJCcGo2VnJpTEhEOW5NTFBJWmVLSHdzWVU2bkJxZW5iY3ZRMXFYNmZrZUJ2TkZCSlBacGhUVHd6aWZRMGJoRFFDR1JHR0MyUVRLMWFsbE1mJTJGT3U; _gat_UA-12425854-1=1; _ga_R2T40V5QM5=GS1.1.1629531744.1.0.1629531747.57; G_ENABLED_IDPS=google; ${bebe}`,
      'origin': 'https://accounts.bukalapak.com',
      'referer': 'https://accounts.bukalapak.com/register?comeback=https%3A%2F%2Fwww.bukalapak.com%2F&from=nav_header',
      'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
    },
    body: JSON.stringify({"access_token":"12n9yzQKGbP7yccftqZPlfa8rTxNAoh_dIoDD6KTMJiX6Q","user":{"email":email},"authenticity_token":`${authenticity}`})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});
const get_regist_formdata = (identi, cookieidenti, browser_id, session, bebe, email, nama, authenticity)=> new Promise((resolve,reject)=>{
  fetch("https://accounts.bukalapak.com/register",{
    method:"POST",
    headers:{
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'bukalapak-identity': `${identi}`,
      'bukalapak-otp-key': 'null',
      'content-length': '303',
      'content-type': 'application/json',
      'cookie': `${cookieidenti}; ${browser_id}; ${session}; _gcl_au=1.1.1907857496.1629531744; __asc=b259899517b67a928e15dd62ba5; __auc=b259899517b67a928e15dd62ba5; _ga=GA1.2.1602511861.1629531744; _gid=GA1.2.33248540.1629531745; _fbp=fb.1.1629531744982.547853850; cto_bundle=4C8NaF9hakdEdThtZWxkQ3B2UzJlNnU1dDd4bnZjb3pyU3ZMOElrSTd1UGVuTjJDSGlSJTJCcGo2VnJpTEhEOW5NTFBJWmVLSHdzWVU2bkJxZW5iY3ZRMXFYNmZrZUJ2TkZCSlBacGhUVHd6aWZRMGJoRFFDR1JHR0MyUVRLMWFsbE1mJTJGT3U; _gat_UA-12425854-1=1; _ga_R2T40V5QM5=GS1.1.1629531744.1.0.1629531747.57; G_ENABLED_IDPS=google; ${bebe}`,
      'origin': 'https://accounts.bukalapak.com',
      'referer': 'https://accounts.bukalapak.com/register?comeback=https%3A%2F%2Fwww.bukalapak.com%2F&from=nav_header',
      'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
    },
    body: JSON.stringify({"access_token":"12n9yzQKGbP7yccftqZPlfa8rTxNAoh_dIoDD6KTMJiX6Q","user":{"email":`${email}`,"name":`${nama}`,"password":"evan0512","password_confirmation":"evan0512"},"authenticity_token":`${authenticity}`})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});
const get_regist_sms = (identi, identi1, cookieidenti, browser_id, session, bebe, email, authenticity)=> new Promise((resolve,reject)=>{
  fetch("https://accounts.bukalapak.com/register",{
    method:"POST",
    headers:{
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'bukalapak-identity': `${identi}`,
      'bukalapak-otp-device-id': `${identi1}`,
      'bukalapak-otp-method': 'sms',
      'content-length': '209',
      'content-type': 'application/json',
      'cookie': `${cookieidenti}; ${browser_id}; ${session}; _gcl_au=1.1.1907857496.1629531744; __asc=b259899517b67a928e15dd62ba5; __auc=b259899517b67a928e15dd62ba5; _ga=GA1.2.1602511861.1629531744; _gid=GA1.2.33248540.1629531745; _fbp=fb.1.1629531744982.547853850; cto_bundle=4C8NaF9hakdEdThtZWxkQ3B2UzJlNnU1dDd4bnZjb3pyU3ZMOElrSTd1UGVuTjJDSGlSJTJCcGo2VnJpTEhEOW5NTFBJWmVLSHdzWVU2bkJxZW5iY3ZRMXFYNmZrZUJ2TkZCSlBacGhUVHd6aWZRMGJoRFFDR1JHR0MyUVRLMWFsbE1mJTJGT3U; _gat_UA-12425854-1=1; _ga_R2T40V5QM5=GS1.1.1629531744.1.0.1629531747.57; G_ENABLED_IDPS=google; ${bebe}`,
      'origin': 'https://accounts.bukalapak.com',
      'referer': 'https://accounts.bukalapak.com/register?comeback=https%3A%2F%2Fwww.bukalapak.com%2F&from=nav_header',
      'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
    },
    body: JSON.stringify({"access_token":"12n9yzQKGbP7yccftqZPlfa8rTxNAoh_dIoDD6KTMJiX6Q","user":{"phone":email},"authenticity_token":`${authenticity}`})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});
const get_regist_Otp_sms = (identi, identi1, kode_otp,cookieidenti, browser_id, session, bebe, email, authenticity)=> new Promise((resolve,reject)=>{
  fetch("https://accounts.bukalapak.com/register",{
    method:"POST",
    headers:{
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'bukalapak-email-token': kode_otp,
      'bukalapak-identity': `${identi}`,
      'bukalapak-otp': kode_otp,
      'bukalapak-otp-device-id': `${identi1}`,
      'bukalapak-otp-method': 'sms',
      'bukalapak-phone-token' : kode_otp,
      'content-length': '209',
      'content-type': 'application/json',
      'cookie': `${cookieidenti}; ${browser_id}; ${session}; _gcl_au=1.1.1907857496.1629531744; __asc=b259899517b67a928e15dd62ba5; __auc=b259899517b67a928e15dd62ba5; _ga=GA1.2.1602511861.1629531744; _gid=GA1.2.33248540.1629531745; _fbp=fb.1.1629531744982.547853850; cto_bundle=4C8NaF9hakdEdThtZWxkQ3B2UzJlNnU1dDd4bnZjb3pyU3ZMOElrSTd1UGVuTjJDSGlSJTJCcGo2VnJpTEhEOW5NTFBJWmVLSHdzWVU2bkJxZW5iY3ZRMXFYNmZrZUJ2TkZCSlBacGhUVHd6aWZRMGJoRFFDR1JHR0MyUVRLMWFsbE1mJTJGT3U; _gat_UA-12425854-1=1; _ga_R2T40V5QM5=GS1.1.1629531744.1.0.1629531747.57; G_ENABLED_IDPS=google; ${bebe}`,
      'origin': 'https://accounts.bukalapak.com',
      'referer': 'https://accounts.bukalapak.com/register?comeback=https%3A%2F%2Fwww.bukalapak.com%2F&from=nav_header',
      'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
    },
    body: JSON.stringify({"access_token":"12n9yzQKGbP7yccftqZPlfa8rTxNAoh_dIoDD6KTMJiX6Q","user":{"phone":email},"authenticity_token":`${authenticity}`})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});
const get_regist_formdata_sms = (identi, key, cookieidenti, browser_id, session, bebe, email, nama, authenticity)=> new Promise((resolve,reject)=>{
  fetch("https://accounts.bukalapak.com/register",{
    method:"POST",
    headers:{
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'bukalapak-identity': `${identi}`,
      'bukalapak-otp-key': key,
      'content-length': '289',
      'content-type': 'application/json',
      'cookie': `${cookieidenti}; ${browser_id}; ${session}; _gcl_au=1.1.1907857496.1629531744; __asc=b259899517b67a928e15dd62ba5; __auc=b259899517b67a928e15dd62ba5; _ga=GA1.2.1602511861.1629531744; _gid=GA1.2.33248540.1629531745; _fbp=fb.1.1629531744982.547853850; cto_bundle=4C8NaF9hakdEdThtZWxkQ3B2UzJlNnU1dDd4bnZjb3pyU3ZMOElrSTd1UGVuTjJDSGlSJTJCcGo2VnJpTEhEOW5NTFBJWmVLSHdzWVU2bkJxZW5iY3ZRMXFYNmZrZUJ2TkZCSlBacGhUVHd6aWZRMGJoRFFDR1JHR0MyUVRLMWFsbE1mJTJGT3U; _gat_UA-12425854-1=1; _ga_R2T40V5QM5=GS1.1.1629531744.1.0.1629531747.57; G_ENABLED_IDPS=google; ${bebe}`,
      'origin': 'https://accounts.bukalapak.com',
      'referer': 'https://accounts.bukalapak.com/register?comeback=https%3A%2F%2Fwww.bukalapak.com%2F&from=nav_header',
      'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
    },
    body: JSON.stringify({"access_token":"12n9yzQKGbP7yccftqZPlfa8rTxNAoh_dIoDD6KTMJiX6Q","user":{"phone":`${email}`,"name":`${nama}`,"password":"kaserinas123","password_confirmation":"kaserinas123"},"authenticity_token":`${authenticity}`})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});

const getnonaktif = (bearer,identi,identi1) => new Promise((resolve,reject)=>{
  fetch('https://api.bukalapak.com/users/tfa-status', {
    method: 'PUT',
    headers: {
        'authority': 'api.bukalapak.com',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'sec-ch-ua-mobile': '?0',
        'authorization': `Bearer ${bearer}`,
        'bukalapak-otp': '',
        'bukalapak-device-fingerprint': '1e31429788c5462f145d332c852334ee',
        'bukalapak-otp-device-id': `${identi}`,
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        'content-type': 'application/json',
        'bukalapak-identity': `${identi1}`,
        'origin': 'https://www.bukalapak.com',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.bukalapak.com/',
        'accept-language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"state":"inactive"})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});

const getnonaktifotp = (bearer,otpnonaktif, identi,identi1) => new Promise((resolve,reject)=>{
  fetch('https://api.bukalapak.com/users/tfa-status', {
    method: 'PUT',
    headers: {
        'authority': 'api.bukalapak.com',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'sec-ch-ua-mobile': '?0',
        'authorization': `Bearer ${bearer}`,
        'bukalapak-otp': otpnonaktif,
        'bukalapak-device-fingerprint': '1e31429788c5462f145d332c852334ee',
        'bukalapak-otp-device-id': `${identi}`,
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        'content-type': 'application/json',
        'bukalapak-identity': `${identi1}`,
        'origin': 'https://www.bukalapak.com',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.bukalapak.com/',
        'accept-language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"state":"inactive"})
  })
  .then(res => res.json())
  .then(ress=>{
    resolve(ress)
  })
  .catch(err=>{
    reject(err)
  })
});

(async()=>{
  // const devicekey = await getnonaktifattr();
  // console.log(devicekey)
  // const id = devicekey
  // console.log(id)
   const first_name = randomname({first : true})
   const last_name = randomname({last: true})
   const name = `${first_name} ${last_name}`
   const get_attr =await getauth();
   const identity = get_attr.cookie[0].split(";")[0].split("=")[1]
   const identity1 = get_attr.cookie[0].split(";")[0].split("=")[1]
   const cookieidentity = get_attr.cookie[0].split(";")[0]
   const browserid = get_attr.cookie[1].split(";")[0]
   const sessionid = get_attr.cookie[2].split(";")[0]
   const bundle = get_attr.cookie[3].split(";")[0]
   const auth = get_attr.authorize
   console.log(`
   ==================================================================
   ================ Auto Create Bukalapak By. EVAN GANTENG ===================
   ==================================================================
   `)
   console.log(`
   Pilih Fitur Email/Sms
   [1]. Sms
   [2]. Email
   `)
   const fitur = readlineSync.question("Masukan angka fitur ?")
   if(fitur === "1"){
   const nomor = readlineSync.question("[REQ] Masukan nomer ? ")
      const register = await get_regist_sms(identity,identity1,cookieidentity,browserid,sessionid,bundle,nomor,auth)
      const mesagge = register.errors[0].message
      console.log(`[INFO] ${mesagge}`)
      const Otp = readlineSync.question("[INFO] Masukan otp?")
      const register_otp = await get_regist_Otp_sms(identity,identity1,Otp,cookieidentity,browserid,sessionid,bundle,nomor,auth)
      const key = register_otp.meta.otp_key
      const register_otp_form = await get_regist_formdata_sms(identity,key,cookieidentity,browserid,sessionid,bundle,nomor,name,auth)
      const mesagge2 = register_otp_form.data.phone
      const token = register_otp_form.data.authentication.access_token
      console.log(`[INFO] Berhasil Mendaftarkan dengan Nomor ${mesagge2}`)
      const nonaktifotp = await getnonaktif(token,identity,identity1)
      const getotp = nonaktifotp.meta.user_phone
      console.log(chalk.red(`[INFO] Sedang Mengirim Pesan OTP ke ${getotp}`))
      const tanyaotpnon = readlineSync.question("[INFO] Masukan Otp? ")
      const nonaktif = await getnonaktifotp(token,tanyaotpnon,identity,identity1)
      const pesan = nonaktif.message
      console.log(chalk.green(`[INFO] ${pesan}`))
   }else if(fitur === "2"){
      const email = readlineSync.question("[REQ] Masukan email ? ")
      const register = await get_regist(identity,identity1,cookieidentity,browserid,sessionid,bundle,email,auth)
      const mesagge = register.errors[0].message
      console.log(`[INFO] ${mesagge}`)
      const Otp = readlineSync.question("[INFO] Masukan otp?")
      const register_otp = await get_regist_Otp(identity,identity1,Otp,cookieidentity,browserid,sessionid,bundle,email,auth)
      const mesagge1 = register_otp.errors[0].message
      console.log(`[INFO] ${mesagge1}`)
      const register_otp_form = await get_regist_formdata(identity,cookieidentity,browserid,sessionid,bundle,email,name,auth)
      const mesagge2 = register_otp_form
      console.log(chalk.green(`[INFO] ${mesagge2}`))
   }
})();