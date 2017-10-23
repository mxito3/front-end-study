/**
 * Created by YP on 2017/10/23.
 */
/**
 * Created by YP on 2017/10/22.
 */
$(document).ready(
    function()
    {
        var now_picture=1;
        function move(step)
        {
            var st=parseInt(step);
            $("#div2").animate({"left":"+=st+'px'"});
        }
            $("#leftArrow").click(
                function()
                {
                    if($("#div2").is(":animated")){    //判断元素是否正处于动画状态
                        return;
                    }
                    if(now_picture==1)//判断是不是第一个
                    {
                        for(var i=0;i<3;i++)
                        {
                            $("#div2").animate({left:"-=400px"},"fast");
                            now_picture++;
                            change_point(now_picture);
                            console.log(now_picture);
                        }

                    }
                    else
                    {
                        $("#div2").animate({left:"+=400px"});
                        now_picture--;
                        change_point(now_picture);
                        console.log(now_picture);
                    }

                }
            );


            $("#rightArrow").click(
                function()
                {
                    if($("#div2").is(":animated")){    //判断元素是否正处于动画状态
                        return;
                    }
                    if(now_picture==4)//判断是不是最后一个
                    {
                        for(var i=0;i<3;i++)
                        {
                            $("#div2").animate({left:"+=400px"},"fast");
                            now_picture--;
                            change_point(now_picture);
                            console.log(now_picture);
                        }
                    }
                    else
                    {
                        $("#div2").animate({left:"-=400px"});
                        now_picture++;
                        change_point(now_picture);
                        console.log(now_picture);
                    }
                }
            );
        var direction=1;//1表示向右
        function move1()
        {
            if(now_picture==4)//判断是不是最后一个
            {
                direction=0;//向左
            }
            if(now_picture==1)
            {
                direction=1;//向右
            }
            if(direction==0)
            {

                $("#div2").animate({left:"+=400px"},"fast");
                now_picture--;
                change_point(now_picture);
                console.log(now_picture);
            }
            else
            {
                $("#div2").animate({left:"-=400px"});
                now_picture++;
                change_point(now_picture);
                console.log(now_picture);
            }
        }
         //实现自动播放
        var des=setInterval(move1,3000);
        //监控鼠标，如果在上面就停止播放，离开就继续播放
        $("#div2,#leftArrow,#rightArrow").mouseover(
            function()
            {
                clearTimeout(des);
            }
        )
        $("#div2,#leftArrow,#rightArrow,li").mouseleave(
            function()
            {
                des=setInterval(move1,3000);
            }
        )

        //处理小圆点,传入现在到几张图了
        function change_point(index)
        {
            $("ol li").eq(index-1).addClass("current").siblings().removeClass("current");
        }
        //小圆点实现悬停切换
       $("ol li").mouseover
        (
            function changeByPoint()
            {
                clearTimeout(des);
                var index=parseInt($("ol li").index(this))+1;//得到小圆点的索引
                //切换
               // console.log("小圆点序号是："+index);
                var temp=index-now_picture;
                //console.log("需要移动词次数："+temp);
                if(temp!=index)
                {
                    if(temp>0)//需要右移次数
                    {
                        for(var i=0;i<temp;i++)
                        {
                            $("#div2").animate({left:"-=400px"},"fast");
                            now_picture++;
                            change_point(now_picture);
                            console.log(now_picture);
                        }
                    }
                    if(temp<0)//需要右移次数
                    {
                        for(var i=0;i<-temp;i++)
                        {
                            $("#div2").animate({left:"+=400px"},"fast");
                            now_picture--;
                            change_point(now_picture);
                            console.log(now_picture);
                        }
                    }
                }

            }
        );
    }

);
