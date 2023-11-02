export default function Num() {

    const num1 = Math.floor(Math.random() * 6) +1;
    const num2 = Math.floor(Math.random() * 6) +1;
    const result = num1 === num2 ? "You win!" : "You Luse"
   
    return (<p> Num roll: {num1} <br/> {result} </p>)
}