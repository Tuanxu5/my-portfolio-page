<script setup>
</script>

<template>
    <div>
        <div class="toggle color">
            <input id="check3" class="toggle-checkbox hidden" type="checkbox" />
            <label for="check3"
                class="toggle-label block w-[24px] h-[14px] rounded-full transition-color duration-150 ease-out">
            </label>
        </div>
    </div>
</template>
<style scoped>
.toggle-label {
    position: relative;

    &:before {
        position: absolute;
        top: 1px;
        left: 1px;
        display: block;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 9999%;
        background-color: #03030f;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 40%;
        transition: transform 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateX(0);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
}

.toggle-checkbox:checked+.toggle-label:before {
    transform: translateX(10px);
    background-color: #fff;
}

.toggle {
    &.slim {
        .toggle-label:before {
            top: -0.15rem;
            left: 0;
        }

        .toggle-checkbox:checked+.toggle-label:before {
            transform: translateX(1.75rem);
        }
    }

    &.color {
        .toggle-label {
            background-color: transparent;
            border: 1px solid #03030f;
        }

        .toggle-checkbox:checked+.toggle-label {
            background-color: #03030f;
        }
    }
}
</style>
