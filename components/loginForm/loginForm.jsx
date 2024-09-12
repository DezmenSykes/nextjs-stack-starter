"use client"
import { useFormState } from 'react-dom';
import { loginWithCredentials } from "@/libs/actions";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from "./loginForm.module.css"
const LoginForm = () => {

    const [state, formAction] = useFormState(loginWithCredentials, undefined); 
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/home");
    }, [state?.success, router])

    return (
        <form className={styles.loginForm} action={formAction}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
        {state?.error}
        <Link href="/register">
            Don't have an account? <b>Register!</b>
        </Link>
      </form> 
    )
}

export default LoginForm