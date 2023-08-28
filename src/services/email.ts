const USER_EMAIL = 'email';

export const getEmail = (): string => {
  const userMail = localStorage.getItem(USER_EMAIL);
  return userMail ?? '';
};

export const saveEmail = (userEmail: string): void => {
  localStorage.setItem(USER_EMAIL, userEmail);
};

export const dropEmail = (): void => {
  localStorage.removeItem(USER_EMAIL);
};
