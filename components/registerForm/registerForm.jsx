"use client"
import { useFormState } from 'react-dom';
import styles from "./registerForm.module.css"
import { registerWithCredentials } from "@/libs/actions";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {

    const [state, formAction] = useFormState(registerWithCredentials, undefined); 
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router])

    return (
        <form className={styles.registerForm} action={formAction}>
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirm_password" placeholder="Confirm Password" />
            <button>Register</button>
            {state?.error && <p>{state.error}</p>}
            <Link href="/login">
                Have an account? <b>Login!</b>
            </Link>
        </form>
    )
}

export default RegisterForm