<template>
    <footer>
        <p>© {{ currentYear }} | Lance Computer LLC. All rights reserved.</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 6vh;
        background-color: #121212;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #002263;
    }
        p{
            color: white;
        }


</style>