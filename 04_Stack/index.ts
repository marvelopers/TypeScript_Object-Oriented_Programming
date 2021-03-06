interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(value: string): void;
}
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

//단일 연결 리스트 이용

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) { }
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this._size === this.capacity) {
      throw new Error('Stack is full ')
    }
    const node: StackNode = { value, next: this.head }
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty')
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push('chloe_01');
stack.push('chloe_02');
stack.push('chloe_03');
while (stack.size !== 0) {
  console.log(stack.pop())
}