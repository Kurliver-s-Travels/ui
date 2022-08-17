<template>
	<div>
		<!-- ** 테스트용 버튼입니다! 원하는 대로 수정하세요 :) -->
		<div class="flex justify-center">
			<button
				type="button"
				class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
				data-bs-toggle="modal"
				data-bs-target="#qrcodeModal"
			>
				QR Code 확인하기
			</button>
		</div>

		<qr-code-modal />
	</div>
</template>

<script>
import QrCodeModal from '@/components/pickingCheckPage/QrCodeModal.vue';

export default {
	components: { QrCodeModal },
};
</script>
