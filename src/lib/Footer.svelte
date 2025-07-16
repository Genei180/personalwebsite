<script>
    // Define your navigation links
    const links = [
        { href: '/contact', label: 'Contact' }
        // Channels Insta & Github & Ko-Fi?
        // Mastadon?
        // Impressum
    ];
</script>

<nav class="footer">
  <ul class="nav-links">
    {#each links as { href, label }}
        <a href="{href}">{label}</a>
    {/each}
  </ul>
  <p>Powered by Biological AI.</p>
  <p>Website complettly Written from Scratch with Svelte Kit.</p>
  <p>Running on a Selfbuild Cluster</p>
</nav>

<style>
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 2rem;
    border-top: 1px solid var(--border);
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
  }

  .nav-links li.active a {
    color: var(--accent);
    border-bottom: 2px solid #000;
  }
</style>
