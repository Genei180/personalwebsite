<script lang="ts">
    import PostOverview from '$lib/PostOverview.svelte';
    export let data;
</script>

<div class="reading-content">
  <h1>My Projects:</h1>
  <p>Things i wanted to Document Extensivly:</p>
  <ul>
    {#each data.posts as post}
      <li>
        <PostOverview
          title={post.title}
          firstPostet={post.firstPostet}
          excerpt={post.excerpt}
          status={post.status}
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
