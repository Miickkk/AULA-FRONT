import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,Typography,TextField,Button,Alert,InputAdornment,IconButton,Checkbox,FormControlLabel,Divider} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GoogleIcon from '@mui/icons-material/Google';
import { mockUsuarios } from '../data/mockUsuarios';
import logo from '../assets/icons/logo2.png';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';





function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email === '' || senha === '') {
      setErro('Preencha o e-mail e a senha.');
      return;
    }

    const usuario = mockUsuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (!usuario) {
      setErro('E-mail ou senha inválidos.');
      return;
    }

    setErro('');
    onLogin(usuario);
    navigate('/');
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('/login-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        position: 'relative',
        overflow: 'hidden',
        px: 2,
        py: 4
      }}
    >
    
      <Box
        sx={{
          width: '100%',
          maxWidth: '500px',

          background: 'rgba(7, 7, 12, 0.94)',

          border: '1px solid #7B2CFF',
          borderRadius: '14px',

          boxShadow: `
            0 0 25px rgba(123, 44, 255, 0.25),
            0 0 80px rgba(123, 44, 255, 0.08)
          `,

          position: 'relative',
          zIndex: 2,

          p: {
            xs: 3,
            sm: 5
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',

            width: '90px',
            height: '4px',

            background: '#FFD500',

            boxShadow: '0 0 15px rgba(255,213,0,0.6)'
          }}
        />






        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '120px',
            mb: 6,
            overflow: 'visible'
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo GeekWear"

            sx={{
                width: '250px',
                height: '220px',
                transform: 'translateY(-10px)',
                filter: 'drop-shadow(0 0 8px #792cff62)'
            }}
          />
        </Box>








        <Typography
          sx={{
            fontSize: {
              xs: '27px',
              sm: '32px'
            },

            fontWeight: 800,
            textAlign: 'center',

            color: '#fff',

            mb: 0
          }}
        >
          Bem-vindo de volta.
        </Typography>


        <Typography
          sx={{
            textAlign: 'center',
            color: '#7C3AED',
            fontSize: '17px',
            mb: 3
          }}
        >
          Sua jornada continua aqui.
        </Typography>






        <Box component="form" onSubmit={handleSubmit}>





          {/* EMAIL */}

            <TextField
              fullWidth
              label="E-mail ou usuário"
              type="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErro('');
              }}
              margin="normal"
          
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon
                        sx={{
                          color: '#7C3AED',
                          fontSize: '25px'
                        }}
                      />
                    </InputAdornment>
                  )
                }
              }}
          
              sx={{
                mb: 2,
            
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                
                  '& fieldset': {
                    borderColor: '#3a1b61'
                  },
              
                  '&:hover fieldset': {
                    borderColor: '#7B2CFF'
                  },
              
                  '&.Mui-focused fieldset': {
                    borderColor: '#9B4DFF'
                  }
                },
            
                '& .MuiInputLabel-root': {
                  color: '#777'
                },
            
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#9B4DFF'
                }
              }}
            />

 
 
 
 
 
 
          {/* SENHA */}

            <TextField
              fullWidth
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                setErro('');
              }}
              margin="normal"
          
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon
                        sx={{
                          color: '#7C3AED',
                          fontSize: '25px'
                        }}
                      />
                    </InputAdornment>
                  )
                }
              }}
          
              sx={{
                mb: 2,
            
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                
                  '& fieldset': {
                    borderColor: '#3a1b61'
                  },
              
                  '&:hover fieldset': {
                    borderColor: '#7B2CFF'
                  },
              
                  '&.Mui-focused fieldset': {
                    borderColor: '#9B4DFF'
                  }
                },
            
                '& .MuiInputLabel-root': {
                  color: '#777'
                },
            
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#9B4DFF'
                }
              }}
            />

          {/* ==================================
              LEMBRAR / ESQUECI SENHA
          ================================== */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',

              mt: 1,
              mb: 2,

              flexWrap: 'wrap',
              gap: 1
            }}
          >

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: '#555',

                    '&.Mui-checked': {
                      color: '#FFD500'
                    }
                  }}
                />
              }

              label={
                <Typography
                  sx={{
                    color: '#888',
                    fontSize: '13px'
                  }}
                >
                  Lembrar de mim
                </Typography>
              }
            />


            <Typography
              component="span"

              sx={{
                color: '#FFD500',
                fontSize: '13px',
                cursor: 'pointer',

                '&:hover': {
                  color: '#fff'
                }
              }}
            >
              Esqueceu a senha?
            </Typography>

          </Box>


          {/* ==================================
              ERRO
          ================================== */}

          {erro && (
            <Alert
              severity="error"

              sx={{
                mb: 2,

                background:
                  'rgba(211,47,47,0.1)',

                color: '#ff7070',

                border:
                  '1px solid rgba(211,47,47,0.4)'
              }}
            >
              {erro}
            </Alert>
          )}


          {/* ==================================
              BOTÃO ENTRAR
          ================================== */}

          <Button
            type="submit"

            fullWidth
            size="large"

            endIcon={<ArrowForwardIcon />}

            sx={{
              height: 54,

              background: '#FFD500',
              color: '#050507',

              fontWeight: 900,
              fontSize: '15px',

              borderRadius: '7px',

              textTransform: 'uppercase',
              letterSpacing: '1px',

              '&:hover': {
                background: '#fff',

                boxShadow:
                  '0 0 25px rgba(255,213,0,0.35)',

                transform:
                  'translateY(-1px)'
              },

              transition: '0.2s'
            }}
          >
            Entrar
          </Button>


          {/* ==================================
              DIVISOR
          ================================== */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',

              my: 3
            }}
          >

            <Divider
              sx={{
                flex: 1,
                borderColor: '#292929'
              }}
            />

            <Typography
              sx={{
                mx: 2,
                color: '#666',
                fontSize: '12px'
              }}
            >
              OU
            </Typography>

            <Divider
              sx={{
                flex: 1,
                borderColor: '#292929'
              }}
            />

          </Box>


          {/* ==================================
              GOOGLE
          ================================== */}

          <Button
            fullWidth

            variant="outlined"

            startIcon={<GoogleIcon />}

            sx={{
              height: 50,

              color: '#ddd',

              borderColor: '#333',

              borderRadius: '7px',

              textTransform: 'none',

              '&:hover': {
                borderColor: '#7B2CFF',

                background:
                  'rgba(123,44,255,0.06)'
              }
            }}
          >
            Entrar com o Google
          </Button>


          {/* ==================================
              CRIAR CONTA
          ================================== */}

          <Typography
            sx={{
              textAlign: 'center',

              color: '#777',

              fontSize: '13px',

              mt: 3
            }}
          >
            Ainda não tem uma conta?{' '}

            <Box
              component="span"

              sx={{
                color: '#FFD500',

                cursor: 'pointer',

                fontWeight: 600,

                '&:hover': {
                  color: '#fff'
                }
              }}
            >
              Criar conta →
            </Box>

          </Typography>

        </Box>

      </Box>

    </Box>
  );
}

export default Login;

