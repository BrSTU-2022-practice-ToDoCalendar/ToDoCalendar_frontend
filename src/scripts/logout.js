export default function logout(navigate) {
  localStorage.removeItem('refresh');
  localStorage.removeItem('access');
  navigate('/sign-in', { replace: true });
}
