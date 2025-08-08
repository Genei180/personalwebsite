<script>
    import { page } from '$app/stores';

    // Defining navigation links
    const links = [
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/resume', label: 'Résumé' },
        { href: '/contact', label: 'Contact' },
    ];

    let menuOpen = false;
    let openedUri = "";

    // Reactively run whenever page.url changes (route changes)
    $: if ($page.url.pathname !== openedUri) {
      menuOpen = false;
    }

    function toggleMenu() {
      menuOpen = !menuOpen;
      openedUri = $page.url.pathname;
    }
</script>

<nav class="header">

    <a href="/" class="Home">
    <div class="logo-wrapper">
        <img src="/assets/Logo.svg" alt="logo" class="logo"/> 
    </div>
    <div class="text-wrapper">
        <div class="name">V. Springer</div>
        <div class="alias">aka. Genei180</div>
    </div>
    </a>

    <div class="menu">
      <!-- Hamburger button visible only on mobile -->
      <button class="menu-toggle" aria-label="Toggle navigation" on:click={toggleMenu} class:open={menuOpen}>
        &#9776; <!-- Hamburger icon -->
        <!-- (currently {menuOpen ? 'open' : 'closed'}) -->
      </button>

      <ul class="nav-links" class:open={menuOpen}>
          {#if $page.url.pathname != "/"}
            <a href="/">Home</a>
          {/if}
          {#each links as { href, label }}
          <li class:active={$page.url.pathname === href}>
              <a href="{href}">{label}</a>
          </li>
          {/each}
      </ul>
    </div>
</nav>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border);
  }

  .Home {
    display: flex;
    width: fit-content;
    text-decoration: none;
  }

 .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
 }

 .logo-wrapper .logo {
    aspect-ratio: 1 / 1;
    height: 3rem;
  }

.text-wrapper {
    display: flex;
    font-weight: bold;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75rem 1rem 0.75rem 0rem;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--accent);
  }

  .alias {
    font-size: 0.6rem;
    color: var(--text-muted);
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

  /* Hamburger toggle button (hidden on desktop) */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }

  /* MOBILE STYLES */
  @media (max-width: 800px) {
    .menu{
      position: relative;
    }

    .menu-toggle {
      display: block;
      color: var(--text-muted);
    }

    .menu-toggle.open {
      display: block;
      color: var(--accent);
    }

    /* Hide horizontal nav on mobile */
    .nav-links {
      position: absolute;
      flex-direction: column;
      padding: 1rem;
      transform-origin: top;
      transform: scaleY(0);
      transition: transform 0.3s ease;
      overflow: hidden;
      height: auto; /* needed for content */
      background: var(--bg-light);
      z-index: 10;
    }

    .nav-links.open {
      transform: scaleY(1);
    }
  }
</style>
