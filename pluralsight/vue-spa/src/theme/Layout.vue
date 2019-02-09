<template>
    <div>
        <h1> This is your first component in Vue </h1>
        <h3> {{ webpack }} </h3>
    </div>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            // reactive data property of the component.
            webpack: 'Powered by webpack!',
        }),
    }
</script>
