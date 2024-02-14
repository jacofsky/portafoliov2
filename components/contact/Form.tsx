"use client";
import type {ChangeEvent} from "react";

import emailjs from "@emailjs/browser";
import {useState} from "react";

interface Iprops {
  form: {
    email: {
      label: string;
      leftText: string;
      error: string;
    };
    name: {
      label: string;
      leftText: string;
      error: string;
    };
    message: {
      label: string;
      leftText: string;
      error: string;
    };
    button: {
      label: string;
      loading: string;
      sent: string;
      leftText: string;
    };
    finalPhrase: string;
  };
}

function Form({form}: Iprops) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const [focus, setSetFocus] = useState<"email" | "name" | "message" | "send" | null>(null);

  const [sent, setSent] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);

  const onSend = () => {
    let error = false;

    if (!emailRegex.test(email)) {
      setEmailError(form.email.error);
      error = true;
    }

    if (name.length < 1) {
      setNameError(form.name.error);
      error = true;
    }

    if (message.length < 1) {
      setMessageError(form.message.error);
      error = true;
    }

    if (!error) {
      setSending(true);
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_message: message,
          from_email: email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY,
      );
      setSending(false);
      setSent(true);

      setTimeout(() => {
        resetForm();
        setSent(false);
      }, 5000);
    }
  };

  const resetForm = () => {
    setEmail("");
    setName("");
    setMessage("");

    setEmailError(null);
    setNameError(null);
    setMessageError(null);

    setSetFocus(null);
    setSent(false);
  };

  return (
    <form className="mt-[5vh]" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center gap-4">
        <span
          className={`left-form-font hidden text-6xl transition-all md:inline-block ${
            focus === "email" || email ? "text-primary-text" : "text-secondary-text"
          } `}
        >
          {form.email.leftText}
        </span>
        <Input
          disabled={sending || sent}
          error={emailError}
          exitFocus={() => setSetFocus(null)}
          label={form.email.label}
          setError={(e) => setEmailError(e)}
          setFocus={() => setSetFocus("email")}
          setValue={(v) => setEmail(v)}
          value={email}
        />
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`left-form-font hidden text-6xl transition-all md:inline-block ${
            focus === "name" || name ? "text-primary-text" : "text-secondary-text"
          } `}
        >
          {form.name.leftText}
        </span>
        <Input
          disabled={sending || sent}
          error={nameError}
          exitFocus={() => setSetFocus(null)}
          label={form.name.label}
          setError={(e) => setNameError(e)}
          setFocus={() => setSetFocus("name")}
          setValue={(v) => setName(v)}
          value={name}
        />
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`left-form-font hidden text-6xl transition-all md:inline-block ${
            focus === "message" || message ? "text-primary-text" : "text-secondary-text"
          } `}
        >
          {form.message.leftText}
        </span>
        <Input
          disabled={sending || sent}
          error={messageError}
          exitFocus={() => setSetFocus(null)}
          label={form.message.label}
          setError={(e) => setMessageError(e)}
          setFocus={() => setSetFocus("message")}
          setValue={(v) => setMessage(v)}
          value={message}
        />
      </div>
      <div className="flex flex-row-reverse items-center gap-4">
        <Button
          disabled={sending || sent}
          text={
            !sent && !sending ? form.button.label : sent ? form.button.sent : form.button.loading
          }
          onClick={() => onSend()}
        />
        <span
          className={`left-form-font hidden text-6xl transition-all md:inline-block  ${
            sent ? "text-primary-text" : "text-secondary-text peer-hover:text-primary-text"
          } `}
        >
          {form.button.leftText}
        </span>
      </div>
      <div>
        <span
          className={`left-form-font hidden text-6xl transition-all md:inline-block ${
            sent ? "text-primary-text" : "text-secondary-text"
          } `}
        >
          {form.finalPhrase}
        </span>
      </div>
    </form>
  );
}

export default Form;

function Input({
  label,
  error,
  value,
  setValue,
  setError,
  setFocus,
  disabled,
  exitFocus,
}: {
  label: string;
  error: string | null;
  setError: (error: string | null) => void;
  value: string;
  setValue: (value: string) => void;
  setFocus: () => void;
  exitFocus: () => void;

  disabled: boolean;
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(null);
  };

  return (
    <div className="relative mb-8 flex w-max flex-grow items-center bg-transparent md:mb-0">
      <input
        className="peer w-full bg-transparent px-1 pt-2 text-lg font-extralight text-primary-text focus-within:outline-none"
        disabled={disabled}
        type="text"
        value={value}
        onBlur={() => exitFocus()}
        onChange={onChange}
        onFocus={() => setFocus()}
      />
      <span
        className={`absolute left-1 -z-10 text-lg font-extralight transition-all  md:text-2xl ${
          value
            ? "-translate-y-4 text-xs"
            : "peer-focus-visible:-translate-y-4 peer-focus-visible:text-xs"
        } ${error ? "text-red-800" : "text-secondary-text"}`}
      >
        {error || label}
      </span>
      <div className="primary-gradient absolute bottom-[-4px] h-[0.15rem] w-full " />
    </div>
  );
}

function Button({text, disabled, onClick}: {text: string; disabled: boolean; onClick: () => void}) {
  return (
    <button
      className={`group ${disabled ? "" : "peer"} relative  flex-grow transition-all`}
      disabled={disabled}
      type="button"
      onClick={() => onClick()}
    >
      <div className={`button-gradient-border w-full px-12 py-2 transition-all `}>
        <span
          className={`${
            disabled ? "text-gray-500" : "primary-text-gradient"
          }  relative z-30 text-lg font-light transition-all group-hover:tracking-widest group-active:tracking-[0.2em] md:text-xl`}
        >
          {text}
        </span>
      </div>
    </button>
  );
}
