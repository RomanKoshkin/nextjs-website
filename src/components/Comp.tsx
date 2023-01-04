import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
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


type Props = React.PropsWithChildren<{
	url: string
	title: string
}>

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;

})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Project({ url, title, children }: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={"project relative block px-4 py-3 -mx-3 sm:mx-0 sm:px-6 sm:py-5 border border-gray-100 dark:border-gray-700 rounded-lg transition-shadow duration-200 hover:shadow-xl dark:transform dark:transition-transform dark:hover:-translate-y-1"}
    
    sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            RS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <p>{children}</p>
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
        <CardContent style={{color: 'yellow'}} >
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}





// import React, { useState } from 'react';

// function Comp() {
//   const [hidden, setHidden] = useState(true);
//   const [value, setValue] = useState('');

//   const toggleShowHide = () => {
//     setHidden(!hidden);
//   };

//   return (
//     <div>
//       <button onClick={toggleShowHide}>Abstract</button>
//       {!hidden && 
//         <div>
//             We utilized the event-related potential (ERP) technique to study neural activity associated with different levels of working memory (WM) load during simultaneous interpretation (SI) of continuous prose. The amplitude of N1 and P1 components elicited by task-irrelevant tone probes was significantly modulated as a function of WM load but not the direction of interpretation. Furthermore, the latency of the P1 increased significantly with WM load. The WM load effect on N1 latency, however, did not reach significance. Larger negativity under lower WM loads suggests that more attention is available to process the source message, providing the first electrophysiological evidence in support of the Efforts Model of SI. Relationships between the direction of interpretation and median WM load are also discussed.</div>}
//     </div>
//   );
// }

// export default Comp;


