<template>
    <div id="app">
        <div id="nav">
            <ButtonGroup>
                <Button type="primary" to="/">Home</Button>
                <Button to="/about">About</Button>
            </ButtonGroup>
        </div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

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
