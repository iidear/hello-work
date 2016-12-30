<template>
	<div class="project-list">
		<div v-for="project in projects" class="project">
			<p>【项目名称】<a v-bind:href="project.link" v-text="project.name" target="_blank"></a></p>
			<p>【项目职责】<span v-text="project.duty"></span></p>
			
			<ol class="project-desc">
				<li v-for="desc in project.desc" v-text=desc></li>
			</ol>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			projects: []
		}
	},
	created() {
		this.$http.get('/json/projects.json').then((res)=>{
			if (res.data.status == 1) {
				this.projects = res.data.data;
			}
		})
	}
}

</script>

<style>
	.project-list{

	}
	.project-list .project{
		margin: 24px auto;
	}
	.project-list p{
		color: #111;
		margin-bottom: 4px;
	}
	.project-list a{
		color: #00aeef;
	}
	.project-list a:visited{
		color: #00aeef;
	}
	.project .project-desc{
		padding-left: 28px;
		color: #888;
	}
	.project .project-desc li{
		margin-bottom: 2px;
	}

	
</style>