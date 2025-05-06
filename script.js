constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index],
          parentIndex = Math.floor((index - 1) / 2),
          parent = this.heap[parentIndex];

      if (parent <= element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1,
          right = 2 * index + 2,
          smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function mincost(arr) {
  const heap = new MinHeap();
  for (let num of arr) {
    heap.insert(num);
  }

  let totalCost = 0;

  while (heap.size() > 1) {
    let first = heap.extractMin();
    let second = heap.extractMin();
    let cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;

module.exports=mincost;
