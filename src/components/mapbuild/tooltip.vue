<template>
    <div id="tooltipPositioner">
        <div id="tooltip">
            <div id="tooltipContainer">
                <div class="title">{{title}}</div>
                <table>
                    <tr>
                        <th class="blue--text" style="padding: 4px">सक्रिय</th>
                        <th class="green--text" style="padding: 4px">स्वस्थ</th>
                        <th class="red--text" style="padding: 4px">मृत्यु </th>
                    </tr>
                    <tr>
                        <td class="blue--text" style="padding: 6px">{{description.active}}</td>
                        <td class="green--text" style="padding: 6px">{{description.recovered}}</td>
                        <td class="red--text" style="padding: 6px">{{description.deaths}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: "tooltip",
    props: ["title", "description"]
};
</script>

<style scoped>
#tooltipPositioner {
    position: relative;
    left: 55%;
    padding-bottom: 10px;
}

#tooltipContainer {
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    font-size: 12px;
    line-height: 16px;
    padding: 3px;
    border-radius: 3px;
    background: #4b4f52;
    color: #000;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(200, 200, 200, 0.85);
    text-align: center;
}

#tooltip {
    text-align: center;
    z-index: 4;
    position: absolute;
    display: block;
}

#tooltip .description {
    color: rgb(255, 123, 0);
    font-size: 13px;
    text-align: center;
    /* font-style:bold; */
}

#tooltip .title {
    color: #ffffff;
    text-align: left;
    font-size: 13px;
    text-align: center;
}

table,
th,
td {
    border: 1px solid black;
}
</style>
