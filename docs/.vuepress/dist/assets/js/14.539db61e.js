(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{349:function(i,v,t){"use strict";t.r(v);var _=t(33),l=Object(_.a)({},(function(){var i=this,v=i.$createElement,t=i._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("h1",{attrs:{id:"html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[i._v("#")]),i._v(" HTML")]),i._v(" "),t("h2",{attrs:{id:"doctype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doctype"}},[i._v("#")]),i._v(" Doctype")]),i._v(" "),t("p",[i._v("Doctype作用以及标准模式与兼容模式有什么区别")]),i._v(" "),t("ul",[t("li",[i._v("声明位于HTML文档的第一行，处于标签之前，告知浏览器的解析器用什么文档标准解析这个文档，DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。")]),i._v(" "),t("li",[i._v("标准模式的排版和JS运作模式都是以该浏览器的最高标准运行，兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。")]),i._v(" "),t("li",[i._v("HTML5不基于SGML，因此不需要对DTD进行引用，但是需要DOCTYPE来规范浏览器的行为。")])]),i._v(" "),t("h2",{attrs:{id:"html语义化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html语义化"}},[i._v("#")]),i._v(" HTML语义化")]),i._v(" "),t("ul",[t("li",[i._v("用正确的标签做正确的事情；")]),i._v(" "),t("li",[i._v("html 语义化让页面的内容结构化，结构更清晰；")]),i._v(" "),t("li",[i._v("便于对浏览器、搜索引擎解析；")]),i._v(" "),t("li",[i._v("即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的；")]),i._v(" "),t("li",[i._v("搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO；")]),i._v(" "),t("li",[i._v("使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。")])]),i._v(" "),t("h2",{attrs:{id:"多个域名存储网站资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多个域名存储网站资源"}},[i._v("#")]),i._v(" 多个域名存储网站资源")]),i._v(" "),t("ul",[t("li",[i._v("确保用户在不同地区能用最快的速度打开网站，其中某个域名崩溃用户也能通过其他域名访问网站。")]),i._v(" "),t("li",[i._v("CDN 缓存更方便。简单来说，CDN 主要用来使用户就近获取资源。")]),i._v(" "),t("li",[i._v("突破浏览器并发限制。同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。大多数浏览器的并发数量都控制在6以内。有些资源的请求时间很长，因而会阻其他资源的请求。因此，对于一些静态资源，如果放到不同的域名下面就能实现与其他资源的并发请求。")]),i._v(" "),t("li",[i._v("Cookieless, 节省带宽，尤其是上行带宽 一般比下行要慢。")]),i._v(" "),t("li",[i._v("对于 UGC 的内容和主站隔离，防止不必要的安全问题。")]),i._v(" "),t("li",[i._v("数据做了划分，甚至切到了不同的物理集群，通过子域名来分流比较省事. 这个可能被用的不多。")])]),i._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[i._v("TIP")]),i._v(" "),t("p",[i._v("CDN: 是构建在网络之上的内容发布网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容发布、调度等功能模块，是用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要是内容存储和分布技术。简单来说，CDN主要用来使用户就近获取资源。")])]),i._v(" "),t("h2",{attrs:{id:"window常用属性与方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window常用属性与方法"}},[i._v("#")]),i._v(" window常用属性与方法")]),i._v(" "),t("ul",[t("li",[t("p",[i._v("window 对象的常用属性")]),i._v(" "),t("ul",[t("li",[i._v("window.self          返回当前窗口的引用")]),i._v(" "),t("li",[i._v("window.parent        返回当前窗体的父窗体对象")]),i._v(" "),t("li",[i._v("window.top           返回当前窗体最顶层的父窗体的引用")]),i._v(" "),t("li",[i._v("window.outerwidth    返回当前窗口的外部宽")]),i._v(" "),t("li",[i._v("window.outerheight   返回当前窗口的外部高")]),i._v(" "),t("li",[i._v("window.innerwidth    返回当前窗口的可显示区域宽")]),i._v(" "),t("li",[i._v("window.innerheight   返回当前窗口的可显示区域高")])])]),i._v(" "),t("li",[t("p",[i._v("window 对象的常用方法")]),i._v(" "),t("ul",[t("li",[i._v("window.prompt()                                 弹出一个输入提示框，若用户点击了“取消”则返回 null")]),i._v(" "),t("li",[i._v("window.alert()                                  弹出一个警告框")]),i._v(" "),t("li",[i._v("window.confirm()                                弹出一个确认框")]),i._v(" "),t("li",[i._v("window.close()                                  关闭当前浏览器窗口。 有些浏览器对此方法有限制。")]),i._v(" "),t("li",[i._v("window.open(uri, [name], [features])            打开一个浏览器窗口，显示指定的网页。name属性值可以是“_blank”、“_self”、“_parent”、“_top”、任意指定的一个窗口名。")]),i._v(" "),t("li",[i._v("window.blur( )                                  指定当前窗口失去焦点")]),i._v(" "),t("li",[i._v("window.focus( )                                 指定当前窗口获得焦点")]),i._v(" "),t("li",[i._v("window.showModalDialog(uri, [dataFromParent])   打开一个“模态窗口”（打开的子窗口只要不关闭，其父窗口即无法获得焦点；且父子窗口间可以传递数据）")])])])]),i._v(" "),t("h2",{attrs:{id:"document常用属性与方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#document常用属性与方法"}},[i._v("#")]),i._v(" document常用属性与方法")]),i._v(" "),t("ul",[t("li",[t("p",[i._v("document 常见的属性")]),i._v(" "),t("ul",[t("li",[i._v("body 提供对 元素的直接访问。对于定义了框架集的文档，该属性引用最外层的 。")]),i._v(" "),t("li",[i._v("cookie 设置或返回与当前文档有关的所有 cookie。")]),i._v(" "),t("li",[i._v("domain 返回当前文档的域名。")]),i._v(" "),t("li",[i._v("lastModified 返回文档被最后修改的日期和时间。")]),i._v(" "),t("li",[i._v("referrer 返回载入当前文档的文档的 URL。")]),i._v(" "),t("li",[i._v("title 返回当前文档的标题。")]),i._v(" "),t("li",[i._v("URL 返回当前文档的 URL。")])])]),i._v(" "),t("li",[t("p",[i._v("document常见的方法")]),i._v(" "),t("ul",[t("li",[i._v("write()：动态向页面写入内容")]),i._v(" "),t("li",[i._v("createElement(Tag)：创建一个 HTML 标签对象")]),i._v(" "),t("li",[i._v("getElementById(ID)：获得指定 id 的对象")]),i._v(" "),t("li",[i._v("getElementsByName(Name)：获得之前 Name 的对象")]),i._v(" "),t("li",[i._v("body.appendChild(oTag)：向 HTML 中插入元素对象")])])])]),i._v(" "),t("h2",{attrs:{id:"src与href区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#src与href区别"}},[i._v("#")]),i._v(" src与href区别")]),i._v(" "),t("ul",[t("li",[i._v("href指向网络资源所在, 建立和当前元素(锚点)或当前文档的链接,用于超链接")]),i._v(" "),t("li",[i._v("src指向外部资源的位置，指向的内容将会嵌入到文档中当前标签的位置")]),i._v(" "),t("li",[i._v("请求src资源时会将指向的资源下载并应用到文档内，包括（图片，js脚本，frame等），当浏览器解析到该元素的时候，会暂停其他资源的下载和处理，知道该资源加载，执行完毕。这也是为什么将js脚本放在底部而不是头部")])]),i._v(" "),t("h2",{attrs:{id:"reflow和repaint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflow和repaint"}},[i._v("#")]),i._v(" reflow和repaint")]),i._v(" "),t("p",[i._v("repaint就是重绘，reflow就是回流（重排）。性能消耗: reflow > repaint"),t("br"),i._v("\nrepaint是某个DOM元素进行重绘, reflow是对整个文档页面进行重排，重新渲染所有DOM元素")]),i._v(" "),t("p",[i._v("常见触发场景:")]),i._v(" "),t("ul",[t("li",[i._v("repaint\n"),t("ul",[t("li",[i._v("color的修改")]),i._v(" "),t("li",[i._v("text-algin的修改")]),i._v(" "),t("li",[i._v("a:hover")])])]),i._v(" "),t("li",[i._v("reflow\n"),t("ul",[t("li",[i._v("width/height/border/margin/padding的修改")]),i._v(" "),t("li",[i._v("动画")]),i._v(" "),t("li",[i._v("appendchild")]),i._v(" "),t("li",[i._v("background的修改, 部分属性只触发repaint")]),i._v(" "),t("li",[i._v("scroll页面")]),i._v(" "),t("li",[i._v("resize页面")]),i._v(" "),t("li",[i._v("读取元素的属性 ??( offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle())")])])])]),i._v(" "),t("p",[i._v("如何避免:")]),i._v(" "),t("ul",[t("li",[i._v("尽可能在 DOM 末梢通过改变 class 来修改元素的 style 属性：尽可能的减少受影响的 DOM 元素。")]),i._v(" "),t("li",[i._v("避免设置多项内联样式：使用常用的 class 的方式进行设置样式，以避免设置样式时访问 DOM 的低效率。")]),i._v(" "),t("li",[i._v("设置动画元素 position 属性为 fixed 或者 absolute：由于当前元素从 DOM 流中独立出来，因此受影响的只有当前元素，元素 repaint。")]),i._v(" "),t("li",[i._v("牺牲平滑度满足性能：动画精度太强，会造成更多次的 repaint/reflow，牺牲精度，能满足性能的损耗，获取性能和平滑度的平衡。")]),i._v(" "),t("li",[i._v("避免使用 table 进行布局：table 的每个元素的大小以及内容的改动，都会导致整个 table 进行重新计算，造成大幅度的 repaint 或者 reflow。改用 div 则可以进行针对性的 repaint 和避免不必要的 reflow。")]),i._v(" "),t("li",[i._v("避免在 CSS 中使用运算式：学习 CSS 的时候就知道，这个应该避免，不应该加深到这一层再去了解，因为这个的后果确实非常严重，一旦存在动画性的 repaint/reflow，那么每一帧动画都会进行计算，性能消耗不容小觑。")])]),i._v(" "),t("h2",{attrs:{id:"html5新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html5新特性"}},[i._v("#")]),i._v(" html5新特性")]),i._v(" "),t("ul",[t("li",[i._v("绘画canvas")]),i._v(" "),t("li",[i._v("媒介回放 video, audio")]),i._v(" "),t("li",[i._v("本地存储 localstorage")]),i._v(" "),t("li",[i._v("sessionstorage浏览器关闭自动删除")]),i._v(" "),t("li",[i._v("语义话更好的内容article, footer, header, nav, section")]),i._v(" "),t("li",[i._v("表单控件 calendar, date, time, email, url, search")]),i._v(" "),t("li",[i._v("新技术 webworker, websocket, Geolocation")])]),i._v(" "),t("h2",{attrs:{id:"浏览器多标签页的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器多标签页的通信"}},[i._v("#")]),i._v(" "),t("a",{attrs:{href:"https://juejin.im/post/5acdba01f265da23826e5633",target:"_blank",rel:"noopener noreferrer"}},[i._v("浏览器多标签页的通信"),t("OutboundLink")],1)]),i._v(" "),t("ul",[t("li",[i._v("WebSocket、SharedWorker；")]),i._v(" "),t("li",[i._v("也可以调用 localstorge、cookies 等本地存储方式；")]),i._v(" "),t("li",[i._v("localstorge 在另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信； 注意 quirks：Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常；")])]),i._v(" "),t("h2",{attrs:{id:"移动端click延迟300ms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动端click延迟300ms"}},[i._v("#")]),i._v(" 移动端click延迟300ms")]),i._v(" "),t("ul",[t("li",[i._v("为了实现双击缩放操作, 在单击300ms后, 如果未进行第二次点击, 则执行click单击操作, 也就是为了判断用户是否双击, 但是在app中无论是否需要双击缩放, click都会产生300ms延迟")]),i._v(" "),t("li",[i._v("解决方案:\n"),t("ul",[t("li",[i._v("使用touchstart替换click: 将click替换成touchstart不仅解决了click事件延时问题. 还解决了穿透问题, 因为穿透问题是在touch和click混用时产生的\n"),t("ul",[t("li",[i._v("使用fastclick库,")])])])])])]),i._v(" "),t("h2",{attrs:{id:"移动端click点击穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动端click点击穿透"}},[i._v("#")]),i._v(" 移动端click点击穿透")]),i._v(" "),t("ul",[t("li",[i._v("双层元素叠加时, 在上层元素上绑定touch事件, 下层元素绑定click事件, 由于click发生在touch之后, 点击上层元素, 元素消失, 下层元素会触发click事件, 由此产生了点击穿透的效果")])])])}),[],!1,null,null,null);v.default=l.exports}}]);