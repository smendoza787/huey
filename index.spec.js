const HueyTheQueue = require('.')

describe('Huey 🐙', () => {
  describe('Initialization ⚡', () => {
    it('initializes as an empty queue', () => {
      // Given a queue, When we initialize it
      const huey = new HueyTheQueue()
      // Then it should be empty
      expect(huey.length()).toBe(0)
    })
  })

  describe('Peeking 👁', () => {
    it('should return the next item in the queue without dequeuing it from the queue', () => {
      // Given a queue with a single item
      const huey = new HueyTheQueue()
      const item = "testitem345"
      huey.enQ(item)

      // When we peep the queue
      const nextQItem = huey.peep()

      // Then it should return the next item
      expect(nextQItem).toEqual(item)
      // While not affecting the original queue
      expect(huey.length()).toBe(1)
    })
  })

  describe('Enqueuing 🏹', () => {
    it('can enqueue a single item', () => {
      const huey = new HueyTheQueue()
      const item = 'item123'
      huey.enQ(item)
      expect(huey.length()).toBe(1)
    })
  })
})
