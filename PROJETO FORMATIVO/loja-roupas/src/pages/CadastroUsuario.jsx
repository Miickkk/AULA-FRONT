import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,Typography,TextField,Button,Alert,InputAdornment} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { obterUsuarios, adicionarUsuario } from '../data/mockUsuarios';
import logo from '../assets/icons/logo2.png';
import banner2 from '../assets/banner2.png';

function CadastroUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  function handleCadastro(e) {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    const emailExiste = obterUsuarios().some(
      (usuario) => usuario.email === email
    );

    if (emailExiste) {
      setErro('Este e-mail já está cadastrado.');
      return;
    }

    const novoUsuario = {
      id: obterUsuarios().length + 1,
      nome: nome,
      email: email,
      senha: senha
    };

    // Adiciona o usuário ao mock
    adicionarUsuario(novoUsuario);

    console.log('Novo usuário cadastrado:', novoUsuario);
    console.log('Usuários:', obterUsuarios());

    // Volta para o login
    navigate('/login');
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

        {/* BARRA AMARELA */}

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

        {/* LOGO */}

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

        {/* TÍTULO */}

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
          Crie sua conta.
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: '#7C3AED',
            fontSize: '17px',
            mb: 3
          }}
        >
          Cadastre-se para continuar.
        </Typography>

        {/* FORMULÁRIO */}

        <Box component="form" onSubmit={handleCadastro}>

          {/* NOME */}

          <TextField
            fullWidth
            label="Nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              setErro('');
            }}
            margin="normal"
            autoFocus
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon
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

          {/* EMAIL */}

          <TextField
            fullWidth
            label="E-mail"
            type="email"
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

          {/* CONFIRMAR SENHA */}

          <TextField
            fullWidth
            label="Confirmar Senha"
            type="password"
            value={confirmarSenha}
            onChange={(e) => {
              setConfirmarSenha(e.target.value);
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

          {/* ERRO */}

          {erro && (
            <Alert
              severity="error"
              sx={{
                mb: 2,
                background: '#d32f2f1a',
                color: '#ff7070',
                border: '1px solid #d32f2f66'
              }}
            >
              {erro}
            </Alert>
          )}

          {/* BOTÃO */}

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
            Criar Conta
          </Button>

        </Box>

        {/* VOLTAR PARA LOGIN */}

        <Typography
          sx={{
            textAlign: 'center',
            color: '#777',
            fontSize: '13px',
            mt: 3
          }}
        >
          Já possui uma conta?{' '}

          <Box
            component="span"
            onClick={() => navigate('/login')}
            sx={{
              color: '#7C3AED',
              cursor: 'pointer',
              fontWeight: 600,

              '&:hover': {
                color: '#fff'
              }
            }}
          >
            Entrar 🢡
          </Box>
        </Typography>

      </Box>
    </Box>
  );
}

export default CadastroUsuario;