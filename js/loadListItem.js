define(["jquery"], function ($) {
    // 加载listItem 
    return function (ele, data, setEle, flag) {
        if (!flag) {
            var n = 0;
            for (let i = 0; i < data.length; i++) {
                var newItem = `<li><a brand-code="${data[i + 1]}" href="#">${data[i]}</a></li>`
                $(newItem).insertBefore(ele);
                if (i > 6) {
                    $(setEle).eq(n).hide();
                }
                n++;
                i++;
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                var newItem = `<li><a href="#">${data[i]}</a></li>`
                $(newItem).insertBefore(ele);
                if (i > 6) {
                    $(setEle).eq(i).hide();
                }
                n++;
            }
        }
    }
});