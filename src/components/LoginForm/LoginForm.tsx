import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showUsernameHint, setShowUsernameHint] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // تحقق من اسم المستخدم وكلمة السر
    if (username === 'admin' && password === 'admin123') {
      // توجيه الأدمن إلى الداشبورد
      navigate('/dashboard');
      return;
    } else if (username === 'johnd' && password === 'm38rmF$') {
      // توجيه المستخدم العادي إلى الهوم
      try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', {
          username: 'johnd',
          password: 'm38rmF$',
        });

        const data = response.data;
        localStorage.setItem('token', data.token);
        navigate('/home');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error:', error.response?.data);
          alert('Login failed: ' + error.response?.data?.message || 'Unknown error');
        } else {
          console.error('Error:', error);
          alert('An unexpected error occurred!');
        }
      }
      return;
    }

    // إذا كانت بيانات الدخول غير صحيحة
    alert('Invalid username or password');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 container mx-auto px-4">
      <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow-md w-full sm:w-1/2 ">
        <h2 className="text-3xl font-bold mb-5 text-center text-blue-500">Login</h2>
        <div className="mb-4 w-full lg:w-1/2 mx-auto">
          <label className="block text-gray-700 font-medium mb-1.5" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded-md focus:outline-blue-400"
            placeholder="Enter username"
            onFocus={() => setShowUsernameHint(true)}
            onBlur={() => setShowUsernameHint(false)}
            required
          />
          {showUsernameHint && (
            <div id="usernameHint" className="mt-2 text-sm bg-[#8abff141] p-2 rounded text-gray-900">
              <p>Enter <strong className='text-blue-600'>johnd</strong> to login as User </p>
              <p>Enter <strong className='text-blue-600'>admin</strong> to login as Admin</p>

            </div>
          )}
        </div>
        <div className="mb-4 w-full lg:w-1/2 mx-auto">
          <label className="block text-gray-700 font-medium mb-1.5" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded-md focus:outline-blue-400"
            placeholder="Enter password"
            onFocus={() => setShowPasswordHint(true)}
            onBlur={() => setShowPasswordHint(false)}
            required
          />
          {showPasswordHint && (
            <div id="passwordHint" className="mt-2 text-sm bg-[#8abff141] p-2 rounded text-gray-900">
              <p> Enter <strong className='text-blue-600'>m38rmF$</strong> to login as User</p>
              <p> Enter <strong className='text-blue-600'>admin123</strong> to login as Admin</p>
            </div>
          )}
        </div>

        <button type="submit" className="block w-fit ml-auto bg-blue-400 hover:bg-blue-500 text-white py-2 px-5 rounded-md cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;


// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showUsernameHint, setShowUsernameHint] = useState(false);
//   const [showPasswordHint, setShowPasswordHint] = useState(false); 

//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//         try {
//         const response = await axios.post('https://fakestoreapi.com/auth/login', {
//             username: 'johnd',
//             password: 'm38rmF$',
//         });

//         const data = response.data;
//         localStorage.setItem('token', data.token);
//         navigate("/home");
//         } 
//         catch (error) {
//             if (axios.isAxiosError(error)) {
//                 console.error('Error:', error.response?.data);
//                 alert('Login failed: ' + error.response?.data?.message || 'Unknown error');
//             } else {
//                 console.error('Error:', error);
//                 alert('An unexpected error occurred!');
//             }
//         }
//   };


//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-50 container mx-auto px-4">
//       <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow-md w-full sm:w-1/2 ">
//         <h2 className="text-3xl font-bold mb-5 text-center text-blue-500">Login</h2>
//         <div className="mb-4 w-full lg:w-1/2 mx-auto">
//         <label className="block text-gray-700 font-medium mb-1.5" htmlFor="username">
//           Username
//         </label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-2 bg-gray-100 rounded-md focus:outline-blue-400"
//           placeholder="Enter username"
//           onFocus={() => setShowUsernameHint(true)}
//           onBlur={() => setShowUsernameHint(false)}
//           required
//         />
//         {showUsernameHint && ( 
//           <div id="usernameHint" className="mt-2 text-sm bg-[#8ac0f179] p-2 rounded text-blue-600">
//             Enter username: <strong>johnd</strong>
//           </div>
//         )}
//       </div>
//       <div className="mb-4 w-full lg:w-1/2 mx-auto">
//         <label className="block text-gray-700 font-medium mb-1.5" htmlFor="password">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 bg-gray-100 rounded-md focus:outline-blue-400"
//           placeholder="Enter password"
//           onFocus={() => setShowPasswordHint(true)}
//           onBlur={() => setShowPasswordHint(false)} 
//           required
//         />
//         {showPasswordHint && ( 
//           <div id="passwordHint" className="mt-2 text-sm bg-[#8ac0f179] p-2 rounded text-blue-600">
//             Enter password: <strong>m38rmF$</strong>
//           </div>
//         )}
//       </div>

//         <button type="submit" className="block w-fit ml-auto bg-blue-400 hover:bg-blue-500 text-white py-2 px-5 rounded-md cursor-pointer">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;