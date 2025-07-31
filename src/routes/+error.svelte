<script>
    import { page } from '$app/state';  
</script>

<div class="reading-content">
    {#if page.status === 404}
    <main class="error">
        <h1>404 – Page Not Found</h1>
        <p>Sorry, this page is not there.</p>
    </main>
    {:else if page.status === 500}
    <main class="error">
        <h1>500 – {page.error.message}</h1>
        <p>Sorry, this page is not there (yet).</p>
        <p>It might be under Construction, and comming soon...</p>
    </main>
    {:else}
    <main class="error">
        <h1>{page.status}:</h1>
        <pre>{page.error.message}</pre>
    </main>
    {/if}
</div>

<style>
  main {
    padding: 2rem;
    text-align: center;
  }

  .error h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent)
  }

  .error p {
    font-size: 1.2rem;
  }
</style>
