<template>
	<Modal>
		<template v-slot:modal-header>
			<h5 class="text-xl font-medium leading-normal text-gray-800" id="qrcodeModalLabel">상품 QR코드 확인</h5>
		</template>
		<template v-slot:modal-body>
			<qr-code-reader />
		</template>
	</Modal>
</template>

<script>
import Modal from '@/components/common/ModalContainer.vue';
import QrCodeReader from '@/components/pickingCheckPage/QrCodeReader.vue';

export default {
	components: { Modal, QrCodeReader },
};
</script>
