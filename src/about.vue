<template>
	<div class="about">
		<div class="about-basic">
			<img class="head-pic" src="https://avatars0.githubusercontent.com/u/9919?v=3&s=160">
			<div class="head-desc">
				<p>姓名：肖豪</p>
				<p>期望工作：前端开发工程师</p>
				<p>邮箱：iidear2015@gmail.com</p>
			</div>
		</div>
		
		<div class="about-experience">
			<h3>【教育经历】</h3>
			<p>2011.9~2015.7：北航 电子信息工程专业</p>
			<h3>【工作经历】</h3>
			<p>2015.4~2015.7：微店 web前端开发实习生</p>
			<p>2015.7~2016.4：微店 web前端开发工程师</p>
			<h3>【技能评价】</h3>
			<p>angularJs<span class="icon-skill"><i class="icon-skill-ng"></i></span></p>
			<p>vueJs<span class="icon-skill"><i class="icon-skill-vue"></i></span></p>
			<p>nodeJs<span class="icon-skill"><i class="icon-skill-node"></i></span></p>
		</div>
	</div>
</template>

<style>
	.about .about-basic{
		height: 80px;
	}
	.about-basic .head-pic{
		width: 80px;
		height: 80px;
		border-radius: 50%;
		float: left;
	}
	.about-basic .head-desc{
		height: 100%;
		margin-left: 98px;
	}
	.about-basic .head-desc p{
		line-height: 27px;
	}

	.about .about-experience{
		margin-top: 26px;
	}
	.about-experience h3{
		margin:20px 0px 14px;
	}
	.about-experience p{
		padding-left: 10px;
	}
	.about-experience p .icon-skill{
		float: right;
		width: 70%;
		height: 10px;
		margin-top: 4px;
		background-color: #e8eaea;
		border-radius: 5px;
	}
	@media screen and (min-width: 640px){
		.about-experience p{
			padding-right: 40%;
		}
	}
	.about-experience .icon-skill i{
		float: left;
		height: 100%;
		background-color: green;
		border-radius: 5px;
	}
	.about-experience .icon-skill .icon-skill-ng{
		width: 82%;
	}
	.about-experience .icon-skill .icon-skill-vue{
		width: 65%;
	}
	.about-experience .icon-skill .icon-skill-node{
		width: 60%;
	}
</style>