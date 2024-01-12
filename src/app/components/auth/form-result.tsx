import { State } from '@/app/state-machines/state';
import CheckIcon from '../ui/check-icon';
import CrossIcon from '../ui/cross-icon';
import styles from '@/app/styles/Auth.module.css';
import Loader from '../ui/loader';

interface FormResult {
  state: State;
  message: string;
}

const FormResult = ({ state, message }: FormResult) => {
  if (state === State.INITIAL) {
    return null;
  }

  if (state === State.LOADING) {
    return <Loader />;
  }

  const color = state === State.SUCCESS ? '#389ABB' : '#979ce7';
  const icon = state === State.SUCCESS ? <CheckIcon color={color} /> : <CrossIcon color={color} />;

  return (
    <div className={`${styles.formResult} ${state === State.SUCCESS ? styles.success : styles.error}`}>
      <div className={styles.formResultIcon}>{icon}</div>
      <p className={styles.formResultText}>{message}</p>
    </div>
  );
};

export default FormResult;
