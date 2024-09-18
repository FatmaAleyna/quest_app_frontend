import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";
import { Button, InputAdornment, OutlinedInput } from "@mui/material";

function PostForm(props) {
  const { userName, userId } = props;

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Text:", text);
  };

  return (
    <div className="postContainer">
      <Card sx={{ maxWidth: 800, textAlign: "left", margin: "25px" }}>
        <CardHeader
          avatar={
            <Link to={`/users/${userId}`} style={{ textDecoration: 'none' }}>
              <Avatar
                sx={{
                  background: 'linear-gradient(45deg, #ba84a7 30%, #f7d2ea 90%)',
                  color: 'white'
                }}
                aria-label="user"
              >
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <OutlinedInput
              id="outlined-adornment-title"
              multiline
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              inputProps={{ maxLength: 25 }}
              fullWidth
            />
          }
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <OutlinedInput
              id="outlined-adornment-text"
              multiline
              placeholder="Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              inputProps={{ maxLength: 250 }}
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    style={{
                      background: 'linear-gradient(45deg, #ba84a7 30%, #f7d2ea 90%)',
                      color: 'white'
                    }}
                    onClick={handleSubmit}
                  >
                    POST
                  </Button>
                </InputAdornment>
              }
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostForm;
