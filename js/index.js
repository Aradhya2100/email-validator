console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "aradhyasingh",
    "eamil": "aradhyasingh9889@gmail.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "aradhyasingh2100@gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true,
}



submitBtn.addEventListener("click", async (e)=>{
   e.preventDefault() 
   console.log("clicked!")
   resultCont.innerHTML = ` <img width="123" src="img/loading.svg" alt="">`
   let key = "ema_live_ekDMN7ByK6qBDCZaoMIaUYMpjVaWMJzXqKfJZtIn"
   let email = document.getElementById("username").value
   let url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_ekDMN7ByK6qBDCZaoMIaUYMpjVaWMJzXqKfJZtIn&email=support@emailvalidation.io`
   let res = await fetch(url)
   let result = await res.json()
   let str = ``
   for (key of Object.keys(result)){
    if(result[key] !== "" && result[key] !== " "){ 
       str = str + `<div>${key}: ${result[key]}</div>`
   }
}

    console.log(str)
    resultCont.innerHTML = str
})


