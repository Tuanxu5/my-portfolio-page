<script setup>
</script>

<template>
    <section class="container px-[140px] flex flex-wrap">
        <div class="relative overflow-hidden w-max">
            <h5 class="text-[18px] font-medium mb-3 leading-6">Contacts</h5>
            <router-link to="/contacts">
                <div class="get-in-touch-link text-6xl font-bold relative leading-[75px]">
                    Get In Touch
                </div>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
@keyframes anima_underline {
    from {
        background-position: 100% 0;
    }

    to {
        transform: translateX(-49%);
    }
}

.get-in-touch-link::before {
    mask: url(https://ronasit.com/_next/static/media/underline-3.cd49af5b.svg);
    position: absolute;
    width: 200%;
    height: 11px;
    bottom: 0;
    left: 0;
    background: #69ccfe;
    content: "";
    animation: anima_underline 8s linear infinite;
}
</style>
