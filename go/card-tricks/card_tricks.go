package cards

// FavoriteCards returns a slice with the cards 2, 6 and 9 in that order.
func FavoriteCards() []int {
	return []int{2, 6, 9}
}

// GetItem retrieves an item from a slice at given position.
// If the index is out of range, we want it to return -1.
func GetItem(slice []int, index int) int {
	if len(slice) <= index || index < 0 {
		return -1
	}
	// var ret int
	// for i, v := range slice {
	// 	if i == index {
	// 		ret = v
	// 		break
	// 	}
	// }
	// return ret
	// what was i thinking while writing all that lmao
	return slice[index]
}

// SetItem writes an item to a slice at given position overwriting an existing value.
// If the index is out of range the value needs to be appended.
func SetItem(slice []int, index, value int) []int {
	if len(slice) <= index || index < 0 {
		return append(slice, value)
	}
	// for i := range slice {
	// 	if i == index {
	// 		slice[i] = value
	// 	}
	// }
	slice[index] = value
	return slice
}

// PrependItems adds an arbitrary number of values at the front of a slice.
func PrependItems(slice []int, values ...int) []int {
	if len(values) != 0 {
		for i := len(values) - 1; i >= 0; i-- {
			slice = append(slice, 0) // make space for new value
			copy(slice[1:], slice)   // shift slice to right
			slice[0] = values[i]
		}
	}
	// another way to do this:
	// return append(values, slice...)
	return slice
}

// RemoveItem removes an item from a slice by modifying the existing slice.
func RemoveItem(slice []int, index int) []int {
	// if len(slice) <= index || index >= 0 {
	// 	var new_slice []int
	// 	if index == 0 {
	// 		new_slice = append(new_slice, slice[1:]...)
	// 		return new_slice
	// 	}
	// 	if index == len(slice) {
	// 		new_slice = append(new_slice, slice[:len(slice)-1]...)
	// 	}
	// 	for i, v := range slice {
	// 		if i == index {
	// 			new_slice = append(new_slice, slice[i+1:]...)
	// 			return new_slice
	// 		}
	// 		new_slice = append(new_slice, v)
	// 	}
	// }
	if index < 0 || index >= len(slice) {
		return slice
	}
	return append(slice[:index], slice[index+1:]...)
}
