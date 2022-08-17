<template>
	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
				<div class="overflow-hidden">
					<table class="min-w-full text-center">
						<thead class="border-b bg-gray-50">
							<tr>
								<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">지번</th>
								<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">상품명</th>
								<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">수량</th>
								<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">진행상태</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">서울우유 저지방</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">234</td>
								<td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
									<button
										type="button"
										class="inline-block w-2/3 py-2 border-2 border-yellow-300 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-yellow-500 hover:bg-opacity-70 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									>
										피킹 전
									</button>
								</td>
							</tr>
							<tr class="bg-white border-b">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">서울우유 무지방</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">176</td>
								<td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
									<button
										type="button"
										class="inline-block w-2/3 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									>
										완료
									</button>
								</td>
							</tr>
							<tr class="bg-white border-b">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">아몬드 1kg</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">176</td>
								<td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
									<button
										type="button"
										class="inline-block w-2/3 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									>
										완료
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>
