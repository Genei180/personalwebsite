<script lang="ts">
    import PostOverview from '$lib/PostOverview.svelte';
    export let data;
</script>

<div class="reading-content">
  <h1>My Projects:</h1>

  <ul>
    {#each data.posts as post}
      <li>
        <PostOverview
          title={post.title}
          firstPostet={post.firstPostet}
          excerpt={post.excerpt}
          status="In Progress"
          link={`/projects/${post.slug}`}
        />
      </li>
    {/each}
  </ul>
</div>

<style>
  li{
    list-style: none;
  }
</style>
