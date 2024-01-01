<script setup></script>
<template>
  <div class="stack-list">
    <div class="col-span-6 text-center text-3xl mb-5 font-semibold flex justify-center">
      <div class="icon_tech_stack flex justify-center gap-2 items-center mb-5">
        <span class="icon_all icon_frontend"></span>
        <h1>Frontend</h1>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-[50px]">
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_html.svg" height="30" width="30" />
        </div>
        <div>HTML5</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_css.svg" height="30" width="30" />
        </div>
        <div>CSS3</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_react.svg" height="30" width="30" />
        </div>
        <div>ReatJS</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_vuejs.svg" height="30" width="30" />
        </div>
        <div>VueJS</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_nextjs.svg" height="50" width="50" />
        </div>
        <div>NextJS</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_ts.svg" height="30" width="30" />
        </div>
        <div>Typescript</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_js.svg" height="30" width="30" />
        </div>
        <div>Javascript</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_sass.svg" height="30" width="30" />
        </div>
        <div>Sass</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_antd.svg" height="30" width="30" />
        </div>
        <div>Ant Design</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_tailwind.svg" height="30" width="30" />
        </div>
        <div>Tailwind Css</div>
      </div>
      <div class="stack-item">
        <div class="logo-stack">
          <img src="../../../assets/icons/icon_stack_boostrap.svg" height="30" width="30" />
        </div>
        <div>Bootstrap5</div>
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
    padding: 14px 20px;
    border-radius: 20px;
    background-color: #26a0f81a;

    .icon_frontend {
      background-position: 246px -186px;
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
