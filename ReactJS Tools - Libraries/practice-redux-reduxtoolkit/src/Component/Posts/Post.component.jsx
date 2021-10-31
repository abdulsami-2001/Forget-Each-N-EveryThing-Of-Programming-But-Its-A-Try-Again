import React from 'react'
import {useGetAllPostsQuery,useGetPostByIdQuery,useGetLimitedPostQuery,useDeletePostMutation, useCreatePostMutation,useUpdatePostMutation} from './PostApi' //eslint-disable-line

const Post = () => {
    
    // console.log("resOfAllPosts", resOfAllPosts)
    // const resOfAllPosts = useGetAllPostsQuery() 


    // const resOfSinglePost = useGetPostByIdQuery(5)
    // console.log("resOfSinglePost", resOfSinglePost)
    
    // const resOfLimitedPost = useGetLimitedPostQuery(6)
    // console.log("resOfLimitedPost",resOfLimitedPost)

    // const resOfDeletedPost = useDeletePostMutation()
    // console.log("resOfDeletedPost",resOfDeletedPost)

    
    // const [deletePostFunc,deletePostRes] = useDeletePostMutation()
    // console.log(deletePostFunc)
    // console.log(deletePostRes)

    // const [createPostFunc,createPostRes] = useCreatePostMutation()
    // console.log(createPostFunc)
    // console.log(createPostRes)

    const [updatePostFunc,updatePostRes] = useUpdatePostMutation()
    console.log(updatePostFunc)
    console.log(updatePostRes)


    return (
        <div>
            POSTS
            <hr />
            {/* Button For Delete Post */}

                {/* <button onClick={()=>deletePostFunc(1)} >Delete Post</button> */}
            
            {/* Button For Delete Post */}
            
            {/* Button For create Post */}

                {/* <button onClick={()=>createPostFunc()} >create Post</button> */}
            
            {/* Button For create Post */}

            {/* Button For update Post */}

                <button onClick={()=>updatePostFunc()} >update Post</button>
            
            {/* Button For update Post */}

        </div>
    )
}

export default Post
