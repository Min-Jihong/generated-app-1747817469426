import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onLogin = async (data) => {
    await signIn('credentials', { redirect: false, username: data.username, password: data.password });
  };

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <input {...register('username')} placeholder='Username' />
      <input {...register('password')} type='password' placeholder='Password' />
      <button type='submit'>Log in</button>
    </form>
  );
}