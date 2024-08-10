import { LoginData, RegisterData } from "../model/userInterfaces";
import { BASE_URL, Endpoints } from "./constants";

export function registerUser({ email, name, surname, password }: RegisterData): Promise<void> {
    return fetch(`${BASE_URL}${Endpoints.RegisterUser}`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email, password, name, surname }),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((errorData) => {
                    throw new Error(errorData.error || "Registration failed");
                });
            }
        })
        .catch((error) => {
            throw error;
        });
}

export function loginUser({ email, password }: LoginData): Promise<void> {
    return fetch(`${BASE_URL}${Endpoints.Login}`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email, password }),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((errorData) => {
                    console.error("Login error data:", errorData);
                    throw new Error(errorData.error || "Login failed");
                });
            }
        })
        .catch((error) => {
            console.error("Login error:", error);
            throw error;
        });
}

export function logout() {
    return fetch(`${BASE_URL}${Endpoints.Logout}`, {
        method: "GET",
        credentials: "include",
    })
        .then((response) => {
            if (response.ok) {
                return response;
            }
        })
        .catch((error) => {
            console.error("Login error:", error);
            throw error;
        });
}

export async function fetchMe() {
    const response = await fetch(`${BASE_URL}${Endpoints.Profile}`, {
        method: "GET",
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
