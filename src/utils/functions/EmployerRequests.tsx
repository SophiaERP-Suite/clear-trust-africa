import type { VerificationFormValues } from "../../pages/main/Verification";
import type { MfaSession } from "../main/auth.types";

const BaseURL = "http://localhost:5181";

export const addEmployer = async (data: unknown) => {
  const response = await fetch(`${BaseURL}/employers/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getEmployerOrganisation = async (orgId: number) => {
  const response = await fetch(`${BaseURL}/employers/${orgId}/organisation`, {
    method: "GET",
  });
  return response;
};

export const uploadEmployerDocs = async (data: FormData, orgId: number) => {
  const response = await fetch(`${BaseURL}/employers/${orgId}/upload`, {
    method: "POST",
    body: data,
  });
  return response;
};

export const verifyCode = async (
  code: VerificationFormValues,
  userId: number,
  organisationId: number
) => {
  const verificationCode = code.VerificationCode;
  
  const response = await fetch(
    `${BaseURL}/auth/mfa/verify/ ${userId}/${organisationId}/${verificationCode}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    console.log("Verification failed");
    const errorData = await response.json();
    throw new Error(errorData.message || "Verification failed");
  }

  console.log("User data:", response);
  return response;
};

export const loginUser = async (data: unknown) => {
  const response = await fetch(`${BaseURL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const fetchUser = async (token: string) => {
  const response = await fetch(`${BaseURL}/auth/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
