import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthData, MfaSession } from "./auth.types";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuthDataState] = useState<AuthData | null>(null);
  const [mfaSession, setMfaSessionState] = useState<MfaSession | null>(null);

  const setAuthData = (data: AuthData | null) => {
    if (data) {
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("authUser", JSON.stringify(data.user));
      setAuthDataState(data);
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("authUser");
      setAuthDataState(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authUser");
    setAuthDataState(null);
    setMfaSessionState(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("authUser");

    if (token && user) {
      setAuthDataState({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authData,
        mfaSession,
        setAuthData,
        setMfaSession: setMfaSessionState,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
