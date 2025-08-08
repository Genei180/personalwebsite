<script lang="ts">
  import ProjectOverview from '$lib/ProjectOverview.svelte';
  import Toc from '$lib/Toc.svelte';
  import { error } from '@sveltejs/kit';
  export let data;

  const { filesInProject, postslug, postComponent } = data;
  if (!postComponent) throw error(404, `Post "${postslug}" not found`);

  // console.log(filesInProject)

  // import { onMount } from 'svelte';
  // import mermaid from 'mermaid';

  // // onMount(() => {
  // //   mermaid.initialize({ startOnLoad: true });
  // //   console.log("Loaded Mermaid!")
  // // });
</script>

<div class="blog-page">
  <aside class="overview">
    <ProjectOverview filesInProject={filesInProject} activeSlug={postslug}/>
  </aside>
  <div class="reading-content" id="markdown-content">
    <svelte:component this={postComponent} />
  </div>
  <aside class="toc-sidebar">
    <Toc />
  </aside>
</div>

<style>
  :global(.link-icon) {
    font-size: 0.7em;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  :global(.heading-anchor:hover .link-icon) {
    opacity: 1;
  }

  .blog-page {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    position: relative;
  }

  .reading-content{
    flex-grow: 2;
  }

  .overview{
    flex-grow: 1;
  }

  /* Sticky TOC fixed to top-right */
.toc-sidebar {
  position: sticky;
  top: 1rem;
  align-self: flex-start;
  margin-left: auto;
  margin-right: 40px;
  max-width: 250px;
  padding-left: 2rem;
  height: fit-content;
  flex-grow: 1;
  flex-shrink: 0;
}

/* Optional: Make TOC scroll if too tall */
.toc-sidebar {
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}

/* Responsive: Hide TOC on narrow screens */
@media (max-width: 900px) {
  .toc-sidebar {
    display: none;
  }

  .blog-page {
    display: flex;
    flex-direction: column;
  }
}
</style>