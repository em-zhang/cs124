(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(8),c=a.n(l),d=(a(15),a(5)),i=a(3),o=a(10),r=a(2),u=(a(16),a(9)),h=(a(17),a(0));var b=function(e){return Object(h.jsxs)("div",{className:"task-container",children:[Object(h.jsx)("input",{type:"checkbox",className:"checkbox",checked:e.isCompleted,onChange:function(t){e.handleTaskFieldChanged(e.taskId,"isCompleted",t.target.checked)}}),Object(h.jsx)(u.a,{className:"task-label",value:e.taskLabel,onChange:function(t){return e.handleTaskFieldChanged(e.taskId,"taskLabel",t.target.value)},disabled:e.isCompleted}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"delete-button",onClick:function(){e.handleDeleteTask(e.taskId)},children:"X"})})]})};a(19);var j=function(e){return console.log("in ToDoList ",e.taskList),Object(h.jsxs)("div",{className:"list-container",children:[Object(h.jsx)("div",{className:"my-tasks",children:Object(h.jsxs)("h2",{children:["My Tasks (",e.numCompleted,"/",e.taskList.length," completed)"]})}),Object(h.jsx)("div",{className:"checklist",children:e.taskList.map((function(t){return Object(h.jsx)(b,Object(i.a)({handleDeleteTask:e.handleDeleteTask,handleTaskFieldChanged:e.handleTaskFieldChanged},t),t.taskId)}))})]})};a(20);var k=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),s=a[0],l=a[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{className:"todo-input",id:"new-todo-text",placeholder:"Enter task here",value:s,onChange:function(e){l(e.target.value)},onKeyPress:function(t){""!==s&&"Enter"===t.key&&(e.handleAddTask(s),l(""))}}),Object(h.jsx)("button",{className:""!==s?"add-button":"add-button-disabled",onClick:function(){""!==s&&(e.handleAddTask(s),l(""))},children:"Add"})]})};a(21);var m=function(e){return Object(h.jsx)("div",{className:"backdrop",children:Object(h.jsxs)("div",{className:"modal",children:[e.children,Object(h.jsxs)("div",{className:"alert-buttons",children:[Object(h.jsx)("button",{className:"alert-button",id:"alert-cancel",type:"button",onClick:function(){return e.onClose()},children:"Cancel"}),Object(h.jsx)("button",{className:"alert-button",id:"alert-ok",type:"button",onClick:function(){e.onOK(),e.onClose()},children:"OK"})]})]})})};a(22);var O=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],l=a[1];function c(){l(!s)}return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"toolbar",children:[Object(h.jsx)("button",{className:"toolbar-button",id:"hide-button",onClick:function(){e.setShowCompleted(!e.showCompleted)},children:e.showCompleted?"Show Completed":"Show All Tasks"}),Object(h.jsx)("button",{className:"toolbar-button",id:0!==e.numCompleted?null:"delete-completed-button-hidden",onClick:function(){0!==e.numCompleted&&c()},children:"Delete Completed"})]}),s&&Object(h.jsx)(m,{onClose:c,onOK:function(){e.handleDeleteTasks()},children:Object(h.jsx)("div",{children:"Are you sure you want to delete all completed tasks?"})})]})};var p=function(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),s=a[0],l=a[1],c=e.taskList.filter((function(e){return s||!e.isCompleted})),d=e.taskList.filter((function(e){return!0===e.isCompleted})).length;return Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsx)("h1",{children:"Task Manager"})}),Object(h.jsx)("div",{className:"add-task",children:Object(h.jsx)(k,{taskList:c,setTaskList:e.setTaskList,handleAddTask:e.handleAddTask})}),Object(h.jsx)("div",{children:Object(h.jsx)(j,{taskList:c,handleDeleteTask:e.handleDeleteTask,handleDeleteTasks:e.handleDeleteTasks,handleTaskFieldChanged:e.handleTaskFieldChanged,numCompleted:d})}),Object(h.jsx)("div",{children:Object(h.jsx)(O,{handleDeleteTasks:e.handleDeleteTasks,showCompleted:s,setShowCompleted:l,numCompleted:d})})]})};var C=function(e){var t=Object(n.useState)(e.initialData),a=Object(r.a)(t,2),s=a[0],l=a[1],c=Object(n.useState)(s.length),u=Object(r.a)(c,2),b=u[0],j=u[1];return Object(h.jsx)("div",{children:Object(h.jsx)(p,{taskList:s,handleDeleteTask:function(e){var t=s.filter((function(t){return t.taskId!==e}));l(t)},handleDeleteTasks:function(){l(s.filter((function(e){return!1===e.isCompleted})))},handleAddTask:function(e){l([].concat(Object(o.a)(s),[{taskId:b,taskLabel:e,isCompleted:!1}])),j(b+1)},handleTaskFieldChanged:function(e,t,a){l(s.map((function(n){return n.taskId!==e?n:Object(i.a)(Object(i.a)({},n),{},Object(d.a)({},t,a))})))}})})};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(C,{initialData:[{taskId:0,taskLabel:"Get lunch at dining hall",isCompleted:!0},{taskId:1,taskLabel:"Buy textbooks",isCompleted:!1},{taskId:2,taskLabel:"Watch videos about React",isCompleted:!0},{taskId:3,taskLabel:"Call Mom",isCompleted:!1},{taskId:4,taskLabel:"Meet with Prof. Rhodes",isCompleted:!1}]})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.6bb48cf2.chunk.js.map