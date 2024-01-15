<script setup>


</script>
<template>
    <main class="container px-[140px] flex flex-wrap flex-col mt-[-80px] pt-[50px] w-full">
        <!-- <ModalBuyCoffee /> -->
        <div class="sub-title leading-6">
            Just fill this simple form in and we will contact you promptly to
            <br />discuss your project. Hate forms? Drop me a line at <br />
            <a href="mailto:lehoangtuan012@gmail.com">
                <span class="email">lehoangtuan012@gmail.com</span>
            </a>
        </div>
        <div class="mt-12 w-full">
            <h5>Work with me</h5>
            <form class="w-full max-w-2xl">
                <div class="flex flex-wrap -mx-3 w-full mb-6">
                    <div class="input-with-placeholder w-full md:w-1/2 px-3">
                        <input type="text" id="name" required />
                        <label for="Your name">Your name</label>
                    </div>
                    <div class="input-with-placeholder w-full md:w-1/2 px-3">
                        <input type="text" id="email" required />
                        <label for="Your email">Your email</label>
                    </div>
                </div>
                <div class="flex flex-wrap w-full -mx-3 mb-6">
                    <div class="text-area-with-placeholder w-full px-3">
                        <textarea id="message" required></textarea>
                        <label for="Your message">Your message</label>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <button
                        class="mt-10 font-bold px-8 py-4 shadow-sm rounded-full leading-normal border border-[#03030f] text-[#fff] bg-[#03030f]"
                        type="button">
                        Send Request
                    </button>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
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

.input-with-placeholder {
    position: relative;
    border: none;
    outline: none;

    label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 10px;
        transition: 300ms all;
        z-index: -1;
    }

    input {
        width: 100%;
        height: 60px;
        background: transparent;
        z-index: 1;
        outline: none;
        border: transparent;
        border-bottom: 2px solid #03030f;
        font-size: 16px;
        padding: 0;
    }
}

.input-with-placeholder input:focus+label,
.input-with-placeholder input:valid+label {
    height: 50%;
    padding-left: 12px;
    transform: translateY(-100%);
    font-size: 12px;
    color: #03030f80;
}

.text-area-with-placeholder {
    position: relative;
    border: none;
    outline: none;
    margin-top: 60px;

    label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: start;
        padding-left: 10px;
        transition: 300ms all;
        z-index: -1;
    }

    textarea {
        width: 100%;
        height: 60px;
        background: transparent;
        z-index: 1;
        outline: none;
        border: transparent;
        border-bottom: 2px solid #03030f;
        font-size: 16px;
        padding: 0;
    }
}

.text-area-with-placeholder textarea:focus+label,
.text-area-with-placeholder textarea:valid+label {
    height: 60%;
    padding-left: 12px;
    transform: translateY(-100%);
    font-size: 12px;
    color: #03030f80;
}
</style>
