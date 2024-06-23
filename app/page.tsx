import Dashboard from "./(pages)/dashboard/page";
import Sidebar from "./components/SidebarMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Dashboard /> 
    </main>
  )
}
