<!-- @TOC -->
<!-- =================================================== -->
<!--
  + @Page Loader
  + @App Content
      - #Left Sidebar
          > $Sidebar Header
          > $Sidebar Menu

      - #Main
          > $Topbar
          > $App Screen Content
-->

<!-- @Page Loader -->
<!-- =================================================== -->
<div id='loader'>
    <div class="spinner"></div>
</div>

<script>
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.classList.add('fadeOut');
        }, 300);
    });
</script>
