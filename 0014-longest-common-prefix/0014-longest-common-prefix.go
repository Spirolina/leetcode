func longestCommonPrefix(strs []string) string {
	var prefix string = ""
	for i, v := range strs {
		if i == 0 {
			prefix = v
			continue
		}
		if prefix == "" {
			break
		}
		for j, val := range prefix {
			if len(v) == j {
				prefix = prefix[:j]
				break
			}
			if v[j] != byte(val) {
				if j == 0 {
					prefix = ""
					break
				}
				prefix = prefix[:j]
				break
			}
		}

	}
	return prefix
}