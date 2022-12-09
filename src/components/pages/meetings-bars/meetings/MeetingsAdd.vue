<template>
    <div>
   <header>
        <h1>Meetings</h1>
        <hr>
    </header>
        <ul class="list-unstyled filterstyle">
            <li class="filterstyle-searching"><a href="/meetings">Filter / Search Meetings</a></li>
            <li class="add-meeting">Add a meeting</li>
            <li class="psudo-list"></li>
        </ul>
        <div class="meeting">
            <h2 class="heading">Add new meetings</h2>
            <ul class="list-unstyled">
                <li>
                    <label class="date-label margin-width" for="">Date</label>
                    <input class="date-type margin-width" type="date">
                </li>
                <li class="margin-width">
                    <label for="">Start time (hh:mm)</label>
                    <br>
                    <select class="time">
                        <option value=""></option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </select> : 
                    <select class="time">
                        <option value=""></option>
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                    </select>  
                </li>
                <li class="margin-width">
                    <label for="">End time (hh:mm)</label>
                    <br>
                    <select class="time">
                        <option value=""></option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </select> :
                    <select class="time">
                        <option value=""></option>
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                    </select> 
                    
                </li>
                <li>
                    <label class="margin-width" for="">Description</label>
                    <input
                        class="description margin-width" 
                        type="textarea"
                        placeholder="What is agenda of the meeting ?"
                    >
                </li>
                <li class="margin-width">
                    <label for="">EmailIDs of Attendies, or team's short</label>
                    <input
                        class="input-width margin-width" 
                        type="text"
                        placeholder="abcd@gmail.com, efgh@gmail.com"
                    >
                
                </li>
                <li class="margin-width">Seperate emailId's / Team short names by commas - Team Short name always start with @</li>
                <li class="margin-width">
                    <button class="add-btn">
                        Add meeting
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'MeetingsAdd'
}


</script>

<style>
.filterstyle{
    display: flex;
    justify-content: left;
    
}
.filterstyle-searching,
.add-meeting,
.psudo-list{
    width: 100%;
    padding: 0.7em;
    border-bottom: 1px solid #808080d8 !important;
}

.add-meeting{
    border: 1px solid silver;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 15em;
    
}
.filterstyle-searching{
    color: #0077ff;
    width: 19em;
}
.add-new-meeting{
    background-color: #35b9ed;
    border-radius: 3px;
    padding: 0 1em 1em 1em;
}

.add-meeting-head{
    padding: 0.5em 0 0.5em 0;
    border-bottom: 1px solid #959494;
    color: white;
}
.date-type{
    width: 100%;
    border-radius: 3px;
    border: transparent;
}
.description{
    width: 100%;
    height: 4em;
    border-radius: 3px;
    border: transparent;
    padding-bottom: 2em;
}
.margin-width{
    margin: 0.5em 0 0.5em 0;
}
.add-btn{
    border: transparent;
    background-color: #0091cb ;
    border-radius: 3px;
    color: whitesmoke;
    padding: 0.5em;
}
.input-width{
    width: 100%;
    border-radius: 3px;
    border-color: transparent;
}
.time{
    width: 2.5em;
    height: 1.75em;
    border-radius: 3px;
    border: 1px solid transparent;
}
.box2{
    color: black;
 background-color: silver;
}
</style>