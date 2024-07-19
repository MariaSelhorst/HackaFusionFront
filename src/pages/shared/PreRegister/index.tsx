import { Avatar, Box, Button, CssBaseline, Grid, Paper, TextField, Typography } from "@mui/material";
import { StyledImage } from "../Login/styles";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../service/API";
import { useNavigate } from "react-router-dom";

export default function PreRegister() {

    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const submit = async () => {
      try {
        const response = await API.get("/register/" + email)
        sessionStorage.setItem("EMAIL", response.data.email)
        sessionStorage.setItem("ROLE", response.data.role)
        sessionStorage.setItem("GANGID", response.data.gangId)
        navigate("/register")
      } catch (e) {
        if(e instanceof AxiosError)
          toast.error(e.response!.data.message || "Something went wrong.")
      }
    }
    
    return (
      <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url("/background.svg")',
              backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'left',
            }}
          >
            <StyledImage src='/bosch.svg'/>
          </Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
              <Typography component="h1" variant="h5">Registrar-se</Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color='secondary'
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submit}
                >
                  Avançar
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
    );
}