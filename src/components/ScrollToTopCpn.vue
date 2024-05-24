<script setup>
const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
</script>

<template>
    <button
        class="cursor-pointer fixed right-6 bottom-6 w-10 h-10 bg-[#03030f] text-white rounded-2xl flex justify-center items-center"
        @click="topFunction">
        <img src="../assets/icons/icon_to_top.svg" class="w-4 h-4" />
    </button>
    <AnimatedTooltip items={people} />

</template>
<style scoped></style>
