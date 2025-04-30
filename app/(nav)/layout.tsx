import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const JWT_SECRET = process.env.JWT_SECRET || "yoursecret";

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    if (!token) throw new Error("No token found");
    jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.error("Unauthorized:", err);
    redirect("/login"); 
  }
  return (
    <div>
      <Navbar />
      <div className="flex sm:translate-x-0 duration-200">
        <div className="sticky top-18 h-[calc(100vh-2.5rem)] shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 min-w-0">
          <div className="w-full p-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
