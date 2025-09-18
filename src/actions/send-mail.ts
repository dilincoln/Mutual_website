"use server"

import { redirect } from "next/navigation"
import { Resend } from "resend"

export async function sendMail(formData: FormData) {
  const rawFormData = Object.fromEntries(formData)

  const recaptchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=6Lc0380rAAAAAKrAEcLxzBRcuBI2Q3PeGVHtXrUN&response=${rawFormData.recaptchaToken}`,
    }
  )
  const recaptchaData = await recaptchaResponse.json()

  if (
    !recaptchaData?.score ||
    recaptchaData?.score < 0.5 ||
    recaptchaData?.success !== true
  ) {
    console.log("Recaptcha failed", JSON.stringify(recaptchaData, null, 2))

    redirect("/")
  }

  const resend = new Resend("re_WHVKbV4N_68ZysLtvLNPztGtRaubxvthN")

  await resend.emails.send({
    from: "No-reply <noreply@updates.mutualtecnologia.com.br>",
    to: ["diego@mutualtecnologia.com.br"],
    subject: "Novo Contato através do site",
    html: `<p>Nome: ${rawFormData.name}</p>
    <p>Email: ${rawFormData.email}</p>
    <p>Telefone: ${rawFormData.phone}</p>
    <p>Mensagem: ${rawFormData.message}</p>`,
  })


  redirect("/contact-us/thank-you")
}
