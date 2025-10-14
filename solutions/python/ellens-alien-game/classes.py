"""Solution to Ellen's Alien Game exercise."""


class Alien:
    """Create an Alien object with location x_coordinate and y_coordinate.

    Attributes
    ----------
    (class)total_aliens_created: int
    x_coordinate: int - Position on the x-axis.
    y_coordinate: int - Position on the y-axis.
    health: int - Number of health points.

    Methods
    -------
    hit(): Decrement Alien health by one point.
    is_alive(): Return a boolean for if Alien is alive (if health is > 0).
    teleport(new_x_coordinate, new_y_coordinate): Move Alien object to new coordinates.
    collision_detection(other): Implementation TBD.
    """

    total_aliens_created = 0
    
    def __init__(self, x_param, y_param):
        self.x_coordinate = x_param
        self.y_coordinate = y_param
        self.health = 3
        Alien.total_aliens_created += 1
        
    def hit(self):
        self.health -= 1
        if __name__ == '__main__':
            print("HP after got hit:",self.health)
        
    def is_alive(self):
        return self.health > 0

    def teleport(self, x_param, y_param):
         self.x_coordinate = x_param
         self.y_coordinate = y_param        
    
    def collision_detection(self, other_object):
        pass
    
    

alien = Alien(1, 2)
[alien.hit() for _ in range(3)]
print(f"x: {alien.x_coordinate} y: {alien.y_coordinate} HP: {alien.health}")
print("alien is alive")  if alien.is_alive() else print("alien is dead")
alien.teleport(3, -4)
print(f"x: {alien.x_coordinate} y:{alien.y_coordinate}")
print(alien.total_aliens_created)
alien2 = Alien(3, 2)
print(alien2.total_aliens_created, alien2.health)
print(Alien.total_aliens_created)



#TODO:  create the new_aliens_collection() function below to call your Alien class with a list of coordinates.
def new_aliens_collection(aliens_start_positions):
    return [Alien(pos[0], pos[1]) for pos in aliens_start_positions]