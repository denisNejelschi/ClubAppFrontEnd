import Button from '../button/Button';
import Input from '../input/Input';	
import styles from './loginform.module.css'

function LoginForm() {
  return (
    <div className={styles.form}>
      <Input name={'email'} type={'email'} placeholder={'Type your email'} label={'Email'} />
      <Input name={'password'} type={'password'} placeholder={'Type your password'} label={'Password'} />
      <Button label={''} onClick={function(): void {
              throw new Error('Function not implemented.');
          } } />
    </div>
  );
}

export default LoginForm;