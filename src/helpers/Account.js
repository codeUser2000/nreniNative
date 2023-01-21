// import { Navigate } from 'react-router';
//
// class Account {
//   static getToken() {
//     return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
//   }
//
//   static getAdminToken() {
//     return localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken') || '';
//   }
//
//   static getProfile() {
//     return localStorage.getItem('profile') || sessionStorage.getItem('profile') || '';
//   }
//
//   static setTokenAndProfile(token, remember, profile) {
//     if (remember) {
//       localStorage.setItem('token', token);
//       localStorage.setItem('profile', JSON.stringify(profile));
//     } else {
//       sessionStorage.setItem('token', token);
//       sessionStorage.setItem('profile', JSON.stringify(profile));
//     }
//   }
//
//   static setAdminToken(token, remember, profile) {
//     if (remember) {
//       localStorage.setItem('adminToken', token);
//       localStorage.setItem('profile', JSON.stringify(profile));
//     } else {
//       sessionStorage.setItem('adminToken', token);
//       sessionStorage.setItem('profile', JSON.stringify(profile));
//     }
//   }
//
//   static logout() {
//     if (localStorage.getItem('token')) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('profile');
//     } else if (sessionStorage.getItem('token')) {
//       sessionStorage.removeItem('token');
//       sessionStorage.removeItem('profile');
//       // eslint-disable-next-line react/react-in-jsx-scope
//       return <Navigate to="/login" replace />;
//     }
//     return false;
//   }
//
//   static logoutAdmin() {
//     if (localStorage.getItem('adminToken')) {
//       localStorage.removeItem('adminToken');
//       localStorage.removeItem('profile');
//     } else if (sessionStorage.getItem('adminToken')) {
//       sessionStorage.removeItem('adminToken');
//       sessionStorage.removeItem('profile');
//       // eslint-disable-next-line react/react-in-jsx-scope
//       return <Navigate to="/login" replace />;
//     }
//     return false;
//   }
// }
//
// export default Account;
