import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(req: any) {
    
    const response = await req.json();
    
    try {

        // const data = await resend.emails.send({
        //     from: 'juanjosebl2@gmail.com',
        //     to: 'juanjosebl2@gmail.com',
        //     subject: 'hello world',
        //     react: EmailTemplate({response}),
        //   });
        // return NextResponse.json(data);
    } catch (error) {
        
    }
}