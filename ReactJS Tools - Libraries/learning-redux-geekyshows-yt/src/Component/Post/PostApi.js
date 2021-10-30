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
        })
    })
})

export const {useGetAllPostsQuery,useGetSinglePostByIdQuery, useGetLimitedPostsQuery,useDeletePostMutation} = postApi