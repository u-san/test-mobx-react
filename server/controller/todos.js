export async function getTodos(ctx) {
  const { dbs } = ctx.context;
  const { TodoDb } = ctx.context.dbs;

  // if (!ctx.account.id) {
  //   ctx.body = []
  //   return
  // }

  // const response = await Todo.find({
  //   createdBy: ctx.account
  // }).limit(50).exec()

  ctx.body = await TodoDb().get();
}

export async function addTodos(ctx) {
  const { fields } = ctx.request
  const { TodoDb } = ctx.context.dbs;
  
console.warn(fields)
  if (!fields.text) throw new Exception('[text] not provided')

  // const newTodo = new Todo({
  //   text: fields.text,
  //   createdBy: ctx.account
  // })
  // const response = await newTodo.save()

  ctx.body = await TodoDb().set(fields);
}

export async function removeTodos(ctx) {
  // const { fields } = ctx.request

  // if (!fields.id) throw new Exception('[id] not provided')

  // const response = await Todo.remove({ _id: fields.id })

  // ctx.body = response ? { success: true } : { success: false }
  ctx.body = {}
}
