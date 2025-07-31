<div class="reading-content">
    <form method="POST" class="contact-form">
    <input class="entry-field" type="text" name="subject" placeholder="Subject" required />
    <input class="entry-field"type="email" name="email" placeholder="your@awesome.email" required />
    <textarea class="entry-field" name="message" placeholder="Your message..." required></textarea>
    <button type="submit">Send</button>
    </form>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .entry-field {
    width: 100%;
  }

  textarea {
    height: 50rem;
    resize: vertical;
  }
</style>
