(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{421:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_036-两个链表的第一个公共结点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_036-两个链表的第一个公共结点"}},[t._v("#")]),t._v(" 036-两个链表的第一个公共结点")]),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("输入两个链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）")]),t._v(" "),a("h2",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"解法一-两次遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法一-两次遍历"}},[t._v("#")]),t._v(" 解法一：两次遍历")]),t._v(" "),a("p",[t._v("时间复杂度：O(m+n)，两个链表的长度分别是m、n")]),t._v(" "),a("p",[t._v("空间复杂度：O(1)")]),t._v(" "),a("p",[t._v("因为两个链表长度不同，所以如果知道它们的长度之差，就可以让长链表的指针先走，然后两个链表同时遍历，当两指针当前节点地址相同时，即为第一个公共结点。")]),t._v(" "),a("ol",[a("li",[t._v("同时遍历两个链表，直到其中一个为null，说明短的链表已经遍历结束；")]),t._v(" "),a("li",[t._v("继续遍历长的链表，直到其也为null，可以得到两链表长度之差；")]),t._v(" "),a("li",[t._v("再次遍历，长链表先遍历差值个结点，然后两链表同时遍历；")]),t._v(" "),a("li",[t._v("当地址相同时，返回当前结点。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FindFirstCommonNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pHead1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pHead2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pHead1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" pHead2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pHead1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pHead2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("pHead1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("pHead2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("pHead1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("pHead2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"解法二-链表拼接-牛呀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法二-链表拼接-牛呀"}},[t._v("#")]),t._v(" 解法二：链表拼接（牛呀）")]),t._v(" "),a("p",[t._v("时间复杂度：O(m+n)\n空间复杂度：O(1)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.nowcoder.net/n/a0c6c80ab3134c20885a2a12e7b4282b?f=comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方题解"),a("OutboundLink")],1),t._v("：由于两链表长度不一致，所以无法同时遍历到第一个公共结点。所以考虑在两链表后拼接上另一链表达到长度相同的效果。")]),t._v(" "),a("ol",[a("li",[t._v("初始化：指针"),a("code",[t._v("l1")]),t._v("指向链表"),a("code",[t._v("A")]),t._v("头结点，指针"),a("code",[t._v("l2")]),t._v("指向链表"),a("code",[t._v("B")]),t._v("头结点")]),t._v(" "),a("li",[t._v("如果"),a("code",[t._v("ta == tb")]),t._v("， 说明找到了第一个公共的头结点，直接返回即可。")]),t._v(" "),a("li",[t._v("否则，"),a("code",[t._v("ta != tb")]),t._v("，则"),a("code",[t._v("++ta，++tb")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FindFirstCommonNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pHead1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pHead2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pHead1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pHead2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pHead2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pHead1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);