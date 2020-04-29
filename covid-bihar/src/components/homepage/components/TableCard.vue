<template>
    <div>
        <v-card class="mx-auto" raised>
        <table class="table table-bordered table-hover">
            <thead>
                <tr> 
                    <th class="th-sm">DISTRICT&nbsp;<i ></i></th>
                    <th class="th-sm">TOTAL&nbsp;<i ></i></th>
                    <th class="th-sm">CONFIRMED&nbsp;<i ></i></th>
                    <th class="th-sm">NEW CASES&nbsp;<i ></i></th>
                    <th class="th-sm">DEATH&nbsp;<i ></i></th>
                    <th class="th-sm">NEW DEATH&nbsp;<i ></i></th>
                    <th class="th-sm">RECOVERED&nbsp;<i ></i></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >HELLO-1</td>
                    <td >HELLO-2</td>
                    <td >HELLO-3</td>
                    <td class="covid-bg-yellow">HELLO-4</td>
                    <td >HELLO-5</td>
                    <td class="covid-bg-red">HELLO-6</td>
                    <td >HELLO-7</td>
                </tr>                                                
            </tbody>
        </table>
        </v-card>
    </div>
</template>

<script>

export default {
    name: 'tablecard',
    data () {
        return {

        }
    }
}
</script>

<style>
    .covid-bg-red {
        background-color: red;
        color: white;
    }
    .covid-bg-yellow {
        background-color: #FFEEAA;
    }

</style>