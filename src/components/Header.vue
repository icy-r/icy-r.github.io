<template>
    <header>
        <div class="logo">
            <img src="../assets/download.jpg" alt="logo">
            <p class="sitename">Notee</p>
        </div>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/lecture-details">Lecture-details</router-link></li>
                <li><router-link to="/timetable">Timetable</router-link></li>
            </ul>
        </nav>
    </header>
    <router-view/>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style type="text/css" scoped>
    header {
    background-color: #c1d3c2;
    color: rgb(5, 5, 5);
    text-align: center;
    padding: 5px;
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
    margin-bottom: 20px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.sitename {
    font-size: 50px;
    margin: 0;
}

nav {
    background-color: #c1d3c2;
    color: rgb(5, 5, 5);
    text-align: center;
    padding: 5px;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
}

nav ul li a {
    text-decoration: none;
    color: rgb(5, 5, 5);
}

nav ul li a:hover {
    color: #f0f0f0;
}

@media screen and (max-width: 600px) {
    header {
        flex-direction: column;
    }
    .logo {
        margin-bottom: 20px;
    }

    .logo img {
        width: 50px;
        height: 50px;
    }

    .sitename {
        font-size: 30px;
    }

    nav {
        margin-top:16px;
    }

    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin-bottom: 10px;
    }

    nav ul li a {
        font-size: 20px;
    }

    nav ul li a:hover {
        color: #f0f0f0;
    }

   
}

@media screen and (max-width: 400px)
{
    header {
        flex-direction: column;
    }
    .logo {
        margin-bottom: 20px;
    }

    .logo img {
        width: 50px;
        height: 50px;
    }

    .sitename {
        font-size: 30px;
    }

    nav {
        margin-top:16px;
    }

    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin-bottom: 10px;
    }

    nav ul li a {
        font-size: 20px;
    }

    nav ul li a:hover {
        color: #f0f0f0;
    }

    
}

@media screen and (max-width: 300px)
{
    header {
        flex-direction: column;
    }
    .logo {
        margin-bottom: 20px;
    }

    .logo img {
        width: 50px;
        height: 50px;
    }

    .sitename {
        font-size: 30px;
    }

    nav {
        margin-top:16px;
    }

    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin-bottom: 10px;
    }

    nav ul li a {
        font-size: 20px;
    }

    nav ul li a:hover {
        color: #f0f0f0;
    }
}

</style>









<!-- <header>
            <div class="logo">
                <img src="../assets/download.jpg" alt="logo">
                <p class="sitename">Notee</p>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/lecture-details">Lecture-details</router-link></li>
                    <li><router-link to="/timetable">Timetable</router-link></li>
                </ul>
            </nav>
        </header> -->