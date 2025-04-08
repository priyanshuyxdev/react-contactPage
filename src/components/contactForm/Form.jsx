import React from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'

const Form = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <Button />
        </div>
        <div className={styles.contact_img}></div>
    </section>
  )
}

export default Form