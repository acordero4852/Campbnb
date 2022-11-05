import { useState } from "react";
import { useAuthContext } from "../contexts/auth";
import API from "../services/apiClient";
import { useAuthenticationForm } from "./useAuthenticationForm";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();
  const { form, errors, setErrors, handleOnInputChange } =
    useAuthenticationForm({ user });
  const [isProcessing, setIsProcessing] = useState(false);
  const handleOnSubmit = async () => {
    setIsProcessing(true);

    const { data, error } = await API.loginUser({
      userData: {
        email: form.email,
        password: form.password,
      },
    });

    if (data) {
      setUser(data.existingUser);
      API.setToken(data.token);
      navigate("/Listings");
    }
    setIsProcessing(false);
  };

  return {
    form,
    errors,
    isProcessing,
    handleOnInputChange,
    handleOnSubmit,
  };
};
