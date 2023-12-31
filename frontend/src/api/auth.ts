export type LoginData = {
    email: string;
    password: string;
};

export async function login(data: LoginData) {
    return await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}
