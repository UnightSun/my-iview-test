<template>
    <div id="app">
        <img src="../index/assets/logo.png">
        <div>
            <p>
                If iView is successfully added to this project, you'll see an
                <code v-text="'<Button>'"></code>
                below
            </p>
            <Button type="primary">Button</Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
