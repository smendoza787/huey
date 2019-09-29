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
    return this.q.shift()
  }

  peek() {
    return this.q[0]
  }

  length() {
    return this.q.length
  }
}

module.exports = HueyTheQueue
