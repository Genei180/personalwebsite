<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = '/blog/Cube/EngineScript.js'; // Ensure this path is correct
    script.type = 'text/javascript';
    document.body.appendChild(script);
  });
</script>

<div class="animator">
    <canvas id="cnv" width="600px" height="600px" style="border:1px solid white;"></canvas>
</div>

<style>
.animator {
    width: 100%;
    aspect-ratio: 1;
}
/* ===== Canvas ========================================================================== */
#cnv {
	width: 100%;
	height: 100%;
}
</style>
