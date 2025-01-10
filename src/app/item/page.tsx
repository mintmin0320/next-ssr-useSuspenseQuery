import { QueryClient, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import SecondComponent from '../_components/SecondComponent';
import RQProvider from '../_test/RQProvider';
import { fetchMyInfo } from '../_test/fetchMyInfo';

const page = async () => {
  const token = (await cookies()).get("token")?.value

  if (!token) {
    throw new Error('토큰이 존재하지 않습니다.');
  }
  
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({queryKey: ['test'], queryFn:() => fetchMyInfo(token)});

  const dehydratedState = dehydrate(queryClient);

  return (
    <RQProvider dehydratedState={dehydratedState}>
      <SecondComponent/>
    </RQProvider>
  )
}

export default page
