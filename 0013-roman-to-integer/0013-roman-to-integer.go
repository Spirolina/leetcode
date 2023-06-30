func romanToInt(s string) int {
	sum := 0
	var prev int
	for i := 0; i < len(s); i++ {
		fmt.Println(sum)
		switch s[i] {
		case 'I':
			sum += 1
			prev = 1
		case 'V':
			total := 5
			if prev < 5 {
				total -= 2 * prev
			}
			sum += total
			prev = 5

		case 'X':
			total := 10
			if prev < 10 {
				total -= 2 * prev
			}
			sum += total
			prev = 10
		case 'L':
			total := 50
			if prev < 50 {
				total -= 2 * prev
			}
			sum += total
			prev = 50
		case 'C':
			total := 100
			if prev < 100 {
				total -= 2 * prev
			}
			sum += total
			prev = 100
		case 'D':
			total := 500
			if prev < 500 {
				total -= 2 * prev
			}
			sum += total
			prev = 500
		case 'M':
			total := 1000
			if prev < 1000 {
				total -= 2 * prev
			}
			sum += total
			prev = 1000
		default:
			fmt.Println("unknown")
		}
	}

	return sum
}