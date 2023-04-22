import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PhoneInput from 'react-phone-input-2'
import Image from 'next/image'

export default function Home() {

  const [ph, setPh] = useState()

  return (
    <>
      <Head>
        <title>Create My Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>
      <PhoneInput inputProps={{name: 'phone', 
      required: true,
      autoFocus: true}}
      country= 'in'
      value= {ph}
      placeholde="Enter phone number"
      onChange={setPh} />

      <button type='submit'>Submit</button>
    </>
  )
}
