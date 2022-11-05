import { useState } from "react";
import { useAuthenticationForm } from "../hooks/useAuthenticationForm";
import { useAuthContext } from "../contexts/auth";
import API from "../services/apiClient";

export const useRegistrationForm = () => {
  const { user, setUser } = useAuthContext();
  const [accountCreated, setAccountCreated] = useState(null);
  const { form, errors, setErrors, handleOnInputChange } =
    useAuthenticationForm({ user });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    const { data, error } = await API.registerUser({
      userData: {
        email: form.email,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        birthday: "bd",
        username: form.username,
      },
    });

    if (data) {
      setUser(data.newUser);
      API.setToken(data.token);
      setAccountCreated(true);
    }
    setIsProcessing(false);
  };

  return {
    form,
    errors,
    isProcessing,
    handleOnInputChange,
    handleOnSubmit,
    accountCreated,
  };
};
