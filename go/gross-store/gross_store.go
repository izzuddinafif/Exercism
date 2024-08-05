package gross

// Units stores the Gross Store unit measurements.
func Units() map[string]int {
	return map[string]int{"quarter_of_a_dozen": 3, "half_of_a_dozen": 6, "dozen": 12, "small_gross": 120, "gross": 144, "great_gross": 1728}
}

// NewBill creates a new bill.
func NewBill() map[string]int {
	return map[string]int{}
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
	switch n, exists := units[unit]; {
	case exists:
		if v, x := bill[item]; x && v != 0 {
			bill[item] += n
		} else {
			bill[item] = n
		}
		return true
	default:
		return false
	}
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
	n, exists := units[unit]
	v, x := bill[item]
	switch {
	case x:
		if new := v - n; exists {
			if new < 0 {
				return false
			} else if new == 0 {
				delete(bill, item)
				return true
			} else {
				bill[item] -= n
				return true
			}
		} else {
			return false
		}
	default:
		return false
	}
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
	v, x := bill[item]
	return v, x
}
