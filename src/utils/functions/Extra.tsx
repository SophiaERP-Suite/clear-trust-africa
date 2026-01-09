/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { AuthContextType, User } from '../main/auth.types';


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
    organisationId: number
  }
}



export const handleDataReg = async (res: any, loader: HTMLElement | null, text: HTMLElement | null, { toast }: Props, reset: any, navigate: NavigateFunction, msg="Data added successfully") => {
  try {
    if (loader) {
      loader.style.display = 'none';
    }
    if (text) {
      text.style.display = 'inline';
    }
    if (res.status === 201 || res.status === 200) {
      const responseData: DataResponse = await res.json();
      console.log(responseData);
      toast.success(responseData.message ?? msg);
      reset();
      navigate(`/account-verification/employer/${responseData.data.organisationId}`);
    } else {
      console.log(res.status)
      const resText = await res.text();
      try {
        const responseData: ErrorResponse = JSON.parse(resText);
        console.log('Object Data', responseData)
        if (responseData.errors) {
          responseData.errors.forEach((data: any) => {
            toast.warning(data);
          })
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
}

export const handleData = async (res: any, loader: HTMLElement | null, text: HTMLElement | null, { toast }: Props, reset: any, navigate: NavigateFunction, msg="Data added successfully") => {
  try {
    if (loader) {
      loader.style.display = 'none';
    }
    if (text) {
      text.style.display = 'inline';
    }
    if (res.status === 201 || res.status === 200) {
      const responseData: DataResponse = await res.json();
      console.log(responseData);
      toast.success(responseData.message ?? msg);
      reset();
      navigate(`/login`);
    } else {
      console.log(res.status)
      const resText = await res.text();
      try {
        const responseData: ErrorResponse = JSON.parse(resText);
        console.log('Object Data', responseData)
        if (responseData.errors) {
          responseData.errors.forEach((data: any) => {
            toast.warning(data);
          })
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
}

export const handleDataAuth = async (res: any, loader: HTMLElement | null, text: HTMLElement | null, { toast }: Props, reset: any, navigate: NavigateFunction, auth: AuthContextType, msg="Data added successfully") => {
  try {
    if (loader) {
      loader.style.display = 'none';
    }
    if (text) {
      text.style.display = 'inline';
    }
    if (res.status === 201 || res.status === 200) {
      const responseData = await res.json();
      console.log(responseData);
      auth.login(responseData.data);
      const user: User | null = auth.user;
      toast.success(responseData.message ?? msg);
      reset();
      if (user) {
        if (user.organisationType === "Employer") {
          window.location.replace("/cta_emp/")
        } else if (user.organisationType === "Owner") {
          window.location.replace("/cta_adm/")
        } else if (user.organisationType === "Agent") {
          window.location.replace("/cta_agt/")
        } else {
          navigate(`/home`);
        }
      } else {
        navigate(`/home`);
      }
      navigate(`/home`);
    } else {
      console.log(res.status)
      const resText = await res.text();
      try {
        const responseData: ErrorResponse = JSON.parse(resText);
        console.log('Object Data', responseData)
        if (responseData.errors) {
          responseData.errors.forEach((data: any) => {
            toast.warning(data);
          })
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
}
