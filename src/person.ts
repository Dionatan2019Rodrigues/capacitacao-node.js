class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayMyName(): string {
    return `My name is ${this.name}`;
  }
}

export { Person };