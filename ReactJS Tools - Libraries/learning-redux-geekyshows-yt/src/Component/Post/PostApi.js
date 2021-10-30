import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    endpoints:(builder)=>({
        getAllPosts:builder.query({
            query:()=>({
                url:"posts",
                method:"GET"
            })
        }),
        getSinglePostById: builder.query({
            query:(id)=>{
                return{
                    url:`posts/${id}`,
                    method:"GET"
                }
            }
        }),
        getLimitedPosts:builder.query({
            query:(limit)=>{
                return{
                    url:`posts?_limit=${limit}`
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
        createPost: builder.mutation({
            query:()=>{
                return{
                    url:"posts",
                    method:"POST",
                    body:{
                        title:"Hey Sam",
                        body:":))",
                        userId:1
                    },
                    headers:{
                        'Content-type':'application/json; charset=UTF-8'
                    }
                }
            }
        }),
        updatePost:builder.mutation({
            query:(updatedPost)=>{
                const {id, ...data} = updatedPost
                return{
                    url:`posts/${id}`,
                    method:"PUT",
                    body:data,
                    header:{
                        'Content-Type':'application/json; charset=UTF-8'
                    }
                }
            }
        })
    })
})

export const {useGetAllPostsQuery,useGetSinglePostByIdQuery, useGetLimitedPostsQuery,useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation} = postApi