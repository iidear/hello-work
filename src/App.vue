<template>
	<div id="app">
		<div class="top-container">
			<div class="top">
				<nav class="nav">
					<router-link to="/" exact>基本信息</router-link>
					<router-link to="/project">项目经历</router-link>
					<router-link to="/contact">联系我</router-link>
				</nav>
			</div>
		</div>

		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

</script>

<style>
html{
	width: 100%;
	height: 100%;
}
body,h1,h2,h3,h4,h5,p,div,ol,ul{
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0 12px;
  max-width: 980px;
}
a{
	text-decoration: none;
	color: #2c3e50;
}
a:visited{
	color: #2c3e50;
}
.top-container{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	background-color: #fff;
}
.top-container .top{
  margin: 0 auto;
  padding: 0 12px;
  max-width: 980px;
}
.nav{
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #666;
	padding: 20px 15px 5px;
}
.nav a{
	margin-right: 26px;

}
.nav a.router-link-active{
	font-weight: 600;
}
.content{
	margin-top: 86px;
}
</style>