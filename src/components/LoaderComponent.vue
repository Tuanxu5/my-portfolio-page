<script setup>
import { Power4, gsap } from 'gsap';
import { onMounted } from 'vue';

const props = defineProps(["showWelcome", "currentLoader", "loaderCount", "updateShowWelcome", "updateCurrentLoader"])

onMounted(() => {
    const tl = gsap.timeline({
        onComplete: () => {
            if (props?.currentLoader?.value < props.loaderCount) {
                props.updateCurrentLoader();
            }
            else {
                props.updateShowWelcome();
            }
        },
    });
    tl
        .to("#loader", {
            width: "35%",
            duration: 2,
            delay: 3,
            opacity: 0,
            ease: Power4.easeInOut,
            display: "none",
        })
        .to("#loader", {
            height: 0,
            top: "100%",
            duration: 0.5,
            delay: 0,
            opacity: 0,
            display: "none",
            ease: Power4.easeInOut,
        })
})
</script>

<template>
    <div v-if="!showWelcome" class="loading-page">
        <div id="loader">
            <div id="title" class="flex mb-3">
                <div class="tracking-[0.5rem] font-semibold flex gap-1 items-center">LOADING
                    <div class="therefore"><img src="src/assets/icons/icon_loading.svg" alt="" width="20"></div>
                </div>
                <p class="loading-number">%</p>
            </div>
            <div id="loading-bar-border">
                <div class="loading-bar">
                </div>
            </div>
            <div id="warning">
                <div class="exclamation">&#10045;</div>&nbsp;Welcome to Portfolio by Tuanxu
                <div id="line-cascades"></div>
            </div>
        </div>
    </div>
</template>




<style scoped>
@property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
}

@keyframes initText {
    0% {
        content: ". . ."
    }

    17% {
        content: "Loading core modules . . ."
    }

    27% {
        content: "Loading core modules . . . \00000a Verifying user permissions . . . "
    }

    36% {
        content: "Loading core modules . . . \00000a Verifying user permissions . . . \00000a Compiling source code . . . "
    }

    42% {
        content: "Loading core modules . . . \00000a Verifying user permissions . . . \00000a Compiling source code . . . \00000a Running diagnostics . . ."
    }

    49% {
        content: "Verifying user permissions . . . \00000a Compiling source code . . . \00000a Running diagnostics . . . \00000a Establishing secure connection . . ."
    }

    60% {
        content: "Compiling source code . . . \00000a Running diagnostics . . . \00000a Establishing secure connection . . . \00000a Scanning for vulnerabilities . . ."
    }

    66% {
        content: "Running diagnostics . . . \00000a Establishing secure connection . . . \00000a Scanning for vulnerabilities . . . \00000a Loading user interface . . . \00000a"
    }

    78% {
        content: "Establishing secure connection . . . \00000a Scanning for vulnerabilities . . . \00000a Loading user interface . . . \00000a Executing startup procedures . . . \00000a"
    }

    100% {
        content: "Scanning for vulnerabilities . . . \00000a Loading user interface . . . \00000a Executing startup procedures . . . \00000a Initializing database connections . . . \00000a"
    }
}

@keyframes opcty {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

@keyframes counting {
    0% {
        --num: 0
    }

    60% {
        --num: 66
    }

    100% {
        --num: 100
    }
}

@keyframes charging {
    0% {
        width: 0%
    }

    60% {
        width: 66%
    }

    100% {
        width: 100%
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    50% {
        transform: rotate(180);
    }

    100% {
        transform: rotate(360deg);
    }
}



body {
    background-color: #000;
    color: white;
    overflow: hidden;
    height: 100%;
}

.loading-page {
    display: flex;
    height: 100vh;
    flex: 1;
    align-items: center;
    justify-content: center;
}

#loader {
    display: flex;
    flex-direction: column;
    width: 60%;
    animation: opcty 1s ease-in-out;

    .therefore {
        justify-content: center;
        animation: rotate 0.5s linear infinite;
    }

    .loading-number {
        counter-reset: num var(--num);
        margin-left: auto;
        transition: --num 5s;
        animation: counting 3s ease-in-out;
        animation-fill-mode: forwards;

        &:before {
            content: counter(num);
        }
    }
}


#loading-bar-border {
    display: flex;
    align-items: center;
    height: 8px;
    border-top: 1px solid rgba(255, 255, 255, .5);
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    width: 100%;
    border-radius: 16px;
    background-color: #d4ecfe;

    & .loading-bar {
        height: 8px;
        background: black;
        animation: charging 3s ease-in-out;
        animation-fill-mode: forwards;
        border-radius: 24px;
    }
}

#warning {
    margin-top: .5rem;
    display: flex;
    height: 1.2rem;
    align-items: center;

    .exclamation {
        width: 16px;
        height: 16px;
        padding: 5px;
        display: flex;
        justify-content: center;
        background-color: black;
        color: white;
        align-items: center;
        border-radius: 3px;
        font-size: 12px;
    }
}


#line-cascades {
    margin-left: auto;
    display: flex;
    align-items: end;
    margin-top: 5rem;

    &:after {
        height: 5rem;
        font-size: 12px;
        white-space: pre;
        text-align: end;
        color: #b5b5b5;
        content: "";
        animation: initText 3s ease;
        animation-fill-mode: forwards;
    }
}
</style>
