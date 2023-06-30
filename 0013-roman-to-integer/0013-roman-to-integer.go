type Roman struct {
	c byte
	v int
}

func romanToInt(s string) int {
	sum := 0
	var prev Roman
	for i := 0; i < len(s); i++ {
		fmt.Println(sum)
		switch s[i] {
		case 'I':
			sum += 1
			prev = Roman{s[i], 1}
		case 'V':
			total := 5
			if prev.v < 5 {
				total -= 2 * prev.v
			}
			sum += total
			prev = Roman{s[i], 5}

		case 'X':
			total := 10
			if prev.v < 10 {
				total -= 2 * prev.v
			}
			sum += total
			prev = Roman{s[i], 10}
		case 'L':
			total := 50
			if prev.v < 50 {
				total -= 2 * prev.v
			}
			sum += total
			prev = Roman{s[i], 50}
		case 'C':
			total := 100
			if prev.v < 100 {
				total -= 2 * prev.v
			}
			sum += total
			prev = Roman{s[i], 100}
		case 'D':
			total := 500
			if prev.v < 500 {
				total -= 2 * prev.v
			}
			sum += total
			prev = Roman{s[i], 500}
		case 'M':
			total := 1000
			if prev.v < 1000 {
				total -= 2 * prev.v
			}
			sum += total
			prev = Roman{s[i], 1000}
		default:
			fmt.Println("unknown")
		}
	}

	return sum
}