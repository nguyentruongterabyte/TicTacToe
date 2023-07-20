import clsx from 'clsx'

import styles from './Button.module.scss';

function Button({...props}) {
  return (
    <button
      className={ clsx( styles.btn, {
        [ styles.primary ]: props.primary,
        [ styles.success ]: props.success,
        [ styles.danger ]: props.danger,
        [ styles.warning ]: props.warning,
        [ styles.info ]: props.info,
        
        })
      }
    >
      Click me
    </button>
  )
}

export default Button