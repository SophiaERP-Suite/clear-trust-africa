/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import type { AuthContextType } from "../main/auth.types";

interface Props {
  toast: typeof toast;
}

interface ErrorResponse {
  message: string;
  errors: [];
}

interface DataResponse {
  message: string;
  data: {
    organisationId: number;
  };
}

export const handleDataReg = async (
  res: any,
  loader: HTMLElement | null,
  text: HTMLElement | null,
  { toast }: Props,
  reset: any,
  navigate: NavigateFunction,
  msg = "Data added successfully"
) => {
  try {
    if (loader) {
      loader.style.display = "none";
    }
    if (text) {
      text.style.display = "inline";
    }
    if (res.status === 201 || res.status === 200) {
      const responseData: DataResponse = await res.json();
      console.log(responseData);
      toast.success(responseData.message ?? msg);
      reset();
      navigate(
        `/account-verification/employer/${responseData.data.organisationId}`
      );
    } else {
      console.log(res.status);
      const resText = await res.text();
      try {
        const responseData: ErrorResponse = JSON.parse(resText);
        console.log("Object Data", responseData);
        if (responseData.errors) {
          responseData.errors.forEach((data: any) => {
            toast.warning(data);
          });
        } else {
          toast.warning(responseData.message);
          console.log(responseData.message);
        }
      } catch (error: any) {
        console.error("Parsing error:", error.message);
        console.log(resText);
      }
    }
  } catch (err) {
    console.error(err);
    toast.error("An Unexpected Error Occurred");
  }
};

export const handleData = async (
  res: any,
  loader: HTMLElement | null,
  text: HTMLElement | null,
  { toast }: Props,
  reset: any,
  navigate: NavigateFunction,
  msg = "Data added successfully"
) => {
  try {
    if (loader) {
      loader.style.display = "none";
    }
    if (text) {
      text.style.display = "inline";
    }
    if (res.status === 201 || res.status === 200) {
      const responseData: DataResponse = await res.json();
      console.log(responseData);
      toast.success(responseData.message ?? msg);
      reset();
      navigate(`/login`);
    } else {
      console.log(res.status);
      const resText = await res.text();
      try {
        const responseData: ErrorResponse = JSON.parse(resText);
        console.log("Object Data", responseData);
        if (responseData.errors) {
          responseData.errors.forEach((data: any) => {
            toast.warning(data);
          });
        } else {
          toast.warning(responseData.message);
          console.log(responseData.message);
        }
      } catch (error: any) {
        console.error("Parsing error:", error.message);
        console.log(resText);
      }
    }
  } catch (err) {
    console.error(err);
    toast.error("An Unexpected Error Occurred");
  }
};

export const handleDataAuth = async (
  res: any,
  loader: HTMLElement | null,
  text: HTMLElement | null,
  { toast }: Props,
  reset: any,
  navigate: NavigateFunction,
  auth: AuthContextType,
  msg = "Data added successfully"
) => {
  try {
    if (loader) {
      loader.style.display = "none";
    }
    if (text) {
      text.style.display = "inline";
    }
    if (res.status === 200) {
      const responseData = await res.json();

      if (responseData.message === "MFA required") {
        auth.setMfaSession({
          userId: responseData.data.userId,
          organisationId: responseData.data.organisationId,
          expiresAt: Date.now() + 5 * 60 * 1000,
        });

        navigate("/verification");
        return;
      }

      if (responseData.data?.token) {
        auth.setAuthData(responseData.data);
        navigate("/home");
        return;
      }
    }
  } catch (err) {
    console.error(err);
    toast.error("An Unexpected Error Occurred");
  }
};

export const handleVerifyUser = async (
  res: Response,
  loader: HTMLElement | null,
  text: HTMLElement | null,
  { toast }: Props,
  reset: any,
  navigate: NavigateFunction,
  auth: AuthContextType,
  msg = "Verification successful"
) => {
  try {
    loader && (loader.style.display = "none");
    text && (text.style.display = "inline");

    if (res.status === 200 || res.status === 201) {
      const responseData = await res.json();
      console.log("notice me", responseData);
      auth.setAuthData(responseData);
      localStorage.setItem("accessToken", responseData.token);
      const user = responseData.user;

      toast.success(responseData.message ?? msg);
      reset();

      switch (user.organisationType) {
        case "Employer":
          window.location.replace("/cta_emp/");
          break;

        case "Owner":
          window.location.replace("/cta_adm/");
          break;

        case "Agent":
          window.location.replace("/cta_agt/");
          break;

        default:
          navigate("/home");
      }

      return;
    }

    const resText = await res.text();
    try {
      const responseData: ErrorResponse = JSON.parse(resText);
      if (responseData.errors) {
        responseData.errors.forEach((e: string) => toast.warning(e));
      } else {
        toast.warning(responseData.message);
      }
    } catch {
      toast.error("Unexpected server response");
    }
  } catch (err) {
    console.error(err);
    toast.error("Could not verify user");
  }
};
