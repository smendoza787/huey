// This is going to be a pretty simple implementation of a queue
// Purely for the sake of learning 🐙

class HueyTheQueue {
  constructor() {
    this.q = []
  }

  enQ(...msgs) {
    return this.q.push(...msgs)
  }

  deQ() {
    if (this.q.length > 0) {
      const msg = this.q.shift()
      return msg
    }
    return null
  }

  peek() {
    return this.q[0]
  }

  length() {
    return this.q.length
  }
}

module.exports = HueyTheQueue