import { makeStyles } from '@mui/styles';
import { CardActions } from '@mui/material';
const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media:{
    height:0,
    paddingTop:'56.25%',
  },
   CardActions:{
    display:'flex',
    justifyContent:'flex-end',
  },
  cardContent:{
    display:'flex',
    justifyContent:'space-between',
  },
});

export default useStyles;
