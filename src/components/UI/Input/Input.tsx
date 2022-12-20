import "../Login/Login.css"

interface InputProps{
    width: number;
    hight: number;
}

function Input({width, hight} : InputProps) {

    return (
      <div className="input_container">
        <input type="text" />
      </div>
    );
  }
  
  export default Input;
  