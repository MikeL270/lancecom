<template>
  <header>
    <img alt="Lance Computer LLC logo" class="logo" src="@/assets/logo.webp"/>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

  </header>
</template>

<style scoped>
header {
  position:fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background-color: #121212;
  border-bottom: 1px solid #002263;
}
  .logo {
    float: left;
    margin-left: 5%;
    height: 6vh;
  }
  nav {
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    margin-right: 5%;
    color: white;
  }
  nav a.router-link-exact-active {
  color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
