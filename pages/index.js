import React from 'react'
const axios = require("axios").default
import Link from 'next/link';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

const index = ({heros}) => {
  return (
    <div className='container'>
      <h1 className='display-2'>Superhero Identity Manager</h1>
      <div>
        {heros.map((hero) => {
          return (
            <MDBCard key={hero._id} className='border border-2 my-2' style={{maxWidth: '22rem'}}>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>
                  Reveal Identity
                </MDBCardText>
                <Link href={`/${hero._id}`}><MDBBtn outline color='info'>View Hero</MDBBtn></Link>
                <Link href={`/${hero._id}/edit`}><MDBBtn outline color='secondary' style={{float: "right"}}>Edit Hero</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
          )
        })}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios("http://localhost:3000/api/hero", {
    method: "GET"
  })
  const {hero} = res.data
  return {
    props: {heros:hero}
  }
}

export default index