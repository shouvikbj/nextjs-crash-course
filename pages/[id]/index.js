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
import { useRouter } from 'next/router';

const EachHero = ({hero}) => {
  const router = useRouter()
  const heroId = router.query.id

  const deleteHero = async () => {
    try {
      const deleteHero = await axios(`https://nextcc.vercel.app/api/hero/${heroId}`, {
        method: "DELETE"
      })
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <h1 className='display-3'>Identity of {hero.superHero}</h1>
      <MDBCard className='border border-2 my-2' style={{maxWidth: '22rem'}}>
        <MDBCardBody>
          <MDBCardTitle>{hero.superHero}</MDBCardTitle>
          <MDBCardText>
            {hero.realName}
          </MDBCardText>
          <Link href={`/${hero._id}/edit`}><MDBBtn outline color='secondary'>Edit Hero</MDBBtn></Link>
          <MDBBtn outline color='danger' style={{float: "right"}}
          onClick={deleteHero}
          >Delete Hero</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
  const id = params.id
  const res = await axios(`http://localhost:3000/api/hero/${id}`, {
    method: "GET"
  })
  const {hero} = res.data
  return {
    props: {hero:hero}
  }
}

export default EachHero