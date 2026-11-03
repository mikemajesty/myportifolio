<template>
  <div class="page">
    <div class="page-actions">
      <a class="download-button" href="./portifolio.pdf" download="Mike-Lima-CV.pdf">
        Baixar currículo (PDF)
      </a>
    </div>
    <div class="resume">
      <LeftSize/>
      <RightSize/>
    </div>
  </div>
</template>

<script>
import LeftSize from './components/leftSide/LeftSize.vue'
import RightSize from './components/rigthSide/RightSize.vue'

export default {
  name: 'App',
  components: {
    LeftSize,
    RightSize
  }
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  min-height: 100vh;
  background: #edf3f5;
  color: #23343d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.65;
}

#app {
  width: min(1120px, calc(100% - 40px));
  margin: 40px auto;
}

.page-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.download-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid #137b8a;
  border-radius: 8px;
  background: #137b8a;
  color: #fff;
  font-size: 0.92rem;
  font-weight: 650;
  text-decoration: none;
  transition: background-color 160ms ease, transform 160ms ease;
}

.download-button:hover {
  background: #0b5966;
  color: #fff;
  transform: translateY(-1px);
}

.resume {
  position: relative;
  display: grid;
  grid-template-columns: 310px minmax(0, 1fr);
  min-height: 100vh;
  overflow: hidden;
  background: #fff;
  border: 1px solid #dfe8eb;
  border-radius: 20px;
  box-shadow: 0 24px 70px rgba(27, 55, 67, 0.12);
}

a {
  color: #137b8a;
  text-underline-offset: 3px;
}

a:hover {
  color: #0b5966;
}

a:focus-visible {
  outline: 3px solid #f4b942;
  outline-offset: 3px;
  border-radius: 2px;
}

@media (max-width: 800px) {
  #app {
    width: min(100% - 24px, 680px);
    margin: 12px auto;
  }

  .resume {
    grid-template-columns: minmax(0, 1fr);
    border-radius: 14px;
  }

  .page-actions {
    margin-bottom: 8px;
  }
}

@media (max-width: 420px) {
  #app {
    width: 100%;
    margin: 0;
  }

  .resume {
    border: 0;
    border-radius: 0;
  }

  .page-actions {
    margin: 12px 16px;
  }
}

@media print {
  body {
    background: #fff;
  }

  #app {
    width: 100%;
    margin: 0;
  }

  .resume {
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .page-actions {
    display: none;
  }
}
</style>
