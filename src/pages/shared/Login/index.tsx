import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { StyledImage } from './styles';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';
import API from '../../../service/API';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function Login() {

  const { register, handleSubmit } = useForm()
  const { setUser, setToken } = useContext(UserContext)
  const navigate = useNavigate()
  let location = useLocation()

  const onSubmit = async (data:any) => {
    try {
      const response = await API.post("/login", data)
      sessionStorage.setItem("@TOKEN", response.data.token)
      sessionStorage.setItem("@USERID", response.data.user.id)
      setToken(response.data.token)
      setUser(response.data.user)
      navigate(location.pathname == "/login" ? "/home" : location.pathname)
    } catch (e) {
      if(e instanceof AxiosError)
        toast.error(e.response!.data.message || "Something went wrong.")
    }
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}
          sx={{
            backgroundImage: 'url("/background.svg")',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        >
          <StyledImage src='/bosch.svg'/>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon/></Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                autoComplete="email"
                autoFocus
                { ...register("usernameOrEmail") }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                { ...register("password") }
              />
              <Link to="/preregister">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color='secondary'
                  sx={{ mt: 3, mb: 1 }}
                >
                  Registrar-se
                </Button>
              </Link>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='primary'
                sx={{ mt: 2, mb: 2 }}
              >
                Entrar
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}