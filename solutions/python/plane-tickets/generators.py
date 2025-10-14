"""Functions to automate Conda airlines ticketing system."""


def generate_seat_letters(number):
    """Generate a series of letters for airline seats.

    :param number: int - total number of seat letters to be generated.
    :return: generator - generator that yields seat letters.

    Seat letters are generated from A to D.
    After D it should start again with A.

    Example: A, B, C, D

    """
   
    return (['A', 'B', 'C', 'D'][i % 4] for i in range(number)) # Modulo for circular indexing
# a = generate_seat_letters(20)
# for i in a:
#     print(i)

def generate_seats(number):
    """Generate a series of identifiers for airline seats.

    :param number: int - total number of seats to be generated.
    :return: generator - generator that yields seat numbers.

    A seat number consists of the row number and the seat letter.

    There is no row 13.
    Each row has 4 seats.

    Seats should be sorted from low to high.

    Example: 3C, 3D, 4A, 4B

    """
    # we iterate through the generated seat letters
    i = 0
    for n, ltr in enumerate(generate_seat_letters(number)):
        if n % 4 == 0:
            i += 1 if i != 12 else 2
        yield str(i) + ltr
        n += 1


def seq(number):
    return [num for num in range(number) if (num // 4 + 1) != 13]

# print(seq(80))
        
a = generate_seats(50)
for i in a:
    print(i)

def assign_seats(passengers):
    """Assign seats to passengers.

    :param passengers: list[str] - a list of strings containing names of passengers.
    :return: dict - with the names of the passengers as keys and seat numbers as values.

    Example output: {"Adele": "1A", "Björk": "1B"}

    """

    return {name: seat for name, seat in zip(passengers, [s for s in generate_seats(len(passengers))])}

def generate_codes(seat_numbers, flight_id):
    """Generate codes for a ticket.

    :param seat_numbers: list[str] - list of seat numbers.
    :param flight_id: str - string containing the flight identifier.
    :return: generator - generator that yields 12 character long ticket codes.

    """

    return (seat + flight_id + '0' * (12 - (len(seat) + len(flight_id))) for seat in seat_numbers)
    
