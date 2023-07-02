func twoSum(nums []int, target int) []int {
	var diff int
	var result []int = nil
	for i, v := range nums {
		diff = target - v
		for j := i + 1; j < len(nums); j++ {
			if diff == nums[j] {
				result = []int{i, j}
				break
			}
		}
		if result != nil {
			break
		}
	}
	return result
}