import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

type Inputs = {
    email: string,
    password: string,
  };

function login() {
    const [login, setLogin] = useState<boolean>(false)
    const {signIn, signUp} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
        if (login){
            await signIn(email, password)
        }else{
            await signUp(email, password)
        }
    };
    return (
        <div className='relative flex h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent'>
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
            </Head>
            <Image
                src="https://rb.gy/p2hphi"
                layout="fill"
                className='-z-10 !hidden sm:!inline opacity-60'
                objectFit='cover'
            />
            <img src="https://rb.gy/ulxxee" alt="Netflix Logo"
                height={150}
                width={150}
                className='absolute left-4 top-4 md:left-10 md:top-6 cursor-pointer object-contain'
            />

            <form className='relative mt-24 space-y-8 bg-black/75 rounded py-10 px-6 md:mt-0
            md:max-w-md md:px-14'
            onSubmit={handleSubmit(onSubmit)}>

                <h1 className='text-4xl font-semibold'>Sign in</h1>
                <div className='space-y-4'>

                    <label className='inline-block w-full'>
                        {/* inline block is for making the default input field to apply y-padding */}
                        <input type="email"  placeholder='Email' className='input' 
                        {...register("email", {required:true})}/>
                    {errors.email && (<p className='p-1 text-[13px] font-light text-orange-500'>Please enter a valid email</p>)}
                    </label>


                    <label className='inline-block w-full'>
                        <input type="password" placeholder='Password' className='input' 
                        {...register('password', {required:true})} />
                    </label>
                    {errors.password && <p className='p-1 text-[13px] font-light text-orange-500'>Please enter a valid password</p>}
                </div>

                <button type='submit' className='w-full rounded bg-[#e50914] font-semibold py-3'
                onClick={()=>setLogin(true)}
                >Sign-in</button>
                <div className='text-[gray]'>
                    New to Netflix? {' '}
                    <button className='cursor-pointer hover:underline text-white'
                    onClick={()=> setLogin(false)}>Sign-up now</button>
                </div>
            </form>

        </div>
    )
}

export default login