<template>
	<div class="films-layout">
		<div class="filns-layout__container">
			<header-navbar/>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import HeaderNavbar from "../components/router-pages/HeaderNavbar"

export default {
	components: {
		HeaderNavbar,
	}
}
</script>