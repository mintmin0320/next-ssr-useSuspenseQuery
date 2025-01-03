import { useSuspenseQuery } from '@tanstack/react-query';

// export async function test(token: string) {
export async function test() {
  // const token = getCookie("token")
  const token = "101|7vuqdWjOcgBwHykIGnRAH8sPBVhjrAhMHgZpSG5k2cf5bb79"
  console.log("토큰 값: " + token)
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
  
  console.log(data)

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useTest = () => {
  // const cookies = useCookies();
  // const token = cookies.get("token")

  const { data } = useSuspenseQuery<void, Error, any>({
    queryKey: ["test"],
    // queryFn: () => test(token),
    queryFn: () => test(),
    staleTime: 1000 * 60,
  })

  return { data }
}
