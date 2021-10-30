import React from 'react'
import {useGetAllPostsQuery,useGetSinglePostByIdQuery,useGetLimitedPostsQuery,useDeletePostMutation} from './PostApi'
import {useSelector,useDispatch} from 'react-redux'
import {handleInput,handleLimitNumber} from './PostSlice'
const Post = () => {
    const dispatch = useDispatch()
    const  value = useSelector((state)=>state.limitPost.handleInput)
    const  limitNumber = useSelector((state)=>state.limitPost.limitNumber)
    const [deleteFunc,response] = useDeletePostMutation()
    const {data:limitedData} = useGetLimitedPostsQuery(limitNumber)
    const {data:dataById} = useGetSinglePostByIdQuery(3)
    // const {data} = useGetAllPostsQuery()
    console.log(response)
    return (
        <div>
            <span>Enter Posts Limit:</span>
            <input type="text" value={value} onChange={(e)=>dispatch(handleInput(e.target.value))} />
            <button onClick={()=>dispatch(handleLimitNumber(value))} >Fetch Post</button>
            <hr />
            <button onClick={()=>deleteFunc(2)} >Delete Post using Delete method </button>
            <hr />
            <h2>{dataById&&dataById.id}</h2>
            <h2>{dataById&&dataById.title}</h2>
            <hr />
            {limitedData&&limitedData.map((item)=>{
                return <h3 key={item.id} >{item.title}</h3>
            })}
        </div>
    )
}

export default Post
