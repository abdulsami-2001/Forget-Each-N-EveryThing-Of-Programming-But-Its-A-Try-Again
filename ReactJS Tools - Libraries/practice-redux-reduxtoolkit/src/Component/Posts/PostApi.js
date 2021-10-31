import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const PostApi = createApi({
    reducerPath:"PostApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    endpoints:(builder)=>({
        getAllPosts:builder.query({
            query:()=>{
                return{
                    url:"posts",
                    method:"GET"
                }
            }
        }),
        getPostById:builder.query({
            query:(id)=>{
                return{
                    url:`posts/${id}`,
                    method:"GET"
                }
            }
        }),
        getLimitedPost:builder.query({
            query:(num)=>{
                return{
                    url:`posts?_limit=${num}`,
                    method:"GET"
                }
            }
        }),
        deletePost:builder.mutation({
            query:(id)=>{
                return{
                    url:`posts/${id}`,
                    method:"DELETE"
                }
            }
        }),
        createPost:builder.mutation({
            query:()=>{
                return{
                    url:"posts",
                    method:"POST",
                    body:{
                        title:"Post Created By Sam",
                        body:"Hey, Sam !",
                        userId:1
                    },
                    headers:{
                        'Content-Type':"application/json; charset=UTF-8"
                    }
                }
            }
        }),
        updatePost:builder.mutation({
            query:()=>{
                return{
                    url:`posts/${1}`,
                    method:"PUT",
                    body:{
                        title:"Post Updated By Sam",
                        body:"Hey, Updated Sam !",
                        userId:1
                    },
                    headers:{
                        'Content-Type':"application/json; charset=UTF-8"
                    }
                }
            }
        })
    })
})

export const {useGetAllPostsQuery,useGetPostByIdQuery,useGetLimitedPostQuery,useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation} = PostApi