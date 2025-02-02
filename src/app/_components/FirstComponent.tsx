'use client'

import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useCookieContext } from '../_test/useCookieContext'

const FirstComponent = () => {
  const { push } = useRouter()
  const { setToken } = useCookieContext()

  const onLogin = () => {
    const tokenValue = '194|GSNxPjArX2ZGjemgSVdQEizz6TJAocpxcvQjEHGR597e752a';
    
    setCookie('token', tokenValue);
    setToken(tokenValue)

    push('/item');
  };

  return (
    <div className='w-full h-dvh flex items-center justify-center'>
      <button type='button' onClick={onLogin} className='border-[3px] p-[32px] rounded-[30px]'>
        로그인 버튼
      </button>
    </div>
  )
}

export default FirstComponent
