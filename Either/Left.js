export class Left {
    constructor(value) {
      this.value = value;
    }
  
    isLeft() {
      return true;
    }
  
    isRight() {
      return false;
    }
  }
  