import './info-display.css'

const InfoDisplay = ({data}) => {
    const {title, value, monitary} = data

    const adjustMoneyValues = (value) => {
        return `$${value/100}`
    }   

    const valueParsedIfMonitary = monitary ? adjustMoneyValues(value) : value 
    
    return (
        <div className='info-display-container'>
            <p className='display-title'>{title}: </p>
            <p className='display-body'>{valueParsedIfMonitary}</p>
        </div>
    )
}

export default InfoDisplay