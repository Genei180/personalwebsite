<script lang="ts">
    import PostOverview from "$lib/PostOverview.svelte";
    export let data;  
</script>

<div class="reading-content">
  <h1>Blog Posts</h1>

  <p>Things i find Intresting, i want to Showcase, or want to Talk about:</p>

  <!-- <p>I might share Values with Groups i work with, which does not mean the Group does share my Opinions!</p>
  <p>Everything is my Own Personal Opinion!</p> -->

  <ul>
    {#each data.posts as post}
      <li>
        <PostOverview
          title={post.title}
          firstPostet={post.firstPostet}
          excerpt={post.excerpt}
          link={`/blog/${post.slug}`}
          image={post.image? `/blog/${post.image}` : "" }
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