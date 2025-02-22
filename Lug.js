import { Either } from './Either';
import { NO_RULES_SETTED_MESSAGE } from './const';

export class Lug {
  constructor(schema) {
    this.schema = schema;
    this._valid = {};
    this._errors = [];
  }

  static create(schema) {
    return new Validation(schema);
  }

  clean() {
    this._valid = {};
    this._errors = [];
  }

  retrieve() {
    const errors = this._errors.flat();
    const valid = {...this._valid};
    this.clean();
    return errors.length ? Either.left(errors) : Either.right(valid);
  }

  perform(hash) {
    const [name, value] = Object.entries(hash).flat();
    const { rules } = this.schema[name];

    if (!rules.length) {
      return this._errors.push({
        message: `The ${name} ${NO_RULES_SETTED_MESSAGE}`,
      });
    }

    rules.reverse().forEach((rule) => {
      if (rule?.test(value)) {
        return (this._valid[name] = value);
      }

      this._errors.push({
        name,
        message: rule.message,
      });
    });
  }

  validateOne(hash) {
    this.perform(hash);
    return this.retrieve();
  }

  validate(values) {
    Object.entries(values).forEach(
      ([name = '', value]) => {
        this.perform({
          [name]: value
        });
      },
    );

    return this.retrieve();
  }
}
