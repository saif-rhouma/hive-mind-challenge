import { forwardRef } from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, required, placeholder = ' ', ...rest }, ref) => {
    return (
      <div className={`${styles.inputWrapper} ${error ? styles.hasError : ''}`}>
        <input
          id={id}
          ref={ref}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          required={required}
          {...rest}
        />

        <label htmlFor={id} className={required ? styles.required : undefined}>
          {label}
        </label>

        <span className={styles.errorText}>{error ?? ''}</span>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
