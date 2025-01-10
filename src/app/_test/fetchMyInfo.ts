export async function fetchMyInfo(token: string) {
  if (!token) {
    throw new Error('토큰이 존재하지 않습니다.');
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/member/myinfo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-cache',
  });
  
  const data = await res.json();
  
  if (!res.ok) {
    throw new Error(data.message || 'API 호출 실패');
  }

  return data;
}
