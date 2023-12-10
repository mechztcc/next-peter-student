import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-white">
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <LoginForm />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-blue-400 p-5 md:p-20 rounded-l-full">
        <div className="flex justify-center items-center h-full">
          <img className="w-1/2" src="/image1.png" alt="" />
        </div>
      </div>
    </div>
  );
}
