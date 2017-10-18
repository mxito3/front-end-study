
function getButtonContent(Id)//传入一个id
{
    var a=document.getElementById(Id);
    var value= a.getAttribute("value");
    var place=document.getElementById("text_zone");//得到输入框的内容
    place.innerHTML+=value;//唯一的问题就是把字符串里的符号和数字分开。
     if(value=="=")
    {
        //取得字符串
        var num=new String(place.innerHTML.trim());
        var NUM_result=new Array();//数字栈
        var mark_result=new Array();//符号栈
        var begin=0;//开始的位置
         for(var i=0;i<num.length;i++)
        {
            if(num[i]=="+"||num[i]=="-"||num[i]=="×"||num[i]=="÷"||num[i]=="=")//分割
            {
                if(num[i]!="=")
                {
                    mark_result.push(num[i]);
                }
                if(parseInt(num.slice(begin, i))!=num.slice(begin, i))//输出小数
                {

                    NUM_result.push(parseFloat(num.slice(begin, i)));
                }
                else
                {
                    NUM_result.push(parseInt(num.slice(begin, i)));//怎么判断有小数点。
                }

                begin=i+1;
            }
        }

        var temp_result;
        //判断符号栈顶部
        alert(NUM_result);
        while(NUM_result.length>0 &&mark_result.length>0)
        {
          if(mark_result[mark_result.length-1]=="×" && mark_result[mark_result.length-2]!="÷")
            {
                temp_result= NUM_result[NUM_result.length-1]*NUM_result[NUM_result.length-2];
                NUM_result.length-=2;//弹出来两个操作数
                NUM_result[NUM_result.length]=temp_result;
                mark_result.pop();//弹出操作符
                continue;
            }
            if(mark_result[mark_result.length-1]=="×" &&  mark_result[mark_result.length-2]=="÷")
            {
                temp_result=NUM_result[NUM_result.length-3]/NUM_result[NUM_result.length-2];
                var temp=NUM_result.pop();
                NUM_result.pop();
                NUM_result.pop();
                NUM_result.push(temp_result);
                NUM_result.push(temp);
                temp=mark_result.pop();;
                mark_result.pop();
                mark_result.push(temp);
                alert("弹出后的数字占内存是："+NUM_result);
                alert("弹出后的符号占内存是："+mark_result);
                continue;
            }

            if(mark_result[mark_result.length-1]=="÷" && mark_result[mark_result.length-2]!="×")
            {
                temp_result= NUM_result[NUM_result.length-2]/NUM_result[NUM_result.length-1];
                NUM_result.length-=2;//弹出来两个操作数
                NUM_result[NUM_result.length]=temp_result;
                mark_result.pop();//弹出操作符
                continue;
            }
            if(mark_result[mark_result.length-1]=="÷" && mark_result[mark_result.length-2]=="×")
            {
                temp_result=NUM_result[NUM_result.length-3]*NUM_result[NUM_result.length-2];
                var temp=NUM_result.pop();
                NUM_result.pop();
                NUM_result.pop();
                NUM_result.push(temp_result);
                NUM_result.push(temp);
                temp=mark_result.pop();
                mark_result.pop();
                mark_result.push(temp);
                alert("弹出后的数字占内存是："+NUM_result);
                alert("弹出后的符号占内存是："+mark_result);
                continue;
            }
            if(mark_result[mark_result.length-1]=="+" && mark_result[mark_result.length-2]!="×" && mark_result[mark_result.length-2]!="÷")
            {
                temp_result= NUM_result[NUM_result.length-2]+NUM_result[NUM_result.length-1];
                NUM_result.length-=2;//弹出来两个操作数
                NUM_result[NUM_result.length]=temp_result;
                mark_result.pop();//弹出操作符
                continue;
            }
             if(mark_result[mark_result.length-1]=="+" && mark_result[mark_result.length-2]=="×")
            {
                temp_result=NUM_result[NUM_result.length-2]*NUM_result[NUM_result.length-3];
                var temp=NUM_result.pop();
                NUM_result.pop();
                NUM_result.pop();
                NUM_result.push(temp_result);
                NUM_result.push(temp);
                temp=mark_result.pop();
                mark_result.pop();
                mark_result.push(temp);
                alert("弹出后的数字占内存是："+NUM_result);
                alert("弹出后的符号占内存是："+mark_result);
                continue;
            }
            if(mark_result[mark_result.length-1]=="+" && mark_result[mark_result.length-2]=="÷")
            {
                temp_result=NUM_result[NUM_result.length-3]/NUM_result[NUM_result.length-2];
                var temp=NUM_result.pop();
                NUM_result.pop();
                NUM_result.pop();
                NUM_result.push(temp_result);
                NUM_result.push(temp);
                temp=mark_result.pop();
                mark_result.pop();
                mark_result.push(temp);
                alert("弹出后的数字占内存是："+NUM_result);
                alert("弹出后的符号占内存是："+mark_result);
                continue;
            }
            if(mark_result[mark_result.length-1]=="-" && mark_result[mark_result.length-2]!="×" && mark_result[mark_result.length-2]!="÷")
            {
                temp_result= NUM_result[NUM_result.length-2]-NUM_result[NUM_result.length-1];
                NUM_result.length-=2;//弹出来两个操作数
                NUM_result[NUM_result.length]=temp_result;
                mark_result.pop();//弹出操作符
                continue;
            }
            if(mark_result[mark_result.length-1]=="-" && mark_result[mark_result.length-2]=="÷")
            {
                temp_result=NUM_result[NUM_result.length-3]/NUM_result[NUM_result.length-2];
                var temp=NUM_result.pop();
                NUM_result.pop();
                NUM_result.pop();
                NUM_result.push(temp_result);
                NUM_result.push(temp);
                temp=mark_result.pop();
                mark_result.pop();
                mark_result.push(temp);
                alert("弹出后的数字占内存是："+NUM_result);
                alert("弹出后的符号占内存是："+mark_result);
                continue;
            }
            if(mark_result[mark_result.length-1]=="-" && mark_result[mark_result.length-2]=="*")
            {
                temp_result=NUM_result[NUM_result.length-3]*NUM_result[NUM_result.length-2];
                var temp=NUM_result.pop();
                NUM_result.pop();
                NUM_result.pop();
                NUM_result.push(temp_result);
                NUM_result.push(temp);
                temp=mark_result.pop();
                mark_result.pop();
                mark_result.push(temp);
                alert("弹出后的数字占内存是："+NUM_result);
                alert("弹出后的符号占内存是："+mark_result);
                continue;
            }

        }
        place.innerHTML+=temp_result;
        return;
    }
}
