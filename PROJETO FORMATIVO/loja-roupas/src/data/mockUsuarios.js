// ==================== USUÁRIOS MOCK ====================

export const mockUsuarios = [
  {
    id: 1,
    nome: "Anick",
    email: "anick.lima09@gmail.com",
    senha: "123456"
  },
  {
    id: 2,
    nome: "Tuti",
    email: "tuti.lima@gmail.com",
    senha: "tutiamor"
  }
];


// ==================== PEGAR USUÁRIOS ====================

export function obterUsuarios() {
  const usuariosSalvos = localStorage.getItem('mockUsuarios');

  if (!usuariosSalvos) {
    return mockUsuarios;
  }

  const usuariosCadastrados = JSON.parse(usuariosSalvos);

  return [
    ...mockUsuarios,
    ...usuariosCadastrados
  ];
}


// ==================== ADICIONAR USUÁRIO ====================

export function adicionarUsuario(novoUsuario) {
  const usuariosSalvos = localStorage.getItem('mockUsuarios');

  const usuariosCadastrados = usuariosSalvos
    ? JSON.parse(usuariosSalvos)
    : [];

  usuariosCadastrados.push(novoUsuario);

  localStorage.setItem(
    'mockUsuarios',
    JSON.stringify(usuariosCadastrados)
  );
}