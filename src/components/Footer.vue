<template>
    <footer>
        <div class="title">
            <p>Developed by: <a href="https://wa.me/94770664182">ICY</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style type="text/css" scoped>
footer {
    background-color: #c1d3c2;
    color: rgb(5, 5, 5);
    text-align: center;
    padding: 5px;
    font-size: 10px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
    bottom: 0;
    width: 100%;
     /* Changed from 'relative' to 'fixed' */
}

.dev {
    margin: 0;
}

.title {
    margin: 0;
}

a {
    text-decoration: none;
    color: rgb(5, 5, 5);
}

a:hover {
    color: #f0f0f0;
}
</style>