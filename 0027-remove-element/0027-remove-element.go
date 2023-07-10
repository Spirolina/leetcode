func removeElement(nums []int, val int) int {
	var temp []int
	k := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			temp = append(temp, nums[i])
			continue
		}
		k++
	}
	fmt.Println(temp)
	copy(nums, temp)
	return len(nums) - k
}
