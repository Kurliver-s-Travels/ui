<template>
	<!-- Modal -->
	<div
		class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
		id="qrcodeModal"
		tabindex="-1"
		aria-labelledby="qrcodeModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog relative w-auto pointer-events-none">
			<div
				class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
			>
				<!-- 모달 헤더 -->
				<div
					class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
				>
					<slot name="modal-header"></slot>
					<button
						type="button"
						class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>

				<!-- 모달 바디 -->
				<div class="modal-body relative p-4">
					<slot name="modal-body"></slot>
				</div>

				<!-- 모달 푸터 -->
				<div
					class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
				>
					<button
						type="button"
						class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
						data-bs-dismiss="modal"
					>
						닫기
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
