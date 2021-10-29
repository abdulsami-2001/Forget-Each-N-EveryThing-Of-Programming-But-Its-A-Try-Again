import React from 'react'
import {useGetAllPostQuery} from './PostApi'
const Post = () => {
    const {data} = useGetAllPostQuery()
    return (
        <div>
            {data&&data.map((item)=>{
                return <h3 key={item.id} >{item.title}</h3>
            })}
        </div>
    )
}

export default Post
