{/* ==================== IMPORTES ==================== */}

import { useState } from 'react';
import {Container,Typography,Box,Button,TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import PixIcon from '@mui/icons-material/Pix';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import visa from '../assets/icons/visa.png';
import mastercard from '../assets/icons/mastercard.png';
import elo from '../assets/icons/elo.png';
import pix from '../assets/icons/pix.png';
import iconeSeguro from '../assets/icons/seguro2.png';
import bannerCarrinho from '../assets/banner3.png';




{/* ==================== COMPONENTES ==================== */}

function FinalizarCompra({
    usuario,
    carrinho,
    limparCarrinho
}) {

    const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
    const navigate = useNavigate();

    const [endereco, setEndereco] = useState({
        nome: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });
    const [pagamento, setPagamento] = useState(
        'Cartão de Crédito'
    );

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
                py: 7,

                backgroundColor: '#08080D',

                backgroundImage: `
                    linear-gradient(
                        #08080d59,
                        #08080d59
                    ),
                    url(${bannerCarrinho})
                `,

                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >

            <Container maxWidth="xl">




{/* ==================== VOLTAR ==================== */}

        <Button
            onClick={() => navigate('/carrinho')}
            sx={{
                color: '#7C3AED',
                fontSize: 12,
                fontWeight: 700,
                minWidth: 'auto',
                padding: 0,
                mb: 3,
            
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#FFD21F'
                }
            }}
        >
            🢠 Voltar para o carrinho
        </Button>




{/* ==================== TÍTULO ==================== */}

        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 4
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
                    Finalizar{' '}
                    <span
                        style={{
                            color: '#7C3AED'
                        }}
                    >
                        Compra
                    </span>
                </Typography>
                <Typography
                    sx={{
                        color: '#999',
                        fontSize: 15,
                        mt: 0.8
                    }}
                >
                    Confira seus dados antes de concluir sua compra.
                </Typography>
            </Box>
        </Box>




{/* ==================== CONTEÚDO ==================== */}

{/* ================ ENDERECO ================ */}
<Box
    sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: 3,
        alignItems: 'start'
    }}
>
    <Box>
        <Box
            sx={{
                border: '1px solid #ffffff14',
                borderRadius: 2,
                backgroundColor: '#08080daf',
                p: 3,
                mb: 2
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3
                }}
            >
                <LocationOnIcon
                    sx={{
                        color: '#7C3AED',
                        fontSize: 28
                    }}
                />
                <Typography
                    sx={{
                        color: '#F5F5F7',
                        fontSize: 19,
                        fontWeight: 900
                    }}
                >
                    <span
                        style={{
                            color: '#7C3AED'
                        }}
                    >
                        1.
                    </span>
                    {' '}Endereço de Entrega
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr',
                    gap: 2,
                    mb: 2
                }}
            >
                <Campo
                    label="Nome completo *"
                    placeholder="Digite seu nome completo"
                    value={endereco.nome}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            nome: e.target.value
                        })
                    }
                />
                <Campo
                    label="CEP *"
                    placeholder="00000-000"
                    value={endereco.cep}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            cep: e.target.value
                        })
                    }
                />
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns:
                        '1.5fr 0.5fr 1fr',
                    gap: 2,
                    mb: 2
                }}
            >
                <Campo
                    label="Endereço *"
                    placeholder="Rua, Avenida, etc."
                    value={endereco.rua}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            rua: e.target.value
                        })
                    }
                />
                <Campo
                    label="Número *"
                    placeholder="Número"
                    value={endereco.numero}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            numero: e.target.value
                        })
                    }
                />
                <Campo
                    label="Complemento"
                    placeholder="Apto, bloco, etc."
                    value={endereco.complemento}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            complemento: e.target.value
                        })
                    }
                />
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns:
                        '1fr 1fr 1fr',
                    gap: 2
                }}
            >
                <Campo
                    label="Bairro *"
                    placeholder="Digite o bairro"
                    value={endereco.bairro}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            bairro: e.target.value
                        })
                    }
                />
                <Campo
                    label="Cidade *"
                    placeholder="Digite a cidade"
                    value={endereco.cidade}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            cidade: e.target.value
                        })
                    }
                />
                <Campo
                    label="Estado *"
                    placeholder="SP"
                    value={endereco.estado}
                    onChange={(e) =>
                        setEndereco({
                            ...endereco,
                            estado: e.target.value
                        })
                    }
                />
            </Box>
        </Box>


{/* ================ PAGAMENTO ================ */}
<Box
    sx={{
        border: '1px solid #ffffff14',
        borderRadius: 2,
        backgroundColor: '#08080daf',
        p: 3
    }}
>
    {/* TÍTULO */}
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 3
        }}
    >
        <CreditCardIcon
            sx={{
                color: '#7C3AED',
                fontSize: 28
            }}
        />
        <Typography
            sx={{
                color: '#F5F5F7',
                fontSize: 19,
                fontWeight: 900
            }}
        >
            <span
                style={{
                    color: '#7C3AED'
                }}
            >
                2.
            </span>
            {' '}Forma de Pagamento
        </Typography>
    </Box>


{/* ================ OPCOES ================ */}
<Box
    sx={{
        display: 'grid',
        gridTemplateColumns:
            'repeat(3, 1fr)',
        gap: 2,
        mb: 3
    }}
>


{/* ================ CARTAO ================ */}
<Box
    onClick={() =>
        setPagamento(
            'Cartão de Crédito'
        )
    }
    sx={{
        border:
            pagamento ===
            'Cartão de Crédito'
                ? '1px solid #7C3AED'
                : '1px solid #ffffff14',
        borderRadius: 1.5,
        p: 2,
        cursor: 'pointer',
        backgroundColor:
            pagamento ===
            'Cartão de Crédito'
                ? '#7C3AED12'
                : '#08080D',
        transition: '0.2s ease',
        '&:hover': {
            borderColor:
                '#7C3AED',
            backgroundColor:
                '#7C3AED10'
        }
    }}
>
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1
        }}
    >
        <CreditCardIcon
            sx={{
                color:
                    pagamento ===
                    'Cartão de Crédito'
                        ? '#7C3AED'
                        : '#999',
                fontSize: 25
            }}
        />
        <Typography
            sx={{
                color: '#F5F5F7',
                fontSize: 12,
                fontWeight: 800
            }}
        >
            Cartão de Crédito
        </Typography>
    </Box>
    <Typography
        sx={{
            color: '#777',
            fontSize: 9
        }}
    >
        Até 12x no cartão
    </Typography>
</Box>


{/* ================ PIX ================ */}
<Box
    onClick={() =>
        setPagamento('Pix')
    }
    sx={{
        border:
            pagamento === 'Pix'
                ? '1px solid #7C3AED'
                : '1px solid #ffffff14',
        borderRadius: 1.5,
        p: 2,
        cursor: 'pointer',
        backgroundColor:
            pagamento === 'Pix'
                ? '#7C3AED12'
                : '#08080D',
        transition: '0.2s ease',
        '&:hover': {
            borderColor:
                '#7C3AED',
            backgroundColor:
                '#7C3AED10'
        }
    }}
>
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1
        }}
    >
        <PixIcon
            sx={{
                color:
                    pagamento === 'Pix'
                        ? '#7C3AED'
                        : '#999',
                fontSize: 25
            }}
        />
        <Typography
            sx={{
                color: '#F5F5F7',
                fontSize: 12,
                fontWeight: 800
            }}
        >
            Pix
        </Typography>
    </Box>
    <Typography
        sx={{
            color: '#777',
            fontSize: 9
        }}
    >
        Aprovação imediata
    </Typography>
</Box>


{/* ================ BOLETO ================ */}
    <Box
        onClick={() =>
            setPagamento(
                'Boleto Bancário'
            )
        }
        sx={{
            border:
                pagamento ===
                'Boleto Bancário'
                    ? '1px solid #7C3AED'
                    : '1px solid #ffffff14',
            borderRadius: 1.5,
            p: 2,
            cursor: 'pointer',
            backgroundColor:
                pagamento ===
                'Boleto Bancário'
                    ? '#7C3AED12'
                    : '#08080D',
            transition: '0.2s ease',
            '&:hover': {
                borderColor:
                    '#7C3AED',
                backgroundColor:
                    '#7C3AED10'
            }
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 1
            }}
        >
            <ReceiptLongIcon
                sx={{
                    color:
                        pagamento ===
                        'Boleto Bancário'
                            ? '#7C3AED'
                            : '#999',
                    fontSize: 25
                }}
            />
            <Typography
                sx={{
                    color: '#F5F5F7',
                    fontSize: 12,
                    fontWeight: 800
                }}
            >
                Boleto Bancário
            </Typography>
        </Box>
        <Typography
            sx={{
                color: '#777',
                fontSize: 9
            }}
        >
            Até 3 dias úteis
        </Typography>
    </Box>
</Box>


{/* ========================================= */}
{/* ================ CARTÃO ================= */}
{/* ========================================= */}
{pagamento === 'Cartão de Crédito' && (
    <>
        <Typography
            sx={{
                color: '#aaa',
                fontSize: 12,
                fontWeight: 700,
                mb: 2
            }}
        >
            Dados do Cartão
        </Typography>
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns:
                    '1.4fr 1.2fr 0.6fr 0.6fr',
                gap: 2
            }}
        >
            <Campo
                label="Número do cartão *"
                placeholder="0000 0000 0000 0000"
            />
            <Campo
                label="Nome impresso no cartão *"
                placeholder="Como está no cartão"
            />
            <Campo
                label="Validade *"
                placeholder="MM/AA"
            />
            <Campo
                label="CVV *"
                placeholder="123"
            />
        </Box>
    </>
)}


{/* ========================================= */}
{/* ================ PIX ==================== */}
{/* ========================================= */}
{pagamento === 'Pix' && (
    <Box
        sx={{
            border:
                '1px solid #ffffff14',
            borderRadius: 1.5,
            p: 2.5,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor:
                '#08080D'
        }}
    >
        <PixIcon
            sx={{
                color: '#7C3AED',
                fontSize: 35
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
                Pagamento via Pix
            </Typography>
            <Typography
                sx={{
                    color: '#777',
                    fontSize: 10,
                    mt: 0.5
                }}
            >
                Após confirmar o pedido,
                o código Pix será
                disponibilizado.
            </Typography>
        </Box>
    </Box>
)}


{/* ============================================ */}
{/* ================ BOLETO ==================== */}
{/* ============================================ */}
        {pagamento === 'Boleto Bancário' && (
            <Box
                sx={{
                    border:
                        '1px solid #ffffff14',
                    borderRadius: 1.5,
                    p: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor:
                        '#08080D'
                }}
            >
                <ReceiptLongIcon
                    sx={{
                        color: '#7C3AED',
                        fontSize: 35
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
                        Pagamento via Boleto
                    </Typography>
                    <Typography
                        sx={{
                            color: '#777',
                            fontSize: 10,
                            mt: 0.5
                        }}
                    >
                        O boleto será gerado
                        após a confirmação
                        do pedido.
                    </Typography>
                </Box>
            </Box>
        )}
    </Box>
</Box>




{/* ==================== RESUMO ==================== */}

                <Box
                    sx={{
                        border: '1px solid #ffffff14',
                        borderRadius: 2,
                        backgroundColor: '#08080daf',
                        p: 3,
                        height: 'fit-content',
                        position: 'sticky',
                        top: 20
                    }}
                >
                    <Typography
                        sx={{
                            color: '#F5F5F7',
                            fontSize: 19,
                            fontWeight: 900,
                            mb: 3
                        }}
                    >
                        RESUMO DA COMPRA
                    </Typography>

                    {carrinho.map((produto) => {
                        const preco = Number(
                            produto.preco
                                .replace('R$', '')
                                .replace('.', '')
                                .replace(',', '.')
                        );
                        const totalProduto =
                            preco * produto.quantidade;
                        return (
                            <Box
                                key={produto.nome}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    pb: 2,
                                    mb: 2,
                                    borderBottom:
                                        '1px solid #ffffff14'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={produto.imagem}
                                    sx={{
                                        width: 55,
                                        height: 55,
                                        objectFit: 'cover',
                                        borderRadius: 1
                                    }}
                                />
                                <Box
                                    sx={{
                                        flex: 1,
                                        minWidth: 0
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#F5F5F7',
                                            fontSize: 10,
                                            fontWeight: 800
                                        }}
                                    >
                                        {produto.nome}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#777',
                                            fontSize: 9,
                                            mt: 0.3
                                        }}
                                    >
                                        {produto.descricao}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#7C3AED',
                                            fontSize: 9,
                                            mt: 0.3
                                        }}
                                    >
                                        Qtd: {produto.quantidade}
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        color: '#F5F5F7',
                                        fontSize: 10,
                                        fontWeight: 800,
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {formatarPreco(
                                        totalProduto
                                    )}
                                </Typography>
                            </Box>
                        );
                    })}

                    <Box
                        sx={{
                            pt: 1,
                            mt: 1,
                            mb: 2
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#7C3AED',
                                fontSize: 11,
                                fontWeight: 900,
                                mb: 1
                            }}
                        >
                            ENDEREÇO DE ENTREGA
                        </Typography>
                        <Typography
                            sx={{
                                color: '#F5F5F7',
                                fontSize: 11,
                                fontWeight: 700
                            }}
                        >
                            {endereco.nome ||
                                'Nome não informado'}
                        </Typography>
                        <Typography
                            sx={{
                                color: '#999',
                                fontSize: 10,
                                mt: 0.4
                            }}
                        >
                            {endereco.rua ||
                                'Endereço não informado'}
                            {endereco.numero &&
                                `, ${endereco.numero}`}
                        </Typography>
                        {endereco.complemento && (
                            <Typography
                                sx={{
                                    color: '#999',
                                    fontSize: 10
                                }}
                            >
                                {endereco.complemento}
                            </Typography>
                        )}
                        <Typography
                            sx={{
                                color: '#999',
                                fontSize: 10
                            }}
                        >
                            {endereco.bairro ||
                                'Bairro não informado'}
                            {endereco.cidade &&
                                ` • ${endereco.cidade}`}
                            {endereco.estado &&
                                ` - ${endereco.estado}`}
                        </Typography>
                        {endereco.cep && (
                            <Typography
                                sx={{
                                    color: '#999',
                                    fontSize: 10,
                                    mt: 0.3
                                }}
                            >
                                CEP: {endereco.cep}
                            </Typography>
                        )}
                    </Box>

                    <Box
                        sx={{
                            borderTop:
                                '1px solid #ffffff14',
                            pt: 2,
                            mb: 2
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#7C3AED',
                                fontSize: 11,
                                fontWeight: 900,
                                mb: 1
                            }}
                        >
                            FORMA DE PAGAMENTO
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            {pagamento ===
                                'Cartão de Crédito' && (
                                <CreditCardIcon
                                    sx={{
                                        color: '#7C3AED',
                                        fontSize: 20
                                    }}
                                />
                            )}
                            {pagamento === 'Pix' && (
                                <PixIcon
                                    sx={{
                                        color: '#7C3AED',
                                        fontSize: 20
                                    }}
                                />
                            )}
                            {pagamento ===
                                'Boleto Bancário' && (
                                <ReceiptLongIcon
                                    sx={{
                                        color: '#7C3AED',
                                        fontSize: 20
                                    }}
                                />
                            )}
                            <Typography
                                sx={{
                                    color: '#F5F5F7',
                                    fontSize: 11,
                                    fontWeight: 700
                                }}
                            >
                                {pagamento}
                            </Typography>
                        </Box>
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
                            Grátis
                        </Typography>
                    </Box>

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
                                    fontSize: 17,
                                    fontWeight: 900
                                }}
                            >
                                Total
                            </Typography>


                            <Typography
                                sx={{
                                    color: '#FFD21F',
                                    fontSize: 20,
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
                                height: 45,

                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 7,
                                    top: 7,
                                    width: 9,
                                    height: 37,
                                    backgroundColor:
                                        '#FFD21F',
                                    transform:
                                        'skewX(-25deg)'
                                },

                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    right: 9,
                                    top: 7,
                                    width: 9,
                                    height: 37,
                                    backgroundColor:
                                        '#FFD21F',
                                    transform:
                                        'skewX(-25deg)'
                                }
                            }}
                        >

                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={
                                    <LockIcon
                                        sx={{
                                            fontSize:
                                                '15px !important'
                                        }}
                                    />
                                }
                                 onClick={() => {
                                    setPedidoConfirmado(true);
                                    limparCarrinho();
                                    setTimeout(() => {
                                        navigate('/carrinho', {
                                            state: {
                                                pedidoConfirmado: true
                                            }
                                        });
                                    }, 1500);
                                }}
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    width:
                                        'calc(100% - 10px)',
                                    ml: '5px',
                                    height: 45,
                                    backgroundColor:
                                        '#7C3AED',
                                    color: '#FFFFFF',
                                    fontSize: 12,
                                    fontWeight: 900,
                                    borderRadius: 0,
                                    clipPath:
                                        'polygon(6% 0, 100% 0, 94% 100%, 0 100%)',
                                    boxShadow:
                                        '0 0 12px #7c3aed59',
                                    '&:hover': {
                                        backgroundColor:
                                            '#531DA8',
                                        boxShadow:
                                            '0 0 18px #7c3aed80'
                                    }
                                }}
                            >
                                CONFIRMAR PEDIDO
                            </Button>

                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.2,
                                mt: 3,
                                pt: 2,
                            }}
                        >

                            <Box
                                component="img"
                                src={iconeSeguro}
                                alt="Compra segura"
                                sx={{
                                    width: 30,
                                    height: 30,
                                    objectFit: 'contain'
                                }}
                            />


                            <Box>

                                <Typography
                                    sx={{
                                        color: '#F5F5F7',
                                        fontSize: 11,
                                        fontWeight: 700
                                    }}
                                >
                                    Compra segura
                                </Typography>


                                <Typography
                                    sx={{
                                        color: '#777',
                                        fontSize: 10,
                                        mt: 0.3
                                    }}
                                >
                                    Seus dados estão protegidos.
                                </Typography>

                            </Box>

                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent:
                                    'space-between',
                                alignItems: 'center',
                                mt: 2,
                                pt: 2,
                                borderTop:
                                    '1px solid #ffffff14'
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
            </Container>
        </Box>
    );
}




{/* ==================== CAMPO ==================== */}

function Campo({
    label,
    placeholder,
    value,
    onChange
}) {

    return (

        <Box>

            <Typography
                sx={{
                    color: '#aaa',
                    fontSize: 11,
                    fontWeight: 600,
                    mb: 0.7
                }}
            >
                {label}
            </Typography>


            <TextField
                fullWidth
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                variant="outlined"
                size="small"

                sx={{

                    '& .MuiOutlinedInput-root': {

                        height: 42,

                        color: '#F5F5F7',

                        backgroundColor:
                            '#08080D',

                        '& fieldset': {
                            borderColor:
                                '#ffffff20'
                        },

                        '&:hover fieldset': {
                            borderColor:
                                '#7C3AED'
                        },

                        '&.Mui-focused fieldset': {
                            borderColor:
                                '#7C3AED'
                        }

                    },

                    '& input': {
                        fontSize: 11,
                        color: '#F5F5F7'
                    },

                    '& input::placeholder': {
                        color: '#777',
                        opacity: 1
                    }

                }}
            />

        </Box>

    );
}


export default FinalizarCompra;