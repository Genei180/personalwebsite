<script lang="ts">
    export let title = "Blog Post Title";
    export let firstPostet = "XX/XX/XX";
    export let excerpt = "This is a short description of the blog post to give readers an idea of what it's about.";
    export let link: string = "";
    export let status: string = "";
    export let image: string = "";

    function formatToMMJJ(dateString: string): string {
        const date = new Date(dateString);
        const day = String(date.getDay()).padStart(2, '0'); // Months are 0-indexed
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = String(date.getFullYear()).slice(-2); // Get last two digits
        return `${day}/${month}/${year}`;
    }
</script>

<a href={link} class="blog-wrapper">
    <article class="blog-overview">
      <div class="blog-post">
        <div class="blog-header">
            <div class="blog-title">{title}</div>
            {#if status != ""}
              <div class="blog-status">{status}</div>
            {/if}
            <div class="blog-date">{formatToMMJJ(firstPostet)}</div>
        </div>
        <div class="blog-description">{excerpt}</div>
      </div>
      {#if image != ""}
        <img src={image} alt="Blog Image"/>
      {/if}
    </article>
</a>

<style>
  img {
    aspect-ratio: 1 / 1;
    height: 150px;
    object-fit: contain;
    border: 1px solid var(--border);
    background-color: whitesmoke;
    border-radius: 12px;
  }
  .blog-wrapper {
    text-decoration: none;
  }

  .blog-overview {
    border: 1px solid var(--border);;
    padding: 20px;
    margin: 20px 0;
    border-radius: 12px;
    font-family: sans-serif;
    transition: box-shadow 0.2s ease, background-color 0.2s ease;
    display: flex;
  }

  .blog-overview:hover {
    background-color: var(--accent-muted);
  }

  .blog-post{
    flex-grow: 1;
  }

  .blog-header{
    display: flex;
    align-items: center;
  }

  .blog-title{
    font-size: 2rem;
    text-decoration: underline;
    margin-right: auto;
  }

  .blog-status{
    padding: 5px;
    float: right;
  }
  .blog-date{
    float: right;
    padding: 5px;
  }
</style>