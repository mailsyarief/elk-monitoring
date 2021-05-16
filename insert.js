const fetch = require('node-fetch');

function insertData() {
    fetch("http://localhost:8080/employee", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Microsoft Edge\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "voter_id=1117042ba34ec10b; io=ONGM_roBo_EiX5pQAHmO"
        },
        "referrer": "http://localhost:8080/employee",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "_id=&fullName=Test+Data&email=seeder%40seeder.com&mobile=8123122223&city=KOTA+JAKARTA+SELATAN",
        "method": "POST",
        "mode": "cors"
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting() {
    insertData()
    await sleep(2000);
    insertData()
    await sleep(2000);
    console.log("OK")
    delayedGreeting()
}

delayedGreeting();