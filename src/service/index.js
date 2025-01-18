/* eslint-disable */

const validateUser = (user) => {
  const userDb = JSON.parse(localStorage.getItem('db_user'));

  if (user.email !== userDb.email) return { errorMsg: 'Email inválido' };
  if (user.password !== userDb.password) return { errorMsg:'Senha inválida' };

  const { password, ...userData } = userDb;
  return { user: userData };
}

export function requestLogin(user) {
  try {
    const response = validateUser(user);
    if (response.errorMsg) {
      return response;
    }

    localStorage.setItem('user', JSON.stringify(response));

    return response;
  } catch (error) {
    console.log(error);

    return { errorMsg: 'Erro ao pegar usuário no localStorage' };
  }
}

export function requestLogout() {
  try {
    localStorage.removeItem('user');
    return null;
  } catch (error) {
    return 'Erro ao remover usuário do localStorage';
  }
}

export function requestRegisterUser(user) {
  try {
    console.log(user);

    console.log('salvando usuario no localStorage');
    localStorage.setItem('db_user', JSON.stringify(user));
    console.log('usuario salvo no localStorage');
    return null;
  } catch (error) {
    return 'Erro ao inserir usuário no localStorage';
  }
}