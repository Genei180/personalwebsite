<script>
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";

    import '../app.css'; // or your specific file
</script>

<div class="page-content">
    <Header />
    <slot></slot>
</div>
<Footer/>



<style>
    .page-content {
        min-height: 100vh;
    }
</style>