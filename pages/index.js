import React from 'react'
const axios = require("axios").default

// continue from server-side rendering video from LCO

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

const index = () => {
  return (
    <div className='container'>
      <h1>Superhero Identity Manager</h1>
      <div>
        <MDBCard className='border border-2' style={{maxWidth: '22rem'}}>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  )
}

export default index