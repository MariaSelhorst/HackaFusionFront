import { Avatar, Box, Button, CssBaseline, Grid, Paper, TextField, Typography } from "@mui/material";
import { StyledImage } from "../Login/styles";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../service/API";
import { useNavigate } from "react-router-dom";
import { roleToNumber } from "../../../utils/role";

export default function Register() {

  const { register, handleSubmit, setValue } = useForm()
  const [confirmation, setConfirmation] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    setValue("email", sessionStorage.getItem("EMAIL"))
  }, [])

  const submit:SubmitHandler<FieldValues> = async (data) => {
    try {
      await API.post("/register", { ...data, role: roleToNumber(sessionStorage.getItem("ROLE") || "STUDENT") })
      toast.success("User created!")
      setTimeout(() => { navigate("/login") }, 2000)
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
        <StyledImage src='/bosch.svg' />
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
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(submit)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              {...register("email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="nome-completo"
              label="Nome completo"
              autoComplete="nome"
              autoFocus
              {...register("fullname")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              autoComplete="off"
              {...register("username")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="senha"
              label="Senha"
              autoComplete="off"
              type="password"
              {...register("password")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="senha"
              label="Confirmar senha"
              autoComplete="senha"
              type="password"
              value={confirmation}
              onChange={(e) => { setConfirmation(e.target.value) }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar-se
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}