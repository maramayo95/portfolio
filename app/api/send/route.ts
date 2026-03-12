
import { EmailTemplate } from '@/app/components/email-template';
import { Resend } from 'resend';


export async function POST(request: Request) {
   
 const resend = new Resend(process.env.RESEND_API_KEY);
  try {
     const res = await request.json()
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['matiasaramayo.dev@gmail.com'],
      subject: "holis",
      react: "holis",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    console.log(res)

    return Response.json(res);
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}

