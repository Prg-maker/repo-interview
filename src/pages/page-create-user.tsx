import reactSvg from "../assets/react.svg";

import {  Pencil, Phone, User } from "lucide-react";
import { InputForm } from "../components/form/input-form";
import { LabelForm } from "../components/form/label-form";

import { LockKeyhole } from "lucide-react";
import { ButtonForm } from "../components/form/button-form";
export function PageCreateUser(){

       


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
              <InputForm type="text" placeholder="Digite seu nome">
                <Pencil className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>

            <div className="flex flex-col gap-3">
              <LabelForm>Seu CPF ou CNPJ</LabelForm>
              <InputForm  type="text" placeholder="000.000.000-00">
                <User className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
            <div className="flex flex-col gap-3">
                <LabelForm>Seu Email</LabelForm>
              <InputForm type="email" placeholder="john@gmail.com">
                <LockKeyhole className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
            <div className="flex flex-col gap-3">
              <LabelForm>Seu Telefone</LabelForm>
              <InputForm type="tel" placeholder="(00) 000000000">
                <Phone className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
        
            <div className="flex flex-col gap-3">
              <LabelForm>Sua Senha</LabelForm>
              <InputForm type="password" placeholder="***********">
                <LockKeyhole className="size-6 text-[#7C7C8A]" />
              </InputForm>
            </div>
          </div>

         

            <div className="mt-5">
          <ButtonForm>Entrar na plataforma</ButtonForm>

            </div>
        </form>
      </main>

      <footer className="mt-5 mb-5 text-center">
        <p className="text-sm text-[#7C7C8A]">
          Já tem conta?{" "}
          <a href="/login" className="text-[#81D8F7] underline">
            Entrar agora
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
