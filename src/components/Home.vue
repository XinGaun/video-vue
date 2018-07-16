<template>
<div id="Home">
  <div class="navbar-fixed-top" style="height:110px;">
    <div style="height:110px;" id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
       <div class="item active" >
        <img src="./../assets/banner.png" style="height:110px;" alt="">
        <div class="carousel-caption">
        </div>
       </div> 
       <div class="item">
        <img src="./../assets/banner.png" style="height:110px;" alt="...">
        <div class="carousel-caption">
        </div>
       </div>
       <div class="item">
        <img src="./../assets/banner.png" style="height:110px;" alt="...">
        <div class="carousel-caption">
        </div>
       </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">  </span>
        <span class="sr-only">Previous</span>
      </a>
       <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
       <span class="sr-only">Next</span>
      </a>
    </div>
    
  </div>
  <div style="margin-top:110px;">
      <div class="order">
        <span style="white-space:pre">   </span><span class="line"></span>
        <span style="white-space:pre">   </span><span class="txt">精品课程</span>
        <span style="white-space:pre">   </span><span class="line"></span>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <router-link to="/Table?cid=123">
          <div v-for="index in list" class="col-xs-6">
            <div v-lazy-container="{ selector: 'img' }">
              <img data-src="http://www.niceyuwen.com/image/8910fda39de4408bbba6be4692a1614b.jpg" class="img-rounded imgKc item-pic">
              <div class="towText">{{ index }}的哈哈大会的看见爱上的快快好的看见爱上的科技安徽的科技爱德华看见爱上的肯定会看见爱上的贺卡接收到</div>
              <div class="rmb"><span class="glyphicon glyphicon-yen"></span><span>120.00</span></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</div>	
</template>
<script>
export default {
  name: "Home",
  data(){
    return {
      list : [
        1,2
      ]
    }
  },
  mounted :function(){
    let vue = this;
  }
};	
</script>
<style scoped>
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: none;
}
.order {
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.order .line {
    display: inline-block;
    width: 35%;
    border-top: 1px dotted #808080;
}
.order .txt {
    color: #808080;
    vertical-align: middle;
}
.towText{
  color:black;
  font-weight: bold;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  font-family:Microsoft YaHei;
}
.rmb{
  color:#3399FF;
  font-weight:bold;
  font-family:KaiTi;
}
.imgKc{
  width:100%;
  height:100px;
}
</style>