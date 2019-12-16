(function (root) {
    var jQuery = function () {
        return new jQuery.prototype.init()
    }

    jQuery.fn = jQuery.prototype = {
        init: function () {

        },
        css: function () {

        }
    }

    //extend
    jQuery.fn.extend = jQuery.extend = function () {
        var target = arguments[0] || {};
        var length = arguments.length;
        var i = 1;
        var option;

        var copy;
        var src;
        var copyIsArray;
        var clone;
        //是否是深拷贝
        var deep = false;

        //第一个值是boolean
        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }

        if (typeof target !== 'object') {
            target = {}
        }

        //参数的个数(只有一个)
        if (length === i) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            //存在第二个参数

            if ((option = arguments[i]) != null) {
                for (var name in option) {

                    //赋值
                    copy = option[name];

                    src = target[name];

                    //深拷贝
                    if (deep) {

                        if ((jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            //数组
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];

                                //对象
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }
                            target[name] = jQuery.extend(deep, clone, copy)
                        } else {
                            target[name] = copy;
                        }

                        //不存在属性值
                    } else if (copy != undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    };

    //共享原型
    jQuery.fn.init.prototype = jQuery.fn;

    //扩展属性
    jQuery.extend({
        //类型检测
        isPlainObject: function (obj) {
            return toString.call(obj) === "[object Object]";
        },
        isArray: function (obj) {
            return toString.call(obj) === '[object Array]';
        }
    })

    root.$ = root.jQuery = jQuery;

})(this)