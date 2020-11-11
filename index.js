const app = require('./app') // the actual Express application
const http = require('http')
const logger = require('./utils/logger')
const { port } = require('./utils/config')

const server = http.createServer(app)

server.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})
