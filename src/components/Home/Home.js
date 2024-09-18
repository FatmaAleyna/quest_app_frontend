import { Container} from "@mui/material";
import Post from "../Post/Post";
import React, {useState, useEffect} from "react";
import { makeStyles } from "@mui/styles";
import PostForm from "../Post/PostForm";


const useStyles= makeStyles((theme)=> ({

    container: {
        display : "block",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#f7e1f0",
        padding : "20px",
},
}));


function Home(){

    const classes=useStyles();

    const [error, setError]= useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [postList, setPostList]= useState([]);

    useEffect(() => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
               setIsLoaded(true);
               setPostList(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
    }, [])

    if(error){
        return <div> Error!! </div>
    }
    else if(!isLoaded){
        return <div> Loading.. </div>
    }
    else{
        return(
            <div fixed className={classes.container}>
               <PostForm  userName={"hjdh"} userId={1} title= {"title"} text={"text"}/>
               
                {postList.map((post, index)  => (
                    <Post userName={post.userName} userId={post.userId} title= {post.title} text={post.text} ></Post>
                ))}
                </div>
        );
    }


}

export default Home;