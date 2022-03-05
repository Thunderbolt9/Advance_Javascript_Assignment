class QueenAttack {
  constructor(queen1Row, queen1Column, queen2Row, queen2Column) {
    this.queen1Row = queen1Row;
    this.queen1Column = queen1Column;
    this.queen2Row = queen2Row;
    this.queen2Column = queen2Column;
  }

  canAttack() {
    if (this.queen1Row == this.queen2Row) return true;
    if (this.queen1Column == this.queen2Column) return true;
    if (
      Math.abs(this.queen1Row - this.queen2Row) ==
      Math.abs(this.queen1Column - this.queen2Column)
    )
      return true;

    return false;
  }
}
let queens = new QueenAttack(0, 0, 7, 7);

if (queens.canAttack()) {
  console.log("Queens can attack each other");
} else {
  console.log("Queens can't attack each other");
}
