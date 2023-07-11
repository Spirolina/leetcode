func isValid(s string) bool {
	var p = map[rune]rune{')': '(', ']': '[', '}': '{'}
	var stack []rune
	for _, val := range s {
		if val == '(' || val == '{' || val == '[' {
			stack = append(stack, val)
		} else {
			if len(stack) == 0 {
				return false
			}
			if p[val] != stack[len(stack)-1] {
				return false
			}

			if p[val] == stack[len(stack)-1] {
				stack = stack[:len(stack)-1]
			}
		}
	}
	if len(stack) == 0 {
		return true
	}
	return false
}