<script>
</script>

<footer>
  <div class="note">
    <p>&copy; {new Date().getFullYear()} Vale. All rights reserved.</p>
    <p>Powered by Biological AI. (with some supported by Technical AI)</p>
    <p>Website complettly Written from Scratch with Svelte Kit.</p>
    <p><s>Running on Self Configured, selfowned Hardware.</s> <a href="/projects/Homelab">Soon!</a></p>
  </div>
  <a href="#top" class="back-to-top">↑ Back to Top</a>
  <div class="links">
    <nav class="footer-links">
      <a href='https://github.com/Genei180'>Github</a>
      <!-- <a href='https://linkedin.com/in/Me?'>LinkedIn</a> -->
      <a href='/contact'>Contact</a>
    </nav>
    <!-- <nav class="footer-links">
      // Channels Insta & Github & Ko-Fi?
      // Mastadon?
      // Impressum
    </nav> -->
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 2rem;
    border-top: 1px solid var(--border);
		text-align: center;
		color: #6b7280;
		font-size: 0.875rem;
		margin-top: 4rem;
	}

  .back-to-top {
    flex: 1;
  }

  .note {
    text-align: left;
    flex: 1;
  }

  .links {
    flex: 1;
		display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 3rem;
  }
  
	.footer-links {
		display: flex;
    text-align: center;
    flex-direction: column;
		justify-content: right;
		gap: 1rem;
		margin-top: 0.5rem;
	}
</style>
