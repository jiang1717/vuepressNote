(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{446:function(t,a,s){"use strict";s.r(a);var e=s(25),h=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hashset和hashmap区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashset和hashmap区别"}},[t._v("#")]),t._v(" HashSet和HashMap区别")]),t._v(" "),s("p",[t._v("HashSet 底层就是基于 HashMap 实现的。（HashSet 的源码非常非常少，因为除了 clone() 方法、writeObject()方法、readObject()方法是 HashSet 自己不得不实现之外，其他方法都是直接调用 HashMap 中的方法。）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("HashMap")]),t._v(" "),s("th",[t._v("HashSet")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("HashMap实现了Map接口")]),t._v(" "),s("td",[t._v("HashSet实现了Set接口")])]),t._v(" "),s("tr",[s("td",[t._v("HashMap储存键值对")]),t._v(" "),s("td",[t._v("HashSet仅仅存储对象")])]),t._v(" "),s("tr",[s("td",[t._v("使用put()方法将元素放入map中")]),t._v(" "),s("td",[t._v("使用add()方法将元素放入set中")])]),t._v(" "),s("tr",[s("td",[t._v("HashMap中使用键对象来计算hashcode值")]),t._v(" "),s("td",[t._v("HashSet使用成员对象来计算hashcode值，对于两个对象来说hashcode可能相同，所以equals()方法用来判断对象的相等性，如果两个对象不同的话，那么返回false")])]),t._v(" "),s("tr",[s("td",[t._v("HashMap比较快，因为是使用唯一的键来获取对象")]),t._v(" "),s("td",[t._v("HashSet较HashMap来说比较慢")])])])])])}),[],!1,null,null,null);a.default=h.exports}}]);