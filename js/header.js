const header = `

    <div class="header">
        <!-- header left -->
        <div class="header-left">
            <img class="logo" id="logo" src="../images/logo.jpg" alt="Logo">
        </div>

        <!-- header center -->
        <div class="header-center">
            <span id="home"><a href="#">Home</a></span>
            <span id="explore">Explore</span>
            <span id="other"><a href="html/form.html">Add Note</a></span>
        </div>

        <!-- header right  -->
        <div class="header-right">
            <div class="header-right-up">
                <!-- logout-icon -->
                <ion-icon id="logout-btn" name="log-out-outline"></ion-icon>
                <ion-icon id="toggle-btn" name="moon"></ion-icon>
                <div class="header-profile-image" id="logged">
                    <img src="" alt="" id="header-profile-image" class="user-profile-image">
                </div>
            </div>
            <div class="header-right-down">
                Good Afternoon, <span id="name"></span>
            </div>
        </div>
    </div>
`
if (document.getElementById("header")) {
    document.getElementById("header").innerHTML = header;
}
