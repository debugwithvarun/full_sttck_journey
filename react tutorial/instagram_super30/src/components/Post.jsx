import React from 'react'
import './Post.css'
import { useState } from 'react'
const Post = ({ image }) => {
  const [like, setLike] = useState("🤍")
  const [commentbox, setCommentBox] = useState(false)
  const [comment, setComment] = useState([])
  return (
    <div className='post'>
      <div className="upper">
        <img src="https://variety.com/wp-content/uploads/2022/08/patty-thor-2.png?w=1000&h=667&crop=1" alt="thor" />
        <h3>itss.varunn</h3>
      </div>

      <div className="middle">
        <img src={image} alt="thor" />
      </div>

      <div className="lower">
        <div className="like" onClick={() => {
          setLike(like === "🤍" ? "❤️" : "🤍")
        }}>{like}</div>
        <div className="comment" onClick={() => setCommentBox(commentbox===true?false:true)}>💬</div>
      </div>

      {commentbox && <div className='comment-box'>
        <input type="text" placeholder='add a comment' id="comment" onKeyUp  ={(e) => {
          if (e.key === "Enter") {
            setComment([...comment, document.getElementById("comment").value])
            e.target.value = ""
          }
        }} />
        <div className="comment-list">
          {comment.length > 0 && comment.map((item, index) => {
            return (
              <div key={index} className="comment-item">
                {item}
                <hr />
              </div>
            )
          })}

        </div>
        </div>}
    </div>
  )
}
        export default Post