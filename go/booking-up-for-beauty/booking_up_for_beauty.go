package booking

import (
	"time"
)

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
	t, _ := time.Parse("1/2/2006 15:04:05", date)
	return t
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
	t, _ := time.Parse("January 2, 2006 15:04:05", date)
	return t.Before(time.Now())
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
	t, _ := time.Parse("Monday, January 2, 2006 15:04:05", date)
	return t.Hour() >= 12 && t.Hour() < 18
}

// Description returns a formatted string of the Appointment time.
func Description(date string) string {
	t := Schedule(date)
	app := t.Format("Monday, January 2, 2006, at 15:04")
	return "You have an appointment on " + app + "."
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
	ann, _ := time.Parse(time.DateOnly, "2009-09-15")
	t := time.Date(time.Now().Year(), ann.Month(), ann.Day(), 0, 0, 0, 0, time.UTC)
	return t
}
