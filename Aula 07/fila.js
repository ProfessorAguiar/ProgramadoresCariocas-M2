class Fila {
  constructor(head = null, tail = null, count = 0) {
    this.head = head;
    this.tail = tail;
    this.count = count;
  }
  GetContador() {
    return this.count;
  }
  Enqueue(data) {
    let no = {
      data: data,
      next: this.head
    };
    if (this.head === null) {
      this.tail = no;
    }
    this.head = no;
    this.count++;
  }
  Dequeue() {
    if (this.count === 0) {
      return;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      if (this.count > 1) {
        previous.next = null;
        this.tail = previous;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.count--;
    }
  }
  MostrarTudo() {
    if (this.head === null) {
      return null;
    } else {
      let arr = [];
      let current = this.head;
      for (let i = 0; i < this.count; i++) {
        arr[i] = current.data;
        current = current.next;
      }
      return arr;
    }
  }
  VisualizarEm(index) {
    if (index > -1 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  }
}
let fila = new Fila();
fila.Enqueue(1);
fila.Enqueue(2);
fila.Enqueue(3);
fila.Enqueue(4);
fila.Enqueue(5);
fila.Enqueue(6);
fila.Dequeue();
fila.Dequeue();
console.log(fila.VisualizarEm(1));
console.log(fila.MostrarTudo());
console.log(fila);
