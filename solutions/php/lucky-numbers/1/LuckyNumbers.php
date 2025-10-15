<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        return (int) implode($digitsOfNumber1) + (int) implode($digitsOfNumber2);
    }

    public function isPalindrome(int $number): bool
    {
        $str = (string) $number;
        $len = strlen($str);
        if ($len == 1)
            return true;
        if ($len % 2 != 0) {
            $mid = (float) $len / 2;
            $str = substr_replace($str, '', (int) $mid, 1);
        }
        $result = strcmp(substr($str, 0, length: (int) ((float) $len / 2)), strrev(substr($str, -(int) ((float) $len / 2))));
        return $result == 0 ? true : false;
    }

    public function validate(string $input): string
    {
        if (strlen($input) < 1) {
            return "Required field";
        }
        if ((int) $input <= 0) {
            return "Must be a whole number larger than 0";
        }
        return "";
    }
}
