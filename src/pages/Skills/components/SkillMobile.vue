<script setup></script>
<template>
  <div class="stack-list">
    <div class="col-span-6 text-center text-3xl mb-5 font-semibold flex justify-center">
      <div class="icon_tech_stack w-fit flex justify-center gap-2 items-center mb-5">
        <span class="icon_all icon_mobile"></span>
        <h1>Mobile</h1>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-[50px]">
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_flutter.svg" height="30" width="30" />
        </div>
        <div>Flutter</div>
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

    .icon_mobile {
      background-position: 246px -103px;
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
