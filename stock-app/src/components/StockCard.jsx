import appleLogo from '../images/apple.png'
import googleLogo from '../images/google.png'
import microsoftLogo from '../images/microsoft.png'
import metaLogo from '../images/meta.png'
import amazonLogo from '../images/amazon.png'

const logos = {
  'apple': appleLogo,
  'google': googleLogo,
  'microsoft': microsoftLogo,
  'meta': metaLogo,
  'amazon': amazonLogo
}

const StockCard = ({ name, currentValue, previousValue }) => {
  const increased = currentValue > previousValue
  const value = (currentValue - previousValue).toFixed(2)

  return (
    <div className='col-6 col-lg-2 border rounded p-3 m-3 shadow text-center'>
      <h1 className='text-primary'>{name}</h1>
      <h3>{Math.floor(currentValue)} USD</h3>
      <img src={logos[name.toLowerCase()]} width={100} alt='' />
      <div className='d-flex justify-content-center align-items-center mt-3'>
        <i className={`bi ${increased ? 'bi-arrow-up-circle-fill text-success' : 'bi-arrow-down-circle-fill text-danger'} h1`}></i>
        <h1 className={increased ? 'text-success' : 'text-danger'}>{value > 0 ? '+' : ''}{value}</h1>
      </div>
    </div>
  )
}

export default StockCard