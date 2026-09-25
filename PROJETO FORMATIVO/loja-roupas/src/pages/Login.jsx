{/* ==================== IMPORTES ==================== */}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Alert, InputAdornment, IconButton, Checkbox, FormControlLabel, Divider } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GoogleIcon from '@mui/icons-material/Google';
import { mockUsuarios } from '../data/mockUsuarios';
import logo from '../assets/icons/logo2.png';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import banner2 from '../assets/banner2.png';




{/* ==================== BOX ==================== */}

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
        backgroundImage: `url(${banner2})`,
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

          background: '#07070cf0',

          border: '1px solid #7B2CFF',
          borderRadius: '14px',

          boxShadow: `
            0 0 25px #7b2cff40,
            0 0 80px #7b2cff14
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




{/* ==================== LOGO ==================== */}

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




{/* ==================== LOGIN ==================== */}

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
          Faça login para continuar.
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>




{/* ==================== AREA DO EMAIL ==================== */}

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
                background: '#ffffff05',

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




{/* ==================== AREA DA SENHA ==================== */}

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
                background: '#ffffff05',

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




{/* ==================== ESQUECEU A SENHA ==================== */}

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




{/* ==================== MENSAGEM DE ERRO ==================== */}

          {erro && (
            <Alert
              severity="error"

              sx={{
                mb: 2,

                background:
                  '#d32f2f1a',

                color: '#ff7070',

                border:
                  '1px solid #d32f2f66'
              }}
            >
              {erro}
            </Alert>
          )}




{/* ==================== BUTAO DE ENTRAR ==================== */}

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
              fontSize: '14px',
              borderRadius: 0,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              position: 'relative',
              overflow: 'hidden',

              clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',

              '&::before': {
                content: '""',
                position: 'absolute',
                left: '1px',
                top: '1px',
                width: '30px',
                height: '30px',
                background: `linear-gradient(
                      140deg,
                      transparent 42%,
                      #050507 43%,
                      #050507 50%,
                      transparent 51%
                    ),
                    linear-gradient(
                      140deg,
                      transparent 62%,
                      #050507 63%,
                      #050507 70%,
                      transparent 71%
                  )`,
                },

              '&::after': {
                content: '""',
                position: 'absolute',
                right: '1px',
                bottom: '1px',
                width: '30px',
                height: '30px',
                background: `linear-gradient(
                      140deg,
                      transparent 42%,
                      #050507 43%,
                      #050507 50%,
                      transparent 51%
                    ),
                    linear-gradient(
                       140deg,
                      transparent 62%,
                      #050507 63%,
                      #050507 70%,
                      transparent 71%
                    )`,
                    transform: 'rotate(180deg)',
                  },

              '&:hover': {
                background: '#fff',
                transform: 'translateY(-1px)',
              },
              transition: '0.2s',
            }}
          >
            Entrar
          </Button>




{/* ==================== OU ==================== */}

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




{/* ==================== AREA DO GOOGLE ==================== */}

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
                  '#7b2cff0f'
              }
            }}
          >
            Entrar com o Google
          </Button>




{/* ==================== CRIA CONTA ==================== */}

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
                color: '#7C3AED',

                cursor: 'pointer',

                fontWeight: 600,

                '&:hover': {
                  color: '#fff'
                }
              }}
            >
              Criar conta ⭢
            </Box>

          </Typography>

        </Box>

      </Box>

    </Box>
  );
}

export default Login;

