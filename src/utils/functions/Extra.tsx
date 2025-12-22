/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


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
    OrganizationId: number
  }
}



export const handleData = async (res: any, loader: HTMLElement | null, text: HTMLElement | null, { toast }: Props, reset: any, msg="Data added successfully") => {
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
      toast.success(msg);
      const navigate = useNavigate();
      reset();
      navigate(`account-verification/${responseData.data.OrganizationId}`);
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