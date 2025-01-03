'use client'

import { setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { useTest } from '../_test/test'

const Test = () => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const tokenValue = "101|7vuqdWjOcgBwHykIGnRAH8sPBVhjrAhMHgZpSG5k2cf5bb79"

    setCookie("token", tokenValue)
    setToken(tokenValue)
  }, [])

  const { data } = useTest()

  return (
    <section className='mx-auto w-[754px] flex-col gap-[32px] h-screen flex justify-center items-center'>
      <span>{String(data?.status)}</span>
    </section>
  )
}

export default Test
