"use client";

import LoadingScreen from "@/components/LoadingScreen";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RegisterData>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, email, password } = data;

    if (!fullName || !email || !password) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/register", data);
      if (response.status === 201) {
        toast.success("You Registered Successfully!");
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch (e) {
      const error = e as AxiosError<{ error: string }>;
      toast.error(error.response?.data?.error || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="mb-2 inline-flex items-center space-x-2 text-2xl font-bold">
            <div>Logo</div>
            <span>MyDiary</span>
          </h1>
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Create your new account
          </h2>
        </header>
        {loading && <LoadingScreen />}

        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
          <div className="mx-auto w-full max-w-lg grow p-5">
            <div className="mt-5 text-center">
              <h1 className="mb-4 text-2xl font-bold">Register Here</h1>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-6 rounded border bg-gray-50 p-4 dark:border-gray-700/75 dark:bg-gray-900/50">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    readOnly={loading}
                    value={data.fullName}
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    autoComplete="name"
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    readOnly={loading}
                    value={data.email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    readOnly={loading}
                    value={data.password}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
              >
                <span>{loading ? "Loading..." : "Register"}</span>
              </button>
            </form>

            <div className="my-5 text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  className="inline-block text-sm font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  href="/login"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
