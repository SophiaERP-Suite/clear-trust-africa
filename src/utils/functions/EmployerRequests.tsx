const BaseURL = "http://localhost:5173/";

export const addEmployer = async (data: any) => {
  const response = await fetch(`${BaseURL}/employers/`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return response
}
