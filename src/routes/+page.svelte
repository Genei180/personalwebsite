<script lang="ts">
    export let data;  

    const projectTeasers = data.posts
        .filter(post => post.slug?.startsWith("./projects/") && post.slug?.endsWith("Overview.md") && post.firstPostet && post.status)
        .sort((a, b) => new Date(b.firstPostet!).getTime() - new Date(a.firstPostet!).getTime())
        .slice(0, 5);

    const blogTeasers = data.posts
        .filter(post => post.slug?.startsWith("./blog/") && post.firstPostet)
        .sort((a, b) => new Date(b.firstPostet!).getTime() - new Date(a.firstPostet!).getTime())
        .slice(0, 5);

</script>

<main class="landing-page">
	<section class="me">
		<h1>👋 Hi, I'm Vale</h1>
		<p>
			A technophile, firefighter, diver and world improver.<br />
			I craft, explore, and document the process.
		</p>

		<nav class="main-nav">
			<a href="/projects" class="nav-button">🚀 Projects</a>
			<a href="/blog" class="nav-button">✍️ Blog Posts</a>
			<a href="/resume" class="nav-button">📄 Resume</a>
		</nav>
	</section>

	<section class="teasers">
		<div class="teaser">
			<h2>Recent Projects</h2>
			<ul>
                {#each projectTeasers as post}
                    <li>
                        <a href={post.slug}>{post.title} ({post.status})</a>
                    </li>
                {/each}
			</ul>
		</div>

		<div class="teaser">
			<h2>Latest Blog Posts</h2>
			<ul>
				{#each blogTeasers as post}
                    <li>
                        <a href={post.slug}>{post.title}</a>
                    </li>
                {/each}
			</ul>
		</div>

        <!-- <div class="teaser">
			<h2>Image Galery</h2>
			<ul>
				 <li><a href="/blog/post">Post?</a></li> 
                 <li>Maybe comming soon!</li>
			</ul>
		</div> -->
	</section>

	<section class="about">
		<h2>About Me</h2>
        <img
            src="/assets/me.jpg"
            alt="Vale Climbing on a Tower"
            class="circular-image"
        />
		<p>
			I'm passionate about learning, exploring (technical) challenges, and writing about what I learn. <br>
			When off the screen, you'll find me underwater or hanging around at Heights.*
		</p>
        <p class="footnote">* I am Allgeric too the Null Level apparently</p>
	</section>

    <section class="contact">
        <h2>Sponsor me!</h2>
        <p>Like what you see?</p>
        <div class="connect">
            <div class="connect-container">
                <p>
                    Are you're looking to hire a focused, self-driven developer or Rope Rescue Technican, that likes to do things right and wants to constantly Improve?
                </p>
                <a href="/contact" class="nav-button">Hire Me!</a>
            </div>
            <div class="connect-container">
                <p> 
                    Or do you just want to help me spend more time building useful tools and tinkering around? <br>
                    Your support makes a difference!
                </p>
                <a href="https://ko-fi.com/genei180" class="nav-button">🍺 Buy me a Beer!</a>
            </div>
        </div>
	</section>
</main>

<style>
	.landing-page {
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;
		font-family: system-ui, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
	}

	.me {
		text-align: center;
		margin-bottom: 3rem;
	}

    .circular-image {
        aspect-ratio: 1 / 1;
        width: 40%;
		border-radius: 50%;
		object-fit: cover;
		display: block;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	.main-nav {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.nav-button {
		background: var(--accent);
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-weight: bold;
		transition: background 0.2s;
	}

	.nav-button:hover {
		background: var(--accent-muted);
	}

	.teasers {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.teaser h2 {
		margin-bottom: 0.5rem;
	}

	.teaser ul {
		list-style: none;
		padding: 0;
	}

	.teaser li {
		margin-bottom: 0.5rem;
	}

	.about {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
		text-align: center;
		margin-bottom: 3rem;
	}

    .footnote {
        font-size: 0.5rem;
    }

    .contact {
		text-align: center;
		margin-bottom: 3rem;
    }

    .connect {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
    }

    .connect-container {
        flex: 1;
    }

	@media (max-width: 800px) {
		.connect {
			flex-direction: column;
		}
	}
</style>
