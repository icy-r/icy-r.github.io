<template>
    <AppHeader />

    <div class="container">
        
        <main class="content">
            <transition name="fade">
                <div class="notices animate" v-if="showNotice">
                    <router-link to="/timetable">
                        <h3>
                            Timetable is updated!
                        </h3>
                    </router-link>
                </div>
            </transition>

            <transition name="fade">
                <div class="notices animate" v-if="showNotice">
                    <router-link to="/lecture-details">
                        <h3>
                            Lecture details are updated!
                        </h3>
                    </router-link>
                </div>
            </transition>

            <!-- stay with us for more updates -->
            <img :src="logo" class="remove-background" alt="logo" width="100%" height="auto" />

        </main>

        <AppFooter />
    </div>
</template>

<script>
import logo from '@/assets/logo.jpg';
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
    name: 'HomePage',
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            logo,
            showNotice: true,
        };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 20px;
}

.content {
    width: 80%;
    max-width: 800px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.notices {
    background-color: #c1d3c2;
    color: rgb(5, 5, 5);
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
    margin: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.animate {
    animation: fadeIn 2s;
}

.remove-background {
    mix-blend-mode: multiply;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>