// This is going to be a pretty simple implementation of a queue
// Purely for the sake of learning 🐙

class HueyTheQueue {
  constructor() {
    this.q = []
  }

  enQ(msg) {
    console.log(`Enqueuing message: ${msg}`)
    return this.q.push(msg)
  }

  deQ() {
    console.log(`Dequeuing message: ${x}`)
    return this.q.shift()
  }

  peep() {
    return this.q[0]
  }
}

const q = new HueyTheQueue()

q.enQ('first item')
q.enQ('second item')
q.enQ('third item')

console.log()
console.log('===')
console.log('======')
console.log('=========')
console.log()
console.log('Peeping: ', q.peep())
console.log()
console.log('=========')
console.log('======')
console.log('===')
console.log()
