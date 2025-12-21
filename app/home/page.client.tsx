'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Icon } from '@/components/Icon';
import styles from './page.module.scss';
import Input from '@/components/ui/Input/Input';

import { signupSchema, SignupFormData } from '@/lib/validation/signup.schema';
import { registerUser } from './page.actions';

export default function PageClient() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log('FORM DATA', data);
    try {
      const result = await registerUser(data);
      if (result.success) {
        alert(result.message);
        // show success toast or redirect
      } else {
        alert(result.message); // show error toast
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <main className={styles.main}>
      <section className={`${styles.card} ${styles.cardLg}`}>
        <div className={styles.header}>
          <h2>Create Aurorah Account</h2>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <Input
                id="firstname"
                label="First Name"
                error={errors.firstname?.message}
                {...register('firstname')}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                id="lastname"
                label="Last Name"
                error={errors.lastname?.message}
                {...register('lastname')}
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <Input
              id="email"
              type="email"
              label="Email Address"
              error={errors.email?.message}
              {...register('email')}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <Input
              id="phone"
              type="tel"
              label="Phone Number"
              error={errors.phone?.message}
              {...register('phone')}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <Input
              id="password"
              type="password"
              label="Password"
              error={errors.password?.message}
              {...register('password')}
              required
            />
          </div>
          <button
            type="submit"
            className={styles.btnLogin}
            disabled={isSubmitting}
          >
            <span>Create an Account</span>
          </button>
        </form>
        <div className={styles.divider}>
          <span>or continue with</span>
        </div>
        <div className={styles.socialLogin}>
          <button type="button" className={styles.btnSocialLogin}>
            <Icon name="Google" size={32} />
          </button>
          <button type="button" className={styles.btnSocialLogin}>
            <Icon name="Facebook" size={32} />
          </button>
          <button type="button" className={styles.btnSocialLogin}>
            <Icon name="Apple" size={32} />
          </button>
        </div>
        <div className={styles.signupLink}>
          <p>
            Already have account? <Link href="/login">Sign In</Link>
          </p>
        </div>

        <div className={styles.footer}>
          <p>
            By creating an account, you agree to our user agreement and
            acknowledge our privacy notice.
          </p>
        </div>
      </section>
      <footer>
        <button type="button" className={styles.btnIcon}>
          <Icon name="Aurorah" size={30} color="#fff" />
        </button>
      </footer>
    </main>
  );
}
