{/* ==================== IMPORTES ==================== */}

import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import hero from '../assets/banner.jpg';
import gamer from '../assets/icons/gamer.png';
import seguro from '../assets/icons/seguro.png';
import coracao from '../assets/icons/coracao.png';
import camisetaAttack from '../assets/camisas/camisa-atack-on-titan.jpg';
import moletomGojo from '../assets/moletom/gojo-moletom.webp';
import jaquetaAkatsuki from '../assets/jaquetas/akatsuki-jaqueta.jpg';
import boneLuffy from '../assets/acessorios/bone-luffy.jpg';
import camisetas from '../assets/icons/1.png';
import moletons from '../assets/icons/2.png';
import jaquetas from '../assets/icons/3.png';
import calcas from '../assets/icons/4.png';
import bones from '../assets/icons/5.png';
import acessorios from '../assets/icons/6.png';
import naruto from '../assets/naruto.png';




{/* ==================== DADOS ==================== */}

function Home() {
    const categorias = [
        {
            nome: 'CAMISETAS',
            imagem: camisetas
        },
        {
            nome: 'MOLETONS',
            imagem: moletons
        },
        {
            nome: 'JAQUETAS',
            imagem: jaquetas
        },
        {
            nome: 'CALÇAS',
            imagem: calcas
        },
        {
            nome: 'BONÉS',
            imagem: bones
        },
        {
            nome: 'ACESSÓRIOS',
            imagem: acessorios
        },
    ];

    const produtos = [
        {
            nome: 'Camiseta Oversized',
            tema: 'Attack on Titan',
            preco: 'R$ 129,90',
            destaque: 'MAIS VENDIDO',
            avaliacao: 4.9,
            imagem: camisetaAttack,
        },
        {
            nome: 'Moletom Jujutsu Kaisen',
            tema: 'Gojo Satoru',
            preco: 'R$ 219,90',
            destaque: 'LANÇAMENTO',
            avaliacao: 5.0,
            imagem: moletomGojo,
        },
        {
            nome: 'Jaqueta Akatsuki',
            tema: 'Corta Vento',
            preco: 'R$ 249,90',
            avaliacao: 4.8,
            imagem: jaquetaAkatsuki,
        },
        {
            nome: 'Boné One Piece',
            tema: 'Chapéu de Palha',
            preco: 'R$ 79,90',
            avaliacao: 4.7,
            imagem: boneLuffy,
        },
    ];




{/* ==================== BANNER ==================== */}

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
            <Box
                sx={{
                    minHeight: 400,
                    border: '1px solid #7C3AED',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 5,
                    backgroundImage: `linear-gradient(90deg, #08080dfa 0%, rgba(8,8,13,0.82) 0%, rgba(8,8,13,0.25) 0%), url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 0 30px #7c3aed33',
                }}
            >
                <Box sx={{ p: { xs: 4, md: 7 }, maxWidth: 650 }}>
                    <Typography
                        sx={{
                            color: '#FFD21F',
                            fontWeight: 'bold',
                            letterSpacing: 2,
                            mb: 1,
                        }}
                    >
                        MODA GEEK
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 900,
                            lineHeight: 1,
                            mb: 2,
                        }}
                    >
                        SEU MUNDO
                        <br />
                        <span style={{ color: '#7C3AED' }}>
                            SEU ESTILO
                        </span>
                    </Typography>
                    <Typography
                        sx={{
                            color: '#D1D1D6',
                            fontSize: '1.1rem',
                            mb: 3,
                        }}
                    >
                        Roupas e acessórios de todo o universo geek.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#FFD21F',
                            color: '#08080D',
                            fontWeight: 'bold',
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                                backgroundColor: '#F5C400',
                            },
                        }}
                    >
                        VER COLEÇÕES ⭢
                    </Button>
                </Box>
            </Box>




{/* ==================== CATEGORIAS ==================== */}

<Box
    sx={{
        mb: 6,
        display: 'grid',
        gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(6, 1fr)',
        },
        gap: 2,
    }}
>
    {categorias.map((categoria) => (
        <Box
            key={categoria.nome}
            sx={{
                height: 145,
                backgroundColor: '#0D0D13',
                border: '1px solid #7C3AED',
                borderRadius: 1,
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
                cursor: 'pointer',
                transition: '0.3s',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 14,
                    height: 14,
                    borderTop: '3px solid #FFD21F',
                    borderLeft: '3px solid #FFD21F',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 35,
                    height: 35,
                    borderBottom: '3px solid #FFD21F',
                    borderRight: '3px solid #FFD21F',
                },
                '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: '#9B6DFF',
                    boxShadow: '0 0 18px #7c3aed4d',
                },
            }}
        >
            {/* IMAGEM = CATEGORIA */}
            <Box
                sx={{
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 1,
                }}
            >
                <img
                    src={categoria.imagem}
                    alt={categoria.nome}
                    style={{
                        maxWidth: '75px',
                        maxHeight: '65px',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <Typography
                sx={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#F5F5F5',
                    mt: 1,
                }}
            >
                {categoria.nome}
            </Typography>
            <Typography
                sx={{
                    fontSize: 11,
                    color: '#FFD21F',
                    mt: 0.7,
                }}
            >
                VER TUDO ⭢
            </Typography>
        </Box>
    ))}
</Box>




{/* ==================== PRODUTOS ==================== */}

<Box sx={{ mb: 6 }}>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            position: 'relative',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
            }}
        >
            <Box
                sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: '#FFD21F',
                    clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0 100%)',
                }}
            />
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 900,
                    color: '#F5F5F5',
                    letterSpacing: 0.5,
                }}
            >
                PRODUTOS EM DESTAQUE
            </Typography>
        </Box>

        <Typography
            sx={{
                color: '#9B6DFF',
                fontWeight: 'bold',
                fontSize: 15,
                cursor: 'pointer',
            }}
        >
            VER TODOS ⭢
        </Typography>
    </Box>

    <Grid
        container
        spacing={2}
        sx={{
            width: '100%',
            margin: 0,
            flexWrap: 'nowrap'
        }}
    >
        {produtos.map((produto) => (
            <Grid
                item
                xs={3}
                sm={3}
                md={3}
                key={produto.nome}
                sx={{
                    display: 'flex',
                    flex: '0 0 25%'
                }}
            >
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: 500,
                        backgroundColor: '#0D0D13',
                        border: '1px solid #292332',
                        color: '#F5F5F5',
                        borderRadius: 1.5,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        transition: '0.3s',
                        '&:hover': {
                            borderColor: '#7C3AED',
                            transform: 'translateY(-4px)',
                            boxShadow: '0 0 20px #7c3aed33',
                        },
                    }}
                >
                    {/* IMAGEM = PRODUTOS */}
                    <Box
                        sx={{
                            height: 270,
                            minHeight: 270,
                            backgroundColor: '#18151F',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#555',
                                fontSize: 11,
                            }}
                        >
                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                                style={{
                                    width: '370px',
                                    height: '270px',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>

                        {produto.destaque && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    backgroundColor:
                                        produto.destaque === 'LANÇAMENTO'
                                            ? '#7C3AED'
                                            : '#FFD21F',
                                    color:
                                        produto.destaque === 'LANÇAMENTO'
                                            ? '#FFFFFF'
                                            : '#08080D',
                                    px: 2,
                                    py: 0.6,
                                    borderRadius: 0.4,
                                    fontSize: 9,
                                    fontWeight: 900,
                                    letterSpacing: 0.9,
                                }}
                            >
                                {produto.destaque}
                            </Box>
                        )}
                    </Box>

                    <CardContent
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 800,
                                color: '#F5F5F5',
                                lineHeight: 1.2,
                                minHeight: 32,
                            }}
                        >
                            {produto.nome}
                        </Typography>

                        <Typography
                            sx={{
                                color: '#A1A1AA',
                                fontSize: 15,
                                mt: 0.3,
                            }}
                        >
                            {produto.tema}
                        </Typography>

                        <Typography
                            sx={{
                                color: '#F5F5F5',
                                fontSize: 17,
                                fontWeight: 900,
                                mt: 1,
                            }}
                        >
                            {produto.preco}
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.8,
                                mt: 0.7,
                                mb: 1.5,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '2px',
                                }}
                            >
                                {[1, 2, 3, 4, 5].map((estrela) => (
                                    <Typography
                                        key={estrela}
                                        component="span"
                                        sx={{
                                            fontSize: 16,
                                            color: '#FFD21F',
                                            lineHeight: 1,
                                        }}
                                    >
                                        ★
                                    </Typography>
                                ))}
                            </Box>

                            <Typography
                                sx={{
                                    color: '#A1A1AA',
                                    fontSize: 12,
                                }}
                            >
                                {produto.avaliacao.toFixed(1)}
                            </Typography>
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 'auto',
                                height: 35,
                                backgroundColor: '#7C3AED',
                                color: '#FFFFFF',
                                fontSize: 12,
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




{/* ==================== RODAPE ==================== */}

                <Box
                    sx={{
                        borderTop: '1px solid #292332',
                        mt: 5,
                    }}
                >
                    <Box
                        sx={{
                            minHeight: 120,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '1px solid #292332',
                            position: 'relative',
                            overflow: 'hidden',
                            py: 2,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                width: 55,
                                height: 55,
                                backgroundColor: '#FFD21F',
                                clipPath: 'polygon(0 100%, 0 80%, 65% 0, 100% 0, 20% 100%)',
                            }}
                        />

                        <Box
                            sx={{
                                flex: '0 0 30%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 65,
                                borderRight: '1px solid #292332',
                                px: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,
                                    height: 42,
                                    mr: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                <img
                                    src={gamer}
                                    alt="Qualidade Garantida"
                                    style={{
                                        width: '54px',
                                        height: '54px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: 17,
                                        fontWeight: 900,
                                        color: '#F5F5F5',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    QUALIDADE
                                    <br />
                                    GARANTIDA
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#999',
                                        fontSize: 14,
                                        mt: 0.8,
                                    }}
                                >
                                    Produtos confiáveis e originais.
                                </Typography>
                            </Box>
                        </Box>


                        <Box
                            sx={{
                                flex: '0 0 30%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 65,
                                borderRight: '1px solid #292332',
                                px: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,
                                    height: 42,
                                    mr: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                <img
                                    src={seguro}
                                    alt="Compra Segura"
                                    style={{
                                        width: '54px',
                                        height: '54px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: 17,
                                        fontWeight: 900,
                                        color: '#F5F5F5',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    COMPRA
                                    <br />
                                    SEGURA
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#999',
                                        fontSize: 14,
                                        mt: 0.8,
                                    }}
                                >
                                    Seus dados protegidos.
                                </Typography>
                            </Box>
                        </Box>


                        <Box
                            sx={{
                                flex: '0 0 30%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 65,
                                px: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,
                                    height: 42,
                                    mr: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >

                                <img
                                    src={coracao}
                                    alt="Atendimento"
                                    style={{
                                        width: '54px',
                                        height: '54px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: 17,
                                        fontWeight: 900,
                                        color: '#F5F5F5',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    ATENDIMENTO
                                    <br />
                                    ESPECIALIZADO
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#999',
                                        fontSize: 14,
                                        mt: 0.8,
                                    }}
                                >
                                    Fãs atendendo fãs.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                position: 'absolute',
                                right: -20,
                                bottom: 0,
                                width: 150,
                                height: 120,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                pointerEvents: 'none',
                            }}
                        >
                            <img
                                src={naruto}
                                alt="Naruto"
                                style={{
                                    width: '350px',
                                    height: '120px',
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center',
                                }}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            minHeight: 45,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: 2,
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                flexWrap: 'wrap',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#999',
                                    fontSize: 13,
                                }}
                            >
                                Moda Geek
                            </Typography>

                            <Typography sx={{ color: '#7C3AED', fontSize: 13 }}>
                                •
                            </Typography>

                            <Typography sx={{ color: '#999', fontSize: 13 }}>
                                Anime
                            </Typography>

                            <Typography sx={{ color: '#7C3AED', fontSize: 13 }}>
                                •
                            </Typography>

                            <Typography sx={{ color: '#999', fontSize: 13 }}>
                                Games
                            </Typography>

                            <Typography sx={{ color: '#7C3AED', fontSize: 13 }}>
                                •
                            </Typography>

                            <Typography sx={{ color: '#999', fontSize: 13 }}>
                                RPG
                            </Typography>

                            <Typography sx={{ color: '#7C3AED', fontSize: 13 }}>
                                •
                            </Typography>

                            <Typography sx={{ color: '#999', fontSize: 13 }}>
                                Mangás
                            </Typography>

                            <Typography sx={{ color: '#7C3AED', fontSize: 13 }}>
                                •
                            </Typography>

                            <Typography sx={{ color: '#999', fontSize: 13 }}>
                                HQs
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1.8,
                                alignItems: 'center',
                            }}
                        >
                            <Box sx={{ width: 15, height: 15 }} />
                            <Box sx={{ width: 15, height: 15 }} />
                            <Box sx={{ width: 15, height: 15 }} />
                            <Box sx={{ width: 15, height: 15 }} />
                            <Box sx={{ width: 15, height: 15 }} />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Home;
