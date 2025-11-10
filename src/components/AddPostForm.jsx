import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../store/slices/postSlices";
import { selectAllUsers } from "../store/slices/usersSlice";

const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(postAdded(title,content,userId))

            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId) //to enable and disable button with or without text

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add a New Post</h2>
        <form className="form">
            <label htmlFor="postTitle">Post Title:</label>
            <input 
                type="text"
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={(e) => setTitle(e.target.value)}    
            />

            <label htmlFor="postAuthor">Author:</label>
            <select 
                id="postAuthor" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {usersOptions}
            </select>

            <label htmlFor="postContent">Post Content:</label>
            <textarea 
                type="text"
                id='postContent'
                name='postContent'
                value={content}
                onChange={(e) => setContent(e.target.value)}    
            />

            <button 
                type="button" 
                onClick={onSavePostClicked}
                disabled={!canSave}
            >Save Post</button>
                
        </form>
    </section>
  )
}

export default AddPostForm
