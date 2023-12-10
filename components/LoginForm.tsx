import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function LoginForm() {
  const [isPass, setIsPass] = useState(false);

  return (
    <div className="w-full h-screen text-center flex justify-center items-center p-10 md:p-20">
      <form className="w-full">
        <h1 className={`text-6xl mb-10 font-bold`}>Bem vindo</h1>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-start font-semibold">
            E-mail
          </label>
          <input
            type="text"
            className="p-3 rounded-lg w-full border focus:outline-blue-200 focus:border-none mt-2 mb-3"
          />
        </div>

        <div className="flex flex-col relative">
          <label htmlFor="email" className="text-start font-semibold">
            Password{" "}
          </label>
          <input
            type={!isPass ? "password" : "text"}
            className="p-3 rounded-lg w-full border focus:outline-blue-200 focus:border-none mt-2"
          />
          <button
            onClick={() => {
              setIsPass(!isPass);
            }}
            className="absolute right-3 bottom-3 flex items-center  px-2 py-1 rounded-lg bg-blue-50 hover:bg-blue-400 hover:text-white text-blue-500"
            type="button"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>

        <div className="flex justify-end mt-3 ">
          <span className="cursor-pointer">Esqueceu a senha?</span>
        </div>

        <button className="w-full bg-blue-400 p-3 hover:bg-blue-500 hover:shadow-blue-200 hover:shadow-lg rounded-lg text-white font-semibold mt-10 mb-5">
          ENTRAR
        </button>

        <span>
          Não possui uma conta?{" "}
          <b className="text-blue-500 font-semibold hover:text-blue-600 mx-2 cursor-pointer">
            Criar conta
          </b>
        </span>
      </form>
    </div>
  );
}
