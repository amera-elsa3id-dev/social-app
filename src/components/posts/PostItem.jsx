import { Avatar, Card } from 'flowbite-react'
import React from 'react'

export default function PostItem({post}) {
  let {body ,comments,createdAt,_id:postId
,  image:postImage, user:{name:userName,image:profileImage ,_id:userId}}=post

  return (
    <Card>
      {/* Header */}
      <header className='flex items-center gap-4'>
        <picture>
         <Avatar alt="User settings" img={profileImage} rounded />
        </picture>
        <div>
          <h2 className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>{userName}</h2>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        
      </header>
      {/* Content */}
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {body}
      </h3>
      <img src={postImage} alt="" />
      
      {/* Footer */}
      {/* Comments */}
    </Card>
  )
}
