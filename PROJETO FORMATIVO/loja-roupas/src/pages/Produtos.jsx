{/* ==================== IMPORTES ==================== */}

import { useEffect, useState } from 'react';
import {Container,Typography,Box,Button,Grid,Card,CardContent,} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSearchParams } from 'react-router-dom';

import camisetaAttack from '../assets/camisas/camisa-atack-on-titan.jpg';
import camisetaBatman from '../assets/camisas/camisa-batman.jpg';
import camisetaDeathNote from '../assets/camisas/camisa-death-note.jpg';
import camisetaMinecraft from '../assets/camisas/camisa-minecraft.jpg';
import camisetaTorfin from '../assets/camisas/camisa-torfin.jpg';

import moletomGojo from '../assets/moletom/gojo-moletom.webp';
import moletomHollow from '../assets/moletom/moletom-hollow.jpg';
import moletomHomemAranha from '../assets/moletom/moletom-homemaranha.webp';
import moletomMakima from '../assets/moletom/moletom-makima.webp';
import moletomSpy from '../assets/moletom/moletom-spy.webp';

import jaquetaAkatsuki from '../assets/jaquetas/akatsuki-jaqueta.jpg';
import jaquetaDazai from '../assets/jaquetas/jaqueta-dazai.jpg';
import jaquetaDraken from '../assets/jaquetas/jaqueta-draken.jpeg';
import jaquetaWhistlesy from '../assets/jaquetas/jaqueta-wriothesley.avif';
import jaquetaXmen from '../assets/jaquetas/jaqueta-xmen.avif';

import calcaAsa from '../assets/calcas/calca-asa.jpg';
import calcaKaneki from '../assets/calcas/calca-kaneki.webp';
import calcaKillua from '../assets/calcas/calca-killua.webp';
import calcaSailorMoon from '../assets/calcas/calca-sailormoon.webp';
import calcaShenhe from '../assets/calcas/calca-shenhe.webp';

import boneBaneki from '../assets/acessorios/bone-kaneki.jpg';
import boneBerserk from '../assets/acessorios/bone-berserk.avif';
import boneDeepLol from '../assets/acessorios/bone-deeppol.jpg';
import boneLuffy from '../assets/acessorios/bone-luffy.jpg';
import boneUndertale from '../assets/acessorios/bone-undertale.webp';

import chaveiroBaby from '../assets/acessorios/chaveiro-baby.webp';
import chaveiroEren from '../assets/acessorios/chaveiro-eren.avif';
import chaveiroLuffy from '../assets/acessorios/chaveiro-luffy.webp';
import chaveiroSallyface from '../assets/acessorios/chaveiro-sallyface.jpg';
import chaveiroTomie from '../assets/acessorios/chaveiro-tomie.jpg';

import colarAkatsuki from '../assets/acessorios/colar-akatsuki.webp';
import colarBlueLock from '../assets/acessorios/colar-bluelock.avif';
import colarFrieren from '../assets/acessorios/colar-frieren.webp';
import colarHomemAranha from '../assets/acessorios/colar-homemaranha.jpg';
import colarOmori from '../assets/acessorios/colar-omori.jpg';




{/* ==================== COMPONENTES ==================== */}

const produtos = [
  {
    categoria: 'Camisetas',
    nome: 'Camiseta Oversized',
    tema: 'Attack on Titan',
    preco: 129.90,
    promocao: 99.90,
    imagem: camisetaAttack,
    avaliacao: 4.9,
  },
  {
    categoria: 'Camisetas',
    nome: 'Camiseta Batman',
    tema: 'DC Comics',
    preco: 119.90,
    imagem: camisetaBatman,
    avaliacao: 4.8,
  },
  {
    categoria: 'Camisetas',
    nome: 'Camiseta Death Note',
    tema: 'Death Note',
    preco: 124.90,
    promocao: 94.90,
    imagem: camisetaDeathNote,
    avaliacao: 4.9,
  },
  {
    categoria: 'Camisetas',
    nome: 'Camiseta Minecraft',
    tema: 'Minecraft',
    preco: 109.90,
    imagem: camisetaMinecraft,
    avaliacao: 4.7,
  },
  {
    categoria: 'Camisetas',
    nome: 'Camiseta Torfin',
    tema: 'Vinland Saga',
    preco: 129.90,
    imagem: camisetaTorfin,
    avaliacao: 4.8,
  },

  {
    categoria: 'Moletons',
    nome: 'Moletom Jujutsu Kaisen',
    tema: 'Gojo Satoru',
    preco: 219.90,
    imagem: moletomGojo,
    avaliacao: 5.0,
  },
  {
    categoria: 'Moletons',
    nome: 'Moletom Hollow',
    tema: 'Anime',
    preco: 229.90,
    promocao: 189.90,
    imagem: moletomHollow,
    avaliacao: 4.8,
  },
  {
    categoria: 'Moletons',
    nome: 'Moletom Homem-Aranha',
    tema: 'Marvel',
    preco: 239.90,
    imagem: moletomHomemAranha,
    avaliacao: 4.9,
  },
  {
    categoria: 'Moletons',
    nome: 'Moletom Makima',
    tema: 'Chainsaw Man',
    preco: 219.90,
    promocao: 179.90,
    imagem: moletomMakima,
    avaliacao: 4.9,
  },
  {
    categoria: 'Moletons',
    nome: 'Moletom Spy x Family',
    tema: 'Spy x Family',
    preco: 209.90,
    imagem: moletomSpy,
    avaliacao: 4.7,
  },

  {
    categoria: 'Jaquetas',
    nome: 'Jaqueta Akatsuki',
    tema: 'Corta Vento',
    preco: 249.90,
    promocao: 189.90,
    imagem: jaquetaAkatsuki,
    avaliacao: 4.8,
  },
  {
    categoria: 'Jaquetas',
    nome: 'Jaqueta Dazai',
    tema: 'Bungou Stray Dogs',
    preco: 259.90,
    imagem: jaquetaDazai,
    avaliacao: 4.9,
  },
  {
    categoria: 'Jaquetas',
    nome: 'Jaqueta Draken',
    tema: 'Tokyo Revengers',
    preco: 269.90,
    promocao: 219.90,
    imagem: jaquetaDraken,
    avaliacao: 4.8,
  },
  {
    categoria: 'Jaquetas',
    nome: 'Jaqueta Whistlesy',
    tema: 'Anime',
    preco: 249.90,
    imagem: jaquetaWhistlesy,
    avaliacao: 4.7,
  },
  {
    categoria: 'Jaquetas',
    nome: 'Jaqueta X-Men',
    tema: 'Marvel',
    preco: 279.90,
    imagem: jaquetaXmen,
    avaliacao: 4.9,
  },

  {
    categoria: 'Calças',
    nome: 'Calça Asa',
    tema: 'Streetwear Geek',
    preco: 179.90,
    imagem: calcaAsa,
    avaliacao: 4.7,
  },
  {
    categoria: 'Calças',
    nome: 'Calça Kaneki',
    tema: 'Tokyo Ghoul',
    preco: 189.90,
    promocao: 149.90,
    imagem: calcaKaneki,
    avaliacao: 4.8,
  },
  {
    categoria: 'Calças',
    nome: 'Calça Killua',
    tema: 'Hunter x Hunter',
    preco: 179.90,
    imagem: calcaKillua,
    avaliacao: 4.9,
  },
  {
    categoria: 'Calças',
    nome: 'Calça Sailor Moon',
    tema: 'Sailor Moon',
    preco: 189.90,
    promocao: 159.90,
    imagem: calcaSailorMoon,
    avaliacao: 4.8,
  },
  {
    categoria: 'Calças',
    nome: 'Calça Shenhe',
    tema: 'Genshin Impact',
    preco: 199.90,
    imagem: calcaShenhe,
    avaliacao: 4.9,
  },

  {
    categoria: 'Bonés',
    nome: 'Boné Baneki',
    tema: 'Tokyo Ghoul',
    preco: 79.90,
    promocao: 59.90,
    imagem: boneBaneki,
    avaliacao: 4.8,
  },
  {
    categoria: 'Bonés',
    nome: 'Boné Berserk',
    tema: 'Berserk',
    preco: 89.90,
    imagem: boneBerserk,
    avaliacao: 4.9,
  },
  {
    categoria: 'Bonés',
    nome: 'Boné Deep Lol',
    tema: 'Geek',
    preco: 74.90,
    imagem: boneDeepLol,
    avaliacao: 4.7,
  },
  {
    categoria: 'Bonés',
    nome: 'Boné One Piece',
    tema: 'Chapéu de Palha',
    preco: 79.90,
    promocao: 59.90,
    imagem: boneLuffy,
    avaliacao: 4.7,
  },
  {
    categoria: 'Bonés',
    nome: 'Boné Undertale',
    tema: 'Undertale',
    preco: 84.90,
    imagem: boneUndertale,
    avaliacao: 4.8,
  },

  {
    categoria: 'Chaveiros',
    nome: 'Chaveiro Baby',
    tema: 'Geek',
    preco: 39.90,
    imagem: chaveiroBaby,
    avaliacao: 4.8,
  },
  {
    categoria: 'Chaveiros',
    nome: 'Chaveiro Eren',
    tema: 'Attack on Titan',
    preco: 39.90,
    promocao: 29.90,
    imagem: chaveiroEren,
    avaliacao: 4.9,
  },
  {
    categoria: 'Chaveiros',
    nome: 'Chaveiro Luffy',
    tema: 'One Piece',
    preco: 34.90,
    imagem: chaveiroLuffy,
    avaliacao: 4.8,
  },
  {
    categoria: 'Chaveiros',
    nome: 'Chaveiro Sally Face',
    tema: 'Sally Face',
    preco: 39.90,
    imagem: chaveiroSallyface,
    avaliacao: 4.7,
  },
  {
    categoria: 'Chaveiros',
    nome: 'Chaveiro Tomie',
    tema: 'Junji Ito',
    preco: 44.90,
    promocao: 34.90,
    imagem: chaveiroTomie,
    avaliacao: 4.9,
  },

  {
    categoria: 'Colares',
    nome: 'Colar Akatsuki',
    tema: 'Naruto',
    preco: 69.90,
    promocao: 49.90,
    imagem: colarAkatsuki,
    avaliacao: 4.8,
  },
  {
    categoria: 'Colares',
    nome: 'Colar Blue Lock',
    tema: 'Blue Lock',
    preco: 64.90,
    imagem: colarBlueLock,
    avaliacao: 4.9,
  },
  {
    categoria: 'Colares',
    nome: 'Colar Frieren',
    tema: 'Frieren',
    preco: 69.90,
    imagem: colarFrieren,
    avaliacao: 4.8,
  },
  {
    categoria: 'Colares',
    nome: 'Colar Homem-Aranha',
    tema: 'Marvel',
    preco: 59.90,
    promocao: 44.90,
    imagem: colarHomemAranha,
    avaliacao: 4.7,
  },
  {
    categoria: 'Colares',
    nome: 'Colar Omori',
    tema: 'Omori',
    preco: 64.90,
    imagem: colarOmori,
    avaliacao: 4.8,
  },
];

const categoriasRoupas = ['Camisetas', 'Moletons', 'Jaquetas', 'Calças'];
const categoriasAcessorios = ['Bonés', 'Chaveiros', 'Colares'];

function dinheiro(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function Produtos({ usuario, adicionarAoCarrinho }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaURL = searchParams.get('categoria');
  const [filtro, setFiltro] = useState(
    categoriaURL || 'Todos'
  );

  useEffect(() => {
    setFiltro(categoriaURL || 'Todos');
  }, [categoriaURL]);

  const comprar = (produto) => {
    if (!usuario) {
      navigate('/login');
      return;
    }

    adicionarAoCarrinho({
      ...produto,
      preco: dinheiro(produto.promocao ?? produto.preco),
      quantidade: 1,
    });

    navigate('/carrinho');
  };

const categoriasVisiveis =
  filtro === 'Todos'
    ? [...categoriasRoupas, ...categoriasAcessorios]
    : filtro === 'ACESSÓRIOS'
      ? categoriasAcessorios
      : [filtro];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#08080D',
        color: '#F5F5F5',
        py: 6,
      }}
    >
      <Container maxWidth="xl">

        {/* TÍTULO */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: { xs: 34, md: 48 },
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            TODOS OS <span style={{ color: '#7C3AED' }}>PRODUTOS</span>
          </Typography>

          <Typography
            sx={{
              color: '#999',
              mt: 1,
              fontSize: 14,
            }}
          >
            Encontre seu próximo item geek favorito.
          </Typography>
        </Box>

        {/* FILTROS */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            mb: 6,
          }}
        >
          {['Todos', ...categoriasRoupas, ...categoriasAcessorios].map(
            (categoria) => (
              <Button
                key={categoria}
                    onClick={() => {
                      setFiltro(categoria);
                    
                      if (categoria === 'Todos') {
                        setSearchParams({});
                      } else {
                        setSearchParams({ categoria });
                      }
                    }}                
                    sx={{
                        color:
                        filtro === categoria ? '#08080D' : '#F5F5F5',
                        backgroundColor:
                        filtro === categoria ? '#FFD21F' : '#0D0D13',
                        border: '1px solid #292332',
                        fontSize: 11,
                        fontWeight: 900,
                        px: 2,
                  '&:hover': {
                    backgroundColor:
                      filtro === categoria ? '#FFD21F' : '#7C3AED',
                    color: '#FFFFFF',
                  },
                }}
              >
                {categoria.toUpperCase()}
              </Button>
            )
          )}
        </Box>

        {/* CATEGORIAS */}
        {categoriasVisiveis.map((categoria) => {
          const lista = produtos.filter(
            (produto) => produto.categoria === categoria
          );

          return (
            <Box key={categoria} sx={{ mb: 7 }}>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 30,
                    backgroundColor: '#7C3AED',
                    boxShadow: '0 0 12px #7C3AED',
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 900,
                  }}
                >
                  {categoria}
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {lista.map((produto) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={2.4}
                    key={produto.nome}
                    sx={{ display: 'flex' }}
                  >
                    <Card
                      sx={{
                        width: '100%',
                        minHeight: 450,
                        backgroundColor: '#0D0D13',
                        border: '1px solid #292332',
                        color: '#F5F5F5',
                        borderRadius: 1.5,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: '.25s',
                        '&:hover': {
                          borderColor: '#7C3AED',
                          transform: 'translateY(-4px)',
                          boxShadow: '0 0 22px #7c3aed33',
                        },
                      }}
                    >
                      {/* IMAGEM */}
                      <Box
                        sx={{
                          height: 245,
                          backgroundColor: '#18151F',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {produto.promocao && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 12,
                              left: 12,
                              zIndex: 2,
                              backgroundColor: '#FFD21F',
                              color: '#08080D',
                              px: 1.5,
                              py: .6,
                              borderRadius: 1,
                              fontSize: 10,
                              fontWeight: 900,
                            }}
                          >
                            PROMOÇÃO
                          </Box>
                        )}

                        <img
                          src={produto.imagem}
                          alt={produto.nome}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>

                      <CardContent
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 15,
                            fontWeight: 900,
                            minHeight: 38,
                            lineHeight: 1.2,
                          }}
                        >
                          {produto.nome}
                        </Typography>

                        <Typography
                          sx={{
                            color: '#A1A1AA',
                            fontSize: 12,
                            mt: .5,
                          }}
                        >
                          {produto.tema}
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: .6,
                            mt: 1,
                          }}
                        >
                          <Typography sx={{ color: '#FFD21F' }}>
                            ★
                          </Typography>

                          <Typography
                            sx={{
                              color: '#A1A1AA',
                              fontSize: 12,
                            }}
                          >
                            {produto.avaliacao.toFixed(1)}
                          </Typography>
                        </Box>

                        {/* PREÇO */}
                        <Box sx={{ mt: 1.2, mb: 1.5 }}>
                          {produto.promocao && (
                            <Typography
                              component="span"
                              sx={{
                                color: '#777',
                                fontSize: 12,
                                textDecoration: 'line-through',
                                mr: 1,
                              }}
                            >
                              {dinheiro(produto.preco)}
                            </Typography>
                          )}

                          <Typography
                            component="span"
                            sx={{
                              color: '#FFD21F',
                              fontSize: 17,
                              fontWeight: 900,
                            }}
                          >
                            {dinheiro(
                              produto.promocao ?? produto.preco
                            )}
                          </Typography>
                        </Box>

                        <Button
                          fullWidth
                          variant="contained"
                          startIcon={<ShoppingCartOutlinedIcon />}
                          onClick={() => comprar(produto)}
                          sx={{
                            mt: 'auto',
                            height: 38,
                            backgroundColor: '#7C3AED',
                            fontSize: 11,
                            fontWeight: 900,
                            '&:hover': {
                              backgroundColor: '#6D28D9',
                            },
                          }}
                        >
                          ADICIONAR AO CARRINHO
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}

export default Produtos;
