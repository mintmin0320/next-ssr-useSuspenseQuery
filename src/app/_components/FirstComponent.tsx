'use client'

import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useCookieContext } from '../_test/useCookieContext'

const FirstComponent = () => {
  const router = useRouter()
  const { setToken } = useCookieContext()

  const onLogin = () => {
    const tokenValue = '167|QwXRt7T25VLdj54ahChm1q55IPNwcs1scwC1nPNA70e5dfe9';
    
    setCookie('token', tokenValue);
    setToken(tokenValue)

    router.push('/item');
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
