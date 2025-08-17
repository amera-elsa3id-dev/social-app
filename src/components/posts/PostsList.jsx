import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';
import axios from 'axios';

export default function PostsList() {
  let [posts,setPosts]=  useState([]);
  async function getAllPosts(){
    try{
      let {data}= await axios.get(`${import.meta.env.VITE_BASE_URL}/posts?limit=50`,{
        headers:{
          token:localStorage.getItem("token")
        }
      })
      console.log(data);
      setPosts(data.posts);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllPosts();
  },[])

  return (
    <section className='py-8'>
        <div className="mx-auto max-w-3xl">
          <div className='flex flex-col gap-4'>
            {
              posts.map(post=>(
                <PostItem key={post._id} post={post}/>
              ))
            }
          </div>
            
        </div>
    </section>
  )
}
