// ESTE ROUTER SI ES
import { login } from '../component/login.js';
import { register } from '../component/register.js';
import { posts } from '../component/posts.js';

// definir hash
const myRouter = (hash) => {
  const rootBox = document.getElementById('mainRoute');
  switch (hash) {
    case '#/':
    case '#/login':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(login());
      break;
    case '#/register':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(register());
      break;
    case '#/posts':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(posts());
      break;
    default:
      rootBox.innerHTML = 'Esta página no existe';
  }
};
export { myRouter };
