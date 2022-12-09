<template>
  <div>
    <header>
        <h1>Calendar</h1>
        <hr>
    </header>

        <ul class="list-unstyled meet-ul ">
                <li><h2>12 September 2020</h2></li>
                <li>
                    <input
                        type="date"
                        class="date-input"
                    >
                </li>
            </ul>
            <p class="day">Saturday</p>
            <div class="calender">
                <div class="calender-hours">
                    <span class="calender-hour-value">0</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">1</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">2</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">3</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">4</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">5</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">6</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">7</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">8</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">9</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">10</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">11</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">12</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">13</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">14</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">15</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">16</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">17</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">18</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">19</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">20</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">21</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">22</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">23</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="calender-hours">
                    <span class="calender-hour-value">24</span>
                    <div class="calender-hour-box"></div>
                </div>

                <div class="meeting meeting-1">123</div>
                <div class="meeting meeting-2">456</div>
            </div>
  </div>
</template>

<script>
export default {
    name:'CalanderBar'
}
</script>

<style>
.meet-ul{
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 0;
margin-bottom: 0;
}

.day{
    margin-top: 0;
    color: #4c4b4b;
}


.calender{
    position: relative;
}
.calender-hours{
    display: flex;
    height: 3em;
    margin-bottom: 1em;
}
.calender-hour-value{
    color: lightslategray;
    width: 30px;
    margin-left: 25px;
}
.calender-hour-box{
    flex-basis: auto;
    flex-grow: 1;
    background-color: rgb(27, 181, 228);
    border-radius: 5px;
}

/* .meeting{
    background-color: lightslategray;
    width: 85%;
    margin: 3em;
} */
.date{
    width: 49%;
}
.date-input{
    width: 16em;
    border: 1px solid silver;
    border-radius: 5px;

}
.box1{
    color: black;
 background-color: silver;
}
</style>