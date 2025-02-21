import { Left } from './Left';
import { Right } from './Right';

export class Either {
  static left(l) {
    return new Left(l);
  }

  static right(r) {
    return new Right(r);
  }
}
