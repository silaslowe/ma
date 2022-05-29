import { Link } from 'react-router-dom'
import './page-header.css';

const PageHeader = () => {
  return (
    <div className='page-header-container'>
      <p className='pager-header-logo'>Musican's Accountant</p>
      <nav className='nav-links-container'>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/gigs'>Gigs</Link> 
      </nav>
    </div>
  )
}

export default PageHeader
