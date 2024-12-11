'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthHook } from '../../../hooks/use-auth.hook';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const {onLoginUser, isLoading} = useAuthHook()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await onLoginUser(email, password)

    console.log(res);

    if (res && res === "home") {
      router.push('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-900 mb-1">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded text-black"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-5"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
