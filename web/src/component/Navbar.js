import {Link} from 'react-router-dom'

import React from 'react'

export default function Navbar() {
  return (
    <div>
    <li style={{listStyle: 'none'}}>
    <Link to="/view"><button style={{ backgroundColor: "#407294",borderRadius: '8px', paddingTop:'5%',paddingBottom:'5%',border:'black',marginTop:'2%'}}>View saved data</button></Link>
    </li>
    </div>
  )
}
