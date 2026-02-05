import React from 'react'
import RegisterForm from './appComponets/(auth)/Register'
import Header from './appComponets/Header'
import Footer from './appComponets/Footer'


const MainPage = () => {
  return (
    <>
    <div>
      <Header />
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen py-2  border rounded-lg">
      <h1 className="text-2xl font-lg  mb-3"> Fill Credencials</h1>
      <RegisterForm />
    </div>
    <Footer />
    </>
  )
}

export default MainPage