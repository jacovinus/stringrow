import { redirect, Form, Link } from "react-router-dom";
import { login, LoginData } from "../api/auth";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";



export async function action({ request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await login(updates as LoginData);

    return redirect("/profile");
}

export default function Login() {
    return (
            <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                            Login to your account
                        </h2>
                    </div>
                    <Card id="login-form-inputs" className="mt-8 space-y-6">
                        <Card.CardContent>
                            <Form method="post" id="login-form" autoComplete="off" className="space-y-6">
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <Label htmlFor="email-login">
                                            Email address
                                        </Label>
                                        <Input
                                            autoComplete="email"
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            id="email-login"
                                            name="email"
                                            placeholder="Email address"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="password-login">
                                            Password
                                        </Label>
                                        <Input
                                            autoComplete="current-password"
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            id="password-login"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Button className="w-full" type="submit">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Card.CardContent>
                    </Card>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                to="#"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <div className="text-sm">
                            <Link
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                to="#"
                            >
                                Don't have an account? Register
                            </Link>
                        </div>
                    </div>
                    <Card className="mt-8 space-y-6 hidden" id="register-form">
                        <Card.CardContent>
                            <form autoComplete="off" className="space-y-6">
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <Label htmlFor="username-register">
                                            Username
                                        </Label>
                                        <Input
                                            autoComplete="username"
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            id="username-register"
                                            name="username"
                                            placeholder="Username"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email-register">
                                            Email address
                                        </Label>
                                        <Input
                                            autoComplete="email"
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            id="email-register"
                                            name="email"
                                            placeholder="Email address"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="password-register">
                                            Password
                                        </Label>
                                        <Input
                                            autoComplete="new-password"
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            id="password-register"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            type="password"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="password-register-confirm">
                                            Confirm Password
                                        </Label>
                                        <Input
                                            autoComplete="new-password"
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            id="password-register-confirm"
                                            name="password-confirm"
                                            placeholder="Confirm password"
                                            required
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Button className="w-full" type="submit">
                                        Register
                                    </Button>
                                </div>
                            </form>
                        </Card.CardContent>
                    </Card>
                </div>
            </main>
    );
}
