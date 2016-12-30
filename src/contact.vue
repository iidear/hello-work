<template>
	<div class="contact">
		<div class="for-fun">
			<div class="circle-1"></div>
			<div class="circle-2"></div>
		</div>
		<p class="contact-note">希望和有趣的人一起做有趣的事~</p>
		<p class="contact-email">E-mail: iidear2015@gmail.com</p>
	</div>
</template>

<style>
	.contact p{
		margin-bottom: 10px;
		text-align: center;
	}

	.contact .for-fun{
		width: 240px;
		height: 240px;
		margin: 0 auto;
		padding: 40px 0px 60px;
	}

	.contact .for-fun div{
		position:absolute;
		opacity:0.4;
		height:200px;
		width:200px;
		border-radius:50%;
		animation: round 3s infinite;
		-moz-animation: round 3s infinite;
		-webkit-animation: round 3s infinite;
		-o-animation: round 3s infinite;
		animation-timing-function:linear;
		-moz-animation-timing-function:linear;
		-webkit-animation-timing-function:linear;
		-o-animation-timing-function:linear;
	}

	.contact .for-fun .circle-1{
		border:20px solid #FF0000;
		clip:rect(0px 140px 240px 0px);
		animation: round 6s infinite linear;
		-moz-animation: round 6s infinite linear;
		-webkit-animation: round 6s infinite linear;
		-o-animation: round 6s infinite linear;
	}

	.contact .for-fun .circle-2{
		border:20px solid #00FF00;
		clip:rect(0px 240px 240px 140px);
	}

	@keyframes round{
		from{transform:rotate(0deg);}
		to{transform:rotate(360deg);}
	}
	@-moz-animation-keyframes round{
		from{transform:rotate(0deg);}
		to{transform:rotate(360deg);}
	}
	@-webkit-keyframes round{
		from{transform:rotate(0deg);}
		to{transform:rotate(360deg);}
	}
	@-o-keyframes round{
		from{transform:rotate(0deg);}
		to{transform:rotate(360deg);}
	}
</style>