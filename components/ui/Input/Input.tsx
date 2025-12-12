import styles from './Input.module.scss';

interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  label: string;
  required?: boolean;
}

export default function Input({
  id,
  name,
  type = 'text',
  placeholder = ' ',
  label,
  required,
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        required={required}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
