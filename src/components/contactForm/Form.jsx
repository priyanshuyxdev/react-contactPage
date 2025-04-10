import React from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("name");

  const [email, setEmail] = useState("email");
  const [msg, setMsg] = useState("text");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setName(formData.get("name"));
    setEmail(formData.get("email"));
    setMsg(formData.get("area"));
    console.log(name, email, msg);

  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="Via Message" icon={<MdMessage fontSize="20px" />} />
          <Button text="Via Call" icon={<IoCallOutline fontSize="20px" />} />
        </div>

        <Button isOutline={true} text="Via Email" icon={<MdMessage fontSize="20px" />} />

        <form action="" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="area">Message</label>
            <textarea name="area" id="area" rows = "5"></textarea>
          </div>
          <div className={styles.submit}>
            <Button
              text="Submit" />
          </div>
          <div >
            {`${name} ${email} ${msg}`}
          </div>
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src="./service.svg" alt="" />
      </div>
    </section>
  )
}

export default Form