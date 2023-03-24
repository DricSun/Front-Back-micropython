// const dotenv = require('dotenv');
// dotenv.config();
// const MQTT = require('mqtt')


// const HOST = process.env.SERVERHOSTNAME
// const PORT = 0
// const CLIENTID = `mpu_6050_test`
// const CONNECTURL = `mqtts://${HOST}:${PORT}`
// const TOPIC = 'picow/ax'


// const client = MQTT.connect(CONNECTURL, {
//     CLIENTID,
//     clean: true,
//     connectTimeout: 7200,
//     username: process.env.EMAIL,
//     password: process.env.PASSWORD,
//     reconnectPeriod: 10000,
// })


// client.on("error",function(error){ console.log("Can't connect"+error)})


// client.on('connect', async () => {
//   console.log('Connected')
//   client.subscribe([TOPIC], () => {
//     console.log(`Subscribe to TOPIC '${TOPIC}'`)
//   })
// })


// client.on('message', (TOPIC, payload) => {
//     console.log('Received Message:', TOPIC, payload.toString())
})