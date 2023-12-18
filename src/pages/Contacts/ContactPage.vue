<script setup></script>
<template>
  <section class="contact-page">
    <div class="title-page">
      <h1 class="main-title">
        Interested?
        <br />
        Let’s talk!
      </h1>
      <p class="sub-title">
        Just fill this simple form in and we will contact you promptly to
        <br />discuss your project. Hate forms? Drop me a line at <br />
        <span class="email">lehoangtuan012@gmail.com</span>
      </p>
    </div>
    <div class="form-contact">
      <h5>Work with us</h5>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Your email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <button
            class="font-bold px-8 py-4 shadow-sm rounded-full block leading-normal border border-[#03030f] text-[#fff] bg-[#03030f]"
            type="button"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  padding: 150px 200px 50px 200px;
  .title-page {
    .main-title {
      font-size: 60px;
      font-weight: 700;
      line-height: 60px;
    }
    .sub-title {
      margin-top: 50px;
      line-height: 24px;
      .email {
        background: linear-gradient(to bottom right, #26a0f8, #ff6df1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
        position: relative;
        cursor: pointer;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          top: 20px;
          background: linear-gradient(to bottom right, #26a0f8, #ff6df1);
          transition: all 0.5s;
        }
      }
    }
  }
  .form-contact {
    margin-top: 50px;
    h5 {
      position: relative;
      font-weight: 600;
      width: fit-content;
      margin-bottom: 60px;
      font-size: 20px;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        top: 20px;
        background: #03030f;
        transition: all 0.5s;
      }
    }
  }
}
</style>
