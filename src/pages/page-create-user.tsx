import reactSvg from "../assets/react.svg";

import { Pencil, Phone, User } from "lucide-react";
import { InputForm } from "../components/form/input-form";
import { LabelForm } from "../components/form/label-form";

import { LockKeyhole } from "lucide-react";
import { ButtonForm } from "../components/form/button-form";

import axios from "axios";
import { FormEvent, useState } from "react";

export function PageCreateUser() {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [cadastro, setCadastro] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSingUp(event: FormEvent) {
    event.preventDefault();
    if (!nome || !password || !cadastro || !mail || !phone) {
      return window.alert("erro");
    }

    const options = {
      method: "POST",
      url: "https://interview.t-alpha.com.br/api/auth/register",
      headers: { "Content-Type": "application/json" },
      data: {
        name:nome,
        taxNumber: cadastro,
        mail: mail,
        phone: phone,
        password: password,
      },
    };

    try{
      const response = await axios.request(options)
      
      const message = response.data.message
      window.alert(message)

      if(message == "Usuário já cadastrado")return;

      setTimeout(()=> {
        window.location.href = "/"
      } , 2000)

    }catch(e){
      window.alert("Erro ao criar um usuário")

      console.error(e)
    }

  }
  return (
    <div className="flex h-screen flex-col items-center ">
      <header className="flex flex-col items-center mt-15 mb-5 gap-8">
        <img src={reactSvg} alt="" />
        <p className="text-center text-[#7C7C8A] text-sm ">
          Faça login e comece a usar!
        </p>
      </header>

      <main>
        <form className=" ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <LabelForm>Nome</LabelForm>
              <InputForm
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                type="text"
                placeholder="Digite seu nome"
              >
                <Pencil className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>

            <div className="flex flex-col gap-3">
              <LabelForm>Seu CPF ou CNPJ</LabelForm>
              <InputForm
                onChange={(e) => setCadastro(e.target.value)}
                value={cadastro}
                type="text"
                placeholder="000.000.000-00"
              >
                <User className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
            <div className="flex flex-col gap-3">
              <LabelForm>Seu Email</LabelForm>
              <InputForm
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                type="email"
                placeholder="john@gmail.com"
              >
                <LockKeyhole className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
            <div className="flex flex-col gap-3">
              <LabelForm>Seu Telefone</LabelForm>
              <InputForm
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="tel"
                placeholder="(00) 000000000"
              >
                <Phone className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>

            <div className="flex flex-col gap-3">
              <LabelForm>Sua Senha</LabelForm>
              <InputForm
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="***********"
              >
                <LockKeyhole className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
          </div>

          <div className="mt-5">
            <ButtonForm onClick={handleSingUp}>Entrar na plataforma</ButtonForm>
          </div>
        </form>
      </main>

      <footer className="mt-5 mb-5 text-center">
        <p className="text-sm text-[#7C7C8A]">
          Já tem conta?{" "}
          <a href="/" className="text-[#81D8F7] underline">
            Entrar agora
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
