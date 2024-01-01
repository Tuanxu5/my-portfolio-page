<script setup></script>
<template>
  <div class="stack-list">
    <div class="col-span-6 text-center text-3xl mb-5 font-semibold flex justify-center">
      <div class="icon_tech_stack flex justify-evenly gap-2 items-center mb-5 px-5">
        <span class="icon_all icon_backend"></span>
        <h1>Backend</h1>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-[50px]">
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_laravel.svg" height="30" width="30" />
        </div>
        <div>Laravel</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_graphql.svg" height="30" width="30" />
        </div>
        <div>GraphQL</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_mysql.svg" height="30" width="30" />
        </div>
        <div>MySQL</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_firebase.svg" height="30" width="30" />
        </div>
        <div>Firebase</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stack-list {
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 25px;
  border: 1px solid #dbdbdb;
  padding: 50px;

  .icon_tech_stack {
    padding: 16px 20px;
    border-radius: 20px;
    background-color: #26a0f81a;

    .icon_backend {
      background-position: 221px -160px;
      width: 28px;
      height: 28px;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(to bottom right, #5b98fb, #69ccfe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .stack-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;

    .logo-stack {
      background-color: #f4f6f7;
      border-radius: 100px;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;

      img {
        height: 30px !important;
        transition: all 0.5s;
        filter: grayscale(100%);
      }

      &:hover {
        background-color: #26a1f81a;

        img {
          transition: all 0.5s;
        }
      }
    }
  }
}
</style>
