import Koa from 'koa'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'Hello'
})

export default app