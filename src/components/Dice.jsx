import diceOne from "@a/dice-one.svg";
import diceTwo from "@a/dice-two.svg";
import diceThree from "@a/dice-three.svg";
import diceFour from "@a/dice-four.svg";
import diceFive from "@a/dice-five.svg";
import diceSix from "@a/dice-six.svg";
import { getRandom } from "./../utils/getRandom";

/* -------------------------------------------------------------------------- */

const diceArr = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

/* -------------------------------------------------------------------------- */

export default function Dice() {
  let num = getRandom(6);
  
  let diceNum = diceArr[num]

  return (
    <div>
      <img src={diceNum} alt="" />
    </div>
  );
}
