import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "15px",
  },
  media: {
    height: 200,
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

export default function CategoryCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="football"
        />
        <CardContent style={{background: "#1B2226"}}>
          <Typography gutterBottom variant="p" component="h2" align="left">
            {props.label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
