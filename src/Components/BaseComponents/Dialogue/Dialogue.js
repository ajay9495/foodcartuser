import React, {useState} from 'react'
import { Button, Typography } from '@mui/material'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogueStore } from '../../../Redux/DialogueSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Dialogue() {

  
  const dialogueState = useSelector(DialogueStore.getDialogueState);
  const dispatch = useDispatch();

  function openDialogue(){
    dispatch(DialogueStore.getAction_openDialogue("message"));
  }

  function closeDialogue(){
    dispatch(DialogueStore.getAction_closeDialogue());
  }




  return (
    
    <Dialog
    fullWidth={true}
      open={dialogueState.data.isActive}
      onClose={closeDialogue}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Status'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogueState.data.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          variant='contained'
          color='success'
          autoFocus
          onClick={closeDialogue}
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>

  )
}
