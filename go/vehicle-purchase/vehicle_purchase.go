package purchase

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	return kind == "car" || kind == "truck"
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
	var s string
	if option1 < option2{
		s = option1
	}else if option2 < option1{
		s = option2
	}
	return s + " is clearly the better choice."
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	var price float64
	if age < 3.0 {
		price = originalPrice*80/100
	} else if age < 10.0 {
		price = originalPrice*70/100
	} else {
		price = originalPrice*50/100
	}
	return price
}
