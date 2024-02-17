<template>
    <AppHeader />

    <div class="one-line-running-notification-infinit">
        <h3>
            <span></span>

        </h3>
    </div>

    <main>

        <!-- <div class="new-time-table">
            <div class="tile-header">
                <h1>New Time Table</h1>
            </div>
            <div class="tile-content">
                <p>View: <a href="/source/timetable.html">Here (version 3) </a>
                </p>
                </div>
        </div> -->

        <div class="dms tile">
            <div class="tile-header">
                <h1>Database Management System</h1>
            </div>
            <div class="tile-content">
                <p>Lecturer Name: </p>
                <p>Time(online): 8:30am</p>
                <p>Link: <a
                        href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_Mzk1ZWZjZGQtNmRmYy00MGY3LTkzZmItNTA3NjUwMDk4ODYy%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%22d17ac732-3418-450f-a630-2de89063fe63%22%7d" target="_blank">Here</a>
                </p>
            </div>
        </div>


        <div class="ossa tile">
            <div class="tile-header">
                <h1>Operating System and System Administration</h1>
            </div>
            <div class="tile-content">
                <p>Lecturer Name: Mrs. Sanvitha Kasthuriarachchi</p>
                <p>Time(online): 10:30am</p>
                <p>Link: <a
                        href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NmNjYTZkYmItOTk3MC00NWExLWIzNjgtZjI0YjI1MTMwODdj%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%22eb8117cf-b003-451d-beb6-1e0926cc38e3%22%7d" target="_blank">Here</a>
                </p>
            </div>
        </div>

        <div class="se tile">
            <div class="tile-header">
                <h1>Software Engineering</h1>
            </div>
            <div class="tile-content">
                <p>Lecturer Name: Mrs. Uthpala Samarakoon</p>
                <p>Time(online): 01:30pm</p>
                <p>Link: <a
                        href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzQxMzliNmEtZGJmZi00NzBkLWI1YjItNDlkYWEyNmQ2ZWMy%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%224a3d27ca-4f3c-4d48-94e9-5bb387fab477%22%7d" target="_blank">Here</a>
                </p>
            </div>
        </div>


        <div class="oop tile">
            <div class="tile-header">
                <h1>Object Oriented Programming</h1>
            </div>
            <div class="tile-content">
                <p>Lecturer Name: Mr. hasindu Dahanayake</p>
                <p>Time(online): 03:30pm</p>
                <p>Link:
                    <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDQ2M2I2NTAtYjg1OC00YzlhLWFiN2QtOTQ5MmU1Yjk4NWM0%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%22f8d4a0be-1d4f-437f-9c22-2e8af4e21e6d%22%7d" target="_blank">Here</a>
                </p>
            </div>
        </div>

        <!-- <div class="cn tile">
            <div class="tile-header">
                <h1>Computer Networks</h1>
            </div>
            <div class="tile-content">
                <p>Lecturer Name: </p>
                <p>Time(online): </p>
                <p>Link: <a href="">Here</a>
                </p>
            </div>
        </div> -->
    </main>
    <AppFooter />
    
</template>

<script>

// import Swal from 'sweetalert2';
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
    name: 'LectureDetails',
    components: {
        AppHeader,
        AppFooter,
    },
    methods: {
        // showAlert() {
        //     Swal.fire({
        //         title: 'Link will be updated soon',
        //         icon: 'info',
        //         confirmButtonText: 'OK'
        //     });
        // }
    }
}
</script>

<style type="text/css" scoped>


main {
    background-color: #f0f0f0;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.tile {
    background-color: #c1d3c2;
    color: rgb(5, 5, 5);
    text-align: center;
    padding: 20px;
    margin: 20px;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
    width: calc(50% - 40px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.tile a {
    color: rgb(5, 5, 5);
    text-decoration: none;
}

.tile a:hover {
    color: #f0f0f0;
}

.tile-header h1 {
    margin: 0;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.one-line-running-notification-infinit h3 {
    display: flex;
}

.one-line-running-notification-infinit h3 span {
    white-space: nowrap;
    animation: marquee 15s linear infinite;
}

.one-line-running-notification-infinit h3 span:nth-child(2) {
    animation-delay: 7.5s;
}

.new-time-table {
    background-color: #c1d3c2;
    color: rgb(5, 5, 5);
    text-align: center;
    padding: 20px;
    margin: 20px;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
    width: calc(100% - 40px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media (min-width: 768px) {
    .tile {
        width: calc(50% - 40px);
        font-size: 20px;
    }
}

@media (max-width: 480px) {
    .tile {
        width: calc(100% - 40px);
        font-size: 14px;
    }
}
</style>