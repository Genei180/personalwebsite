<script lang="ts">
  export let form: { success?: boolean };
</script>

<div class="reading-content">
  {#if form?.success}
    <div class="success-message">
      <h1>🎉 Your message was sent successfully!</h1>
      If i have Intresst, you will hear from me!
    </div>
  {:else}
    <form method="POST" class="contact-form">
      <input class="entry-field" type="text" name="subject" placeholder="Subject" required />
      <input class="entry-field" type="email" name="email" placeholder="your@awesome.email" required />
      <textarea class="entry-field" name="message" placeholder="Your message..." required></textarea>
      <button type="submit">Send</button>
    </form>
  {/if}
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

  .success-message {
    padding: 2rem;
    text-align: center;
  }

  .success-message h1{
    color: var(--accent);
    font-weight: bold;
  }

</style>
