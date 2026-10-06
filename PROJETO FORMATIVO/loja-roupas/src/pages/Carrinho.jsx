{/* ==================== IMPORTES ==================== */}

import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LockIcon from '@mui/icons-material/Lock';
import iconeSeguro from '../assets/icons/seguro2.png';
import visa from '../assets/icons/visa.png';
import mastercard from '../assets/icons/mastercard.png';
import elo from '../assets/icons/elo.png';
import pix from '../assets/icons/pix.png';
import bannerCarrinho from '../assets/banner3.png';
import Checkout from "../pages/Checkout";



{/* ==================== COMPONENTE ==================== */}

function Carrinho({
    usuario,
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    finalizarCompra
}) {
    const navigate = useNavigate();
    if (!usuario) {
        navigate('/login');
        return null;
    }

    const quantidadeTotal = carrinho.reduce(
        (total, produto) =>
            total + produto.quantidade,
        0
    );

    const subtotal = carrinho.reduce(
        (total, produto) => {

            const preco = Number(
                produto.preco
                    .replace('R$', '')
                    .replace('.', '')
                    .replace(',', '.')
            );

            return total + preco * produto.quantidade;
        },
        0
    );

    const formatarPreco = (valor) =>
        valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

    return (

        <Box
            sx={{
                minHeight: '100vh',
                color: '#F5F5F5',
                py: 9,
            
                backgroundColor: '#08080D',
                backgroundImage: `url(${bannerCarrinho})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >

            <Container maxWidth="xl">




{/* ==================== TÍTULO ==================== */}

                <Box
                    sx={{
                        mb: 4
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.3
                        }}
                    >

                        <ShoppingCartIcon
                            sx={{
                                color: '#7C3AED',
                                fontSize: 60
                            }}
                        />


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: 50,
                                    fontWeight: 900,
                                    color: '#F5F5F7',
                                    lineHeight: 1
                                }}
                            >
                                Meu{' '}
                                <span
                                    style={{
                                        color: '#7C3AED'
                                    }}
                                >
                                    Carrinho
                                </span>
                            </Typography>


                            <Typography
                                sx={{
                                    color: '#999',
                                    fontSize: 15,
                                    mt: 0.8
                                }}
                            >
                                Confira seus produtos e finalize sua compra.
                            </Typography>

                        </Box>

                    </Box>

                </Box>




{/* ==================== CARRINHO INICIAL ==================== */}

            {carrinho.length === 0 ? (
                <Box
                    sx={{
                        border: '1px solid #ffffff14',
                        borderRadius: 2,
                        padding: 4,
                        textAlign: 'center'
                    }}
                >
                    <ShoppingCartIcon
                        sx={{
                            color: '#7C3AED',
                            fontSize: 50,
                            mb: 1
                        }}
                    />
                    <Typography
                        sx={{
                            color: '#999',
                            fontSize: 16
                        }}
                    >
                        Seu carrinho está vazio.
                    </Typography>
                    <Button
                        onClick={() => navigate('/')}
                        sx={{
                            mt: 3,
                            color: '#7C3AED',
                            fontWeight: 800
                        }}
                    >
                        CONTINUAR COMPRANDO
                    </Button>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 280px',
                        gap: 2
                    }}
                >




{/* ================= AREA PRODUTOS ================ */}

                    <Box
                        sx={{
                            border: '1px solid #ffffff14',
                            borderRadius: 2,
                            overflow: 'hidden',
                            backgroundColor: '#08080daf',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns:
                                    '1fr 130px 100px 40px',
                                alignItems: 'center',
                                height: 40,
                                px: 2,
                                borderBottom:
                                    '1px solid #ffffff14'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#aaa',
                                    fontSize: 10,
                                    fontWeight: 800
                                }}
                            >
                                PRODUTO
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#aaa',
                                    fontSize: 10,
                                    fontWeight: 800,
                                    textAlign: 'center'
                                }}
                            >
                                QUANTIDADE
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#aaa',
                                    fontSize: 10,
                                    fontWeight: 800,
                                    textAlign: 'center'
                                }}
                            >
                                PREÇO
                            </Typography>
                        </Box>
                    {carrinho.map((produto) => {
                        const precoUnitario =
                            Number(
                                produto.preco
                                    .replace('R$', '')
                                    .replace('.', '')
                                    .replace(',', '.')
                            );
                        const precoTotal =
                            precoUnitario *
                            produto.quantidade;
                        return (
                            <Box
                                key={produto.nome}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        '1fr 130px 100px 40px',
                                    alignItems: 'center',
                                    minHeight: 90,
                                    borderBottom:
                                        '1px solid #ffffff14',
                                    px: 2,
                                    py: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={produto.imagem}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            objectFit: 'cover',
                                            borderRadius: 1
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            sx={{
                                                color: '#F5F5F7',
                                                fontSize: 13,
                                                fontWeight: 800
                                            }}
                                        >
                                            {produto.nome}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#999',
                                                fontSize: 10
                                            }}
                                        >
                                            {produto.descricao}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#7C3AED',
                                                fontSize: 10,
                                                mt: 0.5
                                            }}
                                        >
                                            Tamanho:{' '}
                                            {produto.tamanho || 'G'}
                                        </Typography>
                                    </Box>
                                </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                border:
                                                    '1px solid #7C3AED',
                                                borderRadius: '10px',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <Button
                                                onClick={() =>
                                                    diminuirQuantidade(
                                                        produto.nome
                                                    )
                                                }
                                                sx={{
                                                    minWidth: 32,
                                                    width: 32,
                                                    height: 32,
                                                    color: '#999',
                                                    padding: 0,
                                                    '&:hover': {
                                                        color: '#FFD21F',
                                                        backgroundColor:
                                                            '#7C3AED20'
                                                    }
                                                }}
                                            >
                                                <RemoveIcon
                                                    sx={{
                                                        fontSize: 15
                                                    }}
                                                />
                                            </Button>

                                            <Typography
                                                sx={{
                                                    width: 30,
                                                    textAlign: 'center',
                                                    color: '#F5F5F7',
                                                    fontSize: 13,
                                                    fontWeight: 700
                                                }}
                                            >
                                                {produto.quantidade}
                                            </Typography>

                                            <Button
                                                onClick={() =>
                                                    aumentarQuantidade(
                                                        produto.nome
                                                    )
                                                }
                                                sx={{
                                                    minWidth: 32,
                                                    width: 32,
                                                    height: 32,
                                                    color: '#F5F5F7',
                                                    padding: 0,
                                                    '&:hover': {
                                                        color: '#FFD21F',
                                                        backgroundColor:
                                                            '#7C3AED20'
                                                    }
                                                }}
                                            >
                                                <AddIcon
                                                    sx={{
                                                        fontSize: 15
                                                    }}
                                                />
                                            </Button>
                                        </Box>
                                    </Box>

                                    <Typography
                                        sx={{
                                            color: '#FFD21F',
                                            fontSize: 12,
                                            fontWeight: 900,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {formatarPreco(precoTotal)}
                                    </Typography>

                                   <Box
                                        onClick={() => {
                                            for (
                                                let i = 0;
                                                i < produto.quantidade;
                                                i++
                                            ) {
                                                diminuirQuantidade(
                                                    produto.nome);
                                            }
                                        }}
                                        sx={{
                                            color: '#777',
                                            fontSize: 18,
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                            fontWeight: 700,
                                        
                                            '&:hover': {
                                                color: '#FFD21F'
                                            }
                                        }}
                                    >
                                </Box>

                            </Box>

                        );

                    })}

                 </Box>




{/* ================= AREA COMPRAR ================= */}

                <Box
                    sx={{
                        border:
                            '1px solid #ffffff14',
                        borderRadius: 2,
                        padding: 4,
                        height: 'fit-content',
                        backgroundColor: '#08080daf',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#F5F5F7',
                            fontSize: 18,
                            fontWeight: 900,
                            mb: 3
                        }}
                    >
                        RESUMO DO PEDIDO
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:
                                'space-between',
                            mb: 2
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#aaa',
                                fontSize: 11
                            }}
                        >
                            Subtotal ({quantidadeTotal}{' '}
                            {quantidadeTotal === 1
                                ? 'item'
                                : 'itens'})
                        </Typography>
                        <Typography
                            sx={{
                                color: '#F5F5F7',
                                fontSize: 11,
                                fontWeight: 700
                            }}
                        >
                            {formatarPreco(subtotal)}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:
                                'space-between',
                            mb: 2
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#aaa',
                                fontSize: 11
                            }}
                        >
                            Frete
                        </Typography>
                        <Typography
                            sx={{
                                color: '#7C3AED',
                                fontSize: 11,
                                fontWeight: 700
                            }}
                        >
                            Calcular
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '1px',
                            backgroundColor:
                                '#ffffff14',
                            mb: 2
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:
                                'space-between',
                            alignItems: 'center',
                            mb: 3
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#F5F5F7',
                                fontSize: 16,
                                fontWeight: 800
                            }}
                        >
                            Total
                        </Typography>
                        <Typography
                            sx={{
                                color: '#FFD21F',
                                fontSize: 17,
                                fontWeight: 900
                            }}
                        >
                            {formatarPreco(subtotal)}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: 38,
                        
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 8,
                                top: 6,
                                width: 9,
                                height: 32,
                                backgroundColor: '#FFD21F',
                                transform: 'skewX(-25deg)',
                            },
                        
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                right: 10,
                                top: 6,
                                width: 9,
                                height: 32,
                                backgroundColor: '#FFD21F',
                                transform: 'skewX(-25deg)',
                            },
                        }}>

                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={
                                <LockIcon
                                    sx={{
                                        fontSize: '14px !important',
                                    }}
                                />
                            }
                                onClick={() => navigate('/checkout')}                            sx={{
                                position: 'relative',
                                zIndex: 1,
                            
                                width: 'calc(100% - 10px)',
                                height: 38,
                                ml: '5px',
                            
                                background: `
                                    linear-gradient(
                                        105deg,
                                        #7C3AED 0%,
                                        #7c3aed 50%,
                                        #7c3aed 88%
                                    )
                                `,
                            
                                color: '#FFFFFF',
                                fontSize: 11,
                                fontWeight: 900,
                                borderRadius: 0,
                                clipPath:
                                    'polygon(6% 0, 100% 0, 94% 100%, 0 100%)',
                                boxShadow:
                                    '0 0 12px #7c3aed59',
                            
                                '&:hover': {
                                    background: `
                                        linear-gradient(
                                            105deg,
                                            #531da8 0%,
                                            #531da8 20%,
                                            #531da8 88%
                                        )
                                    `,
                                    boxShadow:
                                        '0 0 18px #7c3aed80',
                                },
                            
                                '& .MuiButton-startIcon': {
                                    marginRight: '5px',
                                    marginLeft: 0,
                                },
                            }}
                        >
                            FINALIZAR COMPRA
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            mt: 2,
                            pt: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.2,
                            }}
                        >
                        
                            <Box
                                component="img"
                                src={iconeSeguro}
                                alt="Compra segura"
                                sx={{
                                    width: 30,
                                    height: 30,
                                    objectFit: 'contain',
                                }}
                            />
                    
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                            
                                <Typography
                                    sx={{
                                        color: '#F5F5F7',
                                        fontSize: 11,
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Compra segura
                                </Typography>
                                
                                <Typography
                                    sx={{
                                        color: '#777',
                                        fontSize: 10,
                                        mt: 0.3,
                                    }}
                                >
                                    Seus dados estão protegidos.
                                </Typography>
                                
                            </Box>
                                
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 2,
                            pt: 2,
                            borderTop: '1px solid #ffffff14'
                        }}
                    >
                        <Box
                            component="img"
                            src={visa}
                            alt="Visa"
                            sx={{
                                width: 35,
                                height: 22,
                                objectFit: 'contain'
                            }}
                        />

                        <Box
                            component="img"
                            src={mastercard}
                            alt="Mastercard"
                            sx={{
                                width: 35,
                                height: 22,
                                objectFit: 'contain'
                            }}
                        />

                        <Box
                            component="img"
                            src={elo}
                            alt="Elo"
                            sx={{
                                width: 40,
                                height: 22,
                                objectFit: 'contain'
                            }}
                        />

                        <Box
                            component="img"
                            src={pix}
                            alt="Pix"
                            sx={{
                                width: 45,
                                height: 22,
                                objectFit: 'contain'
                            }}
                        />
                    </Box>
                </Box>

            </Box>

        )}

     </Container>

</Box>

);}


export default Carrinho;