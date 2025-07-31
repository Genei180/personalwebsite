import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const subject = data.get('subject')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!subject || !email || !message) {
      return fail(400, { error: 'All fields are required.' });
    }

    // TODO: handle form Logic
    console.log({ subject, email, message });

    return { success: true };
  }
};
