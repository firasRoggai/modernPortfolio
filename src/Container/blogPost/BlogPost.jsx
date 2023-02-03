import React from 'react'
import './blogPost.scss'

const BlogPost = ()=>{
    const today = new Date()
    return (
        <div className='mt-5 px-2'>
        <h3 className='fw-bold'>Blog Posts</h3>
        <div className='content text-secondary d-flex justify-content-between py-2'>
        <h5>Coming soon</h5> <span>{today.toDateString()}</span>
        </div>
        </div>
    )
}
export default BlogPost;
