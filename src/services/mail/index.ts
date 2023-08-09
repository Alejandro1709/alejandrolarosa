export const sendEmail = async (formData: {}) => {
  const response = await fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response;
};
