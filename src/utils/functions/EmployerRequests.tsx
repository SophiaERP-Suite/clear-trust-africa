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
