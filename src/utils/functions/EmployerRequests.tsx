const BaseURL = "http://localhost:5181";

export const addEmployer = async (data: unknown) => {
  const response = await fetch(`${BaseURL}/employers/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
  return response
}

export const getEmployerOrganization = async (orgId: number) => {
  const response = await fetch(`${BaseURL}/employers/${orgId}/organization`, {
    method: 'GET'
  })
  return response
}

export const uploadEmployerDocs = async (data: FormData, orgId: number) => {
  const response = await fetch(`${BaseURL}/employers/${orgId}/upload`, {
    method: 'POST',
    body: data,
  })
  return response
}

export const loginUser = async (data: unknown) => {
  const response = await fetch(`${BaseURL}/auth`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
  return response
}

export const fetchUser = async (token: string) => {
  const response = await fetch(`${BaseURL}/auth/profile`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}
