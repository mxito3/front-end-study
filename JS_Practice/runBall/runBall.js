// Created by YP on 2017/10/18.


var runBall=
    {
        f:1 ,//设置阻力
 g:10 ,//空气阻力
        m:1,//质量[  n
        upOrDown:1 ,//方向，1表示下
        t:1,//10毫秒更新一次
       // a_down :(m*g-f)/m ,//向下的加速度
       // a_up:(m * g + f) / m ,//向上的加速度
         v_now:0 ,//当前的速度
       // a_down :(runBall.m*runBall.g-runBall.f)/runBall.m ,//向下的加速度
       // a_up:(runBall.m * runBall.g + runBall.f)/runBall.m ,//向上的加速度
        first_time:1 ,//判断是不是第一次
 circle:{
     begin_x : 95,
    radius  : 40 ,
     start_angle:0,
    size :2 * Math.PI,
    now_y:30
}
};
runBall.max_height=document.getElementById("myCanvas").getAttribute("height") , //最大上升高度
runBall.canvas_height=runBall.max_height;//画布高度
runBall.a_down =(runBall.m*runBall.g-runBall.f)/runBall.m ;//向下的加速度
runBall.a_up=(runBall.m * runBall.g + runBall.f)/runBall.m ;//向上的加速度
//alert("高度是："+runBall.canvas_height);
runBall.int=setInterval("manageDraw();",runBall.t);
   function  drawCircle()
{
    //console.log("高度是："+runBall.circle.begin_x);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var color="#ff0000";
    ctx.fillStyle(color);
    ctx.beginPath();
    //console.log(runBall.circle.begin_x, runBall.now_y, runBall.radius, runBall.start_angle,runBall.size);
    ctx.arc(runBall.circle.begin_x,runBall.circle.now_y,runBall.circle.radius,runBall.circle.start_angle,runBall.circle.size);
    ctx.stroke();
    //console.log("画了");
}
    function clearCanvas()

    {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    c.height = c.height;
}

    function setY () {
        if (1 == runBall.upOrDown)//向下
        {
            runBall.circle.now_y += runBall.v_now * runBall.t + (0.5) * runBall.a_down*(runBall.t/1000)*(runBall.t/1000);//当作一秒
            runBall.v_now += runBall.a_down*(runBall.t/1000);//假设t是1
            if (runBall.circle.now_y >= runBall.canvas_height-runBall.circle.radius)
            {
                //runBall.circle.now_y = runBall.canvas_height;
                runBall.upOrDown = 0;//方向变成向上
                runBall.v_now -= runBall.a_down*(runBall.t/1000);
                setMaxHeight();
               // console.log("变化方向了");
            }
            return;
        }
        if (0 == runBall.upOrDown)//向上
        {
            runBall.circle.now_y -= runBall.v_now * runBall.t - (0.5) * runBall.a_up*(runBall.t/1000)*(runBall.t/1000);
            runBall.v_now -= runBall.a_up*(runBall.t/1000);
            if (runBall.v_now<=0)
            {
               // runBall.circle.now_y = runBall.max_height;
                runBall.upOrDown = 1;//方向变成向下
                runBall.v_now += runBall.a_up*(runBall.t/1000);
            }

        }
        //console.log("当前速度是："+runBall.v_now);
    }




    function manageDraw() {
     clearCanvas();//清理画布
    //设置高度。
       setY();
    //是否停止
    //console.log("y是：" + runBall.circle.now_y);
    if (stopOrNot())
    {
       console.log("判断出需要停止了");
        window.clearInterval(runBall.int);
        drawCircle();
        return true;
    }
     drawCircle();
    return false;
}

function setMaxHeight()//每次到达最底部的时候更改
{
   // console.log("设置了一次");
    var temp_height = (runBall.v_now*runBall.v_now)/(2*runBall.g);
    console.log("设置了一次"+"速度是 "+runBall.v_now+"最大高度是:"+temp_height);
    runBall.max_height = temp_height;
}

  function stopOrNot()
{
    //console.log("直径是"+2*runBall.circle.radius);
    console.log("当前速度是"+ runBall.v_now);
    console.log("当前总高度："+runBall.max_height);
    //
    if( runBall.max_height <= Math.pow(0.1,4) && runBall.v_now<=Math.pow(0.1,2))
    {
        return true;
    }
    else
    {
        return false;
    }
   // return (runBall.max_height <= 2*runBall.circle.radius&&runBall.v_now<=0) ? true : false;
}

/*
function begin()
{
    var a=new Object(runBall);
}*/
/*下面这段话可以实现
var m=1;
var b=m;
alert(b);
var int=self.setInterval("a();",30);
function a()
{
    b++;
    console.log(b);
    if(b>10)
    {
        window.clearInterval(int);
    }
}
    */
/*
var a=new Object();
a.n=1;
a.m=a.n;
alert(a.m);
    */