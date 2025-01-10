'use client'

import { useCookieContext } from '../_test/useCookieContext';
import { useMyInfo } from '../_test/useMyInfo';

const SecondComponent = () => {
  const { data } = useMyInfo()
  const { token } = useCookieContext()

  return (
    <div>
      {`토큰 값: ${token}`}
      <br/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SecondComponent
