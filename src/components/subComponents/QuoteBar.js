import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    // borderBottom: '4px lightgreen solid',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icon: {
    color: 'white',
    margin: '0px 0.5rem'
  }
}));

const handleCall = () => {
  alert('Calling now...')
}

const handleEmail = () => {
  alert('Emailing now...')
}

const QuoteBar = (props) => {
  const classes = useStyles();

  return (
    <div className="quoteBar">
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group" size="small" fullWidth={true}>
        <Button onClick={handleCall}><CallIcon className={classes.icon}/>Call</Button>
        <Button onClick={handleEmail}><SendIcon className={classes.icon}/>Contact</Button>
      </ButtonGroup>
    </div>
    </div>
  );
}

export default QuoteBar