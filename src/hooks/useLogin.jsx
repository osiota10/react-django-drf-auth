import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";

const useLogin = (initialFields, apiUrl) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialFields);

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const error = useSelector((state) => state.auth.error);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevFields) => ({ ...prevFields, [name]: value }));
    }, []);

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            setLoading(true);

            try {
                await dispatch(login(formData, apiUrl));
            } catch (error) {
                // handle login error
                console.error("Error submitting form");
            } finally {
                setLoading(false);
            }
        },
        [dispatch, formData]
    );

    return {
        loading,
        formData,
        error,
        onChange: handleChange,
        onSubmit: handleSubmit,
        isAuthenticated,
    };
};

export default useLogin;
