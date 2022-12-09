<template>
  <div>
    <header>
            <h1>Teams</h1>
            <hr>
        </header>
        <span class="text-style"> View and edit teams you are part of</span>
        <br>
        <div class="card">
            <div class="card-size">
                <ul class="list-unstyled card-content">
                    <li class="font-b font-l margin-t-b">Customer acquisition campaign</li>
                    <li class="font-b margin-t-b">@customer-acquisition</li>
                    <li class="text-style">Team to come up with strategies to win over customer by end of FY21</li>
                    <li>
                        <button class="btn btn-danger">Excuse yourself</button>
                    </li>
                    <hr class="margin-t-b">
                    <li ><span class="font-b margin-t-b">Memebers:</span> john@example.com, jane@example.com</li>
                    <li class="margin-t-b">
                        <select name="select-member" id="">
                            <option value="">Select memeber</option>
                            <option value="">abcd@gmail.com</option>
                            <option value="">efgh@gmail.com</option>
                            <option value="">ijkl@gmail.com</option>
                        </select>
                        <button class="search-list-add">Add</button>
                    </li>
                </ul>
            </div>
            <div class="card-size">
                <ul class="list-unstyled card-content">
                    <li class="font-b font-l margin-t-b">Customer acquisition campaign</li>
                    <li class="font-b margin-t-b">@customer-acquisition</li>
                    <li class="text-style">Team to come up with strategies to win over customer by end of FY21</li>
                    <li>
                        <button class="btn btn-danger">Excuse yourself</button>
                    </li>
                    <hr class="margin-t-b">
                    <li ><span class="font-b margin-t-b">Memebers:</span> john@example.com, jane@example.com</li>
                    <li class="margin-t-b">
                        <select name="select-member" id="">
                            <option value="">Select memeber</option>
                            <option value="">abcd@gmail.com</option>
                            <option value="">efgh@gmail.com</option>
                            <option value="">ijkl@gmail.com</option>
                        </select>
                        <button class="search-list-add">Add</button>
                    </li>
                </ul>
            </div>
            <div class="card-size">
                <ul class="list-unstyled card-content">
                    <li class="font-b font-l margin-t-b">Customer acquisition campaign</li>
                    <li class="font-b margin-t-b">@customer-acquisition</li>
                    <li class="text-style">Team to come up with strategies to win over customer by end of FY21</li>
                    <li>
                        <button class="btn btn-danger">Excuse yourself</button>
                    </li>
                    <hr class="margin-t-b">
                    <li ><span class="font-b margin-t-b">Memebers:</span> john@example.com, jane@example.com</li>
                    <li class="margin-t-b">
                        <select name="select-member" id="">
                            <option value="">Select memeber</option>
                            <option value="">abcd@gmail.com</option>
                            <option value="">efgh@gmail.com</option>
                            <option value="">ijkl@gmail.com</option>
                        </select>
                        <button class="search-list-add">Add</button>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name : 'TeamsBar'
}
</script>

<style>
.text-style{
    font-size: medium;
    color: gray;
}
.card{
    margin: auto;
}
.card-size{
    margin-top: 2em;
    display: inline-block;
    border: 2px solid silver;
    border-radius: 2px;
    box-sizing: border-box;
    width: 20em; 
    margin-right: 1em;   
}
.card-content{
    margin: 1em;
}
.box3{
    color: black;
    background-color: silver;
}
</style>