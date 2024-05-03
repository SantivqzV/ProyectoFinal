import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { SignUp } from '../../auth';

const Signup = () => {
  const navigate = useNavigate();
  const {setIsAuth} = useStateContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [puesto, setPuesto] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [nombre_departamento, setNombreDepartamento] = useState('');

  const [error, setError] = useState(null);


  const handleSignup = async (event) => {
    event.preventDefault();

    try{
      const data = await SignUp(email, password, nombre, apellido1, apellido2, puesto, pais, ciudad, nombre_departamento);

      if (data) {
        console.log("hola")
        navigate('/login');
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      setError(error.message);
    }
  }



  return(
    <section className='min-h-screen flex items-center justify-center' style={{
      background: 'url(./Background.gif) no-repeat center center fixed',
      backgroundSize: 'cover'
    }}>
      <div class="bg-main-bg flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className='md:w-1/2 px-8 md:px-16'>
          <div style={{maxHeight:'300px', overflowY: 'auto' }}>
            <h2 className='font-bold text-2xl text-black'>
              Sign Up
            </h2>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSignup}>
              <input className='p-2 mt-8 rounded-xl border' type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              <div className='relative'>
                <input className='p-2 rounded-xl border w-full' type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
              </div>
              
              <input className='p-2 rounded-xl border w-full' type='nombre' name='nombre' placeholder=' Nombre' onChange={(e) => setNombre(e.target.value)} />
              
              <input className='p-2 rounded-xl border w-full' type='apellido1' name='apellido1' placeholder=' Apellido Paterno' onChange={(e) => setApellido1(e.target.value)} />

              <input className='p-2 rounded-xl border w-full' type='apellido2' name='apellido2' placeholder=' Apellido Materno' onChange={(e) => setApellido2(e.target.value)} />

              <input className='p-2 rounded-xl border w-full' type='puesto' name='puesto' placeholder=' Puesto' onChange={(e) => setPuesto(e.target.value)} />
              
              <input className='p-2 rounded-xl border w-full' type='pais' name='pais' placeholder=' País' onChange={(e) => setPais(e.target.value)} />

              <input className='p-2 rounded-xl border w-full' type='ciudad' name='ciudad' placeholder=' Ciudad' onChange={(e) => setCiudad(e.target.value)} />

              <input className='p-2 rounded-xl border w-full' type='departamento' name='departamento' placeholder=' Departamento' onChange={(e) => setNombreDepartamento(e.target.value)} />

              <button className='bg-black rounded-xl text-white py-2' type="submit">Signup</button>
              {error && <p className='text-red-500 flex justify-center items-center'>{error}</p>}
            </form>
          </div>
          <div className='mt-5 text-xs border-b border-black py-4 text-black'>
              <p className='mt-4'>Already have an account? <a href='./Login' className='text-blue-500'>Login</a></p>
            </div>
        </div>
      
          <div className='md:block hidden w-1/2'>
            <img className='rounded-2xl' src='./Neoris.png'/>
          </div>

      </div>
    </section>
  )
};

export default Signup