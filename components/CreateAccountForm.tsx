import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "console";
import { useRouter } from "next/router";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function CreateAccountForm() {
  const [isPass, setIsPass] = useState(false);
  const router = useRouter();

  const createLoginFormSchema = z
    .object({
      email: z.string().email("E-mail é obrigatório"),
      password: z
        .string()
        .min(6, "A senha deve conter no mínimo 6 caracteres."),
      confirmPass: z
        .string()
        .min(6, "A senha deve conter no mínimo 6 caracteres."),
    })
    .superRefine(({ password, confirmPass }, ctx) => {
      if (password !== confirmPass) {
        ctx.addIssue({ message: "Senhas divergetes", code: "custom", path: ['confirmPass'] });
      }
    });

  type createLogin = z.infer<typeof createLoginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createLogin>({ resolver: zodResolver(createLoginFormSchema) });
  const onSubmit: SubmitHandler<createLogin> = (data) => console.log(data);

  return (
    <div className="w-full h-screen text-center flex justify-center items-center p-10 md:p-20">
      <form className="w-full text-start" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={`text-6xl mb-10 font-bold`}>Criar conta</h1>

        <div className="flex flex-col relative">
          <label htmlFor="email" className="text-start font-semibold">
            E-mail
          </label>
          <input
            {...register("email")}
            type="text"
            className="p-3 rounded-lg w-full border focus:outline-blue-200 focus:border-none mt-2"
          />
        </div>

        {errors.email?.message && (
          <span className="text-red-400">{errors.email.message}</span>
        )}

        <div className="flex flex-col relative mt-5">
          <label htmlFor="email" className="text-start font-semibold">
            Senha{" "}
          </label>
          <input
            {...register("password")}
            type={!isPass ? "password" : "text"}
            className="p-3 rounded-lg w-full border focus:outline-blue-200 focus:border-none mt-2"
          />
          <button
            onClick={() => {
              setIsPass(!isPass);
            }}
            className="absolute right-3 bottom-3 flex items-center  px-2 py-1 rounded-lg bg-blue-50 hover:bg-blue-400 hover:text-white text-blue-300"
            type="button"
          >
            <FontAwesomeIcon icon={isPass ? faEye : faEyeSlash} />
          </button>
        </div>

        {errors.password?.message && (
          <span className="text-red-400">{errors.password.message}</span>
        )}

        <div className="flex flex-col relative mt-5">
          <label htmlFor="email" className="text-start font-semibold">
            Confirmar Senha{" "}
          </label>
          <input
            {...register("confirmPass")}
            type={!isPass ? "password" : "text"}
            className="p-3 rounded-lg w-full border focus:outline-blue-200 focus:border-none mt-2"
          />
        </div>

        {errors.confirmPass?.message && (
          <span className="text-red-400">{errors.confirmPass.message}</span>
        )}

        <button className="w-full bg-blue-400 p-3 hover:bg-blue-500 hover:shadow-blue-200 hover:shadow-lg rounded-lg text-white font-semibold mt-10 mb-5">
          ENTRAR
        </button>

        <div className="flex justify-center">
          <span>
            Possui uma conta?{" "}
            <b
              className="text-blue-500 font-semibold hover:text-blue-600 mx-2 cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              Entrar
            </b>
          </span>
        </div>
      </form>
    </div>
  );
}
