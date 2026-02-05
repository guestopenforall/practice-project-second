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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 border border-red-600 rounded-lg">
      <h1 className="text-3xl font-bold shadow-lg border rounded-lg p-2 mb-2"> Fill The Register Form</h1>
      <RegisterForm />
    </div>
    <Footer />
    </>
  )
}

export default MainPage