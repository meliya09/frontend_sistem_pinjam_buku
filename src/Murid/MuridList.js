import React, { useEffect, useRef, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import {ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import {Container} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LockResetIcon from '@mui/icons-material/LockReset';
import AddIcon from '@mui/icons-material/Add';
import ModeIcon from '@mui/icons-material/Mode';
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import FormDialogCreate from "./FormDialogCreate";


const useStyles = makeStyles((theme) => ({
  box: {
    height: 50,
    padding: 8
  }
}));

export default function MuridList() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [dbo_murid, setMurid] = useState([]);
 
    useEffect(() => {
        getMurid();
    },[]);
 
    const getMurid = async () => {
        const dbo_murid = await axios.get('http://192.168.0.150:8080/murid');
        setMurid(dbo_murid.data);
        
    }
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  
    const UpdateMurid = async (id) => {
      navigate(`/updatemurid/${id}`);
    };
  

    const MuridDelete = async (id) => {
      await axios.delete(`http://192.168.0.150:8080/murid/${id}`);
      getMurid();
    };

  return (
    
    <>
    <Container>
      <Paper>
        <Box>
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItem="flex-end"
            className={classes.box}
          >
            {/* <Link to="/createstaf"> */}
            <Button startIcon={<AddIcon />} onClick={handleClickOpen} variant="contained" color="primary" sx={{ height: 40 }} >
              Create 
            </Button>
            <FormDialogCreate open={open} handleClose={handleClose}/>
           
            {/* </Link> */}
          </Box>

        </Box>

        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">No</TableCell>
                <TableCell align="left">Nama</TableCell>
                <TableCell align="left">Jenis Kelamin</TableCell>
                <TableCell align="left">Telp</TableCell>
                <TableCell align="left">Alamat</TableCell>
                <TableCell align="center">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {dbo_murid.map((murid, index) => (
                <TableRow 
                  key={murid.id_murid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{index + 1}</TableCell>
                  <TableCell align="left">{murid.nama_murid}</TableCell>
                  <TableCell align="left">{murid.jenis_kelamin}</TableCell>
                  <TableCell align="left">{murid.telp_murid}</TableCell>
                  <TableCell align="left">{murid.alamat_murid}</TableCell>
                  <TableCell align="center">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                {/* <Link
                    to={`/updatestaf/${staf.staf_id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link> */}
                <Button startIcon={<EditIcon />} color="success" onClick={() => UpdateMurid(murid.id_murid)}></Button>
                <Button startIcon={<LockResetIcon />} color="warning" ></Button>
                {/* <FormDialogUpdate open={open} handleClose={handleClose}/> */}
                {/* <Button startIcon={<DeleteIcon />} color="error" onClick={() => StafDelete(staf.staf_id)}></Button> */}
                <Button startIcon={<DeleteIcon />} color="error" 
                onClick={() => 
                  swal({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true, 
                  }).then((result) => {
                    if (result) {
                      MuridDelete(murid.user_id);
                      swal({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success",
                              buttons: "Ok",
                            });
                    }
                  })
                }
              ></Button>
                
                </ButtonGroup>
              </TableCell>
                  
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  </>
  );
}