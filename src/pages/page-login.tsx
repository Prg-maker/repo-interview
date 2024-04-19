import reactSvg from "../assets/react.svg";
import checkIn from "../assets/checkIn.svg";

import { Mail } from "lucide-react";
import { InputForm } from "../components/form/input-form";
import { LabelForm } from "../components/form/label-form";

import { LockKeyhole } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import { ButtonForm } from "../components/form/button-form";



import axios from 'axios';

import { redirect } from "react-router-dom";



export function PageLogin() {
  const [isCheck, setIsCheck] = useState(false);
  
  const [textNumber , setTextNumber] = useState("")
  const [password , setPassword] = useState("")
  const [token , setToken] = useState('')

  async function handleLogin(event:FormEvent){
    event.preventDefault()
    
    if(password == "" || textNumber == "") return;

    const options = {
      method: 'POST',
      url: 'https://interview.t-alpha.com.br/api/auth/login',
      headers: {'Content-Type': 'application/json'},
      data: {taxNumber: textNumber, password: password}
    };

    try{
      const { data } = await axios.request(options);
      console.log(data.data.token)
      setToken(data.data.token)

      localStorage.setItem('token' , token) //12345678900', password: '123456'
      if(token){
        window.location.href = "/produts"
      }
      


    }catch(e){
      console.error(e)
    }


  }
   
  function handleCheckIn() {
    console.log(isCheck);
    setIsCheck(!isCheck);
    
  }

  return (
    <div className="flex h-screen flex-col items-center ">
      <header className="flex flex-col items-center mt-20 mb-5 gap-8">
        <img src={reactSvg} alt="" />
        <p className="text-center text-[#7C7C8A] text-sm ">
          Faça login e comece a usar!
        </p>
      </header>

      <main>
        <form>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <LabelForm>Seu CPF OU CNPJ</LabelForm>
              
              <InputForm value={textNumber} onChange={e => setTextNumber(e.target.value)} type="text" placeholder="Digite seu textNumber" >
                <Mail className="size-6 text-[#7C7C8A]" />
              </InputForm>

            </div>

            <div className="flex flex-col gap-3">
              <LabelForm>Sua Senha</LabelForm>
              <InputForm   value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="***********">
                <LockKeyhole className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
          </div>

          <label className="flex items-center gap-4 mt-5 mb-10">
            <Checkbox
              onClick={handleCheckIn}
              className="size-5 bg-[#202024] rounded-sm checked:bg-black flex items-center justify-center "
            >
              {isCheck ? <img src={checkIn} className="size-3" /> : ""}
            </Checkbox>

            <strong className="text-sm font-normal text-[#C4C4CC]">
              Lembrar de mim por 30 dias{" "}
            </strong>
          </label>

          <ButtonForm onClick={handleLogin}>Entrar na plataforma</ButtonForm>
        </form>
      </main>

      <footer className="mt-20 text-center">
        <p className="text-sm text-[#7C7C8A]">
          Não possui conta?{" "}
          <a href="/register" className="text-[#81D8F7] underline">
            Crie uma agora
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
