export class Right {
    constructor(value) {
      this.value = value;
    }
  
    isLeft() {
      return false;
    }
  
    isRight() {
      return true;
    }
  }
  