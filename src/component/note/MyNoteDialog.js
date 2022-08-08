import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MyNote from "./MyNote";

const MyNoteDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        노트 작성하기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>노트 작성 하기</DialogTitle>
        <DialogContent>
          <DialogContentText> 작성자 : 김태환 </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="제목"
            type="text"
            fullWidth
            variant="standard"
          />
          <MyNote />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyNoteDialog;
