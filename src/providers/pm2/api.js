const pm2 = require('pm2');

function listApps(){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.list((err, list) => {
                pm2.disconnect()
                if (err) {
                    reject(err)
                }
                resolve(list)
            })
        })
    })
}

function describeApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.describe(process, (err, proc) => {
                pm2.disconnect()
                if (err) {
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function reloadApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.reload(process, (err, proc) => {
                pm2.disconnect()
                if (err) {
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function stopApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.stop(process, (err, proc) => {
                pm2.disconnect()
                if (err) {
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function restartApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.restart(process, (err, proc) => {
                pm2.disconnect()
                if (err) {
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

module.exports = {
    listApps,
    describeApp,
    reloadApp,
    stopApp,
    restartApp
}

