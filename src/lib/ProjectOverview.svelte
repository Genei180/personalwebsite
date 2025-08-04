<script lang="ts">
  export let filesInProject;
  export let activeSlug;

  const ProjectName = activeSlug.split("/")[0]
</script>

<div>
  <h1>{ProjectName}</h1>
  <ul class="nav-links">
    {#each filesInProject as file}
      <li class:active={file[0].includes(activeSlug)}>
        <a data-sveltekit-reload href={`/projects/${file[0]}`}>
          {file[0].replace(/^\.\/[^/]+\//, '')}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
div {
  padding: 0 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
