import React from 'react'
import FormLogin from './widgets/FormLogin';

export default function Login (props) {
  return (
    <div id="main-Login">
         <main className='mt-20 py-10'>
            {props.children}
        </main>
        <FormLogin />
    </div>
  )
}