### 入口文件App.js
自定义了Layout  放在```<Admin appLayout={Layout}>```   
该样式中定义了旁边的sidebar导航  
AppBar（顶部导航用户按钮点击）  定义了/configuration的路由。全局路由是通过routers.js来控制,并将路由插入到```<Admin  customRoutes={customRoutes}>``` 


menu（目录）




### sideBar导航分析
只做了一个调整大小的操作
```const CustomSidebar = props => <Sidebar {...props} size={200} />;  // 调整大小```
### AppBar分析
AppBar（顶部导航用户按钮点击）  定义了/configuration的路由。全局路由是通过routers.js来控制,并将路由插入到```<Admin  customRoutes={customRoutes}>``` 
这里可以自己插入需要改变的路由：
```   <MenuItemLink
               to="/aaa"
               primaryText="测试appbar"
               leftIcon={<ThreeDRotation />}
           />
```

### menu分析
全局定义：Layout/menu.js  然后导入Admin。如果在这里定义的menu，会比admin自动生成的menu提前被访问


###configuration/Configuraion.js分析
里面根据theme选项来调整主题样式
触发action
但这里因为集成了redux，所以必须有一个全局的reduces，结果就在App.js中定义了```<Admin   customReducers={{ theme: themeReducer }}```
并且必须使用```theme```,不清楚为什么。
 
 
###
