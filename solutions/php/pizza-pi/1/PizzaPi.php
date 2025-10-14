<?php

class PizzaPi
{
    public function calculateDoughRequirement($n_pizza, $n_people)
    {
        return $n_pizza * ($n_people * 20 + 200);
    }
    public function calculateSauceRequirement($n_pizza, $v_sauce)
    {
        return $n_pizza * 125 / $v_sauce;
    }

    public function calculateCheeseCubeCoverage($dimension, $thickness, $diameter)
    {
        return floor($dimension ** 3 / ($thickness * 3.14 * $diameter));
    }

    public function calculateLeftOverSlices($n_pizza, $n_friend)
    {
        return ($n_pizza * 8) % $n_friend;
    }
}



$pizza_pi = new PizzaPi();
$pizza_pi->calculateCheeseCubeCoverage(25, 0.5, 30);
echo (floor($pizza_pi->calculateCheeseCubeCoverage(25, 0.5, 30)));
