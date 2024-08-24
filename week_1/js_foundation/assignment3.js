
console.clear();
setInterval(() => {
    const time = new Date();
    let sec = String(time.getSeconds()).padStart(2 ,"0")
    let min = String(time.getMinutes()).padStart(2 , "0")
    let hour = String(time.getHours()).padStart(2 , "0")
    const ans = `${hour} : ${min} : ${sec}`

    console.log(ans);
}, 1000);