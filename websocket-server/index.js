import { WebSocketServer } from 'ws'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.get('/', (req, res) => { res.status(200).json() })

const wss = new WebSocketServer({ server: app.listen(5000) })

console.log('server is running...')

const names = ['Apple', 'Google', 'Microsoft', 'Meta', 'Amazon']

wss.on('connection', function connection(ws) {
  setInterval(() => {
    let stocks = []

    names.forEach((name, i) => {
      stocks.push({
        id: i + 1,
        name,
        currentValue: parseFloat((Math.random() * 100).toFixed(2)),
        previousValue: parseFloat((Math.random() * 100).toFixed(2))
      })
    })

    ws.send(JSON.stringify(stocks))
  }, 3000)
})