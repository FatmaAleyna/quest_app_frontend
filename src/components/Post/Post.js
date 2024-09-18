import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
        root: {
          width : 800,
          textAlign : "left",
        },
        media : {
           height: 0,
           paddindTop: '56.25%',
        },
      },
    ],
  }));


function Post(props){



    const{title,text,userName,userId}=props;
    
    const [expanded, setExpanded] = React.useState(false);

    const [liked, setLiked] = React.useState(false);


    const handleLike = () => {
        setLiked(!liked);
    }


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return(
        <div className="postContainer">
            <Card sx={{ maxWidth: 800, textAlign: "left", margin :"25px" }}>
      <CardHeader
        avatar={
          <Link to={`/users/${userId}`} style={{ textDecoration: 'none' }} >
          <Avatar sx={{ background : 'linear-gradient(45deg, #ba84a7 30%, #f7d2ea 90%)',
                color : 'white' }} aria-label="user">
            {userName.charAt(0).toUpperCase()}
          </Avatar>
          </Link>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
        onClick={handleLike}
        aria-label="add to favorites">
          <FavoriteIcon style={liked?{color : "red"} : null} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        </CardContent>
      </Collapse>
    </Card>
        </div>
    )
  
}

export default Post;