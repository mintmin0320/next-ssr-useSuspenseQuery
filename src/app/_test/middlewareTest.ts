export async function test(request?: Request) {
  const isServer = typeof window === 'undefined'
  console.log(request)

  let token: string | undefined

  if (isServer) {
    if (!request) {
      throw new Error('Request object is required in server environment')
    }

    // 서버 환경에서는 요청 헤더에서 Authorization 헤더를 가져옴
    token = request.headers.get('Authorization')?.replace('Bearer ', '')
  } else {
    // 클라이언트 환경에서는 쿠키에서 토큰 가져오기
    const { getCookie } = await import('cookies-next')
    token = getCookie('token') as string
  }

  console.log('토큰 값:', token)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/myinfo`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-cache',
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}
