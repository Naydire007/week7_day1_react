import React, { useState }from 'react';
import CommentList from '../components/CommentList';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';



const CommentBox = () => {
    const [comments,setComments] = useState (
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ])

          return (
                <div>
                <h1>Movie Releases</h1>
                <CommentList comments = {comments}/>
                <Link to='https://www.imdb.com/calendar/?region=gb'>
                <button type="button" className="btn btn-info">More Movies</button>
                </Link>
                </div>

          )
}

export default CommentBox;