import './button.css'

const Button = ({ style, onClick, text }) => {
  return (
    <button className={`styled ${style}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
