import myCircleServer from './myCircleServer'

export function getDataServer() {
  return myCircleServer.get('/api/users');
}

export function login(loginData) {
  return myCircleServer.post('/api/authenticate',loginData);
}

export function currentUser() {
  return myCircleServer.get('/api/users/me');
}

export function circlesList() {
  return myCircleServer.get('/api/circles/list');
}
