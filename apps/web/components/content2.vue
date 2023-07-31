<script setup lang="ts">
</script>

<template>
  <div class="content">
    <slot />
  </div>
</template>

<style lang="scss">
.content {
  h3, h2 {
    font-size: 36px;
    margin-bottom: 24px; // TODO: 16px by design
  }

  a {
    color: #3A84FF;
    text-decoration: underline;
  }

  ol {
    margin: 36px 0;
    font-size: 16px;
    counter-reset: my-dot-decimal;

    li {
      position: relative;
      color: inherit;
      counter-increment: my-dot-decimal;
      padding-left: 52px;

      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        content: counter(my-dot-decimal);
        color: #3A84FF;
        font-size: 18px;
        line-height: 1;
        font-weight: 700;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid #3A84FF;
        transform: translateY(-50%);
      }
    }

    li + li {
      margin-top: 24px;
    }
  }

  ul {
    margin: 24px 0;
    font-size: 16px;

    li {
      position: relative;
      color: inherit;
      padding-left: 16px;

      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #3A84FF;
        transform: translateY(-50%);
      }
    }

    li + li {
      margin-top: 8px;
    }
  }

  p {
    margin-bottom: 8px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 30px;
    }
  }
}
</style>
