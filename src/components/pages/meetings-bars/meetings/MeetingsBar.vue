<template>
  <div>
    <header>
            <h1>Meetings</h1>
            <hr>
        </header>
        <ul class="list-unstyled filterstyle">
            <li class="filterstyle-searching">Filter / Search Meetings</li>
            <li class="add-meeting"><a href="/meetingsadd">Add a meeting</a></li>
            <li class="psudo-list"></li>
        </ul>
        <div class="meeting">
            <h2 class="heading">Searching for meetings</h2>
            <ul class="list-unstyled">
                <li>
                    <label>Date</label>
                    <input 
                        type="date" 
                        class="search date"
                    >
                </li>
                <li>
                    <label for="">Search for</label>
                    <input
                        class="search text" 
                        type="textarea"
                        placeholder="Search using word which describe the meeting"
                    >
                </li>
                <li>
                    <button 
                        class="search-btn"
                    >Search</button>
                </li>
            </ul>
        </div>
        <h2>Meetings matching search criteria</h2>
        <hr>
        <div class="search-crtra">
            <ul class="list-unstyled search-crtra-style">
                <li class="search-list-date">12 September <span class="time">6:00 - 7:00</span></li>
                <li>Project KickOff</li>
                <li>
                    <button class="btn btn-danger">
                        Excuse yourself
                    </button> 
                </li>
                <hr>
                <li class="atnds">Attendees: <span class="atnds-mail">abcd@gmail.com</span></li>
                <li>
                    <select name="select-members" id="select-member">
                        <option value="">Select memeber</option>
                        <option value="abcd@gmail.com">abcd@gmail.com</option>
                        <option value="efgh@gmail.com">efgh@gmail.com</option>
                        <option value="ijkl@gmail.com">ijkl@gmail.com</option>
                    </select>
                    <button class="search-list-add">
                        Add
                    </button> 
                </li>
            </ul>            
        </div>
        <div class="search-crtra">
            <ul class="list-unstyled search-crtra-style">
                <li class="search-list-date">12 September <span class="time">6:00 - 7:00</span></li>
                <li>Project KickOff</li>
                <li>
                    <button class="btn btn-danger">
                        Excuse yourself
                    </button> 
                </li>
                <hr>
                <li class="atnds">Attendees: <span class="atnds-mail">abcd@gmail.com</span></li>
                <li>
                    <select name="select-members" id="select-member">
                        <option value="">Select memeber</option>
                        <option value="abcd@gmail.com">abcd@gmail.com</option>
                        <option value="efgh@gmail.com">efgh@gmail.com</option>
                        <option value="ijkl@gmail.com">ijkl@gmail.com</option>
                    </select>
                    <button class="search-list-add">
                        Add
                    </button> 
                </li>
            </ul>            
        </div>
  </div>
</template>

<script>
export default {
    name : 'MeetingsBar'
}
</script>

<style>
.meeting{
    background-color: #35b9ed; 
    border-radius: 3px;
    padding: 1em;
    padding-top: 0;
}
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
    color: #0077ff;
    width: 15em;
}
.filterstyle-searching{
    border: 1px solid silver;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 19em;
}
.search{
    width: 100%;
    border-radius: 3px;
    margin: .5em 0 0.5em 0;
    border:transparent;
}
.text{
    height: 4em;
    padding:0 0 2em .25em;
    border: 1px solid transparent;
    border-radius: 3px;
}
.search-btn{
    background-color: #0085b9 ;
    border: transparent;
    border-radius: 3px;
    height: 1.75em;
    color: whitesmoke;
}
.search-crtra{
    border: 1px solid silver;
    margin-top: 1em;
    border-radius: 3px;
}
.search-crtra-style{
    padding: 1em;
}
.search-list-date{
    font-size: large;
    font-weight: bold;
}
.time{
    font-weight: normal;
    font-size: small;
    margin-left: .5em;
}

.atnds{
    font-weight: bold;
}
.atnds-mail{
    font-weight: normal;
    margin-left: .5em;
    color: gray;
}
.box2{
    color: black;
 background-color: silver;
}
.search-list-add{
    background-color: #0085b9;
    border-color: transparent;
    border-radius: 3px;
    margin-left: .5em;
    color: white;
}
</style>