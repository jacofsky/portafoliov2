import type {Locale} from "@/i18n-config";

import {getDictionary} from "@/utils/i18n";
import Form from "@/components/contact/Form";

async function Contact({lang}: {lang: Locale}) {
  const dictionary = getDictionary(lang);

  return (
    <section className="w-screen px-4 pt-12 md:px-16" id="contact">
      <h2 className="text-gradient-stroke text-3xl md:text-6xl">{dictionary.contact.title}</h2>
      <Form form={dictionary.contact.form} />
    </section>
  );
}

export default Contact;
