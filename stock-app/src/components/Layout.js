const Layout = ({ header, children }) => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-12'>
        {header}
      </div>
    </div>
    <div className='row'>
      <div className='col-md-12'>
        {children}
      </div>
    </div>
  </div>
)

export default Layout