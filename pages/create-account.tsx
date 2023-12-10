import CreateAccountForm from "@/components/CreateAccountForm";

export default function CreateAccount() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-white">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-blue-400 p-5 md:p-20 rounded-r-full">
        <div className="flex flex-col justify-center items-center h-full">
          <img className="w-1/2" src="/image2.png" alt="" />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <CreateAccountForm />
      </div>
    </div>
  );
}
