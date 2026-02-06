import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        <Header />

        <main className="p-6 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
