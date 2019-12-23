<template>
  <article>
    <img src="@/assets/solodov.png" alt="Andrey Solodov" />
    <aside>
      <a href="https://t.me/solodov_dev">
        <i class="fab fa-telegram-plane fa-lg"></i>
      </a>
      <a href="mailto:solodov.dev@gmail.com">
        <i class="fas fa-at fa-lg"></i>
      </a>
      <a href="https://github.com/solodov-dev">
        <i class="fab fa-github fa-lg"></i>
      </a>
    </aside>
    <p>
      Hello! My name is Andrey Solodov. I build web apps. You can take a look at
      my work
      <router-link class="text-link" to="/projects">here</router-link> or check out what I am up to now
      <router-link class="text-link" to="/weblog">here</router-link>. Feel free to contact me via
      email or telegram.
    </p>
  </article>
</template>

<script>
export default {
  name: "about"
};
</script>

<style lang="scss" scoped>
article {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 2em;
}

img {
  margin: 1em auto 0;
}

p {
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
}

.text-link {
  color: blueviolet;
}

i {
  margin: 1em;
}
</style>
