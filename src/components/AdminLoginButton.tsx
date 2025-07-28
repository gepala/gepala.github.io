import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { LogIn, LogOut } from "lucide-react";
import { useAuth } from "../App";
import { toast } from "sonner";

export default function AdminLoginButton() {
  const { login, logout, isAuthenticated } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ id: "", password: "" });

  const handleLogin = () => {
    if (login(loginForm.id, loginForm.password)) {
      setIsLoginOpen(false);
      setLoginForm({ id: "", password: "" });
      toast.success("Login berhasil!");
    } else {
      toast.error("ID atau password salah!");
    }
  };

  const handleLogout = () => {
    logout();
    setIsLogoutConfirmOpen(false);
    toast.success("Logout berhasil!");
  };

  // Handler untuk submit login dengan Enter
  const handleLoginKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <>
      {/* Floating Admin Button */}
      <button
        type="button"
        className={`fixed z-50 bottom-6 right-6 rounded-full shadow-lg p-3 flex items-center focus:outline-none focus:ring-2 group transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:w-28 hover:pr-4 hover:pl-3 w-12 h-12 ${
          isAuthenticated
            ? "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400"
            : "bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-400"
        }`}
        onClick={() => {
          if (isAuthenticated) {
            setIsLogoutConfirmOpen(true);
          } else {
            setIsLoginOpen(true);
          }
        }}
        aria-label={isAuthenticated ? "Logout Admin" : "Login Admin"}
        style={{
          transitionProperty:
            "width, padding, background, color, border-radius, box-shadow",
        }}
      >
        {isAuthenticated ? (
          <LogOut className="w-5 h-5 flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
        ) : (
          <LogIn className="w-5 h-5 flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
        )}
        <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap overflow-hidden ml-2 w-0 group-hover:w-auto">
          {isAuthenticated ? "Logout" : "Admin"}
        </span>
      </button>

      {/* Dialog login khusus admin */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent
          className="bg-gray-800 border-gray-700"
          onKeyDown={handleLoginKeyDown}
        >
          <DialogHeader>
            <DialogTitle className="text-yellow-500">
              Login Administrasi
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Masukkan kredensial untuk akses administrasi
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-id">ID</Label>
              <Input
                id="admin-id"
                value={loginForm.id}
                onChange={(e) =>
                  setLoginForm((prev) => ({ ...prev, id: e.target.value }))
                }
                className="bg-gray-700 border-gray-600"
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <Input
                id="admin-password"
                type="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className="bg-gray-700 border-gray-600"
              />
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Logout Confirmation Dialog */}
      <AlertDialog
        open={isLogoutConfirmOpen}
        onOpenChange={setIsLogoutConfirmOpen}
      >
        <AlertDialogContent className="bg-gray-800 border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-yellow-500">
              Konfirmasi Logout
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Apakah Anda yakin ingin keluar dari akun admin? Anda akan
              kehilangan akses ke panel administrasi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
