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
    if (this.q.length > 0) {
      const msg = this.q.shift()
      console.log(`Dequeuing message: ${msg}`)
      return msg
    }
    console.log('Queue is empty.')
    return null
  }

  peep() {
    return this.q[0]
  }

  length() {
    return this.q.length
  }
}

module.exports = HueyTheQueue