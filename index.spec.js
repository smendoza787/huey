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
      const item = 'testitem345'
      huey.enQ(item)
      huey.enQ('someOtheritem')

      // When we peek the queue
      const nextQItem = huey.peek()
      // And peek some more...
      huey.peek()
      huey.peek()

      // Then it should return the next item
      expect(nextQItem).toEqual(item)
      // While not affecting the original queue
      expect(huey.length()).toBe(2)
    })
  })

  describe('Enqueuing 🏹', () => {
    it('can enqueue a single item', () => {
      // Given a queue
      const huey = new HueyTheQueue()

      // When we enqueue an item
      const item = 'item123'
      huey.enQ(item)

      // Then the queue should now have that item
      expect(huey.length()).toBe(1)
      expect(huey.peek()).toEqual(item)
    })

    it('can enqueue multiple items', () => {
      // Given a queue
      const huey = new HueyTheQueue()

      // When we enqueue multiple items
      const firstItem = '4hjnb5'
      const secondItem = '356dd45'
      const thirdItem = '46jf80'
      huey.enQ(firstItem, secondItem, thirdItem)

      // Then the queue should now have those item
      expect(huey.length()).toBe(3)
      expect(huey.peek()).toEqual(firstItem)
    })
  })

  describe('Dequeuing 🦀', () => {
    it('can dequeue a single item', () => {
      // Given a queue with a few items
      const huey = new HueyTheQueue()
      const items = ['item1', 'item2', 'item3']
      items.forEach(i => huey.enQ(i))
      expect(huey.length()).toBe(3)

      // When we dequeue an item
      const nextItem = huey.deQ()

      // Then the queue should not have that item anymore
      expect(huey.length()).toBe(2)
    })
  })
})
