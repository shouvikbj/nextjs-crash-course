import React, {useState} from 'react'
const axios = require("axios").default
import Link from 'next/link';
import {MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import {useRouter} from "next/router"

const EditHero = ({hero}) => {
  const router = useRouter()
  const heroId = router.query.id

  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios(`https://nextcc.vercel.app/api/hero/${heroId}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(form)
      })
      router.push(`/${heroId}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
        <h1 className='display-3'>Edit Hero Identity</h1>
        <form onSubmit={handleForm}>
          <MDBInput
            onChange={handleChange}
            label="Super Hero"
            type="text"
            name="superHero"
            className='my-2'
            value={form.superHero}
          />
          <MDBInput
            onChange={handleChange}
            label="Real Name"
            type="text"
            name="realName"
            className='my-2'
            value={form.realName}
          />
          <MDBBtn outline color='success' type='submit'>Edit Hero</MDBBtn>
        </form>
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

export default EditHero