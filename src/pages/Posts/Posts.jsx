import React from 'react'

// import { UserContext } from '../../../context/UserContext'
import PostsList from './../../components/posts/PostsList';
import Add from './../../components/posts/Add';

export default function Posts() {
  // const {token} = useContext(UserContext);
  // console.log(token);
  return (
    <>
    <section className='py-12'>
        <div className="mx-auto max-w-3xl">
          <div className='flex flex-col gap-4'>
    <Add/>
    <PostsList/>
    </div>
    </div>
    </section>
   
      

   
    </>
  )
}
