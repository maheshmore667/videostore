import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
    const commentsData = [
        {
            name : "Dummy Data",
            commentText : "ठाणे नाही हो संपूर्ण हिंदूस्थान तुमच्या वर गर्व करीत आहे हो साहेब ",
            replies : []
        },
        {
            name : "Dummy Data",
            commentText : "धर्मवीरांचा झंझावात  that line 👌🔥🔥🔥🔥🔥🔥👌",
            replies : [
                {
                    name : "Dummy Data",
                    commentText : "साहेब तुम्ही मराठा समाजाचा अभिमान आहात.",
                    replies : [
                        {
                            name : "Dummy Data",
                            commentText : "एकनाथ शिंदे म्हणजेच महाराष्ट्रमधील राजकारणाचे नवीन वादळ जय हिंदू जय सनातन 🚩❤",
                            replies : [
                                
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name : "Dummy Data",
            commentText : "धर्मवीरांचा झंझावात  that line 👌🔥🔥🔥🔥🔥🔥👌",
            replies : [
                {
                    name : "Dummy Data",
                    commentText : "साहेब तुम्ही मराठा समाजाचा अभिमान आहात.",
                    replies : [
                        {
                            name : "Dummy Data",
                            commentText : "एकनाथ शिंदे म्हणजेच महाराष्ट्रमधील राजकारणाचे नवीन वादळ जय हिंदू जय सनातन 🚩❤",
                            replies : [
                                
                            ]
                        }
                    ]
                }
            ]
        }

    ]

  return (
    <div>
        <label className="text-2xl font-bold">Comments</label>
        {
            commentsData?.map((comment, index) =><Comment key={index} comment={comment}/>)
        }
        
    </div>
  )
}

export default CommentsContainer
