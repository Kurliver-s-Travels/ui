<template>
	<div class="bg-purple-100">
		<div class="max-w-3xl m-auto h-screen p-8">
			<div class="text-center">
				<p>임시로 만들어 놓은 네비게이션</p>
				<router-link to="/">메인페이지</router-link> | <router-link to="/managing">총괄지페이지</router-link> |
				<router-link to="/pick">픽업페이지</router-link> |
				<router-link to="/finish">작업완료페이지</router-link>
			</div>
			<router-view />
		</div>
	</div>
</template>

<script>
export default {};
</script>
