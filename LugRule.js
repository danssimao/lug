export class LugRule {
  constructor(rules = []) {
    this.add(rules);
  }

  add(rules = []) {
    this.rules = [...(this.rules ?? []), ...rules];
  }

  string(message) {
    this.add([
      {
        test: (value) => typeof value === 'string',
        message: message ?? 'This value must be a string!',
      },
    ]);

    return this;
  }

  required(message) {
    this.add([
      {
        test: (value) => Boolean(value),
        message: message ?? 'This value is required!',
      },
    ]);

    return this;
  }
}

export const string = (message) => new ValidationRule().string(message);

export const required = (message) => new ValidationRule().required(message);
