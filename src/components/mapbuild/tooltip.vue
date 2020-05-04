<template>
<div id="tooltipPositioner">
  <div id="tooltip">
    <div id="tooltipContainer">
      <div class="title">{{title}}</div>
      <div class="description body-2">{{description}}</div>
    </div>
  </div>
</div>
</template>

<script>

  module.exports = {
    name: 'tooltip',
    props: ['title', 'description']
  }

</script>

<style scoped>

#tooltipPositioner {
  position: relative;
  left: 50%;
}

#tooltipContainer {
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  padding: 5px;
  border-radius: 3px;
  background: rgba(255,255,255,0.9);
  color: #000;
  box-shadow: 0 1px 5px rgba(0,0,0,0.4);
  -moz-box-shadow: 0 1px 5px rgba(0,0,0,0.4);
  border:1px solid rgba(200,200,200,0.85);
  text-align:center;
}

#tooltip {
  text-align:center;
  z-index: 4;
  position: absolute;
  display: block;
}

#tooltip .description {
  color: rgb(255, 123, 0);
  font-size: 13px;
  text-align:center;
  /* font-style:bold; */
}

#tooltip .title {
  color:#2196f3;
  text-align: left;
  font-size: 13px;
  text-align:center;
}

</style>
