var gkm = require('gkm');
const screenshot = require('screenshot-desktop')

const genID = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let r = ''

    for(let i=0; i<len; i++){
        r += chars[Math.floor(Math.random()*chars.length)]
    }

    return r
}

console.log("howdy! this thing is running :)")
 
var last = ''

gkm.events.on('key.pressed', function(data) {
    if(data[0] == 'Enter'){
        screenshot({filename: `entershots/${genID(10)}.jpg`}).then((imgPath) => {
        }).catch((err) => {
            console.log("didn't gotcha => "+err)
        })
    }
    else if(data[0] == 'Back Quote'){
        if(last == 'Left Control'){
            process.exit()
        }
    }

    last = data[0]
});