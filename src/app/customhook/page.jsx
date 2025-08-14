'use client';

import useCounter from "../components/customhook";

const Page = () => {
  const {count, inc, dec} = useCounter(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default Page;
