import React, {useState} from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Dialogue({dialogueState, change}) {

  const navigateTo = useNavigate();

  function close(){
    change.closeDialogue();
    navigateTo('/');
  }

  return (
    
    <Dialog
    
      fullWidth={true}
      open={dialogueState.isOpen}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Status'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogueState.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          variant='contained'
          color='success'
          autoFocus
          onClick={close}
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>

  )
}
